import { MdMyLocation } from "react-icons/md";
import "../pages/SearchPlaces.css";
import { FaLocationDot } from "react-icons/fa6";
import DropDown from "./DropDown.jsx";
import { useState } from "react";

function SearchPlaces({ data, openModal }) {
  return (
    <div className="relative md:w-[250px] lg:w-[100%]">
      <div className="Container-SearchPlaces h-screen">
        <div className="flex justify-between px-3 pt-5">
          <button
            onClick={openModal}
            className="text-[#E7E7EB] bg-[#6E707A] p-3 md:p-1 md:text-[13px] lg:p-2 lg:text-[15px]"
          >
            Search for places
          </button>
          <MdMyLocation className="text-[#E7E7EB] bg-[#6E707A] size-8 rounded-full p-1 md:p-[3px] md:size-6 lg:size-8" />
        </div>
        <div className="flex justify-center items-center pt-12">
          <img className="w-[70%]" src="/src/images/rain.png" alt="" />
        </div>
        <div className="flex justify-center text-center w-[100%]">
          <p className="text-[100px] text-[#E7E7EB] md:text-[60px] lg:text-[80px]">
            {data.main.temp}
          </p>
          <p className="text-[80px] text-[#e7e7eb83] md:text-[50px]">°c</p>
        </div>
        <div className="pb-[50px] pt-[60px] ">
          <p className="text-[#e7e7eb83] text-[50px] text-center md:text-[25px] lg:text-[40px]">
            {data.weather[0].description}
          </p>
        </div>
        <p className="text-[#88869D] lg:text-[19px]">Today . </p>
        <div className="flex justify-center text-center gap-2 pb-9">
          <FaLocationDot className="text-[#88869D]" />
          <p className="text-[#88869D] lg:text-[17px]">{data.name}</p>
        </div>
      </div>
    </div>
  );
}

export default SearchPlaces;
