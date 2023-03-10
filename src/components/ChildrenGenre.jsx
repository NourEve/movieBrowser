import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const ChildrenGenre = () => {
  const { genreId } = useParams();
  const [filterGenre, setFilterGenre] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=af0a6e78cf2f5300726297b7f6e4d22c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_genres=${genreId}&with_watch_monetization_types=flatrate`,
      responseType: "json",
    }).then((res) => setFilterGenre(res.data.results));
  }, [genreId]);

  return (
    <div className="childrenGenre">
      {filterGenre.map((movie, index) => (
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

export default ChildrenGenre;
