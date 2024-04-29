import { motion } from "framer-motion";
import { BsFillCursorFill } from "react-icons/bs";

function TodayHighlightsSection({ visibility, humidity, wind, pressure }) {
  return (
    <div>
      <h2 className="font-raleway pb-8 text-start pl-[8rem] text-[24px] font-semibold text-[#E7E7EB] md:text-[18px] lg:text-[23px]">
        Today’s Hightlights
      </h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="pb-8 grid justify-center items-center gap-4 lg:grid-rows-2 lg:grid-cols-2 place-items-center max-w-[745px] mx-auto"
      >
        <div className="bg-primary w-[340px] h-[200px] flex flex-col justify-evenly">
          <p className="text-[#E7E7EB]">Wind status</p>
          <div className="flex justify-center">
            <h2 className="text-[#E7E7EB] font-bold text-[64px]">
              {wind.speed}
            </h2>
            <span className="text-[#E7E7EB] text-[30px] pt-10">mph</span>
          </div>
          <div className="flex justify-center">
            <div className="bg-[#FFFFFF4D] flex justify-center items-center rounded-full h-[30px] w-[30px]">
              <BsFillCursorFill className="text-[#E7E7EB]" />
            </div>

            <p className="text-[#E7E7EB]">WSW</p>
          </div>
        </div>
        <div className="bg-primary w-[340px] h-[200px] flex flex-col justify-evenly">
          <p className="text-[#E7E7EB]">Humidity</p>
          <div className="flex justify-center">
            <h2 className="text-[#E7E7EB] font-bold text-[64px]">{humidity}</h2>
            <span className="text-[#E7E7EB] text-[30px] pt-10">%</span>
          </div>
          <div className="flex justify-center "></div>
        </div>
        <div className="bg-primary w-[340px] h-[200px] flex flex-col justify-evenly">
          <p className="text-[#E7E7EB]"></p>
          <h2 className="text-[#E7E7EB]">Visibility</h2>
          <div className="flex justify-center">
            <h2 className="text-[#E7E7EB] font-bold text-[64px]">
              {visibility}
            </h2>
            <span className="text-[#E7E7EB] text-[30px] pt-10">miles</span>
          </div>
          <div className="flex justify-center "></div>
        </div>
        <div className="bg-primary w-[340px] h-[200px] flex flex-col justify-evenly">
          <p className="text-[#E7E7EB] ">Air Pressure</p>
          <div className="flex justify-center">
            <h2 className="text-[#E7E7EB] font-bold text-[64px]">{pressure}</h2>
            <span className="text-[#E7E7EB] text-[30px] pt-10">mb</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default TodayHighlightsSection;
