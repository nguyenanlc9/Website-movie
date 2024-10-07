import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LazyMotion, domAnimation } from "framer-motion";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { tmdbApi } from "@/services/TMDB";
import GlobalContextProvider from "@/context/globalContext";
import ThemeProvider from "@/context/themeContext";
import UserApp from "./UserApp";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApiProvider api={tmdbApi}>
        <ThemeProvider>
          <GlobalContextProvider>
            <LazyMotion features={domAnimation}>
              <Routes>
                <Route path="/*" element={<UserApp />} />
              </Routes>
            </LazyMotion>
          </GlobalContextProvider>
        </ThemeProvider>
      </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>
);
