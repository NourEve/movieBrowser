import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const SearchMovie = () => {
  const [updated, setUpdated] = useOutletContext();
  const [movieSearch, setMovieSearch] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/search/movie?api_key=af0a6e78cf2f5300726297b7f6e4d22c&language=en-US&query=${updated}&page=1&include_adult=false`,
      responseType: "json",
    }).then((res) => {
      setMovieSearch(res.data.results);
    });
  }, [updated]);

  return (
    <div>
      {movieSearch.length === 0 && <p>What are we looking at today?</p>}
      <div>
        {movieSearch.map((movie, index) => (
          <Link key={index} to={`/movie/${movie.id}`}>
            <div>
              <img
                src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                alt={"Poster of" + movie.original_title}
              />
              <h3>{movie.original_title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchMovie;
