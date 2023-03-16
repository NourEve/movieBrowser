import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import ClassNames from "embla-carousel-class-names";
import axios from "axios";
import { Link } from "react-router-dom";
import IconStar from "../assets/IconStar";
import MediaQuery from "react-responsive";

const CarouselReact = () => {
  const classNamesOptions = { selected: "movieScale" };
  const [emblaRef] = useEmblaCarousel({ loop: false, skipSnaps: true }, [
    WheelGesturesPlugin(),
    ClassNames(classNamesOptions),
  ]);
  const [moviesTrending, setMoviesTrending] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/trending/movie/week?api_key=af0a6e78cf2f5300726297b7f6e4d22c",
      responseType: "json",
    }).then((res) => {
      setMoviesTrending(res.data.results);
    });
  }, []);

  return (
    <section className="carousel">
      <h2 className="carousel__title">Trending</h2>
      {/* Version mobile and tablets - carousel */}
      <MediaQuery maxWidth={1024}>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {moviesTrending.map((movie, index) => (
              <div key={index} className="embla__slide">
                <Link to={`/movie/${movie.id}`}>
                  <img
                    src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                    alt={"Poster of " + movie.original_title}
                    className="embla__slide__img"
                  />
                  <div className="embla__slide__average">
                    <p className="embla__slide--subtitle">IMDb</p>
                    <div className="embla__slide--noteAndStar">
                      <IconStar width="3vw" height="3vw" />
                      <p className="embla__slide--note">
                        {Math.round(movie.vote_average * 10) / 10}
                      </p>
                    </div>
                  </div>
                  <div className="embla__slide__title">
                    <h2>{movie.original_title}</h2>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </MediaQuery>
      {/* Version desktop */}
      <MediaQuery minWidth={1025}>
        <div className="trendingDesktop">
          {moviesTrending.map((movie, index) => (
            <div key={index} className="trendingDesktop__slide">
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                  alt={"Poster of " + movie.original_title}
                  className="trendingDesktop__slide__img"
                />
                <div className="trendingDesktop__slide__average">
                  <p className="trendingDesktop__slide--subtitle">IMDb</p>
                  <div className="trendingDesktop__slide--noteAndStar">
                    <IconStar width="1.5vw" height="1.5vw" />
                    <p className="trendingDesktop__slide--note">
                      {Math.round(movie.vote_average * 10) / 10}
                    </p>
                  </div>
                </div>
                <div className="trendingDesktop__slide__title">
                  <h2>{movie.original_title}</h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </MediaQuery>
    </section>
  );
};

export default CarouselReact;
