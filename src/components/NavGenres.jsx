import { NavLink } from "react-router-dom";

const NavGenres = ({ filterGenre }) => {
  return (
    <div>
      <nav>
        {filterGenre.map((genre, index) => (
          <NavLink key={index} to={`genre/${genre.id}`}>
            {genre.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default NavGenres;
