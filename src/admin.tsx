import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes } from "react-router-dom";
import AdminApp from "./AdminApp";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { tmdbApi } from "@/services/TMDB";
import GlobalContextProvider from "@/context/globalContext";
import ThemeProvider from "@/context/themeContext";
import "./index.css";

ReactDOM.createRoot(
  document.getElementById("admin-root") as HTMLElement
).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApiProvider api={tmdbApi}>
        <ThemeProvider>
          <GlobalContextProvider>
            <Routes>
              <AdminApp />
            </Routes>
          </GlobalContextProvider>
        </ThemeProvider>
      </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>
);
