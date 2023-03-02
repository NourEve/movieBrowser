import React from "react";
import IconBxSearch from "../assets/IconBxSearch";
import IconHome from "../assets/IconHome";
import IconProfile from "../assets/IconProfile";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to={"/"}>
        <IconHome width="50px" height="50px" onClick={() => alert("pink")} />
      </NavLink>
      <NavLink to={"/search"}>
        <IconBxSearch width="50px" height="50px" />
      </NavLink>
      <NavLink to={"/profile"}>
        <IconProfile width="50px" height="50px" />
      </NavLink>
    </div>
  );
};

export default Navigation;
