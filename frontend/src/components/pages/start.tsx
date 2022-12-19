import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context";

export const Start = () => {
  const { isLoggedIn, login, logout } = useContext(AuthContext);
  const userInfo = sessionStorage.getItem("userInfo");

  if (!isLoggedIn) {
    return <div>Please login to view this page</div>;
  }

  return <div>Welcome {userInfo}!</div>;
};
