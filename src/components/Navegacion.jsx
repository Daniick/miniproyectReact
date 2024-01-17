import React, { useState, useRef, useEffect } from "react";
import { logo } from "../assets";

const Navegacion = () => {
  const [anchoInputCity, setAnchoInputCity] = useState(40);
  const [anchoInputGuests, setAnchoInputGuests] = useState(40);

  const inputCityRef = useRef(null);
  const inputGuestsRef = useRef(null);

  const ampliarInputCity = () => {
    setAnchoInputCity(800);
    setAnchoInputGuests(40); // Cerrar el otro input
  };

  const ampliarInputGuests = () => {
    setAnchoInputGuests(800);
    setAnchoInputCity(40); // Cerrar el otro input
  };

  const handleClickOutside = (event) => {
    if (
      inputCityRef.current &&
      !inputCityRef.current.contains(event.target) &&
      inputGuestsRef.current &&
      !inputGuestsRef.current.contains(event.target)
    ) {
      // Hacer algo al hacer clic fuera de los inputs (restablecer anchos en este caso)
      setAnchoInputCity(40);
      setAnchoInputGuests(40);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="" className="w-28 object-contain" />
        <div className="mt-5">
          <input
            type="text"
            className="url_input_1"
            placeholder="City"
            style={{ width: `${anchoInputCity}px`, transition: "width 0.5s" }}
            onClick={ampliarInputCity}
            ref={inputCityRef}
          />
          <input
            type="text"
            className="url_input"
            placeholder="Add guests"
            style={{ width: `${anchoInputGuests}px`, transition: "width 0.5s" }}
            onClick={ampliarInputGuests}
            ref={inputGuestsRef}
          />
          <button type="button" onClick={() => ""} className="black_btn">
            S
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navegacion;
