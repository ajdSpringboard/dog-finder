import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({ dogs }) => {
  return (
    <nav>
      <ul>
        {dogs.map((dog) => (
          <li key={dog.name}>
            <NavLink to={`/dogs/${dog.name.toLowerCase()}`}>
              {dog.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
