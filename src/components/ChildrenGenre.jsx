import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

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
    <div>
      {filterGenre.map((movie, index) => (
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
  );
};

export default ChildrenGenre;
