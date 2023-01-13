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
}

//categories
export interface ICategory {
  title: string;
  description: string;
}

export const categoryList: ICategory[] = [
  {
    title: "Women",
    description: "Lorem ipsum dolores set, amet initiales dolum",
  },
  {
    title: "Men",
    description: "Lorem ipsum dolores set, amet initiales dolum",
  },
  {
    title: "Kids",
    description: "Lorem ipsum dolores set, amet initiales dolum",
  },
  {
    title: "Baby",
    description: "Lorem ipsum dolores set, amet initiales dolum",
  },
  {
    title: "Pets",
    description: "Lorem ipsum dolores set, amet initiales dolum",
  },
  {
    title: "Home",
    description: "Lorem ipsum dolores set, amet initiales dolum",
  },
  {
    title: "Holiday",
    description: "Lorem ipsum dolores set, amet initiales dolum",
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

export const filtersList: IFilter[] = [
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
