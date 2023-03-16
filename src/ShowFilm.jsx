import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Collections from "./components/Collections";
import Recommanded from "./components/Recommanded";
import PlayerTrailer from "./components/PlayerTrailer";
import IconClock from "./assets/IconClock";
import IconStarGray from "./assets/IconStarGray";
import IconArrow from "./assets/IconArrow";
import { useNavigate } from "react-router-dom";
import MediaQuery from "react-responsive";

const ShowFilm = () => {
  const { movieId } = useParams();
  const [movieOne, setMovieOne] = useState([]);
  const [genreOne, setGenreOne] = useState([]);
  const [collection, setCollection] = useState([]);
  const [videoMovie, setVideoMovie] = useState([]);
  const [videoOne, setVideoOne] = useState(null);
  const navigate = useNavigate();

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
      <button className="showFilm__iconArrow" onClick={() => navigate(-1)}>
        <MediaQuery maxWidth={480}>
          <IconArrow width="6vw" height="6vw" />
        </MediaQuery>
        <MediaQuery minWidth={481} maxWidth={1024}>
          <IconArrow width="5vw" height="5vw" />
        </MediaQuery>
        <MediaQuery minWidth={1025}>
          <IconArrow width="2.5vw" height="2.5vw" />
        </MediaQuery>
      </button>
      <MediaQuery maxWidth={1024}>
        <img
          src={"https://image.tmdb.org/t/p/w500" + movieOne.poster_path}
          alt={"Poster of " + movieOne.original_title}
          className="showFilm__poster"
        />
      </MediaQuery>
      <MediaQuery minWidth={1025}>
        <img
          src={"https://image.tmdb.org/t/p/w500" + movieOne.backdrop_path}
          alt={"Poster of " + movieOne.original_title}
          className="showFilm__poster"
        />
      </MediaQuery>

      <div className="showFilm__divAll">
        <h3 className="showFilm__divAll__title">{movieOne.original_title}</h3>

        <div className="showFilm--desktop">
          <div className="showFilm--desktop__timeNoteDateGenreSynopsis">
            <section className="showFilm__timeAndNote">
              <MediaQuery maxWidth={768}>
                <IconClock />
              </MediaQuery>
              <MediaQuery minWidth={769} maxWidth={1024}>
                <IconClock width="3vw" height="3vw" />
              </MediaQuery>
              <MediaQuery minWidth={1025}>
                <IconClock width="1vw" height="1vw" />
              </MediaQuery>

              <p className="showFilm__timeAndNote--text">
                {movieOne.runtime} minutes
              </p>
              <MediaQuery maxWidth={768}>
                <IconStarGray />
              </MediaQuery>
              <MediaQuery minWidth={769} maxWidth={1024}>
                <IconStarGray width="3vw" height="3vw" />
              </MediaQuery>
              <MediaQuery minWidth={1025}>
                <IconStarGray width="1vw" height="1vw" />
              </MediaQuery>

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
          </div>

          <section className="showFilm__video">
            <h4 className="showFilm__video--title">Trailer</h4>
            {videoOne ? (
              <PlayerTrailer key={videoOne.id} videoOne={videoOne} />
            ) : (
              <p className="showFilm__video--error">No trailer found</p>
            )}
          </section>
        </div>

        {Object.keys(collection).length > 0 ? (
          <section className="showFilm__collection">
            <h4 className="showFilm__collection--title">Collection</h4>
            <Collections idCollection={collection.id} />
          </section>
        ) : (
          <section className="showFilm__related">
            <h4 className="showFilm__related--title">Related Movies</h4>
            <Recommanded idMovie={movieOne.id} />
          </section>
        )}
      </div>
    </div>
  );
};

export default ShowFilm;
