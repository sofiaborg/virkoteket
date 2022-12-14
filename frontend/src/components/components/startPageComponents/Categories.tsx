import { categoryList } from "../../../interfaces/IProps";
import { categoryProps } from "../../../interfaces/IProps";

export const Categories = (props: categoryProps) => {
  return (
    <>
      <div className="category-wrapper">
        <h2 className="uppercase font-sans font-family: Arial pb-3">
          Category
        </h2>
        <ul>
          {categoryList.map((category, i) => (
            <li
              className="uppercase font-sans font-family: Arial text-sm pb-3 cursor-pointer hover:font-bold focus:font-bold"
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
