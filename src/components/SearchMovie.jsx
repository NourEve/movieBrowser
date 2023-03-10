import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { format } from "date-fns";

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
    <div className="childrenGenre">
      {movieSearch.map((movie, index) => (
        <Link
          key={index}
          to={`/movie/${movie.id}`}
          className="childrenGenre__link"
        >
          <img
            src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            alt={"Poster of " + movie.original_title}
            className="childrenGenre__link__img"
          />
          <h3 className="childrenGenre__link__title">
            {movie.original_title}
            <span className="childrenGenre__link__title childrenGenre__link__title--gray">
              {" (" +
                (movie.release_date
                  ? format(new Date(movie.release_date), "yyyy")
                  : "") +
                ")"}
            </span>
          </h3>
        </Link>
      ))}
    </div>
  );
};

export default SearchMovie;
