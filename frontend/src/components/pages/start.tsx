import React, { useEffect, useState, useContext } from "react";
import { Categories } from "../components/startPageComponents/Categories";
import { Filters } from "../components/startPageComponents/Filters";
import { AllPatterns } from "../components/startPageComponents/AllPatterns";
import { IFilterObject } from "../../interfaces/IProps";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth-context";
import "../../index.css";

export const Start = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [chosenCategory, setChosenCategory] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [chosenFilters, setChosenFilters] = useState<IFilterObject[]>([]);
  const [posts, setPosts] = useState([]);

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  //callback-functions to send to child-components
  const handleCategory = (category: string, description: string) => {
    setChosenFilters([]);
    setChosenCategory(category);
    setCategoryDescription(description);
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
    if (auth.isLoggedIn) {
      fetch(
        `http://localhost:8000/posts/getposts?category=${encodeURIComponent(
          chosenCategory
        )}&filters=${encodeURIComponent(JSON.stringify(chosenFilters))}`
      )
        .then((response) => response.json())
        .then((data) => setPosts(data))
        .catch((error) => console.error(error));
    } else {
      navigate("/");
    }
  }, [chosenFilters, chosenCategory]);

  return (
    <div>
      <div
        onClick={() => setToggleSidebar(!toggleSidebar)}
        className="sm:hidden flex justify-center bg-[#F6F0F0]"
      >
        <p className="font-sans font-family: sans-open text-sm px-3 py-3">
          Search by filters
        </p>
        <p className="flex justify-center items-center pr-3 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </p>
      </div>
      <div className=" flex justify-center">
        <div className="w-3/4 py-20 flex gap-6">
          <div
            className={`transition-all w-3/4 absolute bg-[#ffffffef] sm:bg-transparent px-6 py-6 z-10 sm:static sm:z-0 sm:block sm:w-3/12 ${
              toggleSidebar ? "block " : "hidden"
            }`}
          >
            <Categories onCategoryClick={handleCategory}></Categories>
            <Filters onFiltersClick={handleFilters}></Filters>
          </div>

          <div className="w-full relative sm:static sm:w-9/12">
            <div>
              <h1 className="text-xl">{chosenCategory} </h1>

              {chosenCategory === "" ? (
                <div>
                  {" "}
                  <h1 className="text-xl">The Crochet Club patterns</h1>
                  <p className="italic">
                    Scroll through the latest patterns publiced by the users of
                    The Crochet Club. Happy knitting and crocheting!
                  </p>
                </div>
              ) : (
                <p className="italic">{categoryDescription}</p>
              )}
            </div>

            <div className=" flex gap-4 flex-wrap py-4">
              {Object.keys(filterObjects).map((title) => (
                <div
                  className="flex bg-[#E9CCCC] gap-1 "
                  key={title}
                  onClick={() => deleteFilter(title)}
                >
                  <p className="flex text-xs py-2 px-2">
                    {title}

                    {filterObjects[title].map((option) => (
                      <h6
                        className="flex"
                        key={option}
                        onClick={() => deleteFilter(option)}
                      >
                        : {option}
                      </h6>
                    ))}
                  </p>

                  <div className="flex items-center pr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3 cursor-pointer"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
            <AllPatterns
              filters={chosenFilters}
              category={chosenCategory}
              posts={posts}
            ></AllPatterns>
          </div>
        </div>
      </div>
    </div>
  );
};
