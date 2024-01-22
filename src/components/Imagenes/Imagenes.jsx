// Importar las dependencias necesarias
import React, { useState, useEffect } from "react";
import Imagen from "./imagen";
import Navegacion from "../Navegacion";
import Cuerpo from "../Cuerpo";
import "./Imagen.css";

const Imagenes = () => {
  const [data, setData] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [guestsValue, setGuestsValue] = useState(0);
  const [uniqueCities, setUniqueCities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/stays.json");
        const jsonData = await response.json();
        setData(jsonData);
        setFilteredCategories(jsonData);

        // Extraer ciudades únicas
        const uniqueCities = Array.from(
          new Set(jsonData.map((imageData) => imageData.city))
        );
        setUniqueCities(uniqueCities);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const search = () => {
    const filteredData = data.filter((imageData) => {
      const cityMatch = imageData.city
        .toLowerCase()
        .includes(searchValue.toLowerCase());
      const guestsMatch =
        guestsValue === "" ||
        (imageData.maxGuests !== null &&
          imageData.maxGuests <= parseInt(guestsValue, 10));

      console.log(
        `City: ${imageData.city}, City Match: ${cityMatch}, Guests Match: ${guestsMatch}`
      );
      return cityMatch && guestsMatch;
    });

    console.log("Filtered Data:", filteredData);

    setFilteredCategories(filteredData);
  };

  return (
    <section className="mx-5">
      <Navegacion
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        guestsValue={guestsValue}
        setGuestsValue={setGuestsValue}
        search={search}
        uniqueCities={uniqueCities}
      />
      <div className="mid">
        <Cuerpo />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {filteredCategories.slice(0, 6).map((imageData, index) => (
          <Imagen key={index} {...imageData} />
        ))}
      </div>
    </section>
  );
};

export default Imagenes;
