import React from "react";
import { Link } from "react-router-dom";
import IconSearchOutline from "../assets/IconSearchOutline";

const SearchBar = ({ inputRef, onClick }) => {
  return (
    <div className="searchBar">
      <button className="searchBar__button" onClick={onClick}>
        <Link className="searchBar__button__link" to={`search`}>
          <IconSearchOutline width="6vw" height="6vw" />
        </Link>
      </button>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search here"
        id="search"
        className="searchBar__input"
      />
    </div>
  );
};

export default SearchBar;
