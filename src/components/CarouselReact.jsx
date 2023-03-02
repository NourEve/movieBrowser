import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import axios from "axios";

const CarouselReact = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
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
    <>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {moviesTrending.map((movie, index) => (
            <div key={index} className="embla__slide">
              <h2>{movie.original_title}</h2>
              <img
                src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                alt={"Poster of" + movie.original_title}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CarouselReact;
