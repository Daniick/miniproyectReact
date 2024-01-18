import React, { useState, useEffect } from "react";
import Imagen from "./imagen";
import Navegacion from "../Navegacion";
import Cuerpo from "../Cuerpo";

const Imagenes = () => {
  const [data, setData] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/stays.json");
        const jsonData = await response.json();
        setData(jsonData.slice(0, 6));
        setFilteredCategories(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const search = () => {
    const filteredData = data.filter((imageData) =>
      imageData.city.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredCategories(filteredData);
  };

  return (
    <section>
      <Navegacion
        searchValue={searchValue}
        setSearchValue={(e) => setSearchValue(e.target.value)}
        search={search}
      />

      <Cuerpo className="sm:mb-56" />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 ">
        {filteredCategories.map((imageData, index) => (
          <Imagen key={index} {...imageData} />
        ))}
      </div>
    </section>
  );
};

export default Imagenes;
