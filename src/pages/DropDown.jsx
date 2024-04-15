import { SlArrowRight } from "react-icons/sl";
function DropDown() {
  return (
    <div className="DropDown-container">
      <div className="flex justify-end">
        <button className="text-white text-[22px] pr-4">x</button>
      </div>
      <div className="pt-5 flex justify-between p-4">
        <div className="">
          <input
            type="text"
            placeholder="🔍︎ search location"
            className="bg-primary w-[130%] outline-none text-center border border-[#E7E7EB] p-[7px]"
          />
        </div>

        <button className="bg-[#3C47E9] text-[#E7E7EB] p-[8px]">Search</button>
      </div>
      <div className="p-4">
        <button
          className="bg-primary outline-none border w-[100%] h-[55px] border-[#E7E7EB]"
          type="text"
        >
          <SlArrowRight color="#616475" className="w-[12px]" />
          <p>London</p>
        </button>
      </div>
    </div>
  );
}

export default DropDown;
