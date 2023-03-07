import React from "react";
import IconBxSearch from "../assets/IconBxSearch";
import IconHome from "../assets/IconHome";
import IconProfile from "../assets/IconProfile";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <NavLink to={"/"}>
        <IconHome width="50px" height="50px" onClick={() => alert("pink")} />
      </NavLink>
      <NavLink to={"/catalog"}>
        <IconBxSearch width="50px" height="50px" />
      </NavLink>
      <NavLink to={"/profile"}>
        <IconProfile width="50px" height="50px" />
      </NavLink>
    </nav>
  );
};

export default Navigation;
