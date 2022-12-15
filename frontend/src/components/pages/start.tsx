import React, { FC } from "react";
import { RouteComponentProps } from "react-router-dom";

type SomeComponentProps = RouteComponentProps;

export const Start: FC<SomeComponentProps> = ({ history }) => {
  const logout = () => {
    localStorage.clear();
    history.push("/login");
  };
  return (
    <>
      <div>
        <div>
          <h3>Home</h3>
        </div>
        <div>
          <button type="submit" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
      <div>
        <div>
          <p>Hello User👋</p>
        </div>
      </div>
    </>
  );
};
