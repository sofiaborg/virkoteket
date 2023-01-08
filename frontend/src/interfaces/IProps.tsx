export const getCurrentUser = () => {
  const userStr = sessionStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);

  return null;
};

export interface categoryProps {
  onCategoryClick: (category: string) => void;
}

export interface filtersProps {
  onFiltersClick: (filterTitle: string, filterOption: string) => void;
}

export interface postsProps {
  category: string;
  filters: IFilterObject[];
}

export interface IPost {
  _id: number;
  title: string;
  image: string;
  pattern: string;
  description: string;
  type: number;
  difficulty: number;
  yarn: number;
  hook: number;
  needle: number;
  category: string;
  user: string;
  reviews: [];
}

export interface IReview {
  _id: number;
  rating: number;
  comment: string;
  user: string;
}

export interface IUser {
  _id: number;
  email: string;
}

export const categoryList = [
  "Women",
  "Men",
  "Kids",
  "Baby",
  "Pets",
  "Home",
  "Holidays",
];

//filter and options
export interface IOption {
  title: string;
}

export interface IFilter {
  title: string;
  options: IOption[];
}

export interface IFilterObject {
  title: string;
  option: string;
}

export const filtersList: IFilter[] = [
  {
    title: "type",
    options: [{ title: "Crochet" }, { title: "Knit" }],
  },
  {
    title: "difficulty",
    options: [
      { title: "Beginner" },
      { title: "Interemediate" },
      { title: "Experienced" },
    ],
  },
  {
    title: "needle",
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
    title: "hook",
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
    title: "yarn",
    options: [{ title: "Mohair" }, { title: "Fine cotton" }, { title: "Wool" }],
  },
];
