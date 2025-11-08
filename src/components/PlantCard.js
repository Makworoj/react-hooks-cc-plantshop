import React, { useState } from "react";

function PlantCard({ plant }) {
  const [isStock, setIsStock] = useState(true);

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      <button onClick={() => setIsStock(!isStock)}>
        {isStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
