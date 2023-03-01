

import React from "react";
import { Link } from "react-router-dom";

const DogList = ({ dogs }) => {
  return (
    <div>
      {dogs.map((dog) => (
        <div key={dog.name}>
          <img src={dog.src} alt={dog.name} />
          <h2>{dog.name}</h2>
          <Link to={`/dogs/${dog.name}`}>See {dog.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default DogList;





