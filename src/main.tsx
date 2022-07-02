import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "../src/pages/Home/";
import GlobalStyle from "../src/styles/global";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Home />
    <GlobalStyle />
  </React.StrictMode>
);
