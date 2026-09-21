import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Maximize2, c as ChevronLeft, i as Minimize2, n as Play, o as LayoutGrid, r as Pause, s as ChevronRight } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DQDv34Z8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SLIDES = [
	{
		id: "title",
		kicker: "Лекция · 15 слайдов",
		title: "Физика сердечного ритма",
		image: "/slides/01-hero.jpg"
	},
	{
		id: "two-worlds",
		kicker: "01 · Система",
		title: "Сердце — машина двух миров",
		image: "/slides/10-unified.jpg"
	},
	{
		id: "pump",
		kicker: "02 · Механика",
		title: "Насос с обратными клапанами",
		image: "/slides/02-chambers.jpg"
	},
	{
		id: "poiseuille",
		kicker: "03 · Гемодинамика",
		title: "Закон Пуазёйля и r⁴",
		image: "/slides/06-vessels.jpg"
	},
	{
		id: "bernoulli",
		kicker: "04 · Поток",
		title: "Бернулли, стеноз, шум",
		image: "/slides/03-blood.jpg"
	},
	{
		id: "starling",
		kicker: "05 · Мышца",
		title: "Закон Франка–Старлинга",
		image: "/slides/07-fibers.jpg"
	},
	{
		id: "ions",
		kicker: "06 · Электричество",
		title: "Мембрана как батарея",
		image: "/slides/05-cell.jpg"
	},
	{
		id: "ap",
		kicker: "07 · Сигнал",
		title: "Потенциал действия",
		image: "/slides/05-cell.jpg"
	},
	{
		id: "conduction",
		kicker: "08 · Сеть",
		title: "Проводящая система",
		image: "/slides/04-conduction.jpg"
	},
	{
		id: "ecg",
		kicker: "09 · Поле",
		title: "ЭКГ как проекция диполя",
		image: "/slides/09-ecg.jpg"
	},
	{
		id: "ohm",
		kicker: "10 · Цепи",
		title: "Закон Ома в сердце",
		image: "/slides/10-unified.jpg"
	},
	{
		id: "waves",
		kicker: "11 · Волны",
		title: "Рефрактерность и длина волны",
		image: "/slides/04-conduction.jpg"
	},
	{
		id: "ecc",
		kicker: "12 · Связь",
		title: "От вольта к ньютону",
		image: "/slides/07-fibers.jpg"
	},
	{
		id: "break",
		kicker: "13 · Сбой",
		title: "Когда физика ломается",
		image: "/slides/08-storm.jpg"
	},
	{
		id: "finale",
		kicker: "14 · Синтез",
		title: "Живой электромагнитный насос",
		image: "/slides/01-hero.jpg"
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function HoloImage({ src, alt, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("holo-frame scan-sweep h-full min-h-40 w-full", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			className: "h-full w-full object-cover"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none absolute inset-x-3 top-3 flex items-center justify-between font-mono text-[10px] tracking-widest text-cyan uppercase",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "HOL·REC" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-pulse shadow-[0_0_10px_var(--color-pulse)]" })]
		})]
	});
}
function BeatingHeart({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 120 110",
		className: cn("beat-heart text-pulse drop-shadow-[0_0_18px_var(--color-pulse)]", className),
		"aria-hidden": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M60 96C22 68 10 46 10 30 10 16 22 8 36 8c10 0 18 5 24 14C66 13 74 8 84 8c14 0 26 8 26 22 0 16-12 38-50 66Z",
			fill: "currentColor",
			opacity: "0.9"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M22 42c14-2 22 8 38 4 12-3 20-12 38-6",
			fill: "none",
			stroke: "var(--color-cyan)",
			strokeWidth: "3",
			strokeLinecap: "round"
		})]
	});
}
function LiveEcg({ bpm }) {
	const duration = Math.max(.45, 60 / bpm);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 240 64",
		className: "h-16 w-full",
		"aria-hidden": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
			id: "ecgFade",
			x1: "0",
			x2: "1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0",
					stopColor: "var(--color-cyan)",
					stopOpacity: "0.1"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0.6",
					stopColor: "var(--color-cyan)",
					stopOpacity: "1"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "1",
					stopColor: "var(--color-pulse)",
					stopOpacity: "0.9"
				})
			]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M0 32 H28 l3-5 3 5 H52 l4 0 3-22 5 38 4-26 3 10 H110 l4-7 4 7 H150 l3-5 3 5 H180 l4 0 3-22 5 38 4-26 3 10 H240",
			fill: "none",
			stroke: "url(#ecgFade)",
			strokeWidth: "2",
			strokeDasharray: "240",
			style: {
				animation: `ecg-run ${duration * 2}s linear infinite`,
				filter: "drop-shadow(0 0 5px var(--color-cyan))"
			}
		})]
	});
}
function ActionPotential() {
	const d = [
		[4, 78],
		[18, 78],
		[22, 10],
		[26, 28],
		[52, 30],
		[78, 38],
		[92, 78],
		[116, 78]
	].map((p, i) => `${i === 0 ? "M" : "L"}${p[0]} ${p[1]}`).join(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 120 90",
		className: "h-full w-full",
		role: "img",
		"aria-label": "Потенциал действия кардиомиоцита",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "2",
				y: "8",
				fill: "var(--color-muted)",
				fontSize: "6",
				fontFamily: "IBM Plex Mono, monospace",
				children: "мВ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "8",
				y1: "10",
				x2: "8",
				y2: "82",
				stroke: "var(--color-border)",
				strokeWidth: "0.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "8",
				y1: "78",
				x2: "116",
				y2: "78",
				stroke: "var(--color-border)",
				strokeWidth: "0.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "8",
				y1: "28",
				x2: "116",
				y2: "28",
				stroke: "var(--color-border)",
				strokeWidth: "0.4",
				strokeDasharray: "2 2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d,
				fill: "none",
				stroke: "var(--color-cyan)",
				strokeWidth: "2",
				className: "draw-line",
				style: { filter: "drop-shadow(0 0 5px var(--color-cyan))" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "20",
				y: "20",
				fill: "var(--color-pulse)",
				fontSize: "6",
				fontFamily: "IBM Plex Mono, monospace",
				children: "0 Na⁺"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "48",
				y: "22",
				fill: "var(--color-cyan)",
				fontSize: "6",
				fontFamily: "IBM Plex Mono, monospace",
				children: "2 Ca²⁺"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "86",
				y: "58",
				fill: "var(--color-muted)",
				fontSize: "6",
				fontFamily: "IBM Plex Mono, monospace",
				children: "3 K⁺"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "10",
				y: "88",
				fill: "var(--color-subtle)",
				fontSize: "5.5",
				fontFamily: "IBM Plex Mono, monospace",
				children: "фаза 4  →  плато 200–400 мс  →  покой"
			})
		]
	});
}
function StarlingCurve() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 140 100",
		className: "h-full w-full",
		role: "img",
		"aria-label": "Кривая Франка–Старлинга",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "16",
				y1: "88",
				x2: "132",
				y2: "88",
				stroke: "var(--color-border)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "16",
				y1: "88",
				x2: "16",
				y2: "10",
				stroke: "var(--color-border)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M18 80 C 40 78, 52 40, 78 22 S 118 18, 128 34",
				fill: "none",
				stroke: "var(--color-cyan)",
				strokeWidth: "2.4",
				className: "draw-line",
				style: { filter: "drop-shadow(0 0 6px var(--color-cyan))" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M18 82 C 42 80, 58 58, 84 48 S 120 50, 130 62",
				fill: "none",
				stroke: "var(--color-pulse)",
				strokeWidth: "1.6",
				strokeDasharray: "4 3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "78",
				cy: "22",
				r: "3.2",
				fill: "var(--color-cyan)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "22",
				y: "12",
				fill: "var(--color-muted)",
				fontSize: "6.5",
				fontFamily: "IBM Plex Mono, monospace",
				children: "ударный объём"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "78",
				y: "98",
				fill: "var(--color-muted)",
				fontSize: "6.5",
				fontFamily: "IBM Plex Mono, monospace",
				children: "конечный диастолический объём"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "96",
				y: "18",
				fill: "var(--color-cyan)",
				fontSize: "6",
				fontFamily: "IBM Plex Mono, monospace",
				children: "норма"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "96",
				y: "52",
				fill: "var(--color-pulse)",
				fontSize: "6",
				fontFamily: "IBM Plex Mono, monospace",
				children: "слабость"
			})
		]
	});
}
function PoiseuilleTubes() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid h-full grid-cols-3 gap-3",
		children: [
			{
				r: 18,
				label: "r",
				flow: 1,
				delay: "0s"
			},
			{
				r: 12,
				label: "0.75 r",
				flow: .32,
				delay: "0.4s"
			},
			{
				r: 8,
				label: "0.5 r",
				flow: .06,
				delay: "0.8s"
			}
		].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center justify-end gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative flex h-40 w-full items-end justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative overflow-hidden rounded-full border border-cyan/50",
						style: {
							width: t.r * 2,
							height: 148
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-x-0 bottom-0 bg-pulse/80",
							style: {
								height: `${Math.max(12, t.flow * 100)}%`,
								boxShadow: "0 0 16px var(--color-pulse)",
								animation: `pulse-glow 1.6s ease-in-out ${t.delay} infinite`
							}
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-center font-mono text-[11px] tracking-wide text-cyan",
					children: t.label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center text-xs text-muted",
					children: ["Q ∝ ", t.flow === 1 ? "1" : t.flow === .32 ? "≈ 0.32" : "1/16"]
				})
			]
		}, t.label))
	});
}
function ChamberPump() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 220 160",
		className: "h-full w-full",
		role: "img",
		"aria-label": "Четыре камеры сердца",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "86",
				cy: "58",
				rx: "38",
				ry: "28",
				fill: "color-mix(in oklab, var(--color-cyan) 16%, transparent)",
				stroke: "var(--color-cyan)",
				strokeWidth: "2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "138",
				cy: "58",
				rx: "36",
				ry: "26",
				fill: "color-mix(in oklab, var(--color-pulse) 14%, transparent)",
				stroke: "var(--color-pulse)",
				strokeWidth: "2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "80",
				cy: "108",
				rx: "46",
				ry: "34",
				fill: "color-mix(in oklab, var(--color-cyan) 22%, transparent)",
				stroke: "var(--color-cyan)",
				strokeWidth: "2.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "142",
				cy: "106",
				rx: "48",
				ry: "36",
				fill: "color-mix(in oklab, var(--color-pulse) 22%, transparent)",
				stroke: "var(--color-pulse)",
				strokeWidth: "2.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "70",
				y: "60",
				fill: "var(--color-fg)",
				fontSize: "8",
				fontFamily: "Manrope, sans-serif",
				children: "ПП"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "126",
				y: "60",
				fill: "var(--color-fg)",
				fontSize: "8",
				fontFamily: "Manrope, sans-serif",
				children: "ЛП"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "64",
				y: "112",
				fill: "var(--color-fg)",
				fontSize: "9",
				fontFamily: "Manrope, sans-serif",
				children: "ПЖ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "128",
				y: "112",
				fill: "var(--color-fg)",
				fontSize: "9",
				fontFamily: "Manrope, sans-serif",
				children: "ЛЖ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M86 78 v8",
				stroke: "var(--color-cyan)",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M138 76 v8",
				stroke: "var(--color-pulse)",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M48 48 C 30 20, 20 18, 18 8",
				fill: "none",
				stroke: "var(--color-cyan)",
				strokeWidth: "2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M170 48 C 188 22, 198 16, 208 8",
				fill: "none",
				stroke: "var(--color-pulse)",
				strokeWidth: "2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "8",
				y: "154",
				fill: "var(--color-muted)",
				fontSize: "7",
				fontFamily: "IBM Plex Mono, monospace",
				children: "правый контур → лёгкие     левый контур → тело"
			})
		]
	});
}
function ConductionMap() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 180 180",
		className: "h-full w-full",
		role: "img",
		"aria-label": "Проводящая система сердца",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "90",
				cy: "92",
				rx: "70",
				ry: "78",
				fill: "color-mix(in oklab, var(--color-elevated) 80%, transparent)",
				stroke: "var(--color-border)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "78",
				cy: "38",
				r: "7",
				fill: "var(--color-cyan)",
				className: "beat-heart"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "90",
				y: "34",
				fill: "var(--color-cyan)",
				fontSize: "8",
				fontFamily: "IBM Plex Mono, monospace",
				children: "СА"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M78 45 C 80 58, 84 68, 90 74",
				fill: "none",
				stroke: "var(--color-cyan)",
				strokeWidth: "2",
				className: "draw-line"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "90",
				cy: "80",
				r: "6",
				fill: "var(--color-pulse)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "100",
				y: "84",
				fill: "var(--color-pulse)",
				fontSize: "8",
				fontFamily: "IBM Plex Mono, monospace",
				children: "АВ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M90 86 V118",
				fill: "none",
				stroke: "var(--color-cyan)",
				strokeWidth: "2.4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "96",
				y: "108",
				fill: "var(--color-muted)",
				fontSize: "7",
				fontFamily: "IBM Plex Mono, monospace",
				children: "Гиса"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M90 118 L58 150",
				stroke: "var(--color-cyan)",
				strokeWidth: "2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M90 118 L122 150",
				stroke: "var(--color-cyan)",
				strokeWidth: "2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M58 150 C 48 158, 40 150, 34 160",
				stroke: "var(--color-cyan)",
				strokeWidth: "1.4",
				fill: "none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M122 150 C 132 158, 140 150, 148 160",
				stroke: "var(--color-cyan)",
				strokeWidth: "1.4",
				fill: "none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M70 140 C 62 148, 80 156, 74 164",
				stroke: "var(--color-cyan)",
				strokeWidth: "1",
				fill: "none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M110 140 C 118 148, 100 156, 108 164",
				stroke: "var(--color-cyan)",
				strokeWidth: "1",
				fill: "none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "24",
				y: "176",
				fill: "var(--color-muted)",
				fontSize: "7",
				fontFamily: "IBM Plex Mono, monospace",
				children: "волокна Пуркинье · 2–4 м/с"
			})
		]
	});
}
function DipoleField() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 200 140",
		className: "h-full w-full",
		role: "img",
		"aria-label": "Сердечный диполь и отведения Эйнтховена",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "36,30 164,30 100,124",
				fill: "none",
				stroke: "var(--color-border)",
				strokeWidth: "1.4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "96",
				y: "24",
				fill: "var(--color-cyan)",
				fontSize: "8",
				fontFamily: "IBM Plex Mono, monospace",
				children: "I"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "44",
				y: "82",
				fill: "var(--color-cyan)",
				fontSize: "8",
				fontFamily: "IBM Plex Mono, monospace",
				children: "II"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "148",
				y: "82",
				fill: "var(--color-cyan)",
				fontSize: "8",
				fontFamily: "IBM Plex Mono, monospace",
				children: "III"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "16",
				y: "28",
				fill: "var(--color-muted)",
				fontSize: "6.5",
				fontFamily: "IBM Plex Mono, monospace",
				children: "RA"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "166",
				y: "28",
				fill: "var(--color-muted)",
				fontSize: "6.5",
				fontFamily: "IBM Plex Mono, monospace",
				children: "LA"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "92",
				y: "136",
				fill: "var(--color-muted)",
				fontSize: "6.5",
				fontFamily: "IBM Plex Mono, monospace",
				children: "LL"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "100",
				cy: "68",
				r: "14",
				fill: "color-mix(in oklab, var(--color-pulse) 30%, transparent)",
				stroke: "var(--color-pulse)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("marker", {
				id: "arrow",
				markerWidth: "8",
				markerHeight: "8",
				refX: "6",
				refY: "4",
				orient: "auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M0 0 L8 4 L0 8 Z",
					fill: "var(--color-cyan)"
				})
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "88",
				y1: "60",
				x2: "122",
				y2: "96",
				stroke: "var(--color-cyan)",
				strokeWidth: "2.4",
				markerEnd: "url(#arrow)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "126",
				y: "104",
				fill: "var(--color-cyan)",
				fontSize: "8",
				fontFamily: "IBM Plex Mono, monospace",
				children: "P⃗"
			})
		]
	});
}
function MembraneRc() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 220 120",
		className: "h-full w-full",
		role: "img",
		"aria-label": "Мембрана как RC-цепь",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "16",
				y: "28",
				width: "52",
				height: "64",
				rx: "8",
				fill: "none",
				stroke: "var(--color-cyan)",
				strokeWidth: "1.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "24",
				y: "62",
				fill: "var(--color-fg)",
				fontSize: "9",
				fontFamily: "Manrope, sans-serif",
				children: "клетка"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M68 60 H96",
				stroke: "var(--color-cyan)",
				strokeWidth: "2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M96 44 V76",
				stroke: "var(--color-cyan)",
				strokeWidth: "2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M90 44 H102 M90 50 H102",
				stroke: "var(--color-cyan)",
				strokeWidth: "2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "86",
				y: "38",
				fill: "var(--color-muted)",
				fontSize: "7",
				fontFamily: "IBM Plex Mono, monospace",
				children: "Cₘ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "118",
				y: "52",
				width: "36",
				height: "16",
				rx: "2",
				fill: "none",
				stroke: "var(--color-pulse)",
				strokeWidth: "1.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M118 60 L128 52 140 68 154 60",
				stroke: "var(--color-pulse)",
				strokeWidth: "1.4",
				fill: "none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "124",
				y: "84",
				fill: "var(--color-pulse)",
				fontSize: "7",
				fontFamily: "IBM Plex Mono, monospace",
				children: "Rₘ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M154 60 H188",
				stroke: "var(--color-cyan)",
				strokeWidth: "2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "196",
				cy: "60",
				r: "10",
				fill: "none",
				stroke: "var(--color-cyan)",
				strokeWidth: "1.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "190",
				y: "64",
				fill: "var(--color-cyan)",
				fontSize: "8",
				fontFamily: "IBM Plex Mono, monospace",
				children: "V"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "16",
				y: "112",
				fill: "var(--color-muted)",
				fontSize: "7.5",
				fontFamily: "IBM Plex Mono, monospace",
				children: "τ = RₘCₘ   ·   λ = √(rₘ / rᵢ)   ·   I = V / R"
			})
		]
	});
}
function WaveReentry({ chaotic }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 180 140",
		className: "h-full w-full",
		role: "img",
		"aria-label": "Волна возбуждения",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "90",
				cy: "70",
				rx: "64",
				ry: "52",
				fill: "none",
				stroke: "var(--color-border)"
			}),
			chaotic ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M50 70 C 40 40, 90 30, 100 60 S 40 110, 70 100",
					fill: "none",
					stroke: "var(--color-pulse)",
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M110 50 C 140 40, 150 90, 120 100 S 90 70, 130 60",
					fill: "none",
					stroke: "var(--color-cyan)",
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "72",
					cy: "62",
					r: "4",
					fill: "var(--color-pulse)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "124",
					cy: "78",
					r: "4",
					fill: "var(--color-cyan)"
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "90",
					cy: "70",
					r: "22",
					fill: "none",
					stroke: "var(--color-cyan)",
					strokeWidth: "3",
					strokeDasharray: "20 80",
					className: "beat-heart"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "90",
					cy: "70",
					r: "38",
					fill: "none",
					stroke: "var(--color-cyan)",
					strokeWidth: "1.4",
					opacity: "0.5",
					strokeDasharray: "16 90"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "90",
					cy: "38",
					r: "5",
					fill: "var(--color-pulse)"
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "20",
				y: "132",
				fill: "var(--color-muted)",
				fontSize: "7.5",
				fontFamily: "IBM Plex Mono, monospace",
				children: chaotic ? "reentry / роторы" : "λ = CV × ERP"
			})
		]
	});
}
function CalciumChain() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-full flex-col justify-center gap-3",
		children: [
			"ПД",
			"Ca²⁺ L",
			"CICR",
			"тропонин",
			"сила"
		].map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-10 min-w-10 items-center justify-center rounded-md border border-cyan/40 bg-cyan/10 font-mono text-sm text-cyan",
					style: { animationDelay: `${i * 90}ms` },
					children: i + 1
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px flex-1 bg-cyan/30" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "holo-panel px-3 py-2 text-sm font-medium",
					children: step
				})
			]
		}, step))
	});
}
function FormulaCard({ expr, caption }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "holo-panel px-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "formula text-lg sm:text-xl",
			children: expr
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-xs text-muted",
			children: caption
		})]
	});
}
function StatChip({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "holo-panel flex flex-col gap-1 px-3 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "holo-kicker",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-lg font-semibold text-fg tabular-nums",
			children: value
		})]
	});
}
function Bullet({ title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "holo-panel px-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-base font-semibold text-fg sm:text-lg",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm leading-relaxed text-muted",
			children: body
		})]
	});
}
function Split({ image, alt, children, reverse = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid h-full min-h-0 grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: reverse ? "lg:order-2" : "",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoloImage, {
				src: image,
				alt,
				className: "h-44 sm:h-56 lg:h-full"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex min-h-0 flex-col justify-center",
			children
		})]
	});
}
function SlideView({ index }) {
	const meta = SLIDES[index];
	switch (meta.id) {
		case "title": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex h-full min-h-0 flex-col justify-end overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoloImage, {
					src: meta.image,
					alt: "Голографическое сердце",
					className: "absolute inset-0 h-full"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/20" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "enter-stagger relative z-10 max-w-3xl px-1 pb-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "holo-kicker",
							children: "Механика · электричество · живая ткань"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "holo-title mt-3 font-display text-4xl font-extrabold leading-[0.95] sm:text-6xl lg:text-7xl",
							children: "Физика сердечного ритма"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg",
							children: "Как законы Ньютона, Бернулли, Ома и электромагнитного поля складываются в один удар сердца."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatChip, {
									label: "Слайдов",
									value: "15"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatChip, {
									label: "Контуров",
									value: "2"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatChip, {
									label: "Покой клетки",
									value: "−90 мВ"
								})
							]
						})
					]
				})
			]
		});
		case "two-worlds": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Split, {
			image: meta.image,
			alt: "Сердце как электромагнитный насос",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "enter-stagger space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "holo-kicker",
						children: meta.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "holo-title text-3xl font-bold sm:text-5xl",
						children: meta.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted",
						children: "Сердце — не метафора насоса. Это гидродинамическая машина, которой управляет электрическая цепь из живых клеток."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bullet, {
								title: "Механика",
								body: "Давление, объём, поток, эластичность стенок, клапаны как обратные заслонки."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bullet, {
								title: "Электричество",
								body: "Ионные градиенты, ёмкость мембраны, ток через каналы, проводимость щелевых контактов."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bullet, {
								title: "Переводчик",
								body: "Кальций сопрягает искру потенциала с силой поперечных мостиков."
							})
						]
					})
				]
			})
		});
		case "pump": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid h-full min-h-0 grid-cols-1 gap-4 lg:grid-cols-[1.1fr_0.9fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "enter-stagger flex flex-col justify-center gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "holo-kicker",
						children: meta.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "holo-title text-3xl font-bold sm:text-5xl",
						children: meta.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted",
						children: "Два насоса последовательно: правый гонит кровь в малый круг, левый — в большой. Клапаны не дают потоку развернуться."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatChip, {
								label: "ПЖ → лёгкие",
								value: "~25 мм рт.ст."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatChip, {
								label: "ЛЖ → аорта",
								value: "~120 мм рт.ст."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatChip, {
								label: "Ударный объём",
								value: "70 мл"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatChip, {
								label: "Клапанов",
								value: "4"
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "holo-panel p-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChamberPump, {})
			})]
		});
		case "poiseuille": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid h-full min-h-0 grid-cols-1 gap-4 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "enter-stagger flex flex-col justify-center gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "holo-kicker",
						children: meta.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "holo-title text-3xl font-bold sm:text-5xl",
						children: meta.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormulaCard, {
						expr: "Q = π r⁴ ΔP / 8 η L",
						caption: "Ламинарный поток вязкой жидкости в трубе"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bullet, {
							title: "Радиус в четвёртой степени",
							body: "Сужение артериолы вдвое повышает сопротивление в 16 раз. Сосуды — главный реостат давления."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bullet, {
							title: "Закон Ома для крови",
							body: "Q = ΔP / R. Сердце задаёт ΔP, периферия — R."
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "holo-panel p-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PoiseuilleTubes, {})
			})]
		});
		case "bernoulli": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Split, {
			image: meta.image,
			alt: "Поток крови в аорте",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "enter-stagger space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "holo-kicker",
						children: meta.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "holo-title text-3xl font-bold sm:text-4xl",
						children: meta.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormulaCard, {
						expr: "P + ½ρv² + ρgh = const",
						caption: "Вдоль линии тока энергия сохраняется"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bullet, {
							title: "Стеноз",
							body: "Узкий клапан → растёт скорость → падает статическое давление. Струя становится турбулентной."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bullet, {
							title: "Число Рейнольдса",
							body: "Re = ρvd / η. Когда Re высок, ламинар срывается в вихри — так рождается сердечный шум."
						})]
					})
				]
			})
		});
		case "starling": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid h-full min-h-0 grid-cols-1 gap-4 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "enter-stagger flex flex-col justify-center gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "holo-kicker",
						children: meta.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "holo-title text-3xl font-bold sm:text-5xl",
						children: meta.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted",
						children: "Чем больше приток и растяжение саркомера в диастоле, тем сильнее следующий удар. Автоматический баланс правого и левого насосов."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bullet, {
							title: "Не как скелет",
							body: "В кардиомиоците главный механизм — рост чувствительности тропонина к Ca²⁺ при растяжении."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bullet, {
							title: "Предел",
							body: "Перерастяжение при сердечной недостаточности сдвигает кривую вниз: объём есть, силы нет."
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "holo-panel p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarlingCurve, {})
			})]
		});
		case "ions": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Split, {
			image: meta.image,
			alt: "Кардиомиоцит под голографическим микроскопом",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "enter-stagger space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "holo-kicker",
						children: meta.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "holo-title text-3xl font-bold sm:text-5xl",
						children: meta.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted",
						children: "Покой ≈ −90 мВ. Мембрана — конденсатор. Градиенты Na⁺, K⁺, Ca²⁺ — химические батареи, которые качает АТФаза."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-3 gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatChip, {
								label: "K⁺ внутри",
								value: "140 мМ"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatChip, {
								label: "Na⁺ снаружи",
								value: "145 мМ"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatChip, {
								label: "Vm покоя",
								value: "−90 мВ"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormulaCard, {
						expr: "Eₖ = (RT / F) ln([K]ₒ / [K]ᵢ)",
						caption: "Уравнение Нернста для калиевого равновесия"
					})
				]
			})
		});
		case "ap": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid h-full min-h-0 grid-cols-1 gap-4 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "enter-stagger flex flex-col justify-center gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "holo-kicker",
						children: meta.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "holo-title text-3xl font-bold sm:text-5xl",
						children: meta.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted",
						children: "В отличие от нейрона, желудочковый потенциал держит плато. Это даёт мышце время сократиться, пока клетка ещё «занята»."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bullet, {
								title: "Фаза 0",
								body: "Лавина Na⁺ — миллисекунды деполяризации."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bullet, {
								title: "Фаза 2",
								body: "Входящий Ca²⁺ уравновешивает выход K⁺. Плато 200–400 мс."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bullet, {
								title: "Фаза 3",
								body: "K⁺ возвращает покоя. Пока идёт реполяризация, новая искра не стартует."
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "holo-panel p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionPotential, {})
			})]
		});
		case "conduction": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid h-full min-h-0 grid-cols-1 gap-4 lg:grid-cols-[1fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "enter-stagger flex flex-col justify-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "holo-kicker",
						children: meta.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "holo-title text-3xl font-bold sm:text-4xl",
						children: meta.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoloImage, {
						src: meta.image,
						alt: "Проводящие пути сердца",
						className: "h-36 sm:h-44"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bullet, {
							title: "СА-узел",
							body: "Пейсмейкер: 60–100 мин⁻¹. Ток If (HCN) не даёт потенциалу замереть."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bullet, {
							title: "АВ-задержка",
							body: "~100–120 мс. Предсердия успевают долить желудочки."
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "holo-panel p-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConductionMap, {})
			})]
		});
		case "ecg": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid h-full min-h-0 grid-cols-1 gap-4 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "enter-stagger flex flex-col justify-center gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "holo-kicker",
						children: meta.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "holo-title text-3xl font-bold sm:text-5xl",
						children: meta.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted",
						children: "Сердце — движущийся электрический диполь. Отведения — проекции вектора P⃗ на линии тела. ЭКГ ничего не «рисует» внутри — она ловит поле снаружи."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-3 gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatChip, {
								label: "P",
								value: "предсердия"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatChip, {
								label: "QRS",
								value: "желудочки"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatChip, {
								label: "T",
								value: "реполяризация"
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-0 flex-col gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoloImage, {
					src: meta.image,
					alt: "Голографическая ЭКГ в лаборатории",
					className: "h-40 lg:h-48"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "holo-panel min-h-0 flex-1 p-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DipoleField, {})
				})]
			})]
		});
		case "ohm": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid h-full min-h-0 grid-cols-1 gap-4 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "enter-stagger flex flex-col justify-center gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "holo-kicker",
						children: meta.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "holo-title text-3xl font-bold sm:text-5xl",
						children: meta.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted",
						children: "Клетка — кабель. Ток течёт по щелевым контактам (коннексины) как по резисторам. Если сток слишком велик, источник не может зажечь соседа — блок проведения."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormulaCard, {
						expr: "I = V / R     τ = Rₘ Cₘ",
						caption: "Кабельная теория: постоянная длины λ = √(rₘ / rᵢ)"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "holo-panel p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MembraneRc, {})
			})]
		});
		case "waves": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid h-full min-h-0 grid-cols-1 gap-4 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "enter-stagger flex flex-col justify-center gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "holo-kicker",
						children: meta.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "holo-title text-3xl font-bold sm:text-4xl",
						children: meta.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormulaCard, {
						expr: "λ = CV × ERP",
						caption: "Длина волны = скорость проведения × эффективный рефрактерный период"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bullet, {
							title: "Защита от столбняка",
							body: "Пока клетка рефрактерна, новая волна не может наехать на старую. Сердце не тетанизируется."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bullet, {
							title: "Цена ошибки",
							body: "Короткий ERP или медленный CV укорачивают λ. Тогда волна укладывается в круг и крутится — reentry."
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "holo-panel p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WaveReentry, {})
			})]
		});
		case "ecc": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid h-full min-h-0 grid-cols-1 gap-4 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "enter-stagger flex flex-col justify-center gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "holo-kicker",
						children: meta.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "holo-title text-3xl font-bold sm:text-5xl",
						children: meta.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted",
						children: "Потенциал сам по себе ничего не сжимает. Кальций — переводчик из вольт в ньютоны: L-каналы, CICR из саркоплазматического ретикулума, тропонин C, поперечные мостики."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormulaCard, {
						expr: "Ca²⁺ → TnC → актин–миозин",
						caption: "Расслабление: SERCA2a закачивает Ca²⁺ обратно, NCX выносит наружу"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "holo-panel p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalciumChain, {})
			})]
		});
		case "break": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Split, {
			image: meta.image,
			alt: "Хаотический электрический шторм на сердце",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "enter-stagger space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "holo-kicker",
						children: meta.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "holo-title text-3xl font-bold sm:text-4xl",
						children: meta.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bullet, {
								title: "Фибрилляция",
								body: "Множество волн и роторов вместо одного фронта. Насос теряет синхронию — кровоток падает к нулю."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bullet, {
								title: "WPW и круги",
								body: "Лишний путь — лишний контур. Волна возвращается, когда ткань уже готова."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bullet, {
								title: "Дефибрилляция",
								body: "Короткое поле сразу деполяризует массу клеток и стирает роторы. Сброс осциллятора."
							})
						]
					})
				]
			})
		});
		case "finale": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex h-full min-h-0 flex-col justify-end overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoloImage, {
					src: meta.image,
					alt: "Голографическое сердце",
					className: "absolute inset-0 h-full"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/75 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "enter-stagger relative z-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "holo-kicker",
							children: meta.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "holo-title mt-2 text-3xl font-bold sm:text-5xl",
							children: meta.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-xl text-muted",
							children: "Те же уравнения, что описывают трубы, конденсаторы и поля, собираются в ритм. Сердце — не исключение из физики. Это её самая красивая сборка."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-end justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeatingHeart, { className: "h-28 w-28 sm:h-36 sm:w-36" })
					})]
				})
			]
		});
		default: return null;
	}
}
function Hud({ index, bpm, autoplay, overview, fullscreen, onPrev, onNext, onJump, onBpm, onToggleAutoplay, onToggleOverview, onToggleFullscreen }) {
	const total = SLIDES.length;
	const progress = (index + 1) / total * 100;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute inset-x-0 bottom-0 z-20 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-8 sm:px-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-auto mx-auto flex max-w-6xl flex-col gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden h-10 items-end sm:flex",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveEcg, { bpm })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "holo-panel flex flex-col gap-2 px-3 py-2 sm:flex-row sm:items-center sm:gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
									label: "Назад",
									onClick: onPrev,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
									label: autoplay ? "Пауза" : "Автопоказ",
									onClick: onToggleAutoplay,
									children: autoplay ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
									label: "Вперёд",
									onClick: onNext,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-1 flex items-center justify-between gap-3 font-mono text-[11px] tracking-widest text-cyan uppercase",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate",
									children: SLIDES[index].kicker
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "tabular-nums text-muted",
									children: [
										String(index + 1).padStart(2, "0"),
										" / ",
										String(total).padStart(2, "0")
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-1 overflow-hidden rounded-full bg-cyan/15",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "glow-bar h-full rounded-full bg-cyan transition-[width] duration-300 ease-out",
									style: { width: `${progress}%` }
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-36 items-center justify-center gap-1 text-xs text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "flex size-11 items-center justify-center rounded-md font-display text-lg text-fg transition-colors duration-150 hover:bg-cyan/10 hover:text-cyan active:scale-[0.96]",
									"aria-label": "Медленнее",
									onClick: () => onBpm(Math.max(48, bpm - 6)),
									children: "−"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex min-w-16 flex-col items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-sm tabular-nums text-cyan",
										children: bpm
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[10px] tracking-widest uppercase",
										children: "уд/мин"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "flex size-11 items-center justify-center rounded-md font-display text-lg text-fg transition-colors duration-150 hover:bg-cyan/10 hover:text-cyan active:scale-[0.96]",
									"aria-label": "Быстрее",
									onClick: () => onBpm(Math.min(160, bpm + 6)),
									children: "+"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
								label: "Все слайды",
								onClick: onToggleOverview,
								pressed: overview,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
								label: fullscreen ? "Окно" : "Полный экран",
								onClick: onToggleFullscreen,
								children: fullscreen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minimize2, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, { className: "size-4" })
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden gap-1 overflow-x-auto pb-1 md:flex",
					children: SLIDES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => onJump(i),
						className: cn("h-1.5 min-w-6 flex-1 rounded-full transition-colors duration-200", i === index ? "bg-cyan" : "bg-cyan/20 hover:bg-cyan/50"),
						"aria-label": `Слайд ${i + 1}: ${s.title}`
					}, s.id))
				})
			]
		})
	});
}
function IconBtn({ children, onClick, label, pressed }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		"aria-label": label,
		"aria-pressed": pressed,
		className: cn("flex size-11 items-center justify-center rounded-md text-fg transition-[transform,background-color,color] duration-150 ease-out", "hover:bg-cyan/10 hover:text-cyan active:scale-[0.96]", pressed && "bg-cyan/15 text-cyan"),
		children
	});
}
var TOTAL = SLIDES.length;
function Deck() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [overview, setOverview] = (0, import_react.useState)(false);
	const [autoplay, setAutoplay] = (0, import_react.useState)(false);
	const [bpm, setBpm] = (0, import_react.useState)(72);
	const [fullscreen, setFullscreen] = (0, import_react.useState)(false);
	const touchX = (0, import_react.useRef)(null);
	const rootRef = (0, import_react.useRef)(null);
	const go = (0, import_react.useCallback)((next) => {
		setIndex((next % TOTAL + TOTAL) % TOTAL);
		setOverview(false);
	}, []);
	const prev = (0, import_react.useCallback)(() => go(index - 1), [go, index]);
	const next = (0, import_react.useCallback)(() => go(index + 1), [go, index]);
	(0, import_react.useEffect)(() => {
		const hash = Number(window.location.hash.replace("#", ""));
		if (hash >= 1 && hash <= TOTAL) setIndex(hash - 1);
	}, []);
	(0, import_react.useEffect)(() => {
		const id = `#${index + 1}`;
		if (window.location.hash !== id) history.replaceState(null, "", id);
	}, [index]);
	(0, import_react.useEffect)(() => {
		document.documentElement.style.setProperty("--beat", `${Math.round(6e4 / bpm)}ms`);
	}, [bpm]);
	(0, import_react.useEffect)(() => {
		if (!autoplay || overview) return;
		const ms = Math.max(5e3, 60 / bpm * 8e3);
		const t = window.setTimeout(() => go(index + 1), ms);
		return () => window.clearTimeout(t);
	}, [
		autoplay,
		bpm,
		go,
		index,
		overview
	]);
	(0, import_react.useEffect)(() => {
		function onKey(e) {
			const tag = e.target?.tagName;
			if (tag === "INPUT" || tag === "TEXTAREA") return;
			if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
				e.preventDefault();
				next();
			} else if (e.key === "ArrowLeft" || e.key === "Backspace" || e.key === "PageUp") {
				e.preventDefault();
				prev();
			} else if (e.key === "Home") go(0);
			else if (e.key === "End") go(TOTAL - 1);
			else if (e.key === "Escape") setOverview((v) => !v);
			else if (e.key === "p" || e.key === "P") setAutoplay((v) => !v);
			else if (e.key === "f" || e.key === "F") toggleFullscreen();
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		go,
		next,
		prev
	]);
	function toggleFullscreen() {
		const el = rootRef.current;
		if (!el) return;
		if (!document.fullscreenElement) {
			el.requestFullscreen?.();
			setFullscreen(true);
		} else {
			document.exitFullscreen?.();
			setFullscreen(false);
		}
	}
	(0, import_react.useEffect)(() => {
		function onFs() {
			setFullscreen(Boolean(document.fullscreenElement));
		}
		document.addEventListener("fullscreenchange", onFs);
		return () => document.removeEventListener("fullscreenchange", onFs);
	}, []);
	function onTouchStart(e) {
		touchX.current = e.changedTouches[0]?.clientX ?? null;
	}
	function onTouchEnd(e) {
		const start = touchX.current;
		touchX.current = null;
		const x = e.changedTouches[0]?.clientX;
		if (start == null || x == null) return;
		const dx = x - start;
		if (dx < -48) next();
		if (dx > 48) prev();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: rootRef,
		className: "relative h-dvh w-full overflow-hidden bg-bg text-fg",
		style: { ["--beat"]: `${Math.round(6e4 / bpm)}ms` },
		onTouchStart,
		onTouchEnd,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 grid-bg opacity-70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan/10 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-16 bottom-24 h-80 w-80 rounded-full bg-pulse/10 blur-3xl" }),
			overview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overview, {
				index,
				onJump: go
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "relative mx-auto flex h-full max-w-6xl flex-col px-4 pb-32 pt-[max(1rem,env(safe-area-inset-top))] sm:px-6 sm:pb-36",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "mb-3 flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm font-semibold tracking-wide text-cyan",
						children: "Кардиофизика"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hidden font-mono text-[11px] tracking-widest text-subtle uppercase sm:block",
						children: "← → пробел · Esc сетка · P авто"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "min-h-0 flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideView, { index })
				}, SLIDES[index].id)]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hud, {
				index,
				bpm,
				autoplay,
				overview,
				fullscreen,
				onPrev: prev,
				onNext: next,
				onJump: go,
				onBpm: setBpm,
				onToggleAutoplay: () => setAutoplay((v) => !v),
				onToggleOverview: () => setOverview((v) => !v),
				onToggleFullscreen: toggleFullscreen
			})
		]
	});
}
function Overview({ index, onJump }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto h-full max-w-6xl overflow-y-auto px-4 pb-40 pt-6 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "holo-kicker mb-4",
			children: "Все слайды"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5",
			children: SLIDES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onJump(i),
				className: cn("holo-frame relative aspect-video overflow-hidden text-left transition-transform duration-150 ease-out active:scale-[0.96]", i === index && "ring-2 ring-cyan"),
				children: [s.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: s.image,
					alt: "",
					className: "h-full w-full object-cover"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full bg-elevated" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "absolute inset-x-0 bottom-0 bg-bg/80 px-2 py-1.5 font-mono text-[10px] tracking-wide text-cyan",
					children: [
						String(i + 1).padStart(2, "0"),
						" ",
						s.title
					]
				})]
			}, s.id))
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Deck, {});
}
//#endregion
export { Home as component };
