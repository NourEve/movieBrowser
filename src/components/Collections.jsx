import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { format } from "date-fns";

const Collections = ({ idCollection }) => {
  const [collection, setCollection] = useState([]);
  const [emblaRef] = useEmblaCarousel({ loop: false, skipSnaps: true }, [
    WheelGesturesPlugin(),
  ]);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/collection/${idCollection}?api_key=af0a6e78cf2f5300726297b7f6e4d22c&language=en-US`,
      responseType: "json",
    }).then((res) => setCollection(res.data.parts));
  }, [idCollection]);

  return (
    <section className="collection collection--carousel">
      <div className="collection__embla" ref={emblaRef}>
        <div className="collection__embla__container">
          {collection.map((movie, index) => (
            <div key={index} className="collection__embla__slide">
              <Link className="collection__link" to={`/movie/${movie.id}`}>
                <img
                  src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
                  alt={"Poster of " + movie.original_title}
                  className="collection__link__img"
                />
                <h5 className="collection__link__title">
                  {movie.original_title}
                  <span className="childrenGenre__link__title childrenGenre__link__title--gray">
                    {" (" +
                      (movie.release_date
                        ? format(new Date(movie.release_date), "yyyy")
                        : "") +
                      ")"}
                  </span>
                </h5>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
