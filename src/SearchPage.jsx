import React, { useEffect, useRef, useState } from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import NavGenres from "./components/NavGenres";
import { Outlet, redirect } from "react-router-dom";
import axios from "axios";

const SearchPage = () => {
  const [filterGenre, setFilterGenre] = useState([]);
  const [updated, setUpdated] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/genre/movie/list?api_key=af0a6e78cf2f5300726297b7f6e4d22c&language=en-US",
      responseType: "json",
    }).then((res) => {
      setFilterGenre(res.data.genres);
    });
  }, []);

  const handleClick = () => {
    //redirect("/catalog/search");
    setUpdated(inputRef.current.value);
  };

  return (
    <div>
      <Header />
      <SearchBar inputRef={inputRef} onClick={handleClick} />
      <NavGenres filterGenre={filterGenre} />
      <Outlet context={[updated, setUpdated]} />
      <Navigation />
    </div>
  );
};

export default SearchPage;
