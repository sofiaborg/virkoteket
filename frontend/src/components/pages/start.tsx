import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context";
import { CategoryFilter } from "../components/CategoryFilter";
import { AllPatterns } from "../components/AllPatterns";

export const Start = () => {
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  // useEffect(() => {
  //   const token = sessionStorage.getItem("token");
  //   fetch("http://localhost:8000/posts/getposts", {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //       mode: "no-cors",
  //     },
  //   });
  // }, []);

  if (!isLoggedIn) {
    return <div>Please login to view this page</div>;
  }

  return (
    <>
      <CategoryFilter></CategoryFilter>
      <AllPatterns></AllPatterns>;
    </>
  );
};
