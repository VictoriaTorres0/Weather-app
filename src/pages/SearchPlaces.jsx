import { MdMyLocation } from "react-icons/md";
import "../pages/SearchPlaces.css";
import { FaLocationDot } from "react-icons/fa6";
function SearchPlaces() {
  return (
    <div className="Container-SearchPlaces h-screen">
      <div className="flex justify-between px-3">
        <p className="text-[#E7E7EB] bg-[#6E707A] p-3">Search for places</p>
        <MdMyLocation className="text-[#E7E7EB] bg-[#6E707A] size-8 rounded-full p-1" />
      </div>
      <div className="flex justify-center items-center pt-12">
        <img className="w-[70%]" src="/src/images/rain.png" alt="" />
      </div>
      <div className="flex justify-center text-center w-[100%]">
        <p className="text-[162px] text-[#E7E7EB]">15</p>
        <p className="text-[80px] text-[#e7e7eb83] pt-20">°c</p>
      </div>
      <div className="pb-[50px]">
        <p className="text-[#e7e7eb83] text-[50px] text-center">Shower</p>
      </div>
      <p className="text-[#88869D]">Today . Fri, 5 Jun</p>
      <div className="flex justify-center text-center gap-2 pb-9">
        <FaLocationDot className="text-[#88869D]" />
        <p className="text-[#88869D]">Helsinki</p>
      </div>
    </div>
  );
}

export default SearchPlaces;
