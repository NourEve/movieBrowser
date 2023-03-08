import React from "react";

const Header = () => {
  return (
    <div className="flex m-[5%] justify-between">
      <h1 className="text-white font-lato text-[7vw]	font-normal">
        <span className="gradient-text">Movie</span>+
      </h1>
      <img
        className="w-[10%]"
        src="../public/assets/images/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
        alt="TheMovieDB"
      />
    </div>
  );
};

export default Header;
