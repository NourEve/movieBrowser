import React from "react";
import { useOutletContext } from "react-router-dom";

const SearchMovie = () => {
  const [updated, setUpdated] = useOutletContext();

  return (
    <div>
      <p>What are we looking at today?</p>
      <p>{updated}</p>
    </div>
  );
};

export default SearchMovie;
