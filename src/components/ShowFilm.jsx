import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Collections from "./Collections";
import Recommanded from "./Recommanded";
import PlayerTrailer from "./PlayerTrailer";

const ShowFilm = () => {
  const { movieId } = useParams();
  const [movieOne, setMovieOne] = useState([]);
  const [genreOne, setGenreOne] = useState([]);
  const [collection, setCollection] = useState([]);
  const [videoMovie, setVideoMovie] = useState([]);
  const [videoOne, setVideoOne] = useState(null);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/${movieId}?api_key=af0a6e78cf2f5300726297b7f6e4d22c&language=en-US&append_to_response=videos`,
      responseType: "json",
    }).then((res) => setMovieOne(res.data));
  }, [movieId]);

  useEffect(() => {
    if (movieOne) {
      setGenreOne(movieOne.genres || []);
      setCollection(movieOne.belongs_to_collection || {});
      setVideoMovie(movieOne.videos?.results || []);
    }
  }, [movieOne]);

  useEffect(() => {
    if (videoMovie) {
      videoMovie.forEach((video) => {
        if (video.type === "Trailer") {
          setVideoOne(video);
        }
      });
    }
  }, [videoMovie]);

  return (
    <div>
      <img
        src={"https://image.tmdb.org/t/p/w500" + movieOne.poster_path}
        alt={"Poster of " + movieOne.original_title}
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
        <div>
          <h4>Video</h4>
          {videoOne ? (
            <PlayerTrailer key={videoOne.id} videoOne={videoOne} />
          ) : (
            <p>No trailer found</p>
          )}
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
