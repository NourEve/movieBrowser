import React, { useRef, useState } from "react";

const SearchBar = ({ inputRef, onClick }) => {
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Search here" id="search" />
      <button onClick={onClick}>Search</button>
    </div>
  );
};

export default SearchBar;
