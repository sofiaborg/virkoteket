import React, { useEffect, useState } from "react";
import { Categories } from "../components/startPageComponents/Categories";
import { Filters } from "../components/startPageComponents/Filters";
import { AllPatterns } from "../components/startPageComponents/AllPatterns";
import { IFilterObject } from "../../interfaces/IProps";

export const Start = () => {
  const [chosenCategory, setChosenCategory] = useState("");
  const [chosenFilters, setChosenFilters] = useState<IFilterObject[]>([]);

  //callback-functions to send to child-components
  const handleCategory = (category: string) => {
    setChosenCategory(category);
    console.log(chosenCategory);
  };

  const handleFilters = (filterTitle: string, filterOption: string) => {
    const newFilters = chosenFilters.filter(
      (item) => item.title !== filterTitle
    );
    setChosenFilters([
      ...newFilters,
      { title: filterTitle, option: filterOption },
    ]);
    console.log(chosenFilters);
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

  console.log(filterObjects);

  useEffect(() => {
    // const headers: Record<string, string> = {
    //   Authorization: sessionStorage.getItem(user.token) as string,
    // };

    fetch(
      `http://localhost:8000/posts/getposts/?filters=${encodeURIComponent(
        JSON.stringify(chosenCategory)
      )}`
      // {
      //   headers,
      // }
    )
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.error(error));
  }, [chosenFilters, chosenCategory]);

  return (
    <>
      <Categories onCategoryClick={handleCategory}></Categories>
      <Filters onFiltersClick={handleFilters}></Filters>
      <div>
        <h1>{chosenCategory}</h1>
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
    </>
  );
};
