import { useState } from "react";
import { filtersList } from "../../../interfaces/IProps";
import { mainFiltersList } from "../../../interfaces/IProps";
import { filtersProps } from "../../../interfaces/IProps";

export const Filters = (props: filtersProps) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  return (
    <div>
      {mainFiltersList.map((filter, i) => {
        return (
          <div className="flex flex-col lg:flex-row justify-start gap-6 py-6 text-sm">
            {filter.options.map((option) => (
              <div
                className="uppercase px-4 py-2 cursor-pointer font-sans font-family: Arial  bg-[#F6F0F0] hover:bg-[#E9CCCC]"
                onClick={(e) => {
                  props.onFiltersClick(filter.title, option.title);
                }}
              >
                {option.title}
              </div>
            ))}
          </div>
        );
      })}

      <div className="bg-white max-w-xl mx-auto border border-gray-200">
        <ul className="shadow-box flex flex-col gap-0.5 ">
          {filtersList.map((filter, i) => {
            return (
              <li
                key={filter.title}
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
                className="cursor-pointer relative  bg-[#F6F0F0]  hover:bg-[#E5DADA] w-full  text-left  text-sm"
              >
                <p className="py-2.5 pl-3 uppercase font-sans font-family: Arial">
                  {" "}
                  {filter.title}
                </p>

                <ul
                  className={` relative overflow-hidden transition-all duration-700 ${
                    expandedItems.includes(filter.title)
                      ? "max-h-none"
                      : "max-h-0"
                  }`}
                >
                  {filter.options.map((option) => (
                    <li
                      className="cursor-pointer bg-[#F6F0F0]  hover:bg-[#E5DADA]"
                      key={option.title}
                      onClick={(e) => {
                        props.onFiltersClick(filter.title, option.title);
                      }}
                    >
                      <p className="py-1 pl-4 font-sans font-family: Arial  text-xs">
                        {" "}
                        {option.title}
                      </p>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
