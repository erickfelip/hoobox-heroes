import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "../src/styles/global";
import { Home } from "../src/pages/Home/";
import { HeroDetail } from "./pages/HeroDetail";
import { Comics } from "../src/pages/Comics";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/herodetail/:id" element={<HeroDetail />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>
);
