import React, { useState, useRef, useEffect } from "react";
import { logo } from "../assets";
import "./Navegacion.css";

const Navegacion = ({ searchValue, setSearchValue, search }) => {
  const [anchoInputCity, setAnchoInputCity] = useState(50);
  const [anchoInputGuests, setAnchoInputGuests] = useState(50);

  const inputCityRef = useRef(null);
  const inputGuestsRef = useRef(null);

  const ampliarInputCity = () => {
    setAnchoInputCity(800);
    setAnchoInputGuests(50);
  };

  const ampliarInputGuests = () => {
    setAnchoInputGuests(800);
    setAnchoInputCity(50);
  };

  const handleClickOutside = (event) => {
    if (
      inputCityRef.current &&
      !inputCityRef.current.contains(event.target) &&
      inputGuestsRef.current &&
      !inputGuestsRef.current.contains(event.target)
    ) {
      setAnchoInputCity(50);
      setAnchoInputGuests(50);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full h-16 flex justify-center items-center  ">
      <nav className="flex flex-wrap justify-between items-center w-full mb-10 pt-3 ">
        <img src={logo} alt="" className="w-36 object-contain " />
        <div className="mt-5 border-slate-300 border-2 rounded  ">
          <input
            type="text"
            className="url_input_1 border-none border-r-8 "
            placeholder="City"
            style={{ width: `${anchoInputCity}px`, transition: "width 0.5s" }}
            onClick={ampliarInputCity}
            onChange={setSearchValue}
            value={searchValue}
            ref={inputCityRef}
          />
          <input
            type="text"
            className="url_input border-none "
            placeholder="Add guests"
            style={{ width: `${anchoInputGuests}px`, transition: "width 0.5s" }}
            onClick={ampliarInputGuests}
            ref={inputGuestsRef}
          />
          <button
            type="button"
            onClick={search}
            className="black_btn border-none"
          >
            <svg
              className="w-5 h-5 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M22 22l-5.2-5.2"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 17a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navegacion;
