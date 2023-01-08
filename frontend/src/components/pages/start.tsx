import React, { useEffect, useState } from "react";
import { Categories } from "../components/startPageComponents/Categories";
import { Filters } from "../components/startPageComponents/Filters";
import { AllPatterns } from "../components/startPageComponents/AllPatterns";
import { IFilterObject } from "../../interfaces/IProps";
import "../../index.css";

export const Start = () => {
  const [chosenCategory, setChosenCategory] = useState("");
  const [chosenFilters, setChosenFilters] = useState<IFilterObject[]>([]);

  //callback-functions to send to child-components
  const handleCategory = (category: string) => {
    setChosenFilters([]);
    setChosenCategory(category);
  };

  // This function first filters out the existing option for the given filter title, if one exists, and then adds the new option to the list of filters.
  // This will allow the user to choose only one option for each filter title.
  const handleFilters = (filterTitle: string, filterOption: string) => {
    const newFilters = chosenFilters.filter(
      (item) => item.title !== filterTitle
    );
    setChosenFilters([
      ...newFilters,
      { title: filterTitle, option: filterOption },
    ]);
  };

  //sort chosen filters into their main-filter
  const filterObjects: { [key: string]: string[] } = {};

  for (const item of chosenFilters) {
    if (!filterObjects[item.title]) {
      filterObjects[item.title] = [];
    }
    filterObjects[item.title].push(item.option);
  }

  const deleteFilter = (filterTitle: string) => {
    setChosenFilters(
      chosenFilters.filter((item) => item.title !== filterTitle)
    );
  };

  useEffect(() => {
    // const headers: Record<string, string> = {
    //   Authorization: sessionStorage.getItem(user.token) as string,
    // };

    fetch(
      `http://localhost:8000/posts/getposts?category=${encodeURIComponent(
        chosenCategory
      )}&filters=${encodeURIComponent(JSON.stringify(chosenFilters))}`

      // {
      //   headers,
      // }
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, [chosenFilters, chosenCategory]);

  return (
    <div>
      <Categories onCategoryClick={handleCategory}></Categories>
      <Filters onFiltersClick={handleFilters}></Filters>
      <div>
        <h1 onClick={() => setChosenCategory("")}>{chosenCategory} </h1>
      </div>

      <div>
        {Object.keys(filterObjects).map((title) => (
          <h2 key={title} onClick={() => deleteFilter(title)}>
            {title}
            <div>
              {filterObjects[title].map((option) => (
                <h6 key={option} onClick={() => deleteFilter(option)}>
                  {option}
                </h6>
              ))}
            </div>
          </h2>
        ))}
      </div>
      <AllPatterns
        filters={chosenFilters}
        category={chosenCategory}
      ></AllPatterns>
    </div>
  );
};
