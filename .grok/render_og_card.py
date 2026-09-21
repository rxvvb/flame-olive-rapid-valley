#!/usr/bin/env python3
"""Cinematic holographic-heart OG card for Кардиофизика — 2400×1260 → 1200×630."""
from __future__ import annotations

import math
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont, ImageEnhance

W, H = 2400, 1260  # 2× of 1200×630
NAVY = np.array([0x05, 0x07, 0x0F], dtype=np.float32)
CYAN = np.array([0x2E, 0xE6, 0xFF], dtype=np.float32)
ROSE = np.array([0xFF, 0x3B, 0x6B], dtype=np.float32)
ICE = np.array([0xEE, 0xF6, 0xFF], dtype=np.float32)

OUT_RAW = Path("/workspace/.grok/card-raw.jpg")


def lerp(a, b, t):
    t = np.clip(t, 0.0, 1.0)
    return a * (1.0 - t) + b * t


def heart_mask(w, h, cx, cy, s):
    """Anatomical-ish heart SDF mask, 0..1."""
    yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
    x = (xx - cx) / s
    y = (cy - yy) / s  # +y up

    # Classic algebraic heart, slightly sheared for anatomical tilt
    xs = x * 0.92 + 0.08
    ys = y * 0.95 - 0.12
    # (x^2 + y^2 - 1)^3 - x^2 y^3 < 0
    a = xs * xs + ys * ys - 1.0
    f = a * a * a - (xs * xs) * (ys * ys * ys)
    # Soft edge
    m = np.clip(0.5 - f * 1.8, 0.0, 1.0)
    m = np.power(m, 0.55)

    # Aorta / great-vessel bump on the upper-right of the heart
    ax = (xx - (cx + 0.18 * s)) / (0.22 * s)
    ay = (yy - (cy - 0.62 * s)) / (0.38 * s)
    aorta = np.clip(1.0 - (ax * ax * 0.7 + ay * ay), 0.0, 1.0)
    aorta = np.power(aorta, 1.4)

    # Pulmonary stub upper-left
    px = (xx - (cx - 0.28 * s)) / (0.16 * s)
    py = (yy - (cy - 0.48 * s)) / (0.18 * s)
    pulm = np.clip(1.0 - (px * px + py * py * 1.4), 0.0, 1.0)
    pulm = np.power(pulm, 1.6)

    m = np.maximum(m, aorta * 0.95)
    m = np.maximum(m, pulm * 0.85)
    return m


def vessel_glow(w, h, cx, cy, s):
    """Thin coronary-like curves as a glow map."""
    yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
    g = np.zeros((h, w), dtype=np.float32)

    def stroke(pts, width):
        # pts: list of (nx, ny) in heart-local coords (+y up)
        acc = np.full((h, w), 1e9, dtype=np.float32)
        for i in range(len(pts) - 1):
            x0 = cx + pts[i][0] * s
            y0 = cy - pts[i][1] * s
            x1 = cx + pts[i + 1][0] * s
            y1 = cy - pts[i + 1][1] * s
            dx, dy = x1 - x0, y1 - y0
            L2 = dx * dx + dy * dy + 1e-6
            t = np.clip(((xx - x0) * dx + (yy - y0) * dy) / L2, 0.0, 1.0)
            dist = np.hypot(xx - (x0 + t * dx), yy - (y0 + t * dy))
            acc = np.minimum(acc, dist)
        return np.exp(-acc * acc / (2 * width * width))

    g += stroke([(-0.05, 0.55), (0.02, 0.25), (0.18, -0.05), (0.28, -0.45)], 4.2)
    g += stroke([(0.12, 0.50), (0.22, 0.18), (0.32, -0.15), (0.22, -0.48)], 3.4)
    g += stroke([(-0.22, 0.20), (-0.18, -0.10), (-0.08, -0.42), (0.05, -0.62)], 3.6)
    g += stroke([(0.05, 0.62), (0.18, 0.78), (0.08, 0.95), (-0.05, 0.88)], 4.0)
    return np.clip(g, 0.0, 1.0)


def chamber_lines(w, h, cx, cy, s):
    yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
    g = np.zeros((h, w), dtype=np.float32)

    def ellipse_ring(ex, ey, rx, ry, thick):
        nx = (xx - (cx + ex * s)) / (rx * s)
        ny = (yy - (cy - ey * s)) / (ry * s)
        r = np.sqrt(nx * nx + ny * ny)
        return np.exp(-((r - 1.0) ** 2) / (2 * (thick ** 2)))

    g += ellipse_ring(-0.12, 0.05, 0.32, 0.38, 0.045)
    g += ellipse_ring(0.18, -0.02, 0.36, 0.42, 0.04)
    g += ellipse_ring(0.02, 0.32, 0.22, 0.16, 0.05)
    return np.clip(g, 0.0, 1.0)


def scanlines(h, w, period=7, duty=0.38, sweep_y=None, sweep_h=28):
    y = np.arange(h, dtype=np.float32)[:, None]
    sl = ((y % period) < period * duty).astype(np.float32)
    sl = sl * np.ones((1, w), dtype=np.float32)
    if sweep_y is not None:
        yy = np.arange(h, dtype=np.float32)[:, None]
        band = np.exp(-((yy - sweep_y) ** 2) / (2 * sweep_h * sweep_h))
        sl = sl * 0.55 + band * 0.9
    return sl


def draw_grid(img, draw):
    """Faint holographic floor + HUD rings."""
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)
    # Perspective floor lines
    horizon = int(H * 0.58)
    cyan_a = (46, 230, 255)
    for i in range(1, 18):
        y = horizon + int((i ** 1.35) * 14)
        if y >= H:
            break
        a = max(8, 42 - i * 2)
        d.line([(0, y), (W, y)], fill=(*cyan_a, a), width=1)
    # Converging verticals
    vanish_x = W // 2
    vanish_y = int(H * 0.42)
    for k in range(-14, 15):
        x1 = vanish_x + k * 90
        a = 18 if abs(k) % 2 == 0 else 10
        d.line([(vanish_x, vanish_y), (x1 * 2 - vanish_x, H + 80)], fill=(*cyan_a, a), width=1)
    # HUD rings around heart
    cx, cy = W // 2, int(H * 0.40)
    for r, a, wth in [(220, 42, 2), (278, 24, 1), (336, 14, 1)]:
        d.ellipse([cx - r, cy - r, cx + r, cy + r], outline=(*cyan_a, a), width=wth)
    # tick marks on outer ring
    for ang in range(0, 360, 15):
        rad = math.radians(ang)
        r0, r1 = 328, 346
        x0 = cx + r0 * math.cos(rad)
        y0 = cy + r0 * math.sin(rad)
        x1 = cx + r1 * math.cos(rad)
        y1 = cy + r1 * math.sin(rad)
        d.line([(x0, y0), (x1, y1)], fill=(*cyan_a, 40), width=1)
    # Crosshair ticks
    d.line([(cx - 26, cy), (cx - 8, cy)], fill=(*cyan_a, 70), width=2)
    d.line([(cx + 8, cy), (cx + 26, cy)], fill=(*cyan_a, 70), width=2)
    d.line([(cx, cy - 26), (cx, cy - 8)], fill=(*cyan_a, 70), width=2)
    d.line([(cx, cy + 8), (cx, cy + 26)], fill=(*cyan_a, 70), width=2)
    return Image.alpha_composite(img.convert("RGBA"), overlay)


def load_title_font(size):
    candidates = [
        "/usr/share/fonts/truetype/liberation/LiberationSansNarrow-Bold.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/usr/share/fonts/truetype/freefont/FreeSansBold.ttf",
    ]
    for p in candidates:
        if Path(p).exists():
            return ImageFont.truetype(p, size=size)
    return ImageFont.load_default()


def draw_title(base_rgba: Image.Image) -> Image.Image:
    title = "Кардиофизика"
    font = load_title_font(118)
    # Measure
    tmp = Image.new("L", (1, 1))
    td = ImageDraw.Draw(tmp)
    bbox = td.textbbox((0, 0), title, font=font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    # Target ~55% of width
    target_w = int(W * 0.55)
    if tw > 0:
        size = int(118 * target_w / tw)
        size = max(72, min(size, 132))
        font = load_title_font(size)
        bbox = td.textbbox((0, 0), title, font=font)
        tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]

    tx = (W - tw) // 2 - bbox[0]
    ty = int(H * 0.775) - th // 2 - bbox[1]

    # Glow layer
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.text((tx, ty), title, font=font, fill=(46, 230, 255, 180))
    glow = glow.filter(ImageFilter.GaussianBlur(18))
    glow2 = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    gd2 = ImageDraw.Draw(glow2)
    gd2.text((tx, ty), title, font=font, fill=(238, 246, 255, 90))
    glow2 = glow2.filter(ImageFilter.GaussianBlur(6))

    sharp = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    sd = ImageDraw.Draw(sharp)
    # slight cyan underline hairline
    underline_y = ty + th + bbox[1] + 18
    sd.line(
        [(W // 2 - tw // 2 - 8, underline_y), (W // 2 + tw // 2 + 8, underline_y)],
        fill=(46, 230, 255, 90),
        width=2,
    )
    sd.text((tx, ty), title, font=font, fill=(238, 246, 255, 255))

    out = Image.alpha_composite(base_rgba, glow)
    out = Image.alpha_composite(out, glow2)
    out = Image.alpha_composite(out, sharp)
    return out


def main():
    rng = np.random.default_rng(42)
    img = np.zeros((H, W, 3), dtype=np.float32)
    img[:] = NAVY

    yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
    cx, cy = W / 2.0, H * 0.40
    s = 348.0

    # Radial void glow (cyan, then rose at center)
    dist = np.sqrt((xx - cx) ** 2 + (yy - cy) ** 2)
    rad = dist / (min(W, H) * 0.55)
    glow_c = np.exp(-(rad ** 2) / 0.42)
    glow_r = np.exp(-(rad ** 2) / 0.12)
    img += glow_c[..., None] * CYAN * 0.10
    img += glow_r[..., None] * ROSE * 0.08

    # Soft vignette later

    # Heart mask
    hm = heart_mask(W, H, cx, cy, s)
    # Interior fill: dark cyan-navy with rose core
    core = np.exp(-((xx - cx) ** 2 + (yy - (cy + 20)) ** 2) / (2 * (s * 0.42) ** 2))
    fill = NAVY * 0.28 + CYAN * 0.28
    fill_img = fill + core[..., None] * ROSE * 0.72
    img = lerp(img, fill_img, hm[..., None] * 0.92)

    # Scanlines clipped to heart
    sl = scanlines(H, W, period=7, duty=0.45, sweep_y=cy + 18, sweep_h=42)
    sl_col = CYAN * 0.85 + ICE * 0.15
    img = lerp(img, sl_col, (hm * sl * 0.72)[..., None])

    # Chamber wireframe
    ch = chamber_lines(W, H, cx, cy, s)
    img = lerp(img, CYAN, (hm * ch * 0.55)[..., None])

    # Coronary vessels
    vs = vessel_glow(W, H, cx, cy, s)
    img = lerp(img, ICE * 0.4 + CYAN * 0.6, (hm * vs * 0.85)[..., None])
    img = lerp(img, ROSE, (hm * vs * core * 0.45)[..., None])

    # Rim / edge highlight
    # Approximate edge as gradient of mask
    gy, gx = np.gradient(hm)
    edge = np.clip(np.hypot(gx, gy) * 5.5, 0.0, 1.0)
    img = lerp(img, CYAN, (edge * 0.95)[..., None])
    img = lerp(img, ICE, (edge * edge * 0.45)[..., None])

    # Offset hologram ghost (cyan, slightly shifted)
    ghost = np.roll(hm, 7, axis=1)
    ghost_edge_y, ghost_edge_x = np.gradient(ghost)
    gedge = np.clip(np.hypot(ghost_edge_x, ghost_edge_y) * 5.0, 0.0, 1.0)
    img = lerp(img, CYAN, (gedge * 0.28)[..., None])
    ghost2 = np.roll(hm, -5, axis=0)
    ge2y, ge2x = np.gradient(ghost2)
    gedge2 = np.clip(np.hypot(ge2x, ge2y) * 5.0, 0.0, 1.0)
    img = lerp(img, ROSE, (gedge2 * 0.18)[..., None])

    # Speckle / holographic grain inside heart
    grain = rng.random((H, W)).astype(np.float32)
    img = lerp(img, ICE, (hm * (grain > 0.985).astype(np.float32) * 0.5)[..., None])

    # Outer bloom of the heart
    bloom = Image.fromarray(np.clip(hm * 255, 0, 255).astype(np.uint8), "L")
    bloom = bloom.filter(ImageFilter.GaussianBlur(28))
    bloom_np = np.asarray(bloom).astype(np.float32) / 255.0
    img += bloom_np[..., None] * CYAN * 0.12
    img += bloom_np[..., None] * ROSE * 0.05

    # Film grain
    noise = rng.normal(0.0, 3.2, (H, W, 1)).astype(np.float32)
    img += noise

    # Vignette
    vx = (xx / W - 0.5) * 2.0
    vy = (yy / H - 0.5) * 2.0
    vig = np.clip(1.0 - 0.28 * (vx * vx + vy * vy * 1.15), 0.35, 1.0)
    img *= vig[..., None]

    img = np.clip(img, 0, 255).astype(np.uint8)
    pil = Image.fromarray(img, "RGB")
    pil = draw_grid(pil, None)
    pil = draw_title(pil)
    rgb = pil.convert("RGB")
    # Slight contrast
    rgb = ImageEnhance.Contrast(rgb).enhance(1.06)
    rgb = ImageEnhance.Color(rgb).enhance(1.08)

    rgb.save(OUT_RAW, "JPEG", quality=95, optimize=True, subsampling=1)
    print(f"wrote {OUT_RAW} {rgb.size}")


if __name__ == "__main__":
    main()
