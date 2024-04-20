import { BsFillCursorFill } from "react-icons/bs";
function TodayHighlightsSection() {
  return (
    <div className="bg-red-400">
      <h2 className="pb-8 text-start pl-4 text-[24px] font-semibold text-[#E7E7EB]">
        Today’s Hightlights
      </h2>
      <div className="pb-8  grid-rows-4 justify-center items-center gap-4 grid">
        <div className="bg-primary w-[340px] h-[200px] flex flex-col justify-evenly">
          <p>Wind status</p>
          <div className="flex justify-center">
            <h2>7</h2>
            <span>mph</span>
          </div>
          <div className="flex justify-center ">
            <BsFillCursorFill />
            <p>WSW</p>
          </div>
        </div>
        <div className="bg-primary w-[340px] h-[200px]"></div>
        <div className="bg-primary w-[340px] h-[200px]"></div>
        <div className="bg-primary w-[340px] h-[200px]"></div>
      </div>
    </div>
  );
}

export default TodayHighlightsSection;
