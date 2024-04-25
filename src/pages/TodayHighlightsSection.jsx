import { BsFillCursorFill } from "react-icons/bs";

function TodayHighlightsSection({ visibility, humidity, wind, pressure }) {
  return (
    <div className="bg-secondary">
      <h2 className="pb-8 text-start pl-4 text-[24px] font-semibold text-[#E7E7EB] md:text-[18px] lg:text-[23px]">
        Today’s Hightlights
      </h2>
      <div className="pb-8  grid-rows-4 justify-center items-center gap-4 grid">
        <div className="bg-primary w-[340px] h-[200px] flex flex-col justify-evenly">
          <p className="text-[#E7E7EB]">Wind status</p>
          <div className="flex justify-center">
            <h2 className="text-[#E7E7EB]">{wind.speed}</h2>
            <span className="text-[#E7E7EB]">mph</span>
          </div>
          <div className="flex justify-center ">
            <BsFillCursorFill />
            <p className="text-[#E7E7EB]">WSW</p>
          </div>
        </div>
        <div className="bg-primary w-[340px] h-[200px] flex flex-col justify-evenly">
          <p className="text-[#E7E7EB]">Humidity</p>
          <div className="flex justify-center">
            <h2 className="text-[#E7E7EB]">{humidity}</h2>
            <span className="text-[#E7E7EB]">%</span>
          </div>
          <div className="flex justify-center ">
            <BsFillCursorFill />
            <p className="text-[#E7E7EB]">WSW</p>
          </div>
        </div>
        <div className="bg-primary w-[340px] h-[200px] flex flex-col justify-evenly">
          <p className="text-[#E7E7EB]"></p>
          <h2 className="text-[#E7E7EB]">Visibility</h2>
          <div className="flex justify-center">
            <span className="text-[#E7E7EB]">{visibility}</span>
          </div>
          <div className="flex justify-center "></div>
        </div>
        <div className="bg-primary w-[340px] h-[200px] flex flex-col justify-evenly">
          <p className="text-[#E7E7EB]">Air Pressure</p>
          <div className="flex justify-center">
            <h2 className="text-[#E7E7EB]">{pressure}</h2>
            <span className="text-[#E7E7EB]">mb</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodayHighlightsSection;
