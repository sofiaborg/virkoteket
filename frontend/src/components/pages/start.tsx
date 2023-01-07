import React, { useEffect, useState } from "react";
import { Categories } from "../components/startPageComponents/Categories";
import { Filters } from "../components/startPageComponents/Filters";
import { AllPatterns } from "../components/startPageComponents/AllPatterns";
import { IFilterObject } from "../../interfaces/IProps";

export const Start = () => {
  const [chosenCategory, setChosenCategory] = useState("");
  const [chosenFilters, setChosenFilters] = useState<IFilterObject[]>([]);

  console.log(chosenCategory, chosenFilters);

  const handleCategory = (category: string) => {
    setChosenCategory(category);
    console.log(chosenCategory);
  };

  const handleFilters = (filterTitle: string, filterOption: string) => {
    const filterObject = { title: filterTitle, option: filterOption };
    setChosenFilters([...chosenFilters, filterObject]);
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
          <h2 key={title}>
            {title}
            <div>
              {filterObjects[title].map((option) => (
                <h6 key={option}>{option}</h6>
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
