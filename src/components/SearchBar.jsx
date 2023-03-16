import React from "react";
import { Link } from "react-router-dom";
import IconSearchOutline from "../assets/IconSearchOutline";
import MediaQuery from "react-responsive";

const SearchBar = ({ inputRef, onClick }) => {
  return (
    <div className="searchBar">
      <button className="searchBar__button" onClick={onClick}>
        <Link className="searchBar__button__link" to={`search`}>
          <MediaQuery maxWidth={480}>
            <IconSearchOutline width="6vw" height="6vw" />
          </MediaQuery>
          <MediaQuery minWidth={481} maxWidth={1024}>
            <IconSearchOutline width="4vw" height="4vw" />
          </MediaQuery>
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
