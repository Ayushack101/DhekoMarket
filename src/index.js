import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { DarkModeContextProvider } from './context/darkModeContext';
import('preline')

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DarkModeContextProvider>
    <App />
  </DarkModeContextProvider>
);

reportWebVitals();
