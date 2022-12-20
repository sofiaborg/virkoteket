export interface ICategories {
  id: string;
  name: string;
}

export interface IFilters {
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
  filters: IFilters[];
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
