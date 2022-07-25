import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "../src/styles/global";
import { Home } from "../src/pages/Home/";
import { HeroDetail } from "./pages/HeroDetail";
import { Comics } from "../src/pages/Comics";
import { ComicsDetail } from "./pages/ComicsDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/herodetail/:id" element={<HeroDetail />} />
          <Route path="/comicsdetail/:id" element={<ComicsDetail />} />
        </Routes>
        <GlobalStyle />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
