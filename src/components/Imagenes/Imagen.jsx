import React from "react";
import "./Imagen.css";

const Imagen = ({ photo, superHost, type, title, rating, beds }) => {
  return (
    <div className="mt-3  rounded   mb-2">
      <div className=" p-4">
        <img
          src={photo}
          alt="apartamento"
          className="w-full h-48 object-cover"
        />
        <div className="">
          <p className="text-sm  font-bold text-teal-500 mb-2">{superHost}</p>
          <h6 className="text-base mb-2">
            {type}.{beds}
          </h6>
          <p className="text-base text-gray-700 mb-2">{rating}</p>
        </div>
        <h4 className="text-xl font-bold mb-0">{title}</h4>
      </div>
    </div>
  );
};

export default Imagen;
