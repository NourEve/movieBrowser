import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import NavGenres from "./components/NavGenres";
import { Outlet } from "react-router-dom";
import axios from "axios";

const SearchPage = () => {
  const [filterGenre, setFilterGenre] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/genre/movie/list?api_key=af0a6e78cf2f5300726297b7f6e4d22c&language=en-US",
      responseType: "json",
    }).then((res) => {
      setFilterGenre(res.data.genres);
    });
  }, []);

  return (
    <div>
      <Header />
      <SearchBar />
      <NavGenres filterGenre={filterGenre} />
      <Outlet />
      <Navigation />
    </div>
  );
};

export default SearchPage;
