import { useState, useEffect } from "react";
import { useContext } from "react";
import { categoryList } from "../../../interfaces/IProps";
import { categoryProps } from "../../../interfaces/IProps";

export const Categories = (props: categoryProps) => {
  return (
    <>
      <div className="category-wrapper">
        <ul>
          {categoryList.map((category, i) => (
            <li
              key={i}
              value={category}
              onClick={(e) => {
                props.onCategoryClick(category);
              }}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
