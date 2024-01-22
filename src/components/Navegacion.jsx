import React, { useState, useRef, useEffect } from "react";
import { logo } from "../assets";
import "./Navegacion.css";

const Navegacion = ({
  searchValue,
  setSearchValue,
  guestsValue,
  setGuestsValue,
  search,
  uniqueCities,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const inputCityRef = useRef(null);
  const inputGuestsRef = useRef(null);
  const modalContainerRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      modalContainerRef.current &&
      !modalContainerRef.current.contains(event.target)
    ) {
      closeModal();
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSearch = () => {
    search();
    closeModal();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    } else if (e.key === "Escape") {
      closeModal();
    }
  };

  const handleGuestsChange = (amount) => {
    const newGuestsValue = parseInt(guestsValue, 10) + amount;
    if (newGuestsValue >= 0) {
      setGuestsValue(newGuestsValue.toString());
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full h-16 flex justify-center items-center sm:w-full">
      <nav className="flex  justify-between items-center w-full mb-10 pt-3 relative z-10 sm:w-full">
        <img src={logo} alt="" className="w-36 object-contain " />

        <div className="mt-5 border-slate-300 border rounded  search_div">
          <div onClick={openModal} className="cursor-pointer">
            <input
              type="text"
              className="url_input_1 border-none border-r-8  pl-2"
              placeholder="City"
              ref={inputCityRef}
              value={searchValue}
            />
            <input
              type="text"
              className="url_input border-none pl-2"
              placeholder="Add guests"
              value={guestsValue}
            />
            <button
              type="button"
              className="black_btn border-none"
              onClick={handleSearch}
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
          {isModalOpen && (
            <div
              ref={modalContainerRef}
              className="fixed top-0 left-0 w-full h-full flex justify-center items-start pointer-events-none"
            >
              <div className="flex w-full sm:w-full md:w-full lg:w-full bg-white p-8 rounded shadow-lg pointer-events-auto border-black">
                <div style={{ width: "100%" }} className="lg:ml-20">
                  <input
                    type="text"
                    className="url_input_1 h-16  border-r-2 pl-2 sm:w-full md:w-full w-full lg:w-full mb-3 "
                    placeholder="City"
                    onChange={(e) => setSearchValue(e.target.value)}
                    value={searchValue}
                    ref={inputCityRef}
                    onKeyPress={handleKeyPress}
                    required
                  />
                  {uniqueCities.map((city, index) => (
                    <button
                      key={index}
                      className="cursor-pointer flex flex-row mt-3 text-black w-full hover:bg-zinc-400 rounded-md p-1"
                      onClick={() => {
                        setSearchValue(city);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 28 28"
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-3 posicion"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 7 10 13 10 13s10-6 10-13c0-5.52-4.48-10-10-10zm0 18c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path>
                        <circle cx="12" cy="12" r="11"></circle>
                      </svg>
                      {city}
                    </button>
                  ))}
                </div>

                <div style={{ width: "100%" }}>
                  <input
                    type="text"
                    className="url_input  h-16 pl-2 w-full  sm:w-full md:w-fulll  mb-3 lg:mb-0"
                    placeholder="Add guests"
                    onChange={(e) => setGuestsValue(e.target.value)}
                    value={guestsValue}
                    ref={inputGuestsRef}
                    onKeyPress={handleKeyPress}
                    required
                  />

                  <div className="flex items-center space-x-2 mt-5">
                    <h2>Guests</h2>
                    <button
                      type="button"
                      className="bg-gray-200 px-2 py-1 rounded"
                      onClick={() => handleGuestsChange(-1)}
                    >
                      -
                    </button>
                    <span>{guestsValue}</span>
                    <button
                      type="button"
                      className="bg-gray-200 px-2 py-1 rounded"
                      onClick={() => handleGuestsChange(1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleSearch}
                  className="bg-red-500 w-60 border-gray h-16 flex justify-center items-center rounded-md ml-4 lg:ml-24 p-4"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M22 22l-5.2-5.2"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 17a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"
                    ></path>
                  </svg>
                  <p className="ml-2 lg:ml-5 text-white">Search</p>
                </button>
                <div className="flex flex-col space-y-2"></div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navegacion;
