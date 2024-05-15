import { MdMyLocation } from "react-icons/md";
import "../pages/SearchPlaces.css";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { WeatherIcons } from "../consts/weather-icons";
import { useEffect } from "react";
import { toast } from "react-toastify";

function SearchPlaces({ data, openModal, unit, requestingData }) {
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          requestingData(
            "",
            position.coords.latitude,
            position.coords.longitude
          );
        },
        (error) => {
          console.log("eror", error.message);
        }
      );
    } else {
      toast.error("An unexpected error has occurred.");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);
  return (
    <div className="Container-SearchPlaces relative md:h-[85vh] h-[120vh] lg:h-[100vh]   lg:w-[100%] lg:max-w-[459px]">
      <div>
        <div className="flex justify-between px-3 pt-5 ">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={openModal}
            className="text-[#E7E7EB] opacity-100 bg-[#6E707A] p-3   lg:p-2 lg:text-[18px]"
          >
            Search for places
          </motion.button>
          <motion.button whileHover={{ scale: 1.2 }} onClick={getLocation}>
            <MdMyLocation className="text-[#E7E7EB] bg-[#6E707A] size-10 rounded-full p-1  lg:size-10 lg:p-[5px]" />
          </motion.button>
        </div>
        <div className="flex justify-center lg:justify-start lg:pl-[96px] items-center pt-12 ">
          {data?.weather?.[0]?.icon !== undefined && (
            <motion.img
              src={
                WeatherIcons[data?.weather?.[0]?.icon?.substring(0, 2) || ""]
              }
              alt=""
              animate={{
                y: [1, 10, 1],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                },
              }}
            />
          )}
        </div>
        <div className="flex justify-center text-center w-[100%] lg:py-5">
          <p className="text-[144px] pt-10 font-semibold text-[#E7E7EB]  lg:text-[144px]">
            {Math.floor(data?.main?.temp || 0)}
          </p>
          <p className="text-[90px] pt-28 text-[#e7e7eb83] lg:text-[80px]">
            °{unit === "metric" ? "c" : "f"}
          </p>
        </div>
        <div className=" pb-[70px] pt-[10px] lg:pb-[70px] lg:pt-[80px] ">
          <p className="text-[#e7e7eb83] text-[36px] text-center  lg:text-[36px]">
            {data?.weather?.[0]?.description}
          </p>
        </div>
        <p className="text-[#88869D] pb-5 text-[18px] lg:pb-[30px]">
          Today . {format(new Date(), "EEE, d MMM")}
        </p>
        <div className="flex justify-center text-center gap-2">
          <FaLocationDot className="text-[#88869D]  lg:w-[25px] lg:text-[24px]" />
          <p className="text-[#88869D] font-semibold text-[18px]">
            {data.name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SearchPlaces;
