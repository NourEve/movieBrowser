import React from "react";
import IconBxSearch from "../assets/IconBxSearch";
import IconHome from "../assets/IconHome";
import IconProfile from "../assets/IconProfile";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink to={"/"}>
        <IconHome width="9vw" height="9vw" />
      </NavLink>
      <NavLink to={"/catalog"}>
        <IconBxSearch width="9vw" height="9vw" />
      </NavLink>
      <NavLink to={"/profile"}>
        <IconProfile width="9vw" height="9vw" />
      </NavLink>
    </nav>
  );
};

export default Navigation;
