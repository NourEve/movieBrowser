import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./Homepage";
import "./styles/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchPage from "./SearchPage";
import ProfilePage from "./ProfilePage";
import ChildrenGenre from "./components/ChildrenGenre";
import ShowFilm from "./components/ShowFilm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <Homepage />,
  },
  {
    path: "search",
    element: <SearchPage />,
    children: [
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
