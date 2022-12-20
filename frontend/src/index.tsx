import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./contexts/auth-context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
