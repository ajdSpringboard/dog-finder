import React from "react";
import { useParams } from "react-router-dom";


const DogDetails = ({ dogs }) => {
  const { name } = useParams(); // Get the current dog's name from the URL

  const dog = name ? dogs.find((d) => d.name.toLowerCase() === name.toLowerCase()) : undefined // Find the dog object that matches the name

  if (!dog) {
    return <h2>Sorry, that dog was not found</h2>;
  }

  return (
    <div>
      <h2>{dog.name}</h2>
      <img src={dog.src} alt={dog.name} />
      <h3>{dog.age} years old</h3>
      <ul>
        {dog.facts.map((fact, i) => (
          <li key={i}>{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default DogDetails