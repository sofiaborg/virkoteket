import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth-context";
import { Categories } from "../components/Categories";
import { Filters } from "../components/Filters";
import { AllPatterns } from "../components/AllPatterns";

export const Start = () => {
  const { isLoggedIn, login, logout } = useContext(AuthContext);
  const [chosenCategory, setChosenCategory] = useState("");
  const [chosenFilter, setChosenFilter] = useState("");
  const [sortedPosts, setSortedPosts] = useState("");

  const handleCategory = (category: string) => {
    setChosenCategory(category);
  };

  const handleFilters = (filter: string) => {
    setChosenFilter(filter);
  };

  if (!isLoggedIn) {
    return <div>Please login to view this page</div>;
  }

  return (
    <>
      <Categories onCategoryClick={handleCategory}></Categories>
      <Filters onFiltersClick={handleFilters}></Filters>
      <AllPatterns
        filter={chosenFilter}
        category={chosenCategory}
      ></AllPatterns>
      ;{/* dessa props ska skickas med till varje component */}
      {/* <Categories category={category} setCategory={setCategory} />
      <Filters filters={filters} setFilters={setFilters} />
      <AllPatterns products={getFilteredProducts(category, filters)} /> */}
    </>
  );
};
