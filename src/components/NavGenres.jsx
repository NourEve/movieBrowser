import { NavLink } from "react-router-dom";

const NavGenres = ({ filterGenre }) => {
  return (
    <div>
      <nav className="navGenre">
        {filterGenre.map((genre, index) => (
          <NavLink
            className="navGenre__link"
            key={index}
            to={`genre/${genre.id}`}
          >
            {genre.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default NavGenres;
