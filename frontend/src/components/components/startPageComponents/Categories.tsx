import { categoryList } from "../../../interfaces/IProps";
import { categoryProps } from "../../../interfaces/IProps";
import { useState } from "react";

export const Categories = (props: categoryProps) => {
  const [activeCategory, setActiveCategory] = useState<string>("");

  return (
    <>
      <div className="category-wrapper">
        <p
          onClick={(e) => {
            props.onCategoryClick("", "");
            setActiveCategory("");
          }}
          className="uppercase font-sans font-family: sans-open text-sm pb-3 cursor-pointer hover:font-bold focus:font-bold"
        >
          Show all
        </p>
        <ul>
          {categoryList.map((category, i) => (
            <li
              className={`category-button uppercase font-sans font-family: sans-open text-sm pb-3 cursor-pointer hover:font-bold ${
                activeCategory === category.title ? "font-bold" : ""
              }`}
              key={i}
              value={category.title}
              onClick={(e) => {
                setActiveCategory(category.title);
                props.onCategoryClick(category.title, category.description);
              }}
            >
              {category.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
