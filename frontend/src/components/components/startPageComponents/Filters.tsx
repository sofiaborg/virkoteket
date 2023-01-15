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
          <div className="flex flex-col lg:flex-row justify-start gap-2 lg:gap-6 py-6 text-xs">
            {filter.options.map((option) => (
              <div
                className="uppercase px-4 py-2 cursor-pointer font-sans font-family: sans-open  bg-[#F6F0F0] hover:bg-[#f3e8e8]"
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

      <div className="bg-white max-w-xl mx-auto">
        <ul className="shadow-box flex flex-col gap-0.5  ">
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
                className="cursor-pointer relative  bg-[#F6F0F0] w-full text-xs"
              >
                <div className="flex justify-between items-center">
                  <p className="py-2.5 pl-3 uppercase font-sans font-family: sans-open">
                    {" "}
                    {filter.title}
                  </p>
                  <p className="flex justify-center items-center pr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </p>
                </div>

                <ul
                  className={` relative overflow-hidden  transition-all duration-700 ${
                    expandedItems.includes(filter.title)
                      ? "max-h-none"
                      : "max-h-0"
                  }`}
                >
                  {filter.options.map((option) => (
                    <li
                      className="cursor-pointer bg-[#f3e8e8] hover:font-medium"
                      key={option.title}
                      onClick={(e) => {
                        props.onFiltersClick(filter.title, option.title);
                      }}
                    >
                      <p className="py-1 pl-4 font-sans font-family: sans-open  text-xs">
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
