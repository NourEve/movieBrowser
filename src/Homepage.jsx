import React, { useEffect, useState } from "react";
import CarouselReact from "./components/CarouselReact";
import Header from "./components/Header";
import axios from "axios";
import Spotlight from "./components/Spotlight";
import Navigation from "./components/Navigation";

const Homepage = () => {
  return (
    <>
      <Header />
      <Spotlight />
      <CarouselReact />
      <Navigation />
    </>
  );
};

export default Homepage;
