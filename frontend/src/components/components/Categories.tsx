import { useState, useEffect } from "react";
import { useContext } from "react";
import { categoryList } from "../../interfaces/IProps";
import {
  postsContext,
  IPostsContext,
  defaultValue,
} from "../../contexts/products-context";

export const Categories = (props: IPostsContext) => {
  return (
    <>
      <div className="category-wrapper">
        <ul>
          {categoryList.map((category, i) => (
            <li
              key={i}
              onClick={() => props.setCategories(category)}
              value={category}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
