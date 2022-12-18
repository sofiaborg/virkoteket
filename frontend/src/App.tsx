import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/layout";
import { Mypages } from "./components/pages/mypages";
import { Start } from "./components/pages/start";
import { Register } from "./components/pages/register";
import { Login } from "./components/pages/login";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/mypages" element={<Mypages />}></Route>
            <Route path="/patterns" element={<Start />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
