import React from "react";
import logo from "../../public/assets/TMBD.svg";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__title">
        <span className="header__title--color">Movie</span>+
      </h1>
      <img className="header__logo" src={logo} alt="TheMovieDB" />
    </div>
  );
};

export default Header;
