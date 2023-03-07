import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = ({ inputRef, onClick }) => {
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Search here" id="search" />
      <button onClick={onClick}>
        <Link to={`search`}>Search</Link>
      </button>
    </div>
  );
};

export default SearchBar;
