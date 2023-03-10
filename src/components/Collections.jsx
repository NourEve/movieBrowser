import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Collections = ({ idCollection }) => {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/collection/${idCollection}?api_key=af0a6e78cf2f5300726297b7f6e4d22c&language=en-US`,
      responseType: "json",
    }).then((res) => setCollection(res.data.parts));
  }, [idCollection]);

  return (
    <div>
      {collection.map((movie, index) => (
        <Link key={index} to={`/movie/${movie.id}`}>
          <div>
            <img
              src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
              alt={"Poster of " + movie.original_title}
            />
            <h5>{movie.original_title}</h5>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Collections;
