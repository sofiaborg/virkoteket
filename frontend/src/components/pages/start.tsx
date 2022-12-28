import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth-context";
import { Categories } from "../components/startPageComponents/Categories";
import { Filters } from "../components/startPageComponents/Filters";
import { AllPatterns } from "../components/startPageComponents/AllPatterns";

export const Start = () => {
  const [chosenCategory, setChosenCategory] = useState("");
  const [chosenFilters, setChosenFilters] = useState<string[]>([]);
  const [sortedPosts, setSortedPosts] = useState("");
  const auth = useContext(AuthContext);
  console.log(auth.isLoggedIn);

  const handleCategory = (category: string) => {
    setChosenCategory(category);
    console.log(chosenCategory);
  };

  const handleFilters = (filters: string) => {
    setChosenFilters([...chosenFilters, filters]);
    console.log(chosenFilters);
  };

  useEffect(() => {
    const headers: Record<string, string> = {
      Authorization: sessionStorage.getItem("token") as string,
    };

    fetch(
      `http://localhost:8000/posts/getposts/?filters=${encodeURIComponent(
        JSON.stringify(chosenCategory)
      )}`,
      {
        headers,
      }
    )
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.error(error));
  }, [chosenFilters, chosenCategory]);

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
