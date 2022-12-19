import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context";

export const Start = () => {
  const { isLoggedIn, login, logout } = useContext(AuthContext);
  console.log(isLoggedIn, login, logout);

  if (!isLoggedIn) {
    return <div>Please login to view this page</div>;
  }

  return <div>Welcome!</div>;
};
