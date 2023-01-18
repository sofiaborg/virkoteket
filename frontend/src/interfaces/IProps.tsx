export const getCurrentUser = () => {
  const userStr = sessionStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);

  return null;
};

export interface categoryProps {
  onCategoryClick: (category: string, description: string) => void;
}

export interface filtersProps {
  onFiltersClick: (filterTitle: string, filterOption: string) => void;
}

export interface postsProps {
  category: string;
  filters: IFilterObject[];
  posts: IPost[];
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
  reviews: IReview[];
  averageRating: number;
}

export const ReviewNumbers: string[] = ["1", "2", "3", "4", "5"];

export interface IReview {
  _id: number;
  image: string;
  rating: number;
  comment: string;
  user: string;
}

export interface IUser {
  _id: number;
  email: string;
  username: string;
}

//categories
export interface ICategory {
  title: string;
  description: string;
}

export const categoryList: ICategory[] = [
  {
    title: "Women",
    description: "Knitted and crochet pattern for women.",
  },
  {
    title: "Men",
    description: "Knitted and crochet pattern for men.",
  },
  {
    title: "Kids",
    description: "Knitted and crochet pattern for kids.",
  },
  {
    title: "Baby",
    description:
      "Knitted and crochet pattern for baby. Sizes is between nreborn to 16 months.",
  },
  {
    title: "Pets",
    description: "Knitted and crochet pattern for your pets.",
  },
  {
    title: "Home",
    description: "Knitted and crochet pattern for your home.",
  },
  {
    title: "Holiday",
    description: "Knitted and crochet pattern for holiday occations.",
  },
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

export const mainFiltersList: IFilter[] = [
  {
    title: "type",
    options: [{ title: "Crochet" }, { title: "Knit" }],
  },
];

export const startFilter: IFilter[] = [
  {
    title: "difficulty",
    options: [
      { title: "Beginner" },
      { title: "Interemediate" },
      { title: "Experienced" },
    ],
  },
  {
    title: "yarn",
    options: [{ title: "Mohair" }, { title: "Fine cotton" }, { title: "Wool" }],
  },
];

export const crochetFilter: IFilter[] = [
  {
    title: "difficulty",
    options: [
      { title: "Beginner" },
      { title: "Interemediate" },
      { title: "Experienced" },
    ],
  },
  {
    title: "yarn",
    options: [{ title: "Mohair" }, { title: "Fine cotton" }, { title: "Wool" }],
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
];

export const knitFilter: IFilter[] = [
  {
    title: "difficulty",
    options: [
      { title: "Beginner" },
      { title: "Interemediate" },
      { title: "Experienced" },
    ],
  },
  {
    title: "yarn",
    options: [{ title: "Mohair" }, { title: "Fine cotton" }, { title: "Wool" }],
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
];
