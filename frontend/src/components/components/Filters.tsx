import { filtersList } from "../../interfaces/IProps";

// interface IFilter {
//   name: string;
//   options: string[];
// }

// interface filterProps {
//   filters: IFilter[];
// }

interface filterProps {
  setFilters(filter: String): void;
}

export const Filters = () => {
  console.log(filtersList);
  return (
    <div className="filter-wrapper">
      <ul>
        {filtersList.map((filter, i) => (
          <li>
            {filter.title}

            <ul>
              {" "}
              <li key={i} value={filter.options[i].title}>
                {filter.options[i].title}
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
