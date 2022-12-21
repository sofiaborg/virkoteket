import { filtersList } from "../../interfaces/IProps";
import { filtersProps } from "../../interfaces/IProps";

export const Filters = (props: filtersProps) => {
  return (
    <div className="filter-wrapper">
      <ul>
        {filtersList.map((filter, i) => (
          <li>
            {filter.title}

            <ul>
              {filter.options.map((option) => (
                <li
                  key={option.title}
                  onClick={(e) => {
                    props.onFiltersClick(option.title);
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
