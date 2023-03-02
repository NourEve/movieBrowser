import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const CarouselReact = ({ movies }) => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {movies.map((movie, index) => (
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
