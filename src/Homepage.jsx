import React, { useEffect, useState } from "react";
import CarouselReact from "./components/CarouselReact";
import Header from "./components/Header";
import axios from "axios";
import Spotlight from "./components/Spotlight";

const Homepage = () => {
  const [data, setData] = useState([]);
  const [moviesTrending, setMoviesTrending] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/trending/movie/week?api_key=af0a6e78cf2f5300726297b7f6e4d22c",
      responseType: "json",
    }).then((res) => {
      setData(res.data);
      setMoviesTrending(res.data.results);
    });
  }, []);

  console.log(moviesTrending);

  return (
    <>
      <Header />
      <Spotlight />
      <CarouselReact movies={moviesTrending} />
    </>
  );
};

export default Homepage;
