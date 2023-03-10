import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Collections from "./Collections";
import Recommanded from "./Recommanded";
import PlayerTrailer from "./PlayerTrailer";
import IconClock from "../assets/IconClock";
import IconStarGray from "../assets/IconStarGray";

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
    <div className="showFilm">
      <img
        src={"https://image.tmdb.org/t/p/w500" + movieOne.poster_path}
        alt={"Poster of " + movieOne.original_title}
        className="showFilm__poster"
      />

      <div className="showFilm__divAll">
        <h3 className="showFilm__divAll__title">{movieOne.original_title}</h3>

        <section className="showFilm__timeAndNote">
          <IconClock />
          <p className="showFilm__timeAndNote--text">
            {movieOne.runtime} minutes
          </p>
          <IconStarGray />
          <p className="showFilm__timeAndNote--text">
            {Math.round(movieOne.vote_average * 10) / 10} (IMDb)
          </p>
        </section>

        <section className="showFilm__dateAndGenre">
          <div className="showFilm__dateAndGenre__date">
            <h4 className="showFilm__dateAndGenre--title">Release date</h4>
            <p className="showFilm__dateAndGenre__date--text">
              {movieOne.release_date}
            </p>
          </div>

          <div className="showFilm__dateAndGenre__genre">
            <h4 className="showFilm__dateAndGenre--title">Genre</h4>
            <div className="showFilm__dateAndGenre__genre--allLink">
              {genreOne.map((genre, index) => (
                <Link
                  key={index}
                  to={`/catalog/genre/${genre.id}`}
                  className="showFilm__dateAndGenre__genre--link"
                >
                  {genre.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="showFilm__synopsis">
          <h4 className="showFilm__synopsis--title">Synopsis</h4>
          <p className="showFilm__synopsis--text">{movieOne.overview}</p>
        </section>

        <section className="showFilm__video">
          <h4 className="showFilm__video--title">Trailer</h4>
          {videoOne ? (
            <PlayerTrailer key={videoOne.id} videoOne={videoOne} />
          ) : (
            <p className="showFilm__video--error">No trailer found</p>
          )}
        </section>

        {Object.keys(collection).length > 0 ? (
          <section className="showFilm__collection">
            <h4 className="showFilm__collection--title">Collection</h4>
            <Collections idCollection={collection.id} />
          </section>
        ) : (
          <section>
            <h4>Related Movies</h4>
            <Recommanded idMovie={movieOne.id} />
          </section>
        )}
      </div>
    </div>
  );
};

export default ShowFilm;
