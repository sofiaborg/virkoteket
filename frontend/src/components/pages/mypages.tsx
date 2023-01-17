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
      <div className="w-full flex justify-center items-center">
        <div className="pt-10 flex w-3/5">
          <div className=" w-1/4 bg-[#e39a9a]">
            <div>
              <Link to="/mypages/createpattern">
                <h2>Skapa mönster</h2>
              </Link>
            </div>
            <div>
              <Link to="/mypages/mypatterns">
                <h2>Mina mönster</h2>
              </Link>
            </div>
            <div>
              <Link to="/mypages/myaccount">
                <h2>Mitt konto</h2>
              </Link>
            </div>
            <div>
              <button id="logout-button" onClick={auth.logout}>
                Logga ut
              </button>
            </div>
          </div>

          <div className="w-3/4">
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
