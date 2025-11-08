import React, { useEffect, useState } from "react";
import PlantList from "./PlantList";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((err) => console.error("Fetch Error:", err));
  }, []);

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  return (
    <>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search onSearch={setSearch} />
      <PlantList plants={filteredPlants} />
    </>
  );
}

export default PlantPage;

