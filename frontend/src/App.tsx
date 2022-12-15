import React from "react";

import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout/layout";
import { Start } from "./components/pages/start";
import { Mypages } from "./components/pages/mypages";
import { Register } from "./components/pages/register";
import { Login } from "./components/pages/login";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Start />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/mypages/mypatterns" element={<Mypages />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
