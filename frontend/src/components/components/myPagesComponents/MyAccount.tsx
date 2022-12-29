import { showPage } from "../../../interfaces/IProps";
import { useState, useEffect } from "react";

export const MyAccount = (props: showPage) => {
  const [user, setUser] = useState([]);

  // useEffect(() => {
  //   async function fetchLoggedInUser() {
  //     const response = await fetch(`http://localhost:8000/user/id/myaccount`);
  //     const data = await response.json();
  //     setUser(data);
  //   }
  //   fetchLoggedInUser();
  // }, []);
  return (
    <>
      {props.show ? (
        <div>
          <h3>Mitt konto</h3>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};
