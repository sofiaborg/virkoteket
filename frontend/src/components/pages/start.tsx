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
    <div className="border-double border-4 border-indigo-600 flex justify-center">
      <div className="border-double border-4 border-pink-600 w-3/4 py-20 flex gap-6">
        <div className="border-double border-4 border-indigo-600 w-3/12">
          <Categories onCategoryClick={handleCategory}></Categories>
          <Filters onFiltersClick={handleFilters}></Filters>
        </div>

        <div className="border-double border-4 border-pink-600 w-9/12">
          <div className="border-double border-4 border-green-600">
            <h1>{chosenCategory} </h1>
          </div>

          <div className="border-double border-4 border-pink-600 flex gap-6">
            {Object.keys(filterObjects).map((title) => (
              <div
                className="flex bg-violet-500 gap-2"
                key={title}
                onClick={() => deleteFilter(title)}
              >
                {title}:
                {filterObjects[title].map((option) => (
                  <h6 key={option} onClick={() => deleteFilter(option)}>
                    {option}
                  </h6>
                ))}
                <span className="cursor-pointer">x</span>
              </div>
            ))}
          </div>
          <AllPatterns
            filters={chosenFilters}
            category={chosenCategory}
          ></AllPatterns>
        </div>
      </div>
    </div>
  );
};
