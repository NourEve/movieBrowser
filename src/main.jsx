import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./Homepage";
import "./styles/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchPage from "./SearchPage";
import ProfilePage from "./ProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <Homepage />,
  },
  {
    path: "search",
    element: <SearchPage />,
  },
  {
    path: "profile",
    element: <ProfilePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
