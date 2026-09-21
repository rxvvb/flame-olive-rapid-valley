import { useCallback, useEffect, useRef, useState, type TouchEvent } from "react";
import { SLIDES } from "@/data/slides";
import { SlideView } from "@/components/deck/SlideView";
import { Hud } from "@/components/deck/Hud";
import { cn } from "@/lib/utils";

const TOTAL = SLIDES.length;

export function Deck() {
  const [index, setIndex] = useState(0);
  const [overview, setOverview] = useState(false);
  const [autoplay, setAutoplay] = useState(false);
  const [bpm, setBpm] = useState(72);
  const [fullscreen, setFullscreen] = useState(false);
  const touchX = useRef<number | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const go = useCallback((next: number) => {
    setIndex(((next % TOTAL) + TOTAL) % TOTAL);
    setOverview(false);
  }, []);

  const prev = useCallback(() => go(index - 1), [go, index]);
  const next = useCallback(() => go(index + 1), [go, index]);

  useEffect(() => {
    const hash = Number(window.location.hash.replace("#", ""));
    if (hash >= 1 && hash <= TOTAL) setIndex(hash - 1);
  }, []);

  useEffect(() => {
    const id = `#${index + 1}`;
    if (window.location.hash !== id) {
      history.replaceState(null, "", id);
    }
  }, [index]);

  useEffect(() => {
    document.documentElement.style.setProperty("--beat", `${Math.round(60000 / bpm)}ms`);
  }, [bpm]);

  useEffect(() => {
    if (!autoplay || overview) return;
    const ms = Math.max(5000, (60 / bpm) * 8000);
    const t = window.setTimeout(() => go(index + 1), ms);
    return () => window.clearTimeout(t);
  }, [autoplay, bpm, go, index, overview]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "Backspace" || e.key === "PageUp") {
        e.preventDefault();
        prev();
      } else if (e.key === "Home") {
        go(0);
      } else if (e.key === "End") {
        go(TOTAL - 1);
      } else if (e.key === "Escape") {
        setOverview((v) => !v);
      } else if (e.key === "p" || e.key === "P") {
        setAutoplay((v) => !v);
      } else if (e.key === "f" || e.key === "F") {
        toggleFullscreen();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, next, prev]);

  function toggleFullscreen() {
    const el = rootRef.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      void el.requestFullscreen?.();
      setFullscreen(true);
    } else {
      void document.exitFullscreen?.();
      setFullscreen(false);
    }
  }

  useEffect(() => {
    function onFs() {
      setFullscreen(Boolean(document.fullscreenElement));
    }
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  function onTouchStart(e: TouchEvent) {
    touchX.current = e.changedTouches[0]?.clientX ?? null;
  }
  function onTouchEnd(e: TouchEvent) {
    const start = touchX.current;
    touchX.current = null;
    const x = e.changedTouches[0]?.clientX;
    if (start == null || x == null) return;
    const dx = x - start;
    if (dx < -48) next();
    if (dx > 48) prev();
  }

  return (
    <div
      ref={rootRef}
      className="relative h-dvh w-full overflow-hidden bg-bg text-fg"
      style={{ ["--beat" as string]: `${Math.round(60000 / bpm)}ms` }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-70" />
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-24 h-80 w-80 rounded-full bg-pulse/10 blur-3xl" />

      {overview ? (
        <Overview index={index} onJump={go} />
      ) : (
        <main className="relative mx-auto flex h-full max-w-6xl flex-col px-4 pb-32 pt-[max(1rem,env(safe-area-inset-top))] sm:px-6 sm:pb-36">
          <header className="mb-3 flex items-center justify-between gap-3">
            <p className="font-display text-sm font-semibold tracking-wide text-cyan">Кардиофизика</p>
            <p className="hidden font-mono text-[11px] tracking-widest text-subtle uppercase sm:block">
              ← → пробел · Esc сетка · P авто
            </p>
          </header>
          <section className="min-h-0 flex-1" key={SLIDES[index].id}>
            <SlideView index={index} />
          </section>
        </main>
      )}

      <Hud
        index={index}
        bpm={bpm}
        autoplay={autoplay}
        overview={overview}
        fullscreen={fullscreen}
        onPrev={prev}
        onNext={next}
        onJump={go}
        onBpm={setBpm}
        onToggleAutoplay={() => setAutoplay((v) => !v)}
        onToggleOverview={() => setOverview((v) => !v)}
        onToggleFullscreen={toggleFullscreen}
      />
    </div>
  );
}

function Overview({
  index,
  onJump,
}: {
  index: number;
  onJump: (i: number) => void;
}) {
  return (
    <div className="mx-auto h-full max-w-6xl overflow-y-auto px-4 pb-40 pt-6 sm:px-6">
      <p className="holo-kicker mb-4">Все слайды</p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => onJump(i)}
            className={cn(
              "holo-frame relative aspect-video overflow-hidden text-left transition-transform duration-150 ease-out active:scale-[0.96]",
              i === index && "ring-2 ring-cyan",
            )}
          >
            {s.image ? (
              <img src={s.image} alt="" className="h-full w-full object-cover" />
            ) : (
              <div className="h-full bg-elevated" />
            )}
            <span className="absolute inset-x-0 bottom-0 bg-bg/80 px-2 py-1.5 font-mono text-[10px] tracking-wide text-cyan">
              {String(i + 1).padStart(2, "0")} {s.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
