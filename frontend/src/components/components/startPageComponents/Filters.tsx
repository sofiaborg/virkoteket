import { useState } from "react";
import { filtersList } from "../../../interfaces/IProps";
import { filtersProps } from "../../../interfaces/IProps";

export const Filters = (props: filtersProps) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  return (
    <div className="bg-white max-w-xl mx-auto border border-gray-200">
      <ul className="shadow-box">
        {filtersList.map((filter, i) => (
          <li
            onClick={() => {
              // Toggle the item's open/closed state
              if (expandedItems.includes(filter.title)) {
                setExpandedItems(
                  expandedItems.filter((i) => i !== filter.title)
                );
              } else {
                setExpandedItems([...expandedItems, filter.title]);
              }
            }}
            className="cursor-pointer relative border-b border-gray-200 w-full  text-left"
          >
            {filter.title}

            <ul
              className={`relative overflow-hidden transition-all duration-700 ${
                expandedItems.includes(filter.title) ? "max-h-none" : "max-h-0"
              }`}
            >
              {filter.options.map((option) => (
                <li
                  className="cursor-pointer"
                  key={option.title}
                  onClick={(e) => {
                    props.onFiltersClick(filter.title, option.title);
                  }}
                >
                  {option.title}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
