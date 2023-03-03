import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Recommanded = ({ idMovie }) => {
  const [recommandation, setRecommandation] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/${idMovie}/similar?api_key=af0a6e78cf2f5300726297b7f6e4d22c&language=en-US&page=1`,
      responseType: "json",
    }).then((res) => setRecommandation(res.data.results));
  }, [idMovie]);

  return (
    <div>
      {recommandation.map((movie, index) => (
        <Link key={index} to={`/movie/${movie.id}`}>
          <div>
            <img
              src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
              alt={"Poster of" + movie.original_title}
            />
            <h5>{movie.original_title}</h5>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Recommanded;
