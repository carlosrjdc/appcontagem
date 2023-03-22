import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ReactNotifications } from "react-notifications-component";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-notifications-component/dist/theme.css";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReactNotifications />
    <RouterProvider router={router} />
  </React.StrictMode>
);
