import React from "react";

const Header = () => {
  return (
    <div className="header">
      <h1 className="text-white font-lato text-2xl	font-normal">
        <span className="gradient-text">Movie</span>+
      </h1>
      <img
        className="header__logo"
        src="../public/assets/images/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
        alt="TheMovieDB"
      />
    </div>
  );
};

export default Header;
