import { categoryList } from "../../../interfaces/IProps";
import { categoryProps } from "../../../interfaces/IProps";

export const Categories = (props: categoryProps) => {
  return (
    <>
      <div className="category-wrapper">
        <ul>
          {categoryList.map((category, i) => (
            <li
              className="uppercase font-sans font-family: sans-open text-sm pb-3 cursor-pointer hover:font-bold focus:font-bold"
              key={i}
              value={category.title}
              onClick={(e) => {
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
