import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import UserApp from "./UserApp";
import AdminApp from "./AdminApp";

const rootElement = document.getElementById("root");

if (window.location.pathname.startsWith("/admin")) {
  ReactDOM.render(
    <BrowserRouter>
      <AdminApp />
    </BrowserRouter>,
    rootElement
  );
} else {
  ReactDOM.render(
    <BrowserRouter>
      <UserApp />
    </BrowserRouter>,
    rootElement
  );
}
