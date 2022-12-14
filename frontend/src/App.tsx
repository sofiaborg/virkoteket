import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Layout } from "./components/pages/layout";
import { Start } from "./components/start";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Start />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
