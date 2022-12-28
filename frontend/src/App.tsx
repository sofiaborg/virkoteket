import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/layout";
import { Mypages } from "./components/pages/MyPages";
import { Start } from "./components/pages/Start";
import { Register } from "./components/pages/Register";
import { RegisterPage } from "./components/pages/RegisterZod";
import { LoginPage } from "./components/pages/LoginZod";
import { Login } from "./components/pages/Login";
import {
  postsContext,
  IPostsContext,
  defaultValue,
} from "./contexts/products-context";

export const App = () => {
  const [postsState, setPostsState] = useState<IPostsContext>(defaultValue);
  return (
    <postsContext.Provider value={postsState}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route path="/mypages" element={<Mypages />}></Route>
            <Route path="/patterns" element={<Start />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </postsContext.Provider>
  );
};
