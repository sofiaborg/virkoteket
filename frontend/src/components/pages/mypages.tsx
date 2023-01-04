import { Link } from "react-router-dom";
import { Wrapper } from "../components/StyledComponents/StyledWrappers";
import { CreatePattern } from "../components/myPagesComponents/CreatePattern";
import { MyPatterns } from "../components/myPagesComponents/MyPatterns";
import { MyAccount } from "../components/myPagesComponents/MyAccount";
import { useLocation } from "react-router-dom";

export const Mypages = () => {
  const location = useLocation();

  //OBS denna funkar ej. Fixa
  const handleLogout = async () => {
    await fetch("http://localhost:8000/auth/logout", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        mode: "no-cors",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log("utloggad yay");
        } else {
          console.log("funkade ej");
        }
      });
  };

  return (
    <>
      <Wrapper>
        <h1>Mina sidor</h1>
        <div className="sidebar-wrapper">
          <div>
            <Link to="/mypages/createpattern">
              <h2>Skapa mönster</h2>
            </Link>

            <div>
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
                <button onClick={handleLogout}>Logga ut</button>
              </div>
            </div>
          </div>
        </div>

        <div className="mainbar-wrapper">
          <div className="patterns-wrapper">
            {location.pathname === "/mypages/createpattern" && (
              <CreatePattern />
            )}
            {location.pathname === "/mypages/mypatterns" && <MyPatterns />}
            {location.pathname === "/mypages/myaccount" && <MyAccount />}
          </div>

          <div className="myaccount-wrapper"></div>
        </div>
      </Wrapper>
    </>
  );
};
