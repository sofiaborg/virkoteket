import { ICategories } from "../interfaces/IProps";
import { IPost } from "../interfaces/IProps";
import { createContext } from "react";

interface IFilter {
  name: string;
  options: string[];
}
export interface IPostsContext {
  posts: IPost[];
  filters: IFilter[];
  categories: ICategories[];

  setFilters(filter: string): void;
}

export const defaultValue: IPostsContext = {
  posts: [],
  filters: [],
  categories: [],
  setFilters: (filter: string) => {},
};

export const postsContext = createContext(defaultValue);
