import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Collections from "./Collections";
import Recommanded from "./Recommanded";

const ShowFilm = () => {
  const { movieId } = useParams();
  const [movieOne, setMovieOne] = useState([]);
  const [genreOne, setGenreOne] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/${movieId}?api_key=af0a6e78cf2f5300726297b7f6e4d22c&language=en-US`,
      responseType: "json",
    }).then((res) => setMovieOne(res.data));
  }, [movieId]);

  useEffect(() => {
    if (movieOne && movieOne.genres) {
      setGenreOne(movieOne.genres);
    }
  }, [movieOne]);

  useEffect(() => {
    if (movieOne && movieOne.belongs_to_collection) {
      setCollection(movieOne.belongs_to_collection);
    }
  }, [movieOne]);

  return (
    <div>
      <img
        src={"https://image.tmdb.org/t/p/w500" + movieOne.poster_path}
        alt={"Poster of" + movieOne.original_title}
      />
      <h3>{movieOne.original_title}</h3>
      <div>
        <p>{movieOne.runtime} minutes</p>
        <p>{movieOne.vote_average} (IMDb)</p>
      </div>
      <div>
        <div>
          <h4>Release date</h4>
          <p>{movieOne.release_date}</p>
        </div>
        <div>
          <h4>Genre</h4>
          {genreOne.map((genre, index) => (
            <Link key={index} to={`/search/genre/${genre.id}`}>
              {genre.name}
            </Link>
          ))}
        </div>
        <div>
          <h4>Synopsis</h4>
          <p>{movieOne.overview}</p>
        </div>

        {Object.keys(collection).length > 0 ? (
          <div>
            <h4>Collection</h4>
            <Collections idCollection={collection.id} />
          </div>
        ) : (
          <div>
            <h4>Related Movies</h4>
            <Recommanded idMovie={movieOne.id} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowFilm;
