import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import axios from "axios";
import { Link } from "react-router-dom";

const CarouselReact = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [WheelGesturesPlugin()]);
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
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {moviesTrending.map((movie, index) => (
            <div key={index} className="embla__slide">
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                  alt={"Poster of" + movie.original_title}
                  className="embla__slide__img"
                />
                <h2 className="embla__slide__title">{movie.original_title}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarouselReact;
