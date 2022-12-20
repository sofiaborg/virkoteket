import { useState, useEffect } from "react";
import { useContext } from "react";
import { categoryList } from "../../interfaces/IProps";

interface categoryProps {
  setCategories(category: string): void;
}

export const Categories = () => {
  return (
    <>
      <div className="category-wrapper">
        <ul>
          {categoryList.map((category, i) => (
            <li
              key={i}
              // onClick={() => props.setCategories(category)}
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
