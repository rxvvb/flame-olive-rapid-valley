import type { ReactNode } from "react";
import { SLIDES } from "@/data/slides";
import {
  ActionPotential,
  BeatingHeart,
  CalciumChain,
  ChamberPump,
  ConductionMap,
  DipoleField,
  FormulaCard,
  HoloImage,
  MembraneRc,
  PoiseuilleTubes,
  StatChip,
  StarlingCurve,
  WaveReentry,
} from "@/components/viz/visuals";

function Bullet({ title, body }: { title: string; body: string }) {
  return (
    <li className="holo-panel px-4 py-3">
      <p className="font-display text-base font-semibold text-fg sm:text-lg">{title}</p>
      <p className="mt-1 text-sm leading-relaxed text-muted">{body}</p>
    </li>
  );
}

function Split({
  image,
  alt,
  children,
  reverse = false,
}: {
  image: string;
  alt: string;
  children: ReactNode;
  reverse?: boolean;
}) {
  return (
    <div className="grid h-full min-h-0 grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
      <div className={reverse ? "lg:order-2" : ""}>
        <HoloImage src={image} alt={alt} className="h-44 sm:h-56 lg:h-full" />
      </div>
      <div className="flex min-h-0 flex-col justify-center">{children}</div>
    </div>
  );
}

export function SlideView({ index }: { index: number }) {
  const meta = SLIDES[index];

  switch (meta.id) {
    case "title":
      return (
        <div className="relative flex h-full min-h-0 flex-col justify-end overflow-hidden">
          <HoloImage src={meta.image!} alt="Голографическое сердце" className="absolute inset-0 h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/20" />
          <div className="enter-stagger relative z-10 max-w-3xl px-1 pb-2">
            <p className="holo-kicker">Механика · электричество · живая ткань</p>
            <h1 className="holo-title mt-3 font-display text-4xl font-extrabold leading-[0.95] sm:text-6xl lg:text-7xl">
              Физика сердечного ритма
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Как законы Ньютона, Бернулли, Ома и электромагнитного поля складываются в один удар сердца.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <StatChip label="Слайдов" value="15" />
              <StatChip label="Контуров" value="2" />
              <StatChip label="Покой клетки" value="−90 мВ" />
            </div>
          </div>
        </div>
      );

    case "two-worlds":
      return (
        <Split image={meta.image!} alt="Сердце как электромагнитный насос">
          <div className="enter-stagger space-y-4">
            <p className="holo-kicker">{meta.kicker}</p>
            <h2 className="holo-title text-3xl font-bold sm:text-5xl">{meta.title}</h2>
            <p className="text-muted">
              Сердце — не метафора насоса. Это гидродинамическая машина, которой управляет электрическая цепь из живых клеток.
            </p>
            <ul className="space-y-2">
              <Bullet title="Механика" body="Давление, объём, поток, эластичность стенок, клапаны как обратные заслонки." />
              <Bullet title="Электричество" body="Ионные градиенты, ёмкость мембраны, ток через каналы, проводимость щелевых контактов." />
              <Bullet title="Переводчик" body="Кальций сопрягает искру потенциала с силой поперечных мостиков." />
            </ul>
          </div>
        </Split>
      );

    case "pump":
      return (
        <div className="grid h-full min-h-0 grid-cols-1 gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="enter-stagger flex flex-col justify-center gap-4">
            <p className="holo-kicker">{meta.kicker}</p>
            <h2 className="holo-title text-3xl font-bold sm:text-5xl">{meta.title}</h2>
            <p className="text-muted">
              Два насоса последовательно: правый гонит кровь в малый круг, левый — в большой. Клапаны не дают потоку развернуться.
            </p>
            <div className="grid grid-cols-2 gap-2">
              <StatChip label="ПЖ → лёгкие" value="~25 мм рт.ст." />
              <StatChip label="ЛЖ → аорта" value="~120 мм рт.ст." />
              <StatChip label="Ударный объём" value="70 мл" />
              <StatChip label="Клапанов" value="4" />
            </div>
          </div>
          <div className="holo-panel p-3">
            <ChamberPump />
          </div>
        </div>
      );

    case "poiseuille":
      return (
        <div className="grid h-full min-h-0 grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="enter-stagger flex flex-col justify-center gap-4">
            <p className="holo-kicker">{meta.kicker}</p>
            <h2 className="holo-title text-3xl font-bold sm:text-5xl">{meta.title}</h2>
            <FormulaCard expr="Q = π r⁴ ΔP / 8 η L" caption="Ламинарный поток вязкой жидкости в трубе" />
            <ul className="space-y-2">
              <Bullet title="Радиус в четвёртой степени" body="Сужение артериолы вдвое повышает сопротивление в 16 раз. Сосуды — главный реостат давления." />
              <Bullet title="Закон Ома для крови" body="Q = ΔP / R. Сердце задаёт ΔP, периферия — R." />
            </ul>
          </div>
          <div className="holo-panel p-5">
            <PoiseuilleTubes />
          </div>
        </div>
      );

    case "bernoulli":
      return (
        <Split image={meta.image!} alt="Поток крови в аорте">
          <div className="enter-stagger space-y-4">
            <p className="holo-kicker">{meta.kicker}</p>
            <h2 className="holo-title text-3xl font-bold sm:text-4xl">{meta.title}</h2>
            <FormulaCard expr="P + ½ρv² + ρgh = const" caption="Вдоль линии тока энергия сохраняется" />
            <ul className="space-y-2">
              <Bullet title="Стеноз" body="Узкий клапан → растёт скорость → падает статическое давление. Струя становится турбулентной." />
              <Bullet title="Число Рейнольдса" body="Re = ρvd / η. Когда Re высок, ламинар срывается в вихри — так рождается сердечный шум." />
            </ul>
          </div>
        </Split>
      );

    case "starling":
      return (
        <div className="grid h-full min-h-0 grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="enter-stagger flex flex-col justify-center gap-4">
            <p className="holo-kicker">{meta.kicker}</p>
            <h2 className="holo-title text-3xl font-bold sm:text-5xl">{meta.title}</h2>
            <p className="text-muted">
              Чем больше приток и растяжение саркомера в диастоле, тем сильнее следующий удар. Автоматический баланс правого и левого насосов.
            </p>
            <ul className="space-y-2">
              <Bullet title="Не как скелет" body="В кардиомиоците главный механизм — рост чувствительности тропонина к Ca²⁺ при растяжении." />
              <Bullet title="Предел" body="Перерастяжение при сердечной недостаточности сдвигает кривую вниз: объём есть, силы нет." />
            </ul>
          </div>
          <div className="holo-panel p-4">
            <StarlingCurve />
          </div>
        </div>
      );

    case "ions":
      return (
        <Split image={meta.image!} alt="Кардиомиоцит под голографическим микроскопом">
          <div className="enter-stagger space-y-4">
            <p className="holo-kicker">{meta.kicker}</p>
            <h2 className="holo-title text-3xl font-bold sm:text-5xl">{meta.title}</h2>
            <p className="text-muted">
              Покой ≈ −90 мВ. Мембрана — конденсатор. Градиенты Na⁺, K⁺, Ca²⁺ — химические батареи, которые качает АТФаза.
            </p>
            <div className="grid grid-cols-3 gap-2">
              <StatChip label="K⁺ внутри" value="140 мМ" />
              <StatChip label="Na⁺ снаружи" value="145 мМ" />
              <StatChip label="Vm покоя" value="−90 мВ" />
            </div>
            <FormulaCard expr="Eₖ = (RT / F) ln([K]ₒ / [K]ᵢ)" caption="Уравнение Нернста для калиевого равновесия" />
          </div>
        </Split>
      );

    case "ap":
      return (
        <div className="grid h-full min-h-0 grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="enter-stagger flex flex-col justify-center gap-4">
            <p className="holo-kicker">{meta.kicker}</p>
            <h2 className="holo-title text-3xl font-bold sm:text-5xl">{meta.title}</h2>
            <p className="text-muted">
              В отличие от нейрона, желудочковый потенциал держит плато. Это даёт мышце время сократиться, пока клетка ещё «занята».
            </p>
            <ul className="space-y-2">
              <Bullet title="Фаза 0" body="Лавина Na⁺ — миллисекунды деполяризации." />
              <Bullet title="Фаза 2" body="Входящий Ca²⁺ уравновешивает выход K⁺. Плато 200–400 мс." />
              <Bullet title="Фаза 3" body="K⁺ возвращает покоя. Пока идёт реполяризация, новая искра не стартует." />
            </ul>
          </div>
          <div className="holo-panel p-4">
            <ActionPotential />
          </div>
        </div>
      );

    case "conduction":
      return (
        <div className="grid h-full min-h-0 grid-cols-1 gap-4 lg:grid-cols-[1fr_1fr]">
          <div className="enter-stagger flex flex-col justify-center gap-3">
            <p className="holo-kicker">{meta.kicker}</p>
            <h2 className="holo-title text-3xl font-bold sm:text-4xl">{meta.title}</h2>
            <HoloImage src={meta.image!} alt="Проводящие пути сердца" className="h-36 sm:h-44" />
            <ul className="space-y-2">
              <Bullet title="СА-узел" body="Пейсмейкер: 60–100 мин⁻¹. Ток If (HCN) не даёт потенциалу замереть." />
              <Bullet title="АВ-задержка" body="~100–120 мс. Предсердия успевают долить желудочки." />
            </ul>
          </div>
          <div className="holo-panel p-3">
            <ConductionMap />
          </div>
        </div>
      );

    case "ecg":
      return (
        <div className="grid h-full min-h-0 grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="enter-stagger flex flex-col justify-center gap-4">
            <p className="holo-kicker">{meta.kicker}</p>
            <h2 className="holo-title text-3xl font-bold sm:text-5xl">{meta.title}</h2>
            <p className="text-muted">
              Сердце — движущийся электрический диполь. Отведения — проекции вектора P⃗ на линии тела. ЭКГ ничего не «рисует» внутри — она ловит поле снаружи.
            </p>
            <div className="grid grid-cols-3 gap-2">
              <StatChip label="P" value="предсердия" />
              <StatChip label="QRS" value="желудочки" />
              <StatChip label="T" value="реполяризация" />
            </div>
          </div>
          <div className="flex min-h-0 flex-col gap-3">
            <HoloImage src={meta.image!} alt="Голографическая ЭКГ в лаборатории" className="h-40 lg:h-48" />
            <div className="holo-panel min-h-0 flex-1 p-3">
              <DipoleField />
            </div>
          </div>
        </div>
      );

    case "ohm":
      return (
        <div className="grid h-full min-h-0 grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="enter-stagger flex flex-col justify-center gap-4">
            <p className="holo-kicker">{meta.kicker}</p>
            <h2 className="holo-title text-3xl font-bold sm:text-5xl">{meta.title}</h2>
            <p className="text-muted">
              Клетка — кабель. Ток течёт по щелевым контактам (коннексины) как по резисторам. Если сток слишком велик, источник не может зажечь соседа — блок проведения.
            </p>
            <FormulaCard expr="I = V / R     τ = Rₘ Cₘ" caption="Кабельная теория: постоянная длины λ = √(rₘ / rᵢ)" />
          </div>
          <div className="holo-panel p-4">
            <MembraneRc />
          </div>
        </div>
      );

    case "waves":
      return (
        <div className="grid h-full min-h-0 grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="enter-stagger flex flex-col justify-center gap-4">
            <p className="holo-kicker">{meta.kicker}</p>
            <h2 className="holo-title text-3xl font-bold sm:text-4xl">{meta.title}</h2>
            <FormulaCard expr="λ = CV × ERP" caption="Длина волны = скорость проведения × эффективный рефрактерный период" />
            <ul className="space-y-2">
              <Bullet title="Защита от столбняка" body="Пока клетка рефрактерна, новая волна не может наехать на старую. Сердце не тетанизируется." />
              <Bullet title="Цена ошибки" body="Короткий ERP или медленный CV укорачивают λ. Тогда волна укладывается в круг и крутится — reentry." />
            </ul>
          </div>
          <div className="holo-panel p-4">
            <WaveReentry />
          </div>
        </div>
      );

    case "ecc":
      return (
        <div className="grid h-full min-h-0 grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="enter-stagger flex flex-col justify-center gap-4">
            <p className="holo-kicker">{meta.kicker}</p>
            <h2 className="holo-title text-3xl font-bold sm:text-5xl">{meta.title}</h2>
            <p className="text-muted">
              Потенциал сам по себе ничего не сжимает. Кальций — переводчик из вольт в ньютоны: L-каналы, CICR из саркоплазматического ретикулума, тропонин C, поперечные мостики.
            </p>
            <FormulaCard expr="Ca²⁺ → TnC → актин–миозин" caption="Расслабление: SERCA2a закачивает Ca²⁺ обратно, NCX выносит наружу" />
          </div>
          <div className="holo-panel p-4">
            <CalciumChain />
          </div>
        </div>
      );

    case "break":
      return (
        <Split image={meta.image!} alt="Хаотический электрический шторм на сердце">
          <div className="enter-stagger space-y-3">
            <p className="holo-kicker">{meta.kicker}</p>
            <h2 className="holo-title text-3xl font-bold sm:text-4xl">{meta.title}</h2>
            <ul className="space-y-2">
              <Bullet title="Фибрилляция" body="Множество волн и роторов вместо одного фронта. Насос теряет синхронию — кровоток падает к нулю." />
              <Bullet title="WPW и круги" body="Лишний путь — лишний контур. Волна возвращается, когда ткань уже готова." />
              <Bullet title="Дефибрилляция" body="Короткое поле сразу деполяризует массу клеток и стирает роторы. Сброс осциллятора." />
            </ul>
          </div>
        </Split>
      );

    case "finale":
      return (
        <div className="relative flex h-full min-h-0 flex-col justify-end overflow-hidden">
          <HoloImage src={meta.image!} alt="Голографическое сердце" className="absolute inset-0 h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/75 to-transparent" />
          <div className="enter-stagger relative z-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="holo-kicker">{meta.kicker}</p>
              <h2 className="holo-title mt-2 text-3xl font-bold sm:text-5xl">{meta.title}</h2>
              <p className="mt-3 max-w-xl text-muted">
                Те же уравнения, что описывают трубы, конденсаторы и поля, собираются в ритм. Сердце — не исключение из физики. Это её самая красивая сборка.
              </p>
            </div>
            <div className="flex items-end justify-center">
              <BeatingHeart className="h-28 w-28 sm:h-36 sm:w-36" />
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}
