import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/layout";
import { StartLayout } from "./components/layout/StartLayout";
import { Mypages } from "./components/pages/MyPages";
import { Start } from "./components/pages/Start";
import { RegisterPage } from "./components/pages/RegisterZod";
import { LoginPage } from "./components/pages/LoginZod";
import { SinglePattern } from "./components/components/startPageComponents/SinglePattern";
import "./App.css";
import "./index.css";

// import {
//   postsContext,
//   IPostsContext,
//   defaultValue,
// } from "./contexts/products-context";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartLayout />}>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
          </Route>
          <Route path="/" element={<Layout />}>
            <Route path="/mypages/*" element={<Mypages />}></Route>
            <Route path="/patterns" element={<Start />}></Route>
            <Route path="/patterns/:id" element={<SinglePattern />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
