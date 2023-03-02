import React from "react";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__title">
        <span className="header__title--color">Movie</span>+
      </h1>
      <img
        src="./public/assets/images/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
        alt="TheMovieDB"
      />
    </div>
  );
};

export default Header;
