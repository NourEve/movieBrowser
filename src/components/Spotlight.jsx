import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import IconPlay from "../assets/IconPlay";

const Spotlight = () => {
  const [movieRecommendation, setMovieRecommendation] = useState([]);
  const [movieOne, setMovieOne] = useState({});

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/movie/popular?api_key=af0a6e78cf2f5300726297b7f6e4d22c&language=en-US&page=1",
      responseType: "json",
    }).then((res) => {
      setMovieRecommendation(res.data.results);
    });
  }, []);

  useEffect(() => {
    if (movieRecommendation.length > 0) {
      const randomIndex = getRndInteger(0, movieRecommendation.length - 1);
      setMovieOne(movieRecommendation[randomIndex]);
    }
  }, [movieRecommendation]);

  return (
    <div className="spotlight">
      <Link to={`/movie/${movieOne.id}`} className="spotlight__link">
        <img
          src={"https://image.tmdb.org/t/p/w500" + movieOne.backdrop_path}
          alt={"Poster of " + movieOne.original_title}
          className="spotlight__picture"
        />
        <div className="spotlight__titles">
          <IconPlay
            className="spotlight__titles--play"
            width="25px"
            height="25px"
          />
          <div className="spotlight__titles--display">
            <h2 className="spotlight__titles--subtitle">Movie Spotlight</h2>
            <h3 className="spotlight__titles--movie">
              {movieOne.original_title}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Spotlight;
