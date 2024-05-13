import { motion } from "framer-motion";
import { WeatherIcons } from "../consts/weather-icons";

function WeatherCalendar({ title, C1, C2, icon, unit }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="bg-[#1E213A] py-3 my-3  grid justify-items-center items-center w-[130px] h-[177px] lg:text-[16px] lg:w-[122px]"
    >
      <h2 className="text-[#E7E7EB] lg:text-[20px] lg:font-semibold">
        {title}
      </h2>
      <img
        className="py-2 w-[85px] lg:w-[65px]"
        src={WeatherIcons[icon]}
        alt={title}
      />
      <div className="flex text-center justify-center gap-2 ">
        <p className="text-[#E7E7EB] lg:text-[16px] lg:font-semibold">
          {Math.floor(C1)}°{unit === "metric" ? "c" : "f"}
        </p>
        <p className="text-[#A09FB1] lg:text-[16px] lg:font-semibold">
          {Math.floor(C2)}°{unit === "metric" ? "c" : "f"}
        </p>
      </div>
    </motion.div>
  );
}

export default WeatherCalendar;
