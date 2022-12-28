import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth-context";
import { Categories } from "../components/startPageComponents/Categories";
import { Filters } from "../components/startPageComponents/Filters";
import { AllPatterns } from "../components/startPageComponents/AllPatterns";

export const Start = () => {
  const { isLoggedIn, login, logout } = useContext(AuthContext);
  const [chosenCategory, setChosenCategory] = useState("");
  const [chosenFilters, setChosenFilters] = useState<string[]>([]);
  const [sortedPosts, setSortedPosts] = useState("");

  const handleCategory = (category: string) => {
    setChosenCategory(category);
  };

  const handleFilters = (filters: string) => {
    setChosenFilters([...chosenFilters, filters]);
    console.log(chosenFilters);

    fetch(
      `http://localhost:8000/posts/getposts/?filters=${encodeURIComponent(
        JSON.stringify(chosenFilters)
      )}`
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <Categories onCategoryClick={handleCategory}></Categories>
      <Filters onFiltersClick={handleFilters}></Filters>
      <AllPatterns
        filters={chosenFilters}
        category={chosenCategory}
      ></AllPatterns>
    </>
  );
};
