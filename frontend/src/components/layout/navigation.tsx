import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <Link to={"/patterns"}>
        <h3>Logo</h3>
      </Link>

      <Link to={"/mypages/createpattern"}>
        <h3>mina sidor</h3>
      </Link>
    </>
  );
};
