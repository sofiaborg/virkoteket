export interface ICategories {
  id: string;
  name: string;
}

export interface IPost {
  id: number;
  title: string;
  image: string;
  description: string;
  type: number;
  difficulty: number;
  yarn: number;
  hook: number;
  space: number;
  category: ICategories;
}

export const categoryList = [
  "dam",
  "herr",
  "barn",
  "baby",
  "djur",
  "hem",
  "högtider",
];

//filter and options
interface IOption {
  title: string;
}

interface IFilter {
  title: string;
  options: IOption[];
}

export const filtersList: IFilter[] = [
  {
    title: "Svårighetsgrad",
    options: [
      { title: "Nybörjare" },
      { title: "Mellan" },
      { title: "Erfaren" },
    ],
  },
  {
    title: "Stickfasthet",
    options: [
      { title: "2-2.5 mm" },
      { title: "2.5-3.5 mm" },
      { title: "3.5-4 mm" },
      { title: "4-4.5 mm" },
      { title: "5-5.5 mm" },
      { title: "6-7 mm" },
      { title: "8-10 mm" },
      { title: "12-20 mm" },
    ],
  },
  {
    title: "Virknål",
    options: [
      { title: "2-2.5 mm" },
      { title: "3-3.5 mm" },
      { title: "4-4.5 mm" },
      { title: "6-6.5 mm" },
      { title: "7-8 mm" },
      { title: "9-10 mm" },
      { title: "12-20 mm" },
    ],
  },
  {
    title: "Garntyp",
    options: [{ title: "Mohair" }, { title: "Fin bomull" }, { title: "Ull" }],
  },
];