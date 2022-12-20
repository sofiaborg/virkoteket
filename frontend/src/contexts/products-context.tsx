import { IFilters } from "../interfaces/IProps";
import { ICategories } from "../interfaces/IProps";
import { IPost } from "../interfaces/IProps";
import { createContext } from "react";

export interface IPostsContext {
  posts: IPost[];
  filters: IFilters[];
  categories: ICategories[];

  setFilters(filter: string): void;
  setCategories(category: string): void;
  setPosts(posts: IPost[]): void;
}

export const defaultValue: IPostsContext = {
  posts: [],
  filters: [],
  categories: [],
  setCategories: (category: string) => {},
  setFilters: (filter: string) => {},
  setPosts: (posts: []) => {},
};

export const postsContext = createContext(defaultValue);
