import { cn } from "@/lib/utils";

export function HoloImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={cn("holo-frame scan-sweep h-full min-h-40 w-full", className)}>
      <img src={src} alt={alt} className="h-full w-full object-cover" />
      <div className="pointer-events-none absolute inset-x-3 top-3 flex items-center justify-between font-mono text-[10px] tracking-widest text-cyan uppercase">
        <span>HOL·REC</span>
        <span className="h-1.5 w-1.5 rounded-full bg-pulse shadow-[0_0_10px_var(--color-pulse)]" />
      </div>
    </div>
  );
}

export function BeatingHeart({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 110"
      className={cn("beat-heart text-pulse drop-shadow-[0_0_18px_var(--color-pulse)]", className)}
      aria-hidden
    >
      <path
        d="M60 96C22 68 10 46 10 30 10 16 22 8 36 8c10 0 18 5 24 14C66 13 74 8 84 8c14 0 26 8 26 22 0 16-12 38-50 66Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M22 42c14-2 22 8 38 4 12-3 20-12 38-6"
        fill="none"
        stroke="var(--color-cyan)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function EcgTrace({
  className,
  chaotic = false,
}: {
  className?: string;
  chaotic?: boolean;
}) {
  const path = chaotic
    ? "M0 40 C 12 12, 18 70, 28 40 S 42 8, 50 44 62 90, 74 36 88 10, 98 50 110 20, 124 42 140 80, 152 30 168 12, 180 48 196 70, 210 38"
    : "M0 40 H18 l4-6 4 6 H40 l6 0 4-28 6 46 6-32 4 14 H90 l5-8 5 8 H140 l4-6 4 6 H180";
  return (
    <svg viewBox="0 0 180 80" className={cn("w-full", className)} aria-hidden>
      <path
        d={path}
        fill="none"
        stroke="var(--color-cyan)"
        strokeWidth="2.2"
        strokeLinejoin="round"
        strokeLinecap="round"
        className="draw-line"
        style={{
          filter: "drop-shadow(0 0 6px var(--color-cyan))",
          animationDuration: chaotic ? "0.7s" : "1.4s",
        }}
      />
    </svg>
  );
}

export function LiveEcg({ bpm }: { bpm: number }) {
  const duration = Math.max(0.45, 60 / bpm);
  return (
    <svg viewBox="0 0 240 64" className="h-16 w-full" aria-hidden>
      <defs>
        <linearGradient id="ecgFade" x1="0" x2="1">
          <stop offset="0" stopColor="var(--color-cyan)" stopOpacity="0.1" />
          <stop offset="0.6" stopColor="var(--color-cyan)" stopOpacity="1" />
          <stop offset="1" stopColor="var(--color-pulse)" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <path
        d="M0 32 H28 l3-5 3 5 H52 l4 0 3-22 5 38 4-26 3 10 H110 l4-7 4 7 H150 l3-5 3 5 H180 l4 0 3-22 5 38 4-26 3 10 H240"
        fill="none"
        stroke="url(#ecgFade)"
        strokeWidth="2"
        strokeDasharray="240"
        style={{
          animation: `ecg-run ${duration * 2}s linear infinite`,
          filter: "drop-shadow(0 0 5px var(--color-cyan))",
        }}
      />
    </svg>
  );
}

export function ActionPotential() {
  const points = [
    [4, 78],
    [18, 78],
    [22, 10],
    [26, 28],
    [52, 30],
    [78, 38],
    [92, 78],
    [116, 78],
  ];
  const d = points
    .map((p, i) => `${i === 0 ? "M" : "L"}${p[0]} ${p[1]}`)
    .join(" ");
  return (
    <svg viewBox="0 0 120 90" className="h-full w-full" role="img" aria-label="Потенциал действия кардиомиоцита">
      <text x="2" y="8" fill="var(--color-muted)" fontSize="6" fontFamily="IBM Plex Mono, monospace">
        мВ
      </text>
      <line x1="8" y1="10" x2="8" y2="82" stroke="var(--color-border)" strokeWidth="0.6" />
      <line x1="8" y1="78" x2="116" y2="78" stroke="var(--color-border)" strokeWidth="0.6" />
      <line x1="8" y1="28" x2="116" y2="28" stroke="var(--color-border)" strokeWidth="0.4" strokeDasharray="2 2" />
      <path
        d={d}
        fill="none"
        stroke="var(--color-cyan)"
        strokeWidth="2"
        className="draw-line"
        style={{ filter: "drop-shadow(0 0 5px var(--color-cyan))" }}
      />
      <text x="20" y="20" fill="var(--color-pulse)" fontSize="6" fontFamily="IBM Plex Mono, monospace">
        0 Na⁺
      </text>
      <text x="48" y="22" fill="var(--color-cyan)" fontSize="6" fontFamily="IBM Plex Mono, monospace">
        2 Ca²⁺
      </text>
      <text x="86" y="58" fill="var(--color-muted)" fontSize="6" fontFamily="IBM Plex Mono, monospace">
        3 K⁺
      </text>
      <text x="10" y="88" fill="var(--color-subtle)" fontSize="5.5" fontFamily="IBM Plex Mono, monospace">
        фаза 4  →  плато 200–400 мс  →  покой
      </text>
    </svg>
  );
}

export function StarlingCurve() {
  return (
    <svg viewBox="0 0 140 100" className="h-full w-full" role="img" aria-label="Кривая Франка–Старлинга">
      <line x1="16" y1="88" x2="132" y2="88" stroke="var(--color-border)" />
      <line x1="16" y1="88" x2="16" y2="10" stroke="var(--color-border)" />
      <path
        d="M18 80 C 40 78, 52 40, 78 22 S 118 18, 128 34"
        fill="none"
        stroke="var(--color-cyan)"
        strokeWidth="2.4"
        className="draw-line"
        style={{ filter: "drop-shadow(0 0 6px var(--color-cyan))" }}
      />
      <path
        d="M18 82 C 42 80, 58 58, 84 48 S 120 50, 130 62"
        fill="none"
        stroke="var(--color-pulse)"
        strokeWidth="1.6"
        strokeDasharray="4 3"
      />
      <circle cx="78" cy="22" r="3.2" fill="var(--color-cyan)" />
      <text x="22" y="12" fill="var(--color-muted)" fontSize="6.5" fontFamily="IBM Plex Mono, monospace">
        ударный объём
      </text>
      <text x="78" y="98" fill="var(--color-muted)" fontSize="6.5" fontFamily="IBM Plex Mono, monospace">
        конечный диастолический объём
      </text>
      <text x="96" y="18" fill="var(--color-cyan)" fontSize="6" fontFamily="IBM Plex Mono, monospace">
        норма
      </text>
      <text x="96" y="52" fill="var(--color-pulse)" fontSize="6" fontFamily="IBM Plex Mono, monospace">
        слабость
      </text>
    </svg>
  );
}

export function PoiseuilleTubes() {
  const tubes = [
    { r: 18, label: "r", flow: 1, delay: "0s" },
    { r: 12, label: "0.75 r", flow: 0.32, delay: "0.4s" },
    { r: 8, label: "0.5 r", flow: 0.06, delay: "0.8s" },
  ];
  return (
    <div className="grid h-full grid-cols-3 gap-3">
      {tubes.map((t) => (
        <div key={t.label} className="flex flex-col items-center justify-end gap-3">
          <div className="relative flex h-40 w-full items-end justify-center">
            <div
              className="relative overflow-hidden rounded-full border border-cyan/50"
              style={{ width: t.r * 2, height: 148 }}
            >
              <div
                className="absolute inset-x-0 bottom-0 bg-pulse/80"
                style={{
                  height: `${Math.max(12, t.flow * 100)}%`,
                  boxShadow: "0 0 16px var(--color-pulse)",
                  animation: `pulse-glow 1.6s ease-in-out ${t.delay} infinite`,
                }}
              />
            </div>
          </div>
          <div className="text-center font-mono text-[11px] tracking-wide text-cyan">{t.label}</div>
          <div className="text-center text-xs text-muted">Q ∝ {t.flow === 1 ? "1" : t.flow === 0.32 ? "≈ 0.32" : "1/16"}</div>
        </div>
      ))}
    </div>
  );
}

export function ChamberPump() {
  return (
    <svg viewBox="0 0 220 160" className="h-full w-full" role="img" aria-label="Четыре камеры сердца">
      <ellipse cx="86" cy="58" rx="38" ry="28" fill="color-mix(in oklab, var(--color-cyan) 16%, transparent)" stroke="var(--color-cyan)" strokeWidth="2" />
      <ellipse cx="138" cy="58" rx="36" ry="26" fill="color-mix(in oklab, var(--color-pulse) 14%, transparent)" stroke="var(--color-pulse)" strokeWidth="2" />
      <ellipse cx="80" cy="108" rx="46" ry="34" fill="color-mix(in oklab, var(--color-cyan) 22%, transparent)" stroke="var(--color-cyan)" strokeWidth="2.2" />
      <ellipse cx="142" cy="106" rx="48" ry="36" fill="color-mix(in oklab, var(--color-pulse) 22%, transparent)" stroke="var(--color-pulse)" strokeWidth="2.2" />
      <text x="70" y="60" fill="var(--color-fg)" fontSize="8" fontFamily="Manrope, sans-serif">ПП</text>
      <text x="126" y="60" fill="var(--color-fg)" fontSize="8" fontFamily="Manrope, sans-serif">ЛП</text>
      <text x="64" y="112" fill="var(--color-fg)" fontSize="9" fontFamily="Manrope, sans-serif">ПЖ</text>
      <text x="128" y="112" fill="var(--color-fg)" fontSize="9" fontFamily="Manrope, sans-serif">ЛЖ</text>
      <path d="M86 78 v8" stroke="var(--color-cyan)" strokeWidth="3" />
      <path d="M138 76 v8" stroke="var(--color-pulse)" strokeWidth="3" />
      <path d="M48 48 C 30 20, 20 18, 18 8" fill="none" stroke="var(--color-cyan)" strokeWidth="2" />
      <path d="M170 48 C 188 22, 198 16, 208 8" fill="none" stroke="var(--color-pulse)" strokeWidth="2" />
      <text x="8" y="154" fill="var(--color-muted)" fontSize="7" fontFamily="IBM Plex Mono, monospace">
        правый контур → лёгкие     левый контур → тело
      </text>
    </svg>
  );
}

export function ConductionMap() {
  return (
    <svg viewBox="0 0 180 180" className="h-full w-full" role="img" aria-label="Проводящая система сердца">
      <ellipse cx="90" cy="92" rx="70" ry="78" fill="color-mix(in oklab, var(--color-elevated) 80%, transparent)" stroke="var(--color-border)" />
      <circle cx="78" cy="38" r="7" fill="var(--color-cyan)" className="beat-heart" />
      <text x="90" y="34" fill="var(--color-cyan)" fontSize="8" fontFamily="IBM Plex Mono, monospace">
        СА
      </text>
      <path d="M78 45 C 80 58, 84 68, 90 74" fill="none" stroke="var(--color-cyan)" strokeWidth="2" className="draw-line" />
      <circle cx="90" cy="80" r="6" fill="var(--color-pulse)" />
      <text x="100" y="84" fill="var(--color-pulse)" fontSize="8" fontFamily="IBM Plex Mono, monospace">
        АВ
      </text>
      <path d="M90 86 V118" fill="none" stroke="var(--color-cyan)" strokeWidth="2.4" />
      <text x="96" y="108" fill="var(--color-muted)" fontSize="7" fontFamily="IBM Plex Mono, monospace">
        Гиса
      </text>
      <path d="M90 118 L58 150" stroke="var(--color-cyan)" strokeWidth="2" />
      <path d="M90 118 L122 150" stroke="var(--color-cyan)" strokeWidth="2" />
      <path d="M58 150 C 48 158, 40 150, 34 160" stroke="var(--color-cyan)" strokeWidth="1.4" fill="none" />
      <path d="M122 150 C 132 158, 140 150, 148 160" stroke="var(--color-cyan)" strokeWidth="1.4" fill="none" />
      <path d="M70 140 C 62 148, 80 156, 74 164" stroke="var(--color-cyan)" strokeWidth="1" fill="none" />
      <path d="M110 140 C 118 148, 100 156, 108 164" stroke="var(--color-cyan)" strokeWidth="1" fill="none" />
      <text x="24" y="176" fill="var(--color-muted)" fontSize="7" fontFamily="IBM Plex Mono, monospace">
        волокна Пуркинье · 2–4 м/с
      </text>
    </svg>
  );
}

export function DipoleField() {
  return (
    <svg viewBox="0 0 200 140" className="h-full w-full" role="img" aria-label="Сердечный диполь и отведения Эйнтховена">
      <polygon
        points="36,30 164,30 100,124"
        fill="none"
        stroke="var(--color-border)"
        strokeWidth="1.4"
      />
      <text x="96" y="24" fill="var(--color-cyan)" fontSize="8" fontFamily="IBM Plex Mono, monospace">
        I
      </text>
      <text x="44" y="82" fill="var(--color-cyan)" fontSize="8" fontFamily="IBM Plex Mono, monospace">
        II
      </text>
      <text x="148" y="82" fill="var(--color-cyan)" fontSize="8" fontFamily="IBM Plex Mono, monospace">
        III
      </text>
      <text x="16" y="28" fill="var(--color-muted)" fontSize="6.5" fontFamily="IBM Plex Mono, monospace">
        RA
      </text>
      <text x="166" y="28" fill="var(--color-muted)" fontSize="6.5" fontFamily="IBM Plex Mono, monospace">
        LA
      </text>
      <text x="92" y="136" fill="var(--color-muted)" fontSize="6.5" fontFamily="IBM Plex Mono, monospace">
        LL
      </text>
      <circle
        cx="100"
        cy="68"
        r="14"
        fill="color-mix(in oklab, var(--color-pulse) 30%, transparent)"
        stroke="var(--color-pulse)"
      />
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 Z" fill="var(--color-cyan)" />
        </marker>
      </defs>
      <line
        x1="88"
        y1="60"
        x2="122"
        y2="96"
        stroke="var(--color-cyan)"
        strokeWidth="2.4"
        markerEnd="url(#arrow)"
      />
      <text x="126" y="104" fill="var(--color-cyan)" fontSize="8" fontFamily="IBM Plex Mono, monospace">
        P⃗
      </text>
    </svg>
  );
}

export function MembraneRc() {
  return (
    <svg viewBox="0 0 220 120" className="h-full w-full" role="img" aria-label="Мембрана как RC-цепь">
      <rect x="16" y="28" width="52" height="64" rx="8" fill="none" stroke="var(--color-cyan)" strokeWidth="1.6" />
      <text x="24" y="62" fill="var(--color-fg)" fontSize="9" fontFamily="Manrope, sans-serif">
        клетка
      </text>
      <path d="M68 60 H96" stroke="var(--color-cyan)" strokeWidth="2" />
      <path d="M96 44 V76" stroke="var(--color-cyan)" strokeWidth="2" />
      <path d="M90 44 H102 M90 50 H102" stroke="var(--color-cyan)" strokeWidth="2" />
      <text x="86" y="38" fill="var(--color-muted)" fontSize="7" fontFamily="IBM Plex Mono, monospace">
        Cₘ
      </text>
      <rect x="118" y="52" width="36" height="16" rx="2" fill="none" stroke="var(--color-pulse)" strokeWidth="1.6" />
      <path d="M118 60 L128 52 140 68 154 60" stroke="var(--color-pulse)" strokeWidth="1.4" fill="none" />
      <text x="124" y="84" fill="var(--color-pulse)" fontSize="7" fontFamily="IBM Plex Mono, monospace">
        Rₘ
      </text>
      <path d="M154 60 H188" stroke="var(--color-cyan)" strokeWidth="2" />
      <circle cx="196" cy="60" r="10" fill="none" stroke="var(--color-cyan)" strokeWidth="1.6" />
      <text x="190" y="64" fill="var(--color-cyan)" fontSize="8" fontFamily="IBM Plex Mono, monospace">
        V
      </text>
      <text x="16" y="112" fill="var(--color-muted)" fontSize="7.5" fontFamily="IBM Plex Mono, monospace">
        τ = RₘCₘ   ·   λ = √(rₘ / rᵢ)   ·   I = V / R
      </text>
    </svg>
  );
}

export function WaveReentry({ chaotic }: { chaotic?: boolean }) {
  return (
    <svg viewBox="0 0 180 140" className="h-full w-full" role="img" aria-label="Волна возбуждения">
      <ellipse cx="90" cy="70" rx="64" ry="52" fill="none" stroke="var(--color-border)" />
      {chaotic ? (
        <>
          <path d="M50 70 C 40 40, 90 30, 100 60 S 40 110, 70 100" fill="none" stroke="var(--color-pulse)" strokeWidth="3" />
          <path d="M110 50 C 140 40, 150 90, 120 100 S 90 70, 130 60" fill="none" stroke="var(--color-cyan)" strokeWidth="3" />
          <circle cx="72" cy="62" r="4" fill="var(--color-pulse)" />
          <circle cx="124" cy="78" r="4" fill="var(--color-cyan)" />
        </>
      ) : (
        <>
          <circle cx="90" cy="70" r="22" fill="none" stroke="var(--color-cyan)" strokeWidth="3" strokeDasharray="20 80" className="beat-heart" />
          <circle cx="90" cy="70" r="38" fill="none" stroke="var(--color-cyan)" strokeWidth="1.4" opacity="0.5" strokeDasharray="16 90" />
          <circle cx="90" cy="38" r="5" fill="var(--color-pulse)" />
        </>
      )}
      <text x="20" y="132" fill="var(--color-muted)" fontSize="7.5" fontFamily="IBM Plex Mono, monospace">
        {chaotic ? "reentry / роторы" : "λ = CV × ERP"}
      </text>
    </svg>
  );
}

export function CalciumChain() {
  const steps = ["ПД", "Ca²⁺ L", "CICR", "тропонин", "сила"];
  return (
    <div className="flex h-full flex-col justify-center gap-3">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-3">
          <div
            className="flex h-10 min-w-10 items-center justify-center rounded-md border border-cyan/40 bg-cyan/10 font-mono text-sm text-cyan"
            style={{ animationDelay: `${i * 90}ms` }}
          >
            {i + 1}
          </div>
          <div className="h-px flex-1 bg-cyan/30" />
          <div className="holo-panel px-3 py-2 text-sm font-medium">{step}</div>
        </div>
      ))}
    </div>
  );
}

export function FormulaCard({
  expr,
  caption,
}: {
  expr: string;
  caption: string;
}) {
  return (
    <div className="holo-panel px-4 py-3">
      <div className="formula text-lg sm:text-xl">{expr}</div>
      <p className="mt-1 text-xs text-muted">{caption}</p>
    </div>
  );
}

export function StatChip({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="holo-panel flex flex-col gap-1 px-3 py-2">
      <span className="holo-kicker">{label}</span>
      <span className="font-display text-lg font-semibold text-fg tabular-nums">{value}</span>
    </div>
  );
}
