import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import Friend from "./pages/Friend";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "friends/:friendsId",
    element: <Friend />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>
);
