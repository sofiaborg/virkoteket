import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth-context";
import { Categories } from "../components/Categories";
import { Filters } from "../components/Filters";
import { AllPatterns } from "../components/AllPatterns";

//skapa och importera en funktion "getFilteredProducts" som tar in 2 parametrar...
//... vald kategori och valda filter!
//skicka denna funktion som props till AllPatterns så att...
//...rätt produkter visas beroende på kategori och filter

export const Start = () => {
  const { isLoggedIn, login, logout } = useContext(AuthContext);
  const [category, setCategory] = useState("");
  const [filters, setFilters] = useState([]);

  if (!isLoggedIn) {
    return <div>Please login to view this page</div>;
  }

  return (
    <>
      <Categories></Categories>
      <Filters></Filters>
      <AllPatterns></AllPatterns>;
      {/* dessa props ska skickas med till varje component */}
      {/* <Categories category={category} setCategory={setCategory} />
      <Filters filters={filters} setFilters={setFilters} />
      <AllPatterns products={getFilteredProducts(category, filters)} /> */}
    </>
  );
};
