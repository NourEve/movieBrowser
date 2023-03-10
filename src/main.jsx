import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchPage from "./SearchPage";
import ProfilePage from "./ProfilePage";
import ChildrenGenre from "./components/ChildrenGenre";
import ShowFilm from "./ShowFilm";
import SearchMovie from "./components/SearchMovie";
import "./index.scss";
import Today from "./components/Today";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <Homepage />,
  },
  {
    path: "catalog",
    element: <SearchPage />,
    children: [
      {
        path: "",
        element: <Today />,
      },
      {
        path: "search",
        element: <SearchMovie />,
      },
      {
        path: "genre/:genreId",
        element: <ChildrenGenre />,
      },
    ],
  },
  {
    path: "profile",
    element: <ProfilePage />,
  },
  {
    path: "movie/:movieId",
    element: <ShowFilm />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
