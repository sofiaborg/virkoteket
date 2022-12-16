import React from "react";
import { Wrapper } from "../components/StyledComponents/StyledWrappers";

export const Mypages = () => {
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
        <div className="sidebar-wrapper">
          <h1>Mina sidor</h1>

          <div>
            <h2>Mina mönster</h2>
          </div>
          <div>
            <h2>Mitt konto</h2>
          </div>
          <div>
            <button onClick={handleLogout}>Logga ut</button>
          </div>
        </div>
        <div className="mypages-wrapper"></div>
      </Wrapper>
    </>
  );
};
