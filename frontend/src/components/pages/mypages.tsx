import { Link } from "react-router-dom";
import { CreatePattern } from "../components/myPagesComponents/CreatePattern";

import { MyPatterns } from "../components/myPagesComponents/MyPatterns";
import { MyAccount } from "../components/myPagesComponents/MyAccount";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth-context";

export const Mypages = () => {
  const auth = useContext(AuthContext);
  const location = useLocation();

  return (
    <>
      <div className="w-full flex flex-col md:flex-row justify-center items-center py-0 md:py-20">
        <div className="block md:hidden bg-[#d79e9e] w-full text-center py-2">
          Klicka
        </div>
        <div className="flex w-full md:w-3/5 gap-1">
          <div className=" hidden md:block w-1/4 bg-[#F6F0F0]">
            <div className="pt-6">
              <Link to="/mypages/createpattern">
                <div className="uppercase text-sm px-4 py-2 cursor-pointer font-sans font-family: sans-open  bg-[#F6F0F0] hover:bg-[#f3e8e8]">
                  Create pattern
                </div>
              </Link>
            </div>
            <div>
              <Link to="/mypages/mypatterns">
                <div className="uppercase text-sm  px-4 py-2 cursor-pointer font-sans font-family: sans-open  bg-[#F6F0F0] hover:bg-[#f3e8e8]">
                  My patterns
                </div>
              </Link>
            </div>
            <div>
              <Link to="/mypages/myaccount">
                <div className="uppercase text-sm px-4 py-2 cursor-pointer font-sans font-family: sans-open  bg-[#F6F0F0] hover:bg-[#f3e8e8]">
                  My account
                </div>
              </Link>
            </div>
            <div>
              <div
                className="uppercase text-sm  px-4 py-2 cursor-pointer font-sans font-family: sans-open  bg-[#F6F0F0] hover:bg-[#f3e8e8]"
                id="logout-button"
                onClick={auth.logout}
              >
                Logga ut
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/4">
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
