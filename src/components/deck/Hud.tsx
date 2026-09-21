import type { ReactNode } from "react";
import {
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Maximize2,
  Minimize2,
  Pause,
  Play,
} from "lucide-react";
import { SLIDES } from "@/data/slides";
import { LiveEcg } from "@/components/viz/visuals";
import { cn } from "@/lib/utils";

type HudProps = {
  index: number;
  bpm: number;
  autoplay: boolean;
  overview: boolean;
  fullscreen: boolean;
  onPrev: () => void;
  onNext: () => void;
  onJump: (i: number) => void;
  onBpm: (n: number) => void;
  onToggleAutoplay: () => void;
  onToggleOverview: () => void;
  onToggleFullscreen: () => void;
};

export function Hud({
  index,
  bpm,
  autoplay,
  overview,
  fullscreen,
  onPrev,
  onNext,
  onJump,
  onBpm,
  onToggleAutoplay,
  onToggleOverview,
  onToggleFullscreen,
}: HudProps) {
  const total = SLIDES.length;
  const progress = ((index + 1) / total) * 100;

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-8 sm:px-5">
      <div className="pointer-events-auto mx-auto flex max-w-6xl flex-col gap-2">
        <div className="hidden h-10 items-end sm:flex">
          <LiveEcg bpm={bpm} />
        </div>
        <div className="holo-panel flex flex-col gap-2 px-3 py-2 sm:flex-row sm:items-center sm:gap-4">
          <div className="flex items-center gap-1">
            <IconBtn label="Назад" onClick={onPrev}>
              <ChevronLeft className="size-5" />
            </IconBtn>
            <IconBtn label={autoplay ? "Пауза" : "Автопоказ"} onClick={onToggleAutoplay}>
              {autoplay ? <Pause className="size-4" /> : <Play className="size-4" />}
            </IconBtn>
            <IconBtn label="Вперёд" onClick={onNext}>
              <ChevronRight className="size-5" />
            </IconBtn>
          </div>

          <div className="min-w-0 flex-1">
            <div className="mb-1 flex items-center justify-between gap-3 font-mono text-[11px] tracking-widest text-cyan uppercase">
              <span className="truncate">{SLIDES[index].kicker}</span>
              <span className="tabular-nums text-muted">
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
            </div>
            <div className="h-1 overflow-hidden rounded-full bg-cyan/15">
              <div
                className="glow-bar h-full rounded-full bg-cyan transition-[width] duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="flex min-w-36 items-center justify-center gap-1 text-xs text-muted">
            <button
              type="button"
              className="flex size-11 items-center justify-center rounded-md font-display text-lg text-fg transition-colors duration-150 hover:bg-cyan/10 hover:text-cyan active:scale-[0.96]"
              aria-label="Медленнее"
              onClick={() => onBpm(Math.max(48, bpm - 6))}
            >
              −
            </button>
            <div className="flex min-w-16 flex-col items-center">
              <span className="font-mono text-sm tabular-nums text-cyan">{bpm}</span>
              <span className="font-mono text-[10px] tracking-widest uppercase">уд/мин</span>
            </div>
            <button
              type="button"
              className="flex size-11 items-center justify-center rounded-md font-display text-lg text-fg transition-colors duration-150 hover:bg-cyan/10 hover:text-cyan active:scale-[0.96]"
              aria-label="Быстрее"
              onClick={() => onBpm(Math.min(160, bpm + 6))}
            >
              +
            </button>
          </div>

          <div className="flex items-center gap-1">
            <IconBtn label="Все слайды" onClick={onToggleOverview} pressed={overview}>
              <LayoutGrid className="size-4" />
            </IconBtn>
            <IconBtn
              label={fullscreen ? "Окно" : "Полный экран"}
              onClick={onToggleFullscreen}
            >
              {fullscreen ? <Minimize2 className="size-4" /> : <Maximize2 className="size-4" />}
            </IconBtn>
          </div>
        </div>

        <div className="hidden gap-1 overflow-x-auto pb-1 md:flex">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => onJump(i)}
              className={cn(
                "h-1.5 min-w-6 flex-1 rounded-full transition-colors duration-200",
                i === index ? "bg-cyan" : "bg-cyan/20 hover:bg-cyan/50",
              )}
              aria-label={`Слайд ${i + 1}: ${s.title}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function IconBtn({
  children,
  onClick,
  label,
  pressed,
}: {
  children: ReactNode;
  onClick: () => void;
  label: string;
  pressed?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-pressed={pressed}
      className={cn(
        "flex size-11 items-center justify-center rounded-md text-fg transition-[transform,background-color,color] duration-150 ease-out",
        "hover:bg-cyan/10 hover:text-cyan active:scale-[0.96]",
        pressed && "bg-cyan/15 text-cyan",
      )}
    >
      {children}
    </button>
  );
}
