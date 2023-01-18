import { Link } from "react-router-dom";
import { CreatePattern } from "../components/myPagesComponents/CreatePattern";

import { MyPatterns } from "../components/myPagesComponents/MyPatterns";
import { MyAccount } from "../components/myPagesComponents/MyAccount";
import { useLocation } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../contexts/auth-context";
import { useNavigate } from "react-router";

export const Mypages = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const auth = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.isLoggedIn) {
      navigate("/");
    }
  }, [auth.isLoggedIn]);

  return (
    <>
      <div className="w-full flex flex-col md:flex-row justify-center items-center py-0 md:py-20">
        <div
          onClick={() => setToggleSidebar(!toggleSidebar)}
          className="md:hidden flex w-full mb-1 justify-center bg-[#F6F0F0]"
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
        <div className="flex w-full md:w-3/5 gap-1">
          <div
            className={`transition-all w-full absolute bg-[#ffffffef] md:bg-transparent px-1 md:px-4 py-6 z-10 md:static md:z-0 md:block md:w-1/4 md:bg-[#F6F0F0] ${
              toggleSidebar ? "block " : "hidden"
            }`}
          >
            <div className="pt-0">
              <Link to="/mypages/createpattern">
                <div className="uppercase font-normal text-sm px-4 py-2 cursor-pointer font-sans font-family: sans-open bg-[#ffffffef] md:bg-[#F6F0F0] hover:bg-[#f3e8e8]">
                  Create pattern
                </div>
              </Link>
            </div>
            <div>
              <Link to="/mypages/mypatterns">
                <div className="uppercase font-normal text-sm  px-4 py-2 cursor-pointer font-sans font-family: sans-open  bg-[#ffffffef] md:bg-[#F6F0F0] hover:bg-[#f3e8e8]">
                  My patterns
                </div>
              </Link>
            </div>
            <div>
              <Link to="/mypages/myaccount">
                <div className="uppercase font-normal text-sm px-4 py-2 cursor-pointer font-sans font-family: sans-open  bg-[#ffffffef] md:bg-[#F6F0F0] hover:bg-[#f3e8e8]">
                  My account
                </div>
              </Link>
            </div>
            <div>
              <div
                className="uppercase text-sm  font-normal px-4 py-2 cursor-pointer font-sans font-family: sans-open  bg-[#ffffffef] md:bg-[#F6F0F0] hover:bg-[#f3e8e8]"
                id="logout-button"
                onClick={auth.logout}
              >
                Log out
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/4 bg-[#f2eded]">
            <div className="patterns-wrapper">
              {location.pathname === "/mypages/createpattern" && (
                <CreatePattern />
              )}
              {location.pathname === "/mypages/mypatterns" && <MyPatterns />}
              {location.pathname === "/mypages/myaccount" && <MyAccount />}
            </div>

            <div className="myaccount-wrapper"></div>
          </div>
        </div>
      </div>
    </>
  );
};
