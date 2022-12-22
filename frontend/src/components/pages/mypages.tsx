import React, { useState } from "react";
import { Wrapper } from "../components/StyledComponents/StyledWrappers";
import { CreatePattern } from "../components/myPagesComponents/CreatePattern";
import { MyPatterns } from "../components/myPagesComponents/MyPatterns";
import { MyAccount } from "../components/myPagesComponents/MyAccount";
export const Mypages = () => {
  const [showCreatePattern, setShowCreatePattern] = useState<Boolean>(true);
  const [showMyPatterns, setShowMyPatterns] = useState<Boolean>(false);
  const [showMyAccount, setShowMyAccount] = useState<Boolean>(false);

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
            <h2
              onClick={(e) => {
                setShowCreatePattern(true);
                setShowMyAccount(false);
                setShowMyPatterns(false);
              }}
            >
              Skapa mönster
            </h2>
            <div>
              <div>
                <h2
                  onClick={(e) => {
                    setShowMyPatterns(true);
                    setShowCreatePattern(false);
                    setShowMyAccount(false);
                  }}
                >
                  Mina mönster
                </h2>
              </div>
              <div>
                <h2
                  onClick={(e) => {
                    setShowMyAccount(true);
                    setShowCreatePattern(false);
                    setShowMyPatterns(false);
                  }}
                >
                  Mitt konto
                </h2>
              </div>
              <div>
                <button onClick={handleLogout}>Logga ut</button>
              </div>
            </div>
          </div>
        </div>

        <div className="mainbar-wrapper">
          <div className="patterns-wrapper">
            <CreatePattern show={showCreatePattern}></CreatePattern>
            <MyPatterns show={showMyPatterns}></MyPatterns>
            <MyAccount show={showMyAccount}></MyAccount>
          </div>

          <div className="myaccount-wrapper"></div>
        </div>
      </Wrapper>
    </>
  );
};
