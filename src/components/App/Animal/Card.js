import React from 'react';


export default function AnimalCard( {
    additional,
    diet,
    name,
    scientificName,
    size,
    showAdditional,
  }) {
    return (
      <div>
        <h2>{name}</h2>
       
        <h4>{size}kg</h4>
        <button onClick={() => showAdditional(additional)}>More Info</button>
       
       
      </div>
    );
  }
