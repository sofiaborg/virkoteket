import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth-context";
import { Categories } from "../components/Categories";
import { Filters } from "../components/Filters";
import { AllPatterns } from "../components/AllPatterns";

export const Start = () => {
  const { isLoggedIn, login, logout } = useContext(AuthContext);
  const [category, setCategory] = useState("");
  const [filters, setFilters] = useState([]);

  const handleCategory = (category: string) => {
    // Do something with the new category value
  };

  if (!isLoggedIn) {
    return <div>Please login to view this page</div>;
  }

  return (
    <>
      <Categories onCategoryClick={handleCategory}></Categories>
      <Filters></Filters>
      <AllPatterns></AllPatterns>;
      {/* dessa props ska skickas med till varje component */}
      {/* <Categories category={category} setCategory={setCategory} />
      <Filters filters={filters} setFilters={setFilters} />
      <AllPatterns products={getFilteredProducts(category, filters)} /> */}
    </>
  );
};
