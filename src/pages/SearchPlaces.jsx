import { MdMyLocation } from "react-icons/md";
import "../pages/SearchPlaces.css";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";

function SearchPlaces({ data }) {
  return (
    <div className="Container-SearchPlaces h-screen">
      <div className="flex justify-between px-3">
        <button className="text-[#E7E7EB] bg-[#6E707A] p-3">
          Search for places
        </button>
        <MdMyLocation className="text-[#E7E7EB] bg-[#6E707A] size-8 rounded-full p-1" />
      </div>
      <div className="flex justify-center items-center pt-12">
        <img className="w-[70%]" src="/src/images/rain.png" alt="" />
      </div>
      <div className="flex justify-center text-center w-[100%]">
        <p className="text-[100px] text-[#E7E7EB]">{data.main.temp}</p>
        <p className="text-[80px] text-[#e7e7eb83] ">°c</p>
      </div>
      <div className="pb-[50px]">
        <p className="text-[#e7e7eb83] text-[50px] text-center">
          {data.weather[0].description}
        </p>
      </div>
      <p className="text-[#88869D]">Today . </p>
      <div className="flex justify-center text-center gap-2 pb-9">
        <FaLocationDot className="text-[#88869D]" />
        <p className="text-[#88869D]">{data.name}</p>
      </div>
    </div>
  );
}

export default SearchPlaces;
