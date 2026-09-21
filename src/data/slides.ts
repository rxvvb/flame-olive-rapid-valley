export type SlideMeta = {
  id: string;
  kicker: string;
  title: string;
  image?: string;
};

export const SLIDES: SlideMeta[] = [
  {
    id: "title",
    kicker: "Лекция · 15 слайдов",
    title: "Физика сердечного ритма",
    image: "/slides/01-hero.jpg",
  },
  {
    id: "two-worlds",
    kicker: "01 · Система",
    title: "Сердце — машина двух миров",
    image: "/slides/10-unified.jpg",
  },
  {
    id: "pump",
    kicker: "02 · Механика",
    title: "Насос с обратными клапанами",
    image: "/slides/02-chambers.jpg",
  },
  {
    id: "poiseuille",
    kicker: "03 · Гемодинамика",
    title: "Закон Пуазёйля и r⁴",
    image: "/slides/06-vessels.jpg",
  },
  {
    id: "bernoulli",
    kicker: "04 · Поток",
    title: "Бернулли, стеноз, шум",
    image: "/slides/03-blood.jpg",
  },
  {
    id: "starling",
    kicker: "05 · Мышца",
    title: "Закон Франка–Старлинга",
    image: "/slides/07-fibers.jpg",
  },
  {
    id: "ions",
    kicker: "06 · Электричество",
    title: "Мембрана как батарея",
    image: "/slides/05-cell.jpg",
  },
  {
    id: "ap",
    kicker: "07 · Сигнал",
    title: "Потенциал действия",
    image: "/slides/05-cell.jpg",
  },
  {
    id: "conduction",
    kicker: "08 · Сеть",
    title: "Проводящая система",
    image: "/slides/04-conduction.jpg",
  },
  {
    id: "ecg",
    kicker: "09 · Поле",
    title: "ЭКГ как проекция диполя",
    image: "/slides/09-ecg.jpg",
  },
  {
    id: "ohm",
    kicker: "10 · Цепи",
    title: "Закон Ома в сердце",
    image: "/slides/10-unified.jpg",
  },
  {
    id: "waves",
    kicker: "11 · Волны",
    title: "Рефрактерность и длина волны",
    image: "/slides/04-conduction.jpg",
  },
  {
    id: "ecc",
    kicker: "12 · Связь",
    title: "От вольта к ньютону",
    image: "/slides/07-fibers.jpg",
  },
  {
    id: "break",
    kicker: "13 · Сбой",
    title: "Когда физика ломается",
    image: "/slides/08-storm.jpg",
  },
  {
    id: "finale",
    kicker: "14 · Синтез",
    title: "Живой электромагнитный насос",
    image: "/slides/01-hero.jpg",
  },
];
