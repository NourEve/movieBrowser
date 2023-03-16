import React from "react";
import IconBxSearch from "../assets/IconBxSearch";
import IconHome from "../assets/IconHome";
import IconProfile from "../assets/IconProfile";
import { NavLink } from "react-router-dom";
import MediaQuery from "react-responsive";

const Navigation = () => {
  return (
    <nav className="navigation">
      <MediaQuery maxWidth={480}>
        <NavLink to={"/"}>
          <IconHome width="9vw" height="9vw" />
        </NavLink>
        <NavLink to={"/catalog"}>
          <IconBxSearch width="9vw" height="9vw" />
        </NavLink>
        <NavLink to={"/profile"}>
          <IconProfile width="9vw" height="9vw" />
        </NavLink>
      </MediaQuery>
      <MediaQuery minWidth={481} maxWidth={768}>
        <NavLink to={"/"}>
          <IconHome width="6vw" height="6vw" />
        </NavLink>
        <NavLink to={"/catalog"}>
          <IconBxSearch width="6vw" height="6vw" />
        </NavLink>
        <NavLink to={"/profile"}>
          <IconProfile width="6vw" height="6vw" />
        </NavLink>
      </MediaQuery>
    </nav>
  );
};

export default Navigation;
