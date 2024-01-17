import React, { useState, useEffect } from "react";
import Imagen from "./imagen";

const Imagenes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/stays.json");
        const jsonData = await response.json();
        setData(jsonData.slice(0, 6));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {data.map((imageData, index) => (
        <Imagen key={index} {...imageData} />
      ))}
    </div>
  );
};

export default Imagenes;
