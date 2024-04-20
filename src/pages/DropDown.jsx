import { useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import { RxCross2 } from "react-icons/rx";

export default function DropDown({ onClose, pedirdatos }) {
  const [dataUbication, setDataUbication] = useState("");
  const handleChange = (e) => {
    setDataUbication(e.target.value);
  };

  return (
    <div className="fixed inset-0 bg-primary z-50 h-screen">
      <div className="flex justify-end pt-4">
        <button
          onClick={onClose}
          className="buton-close text-[#E7E7EB] text-[17px] pr-4"
        >
          <RxCross2 />
        </button>
      </div>
      <div className="pt-5 flex justify-between p-4">
        <div className="">
          <input
            type="text"
            value={dataUbication}
            placeholder="search location"
            onChange={handleChange}
            className="bg-primary w-[130%] outline-none text-center border border-[#E7E7EB] p-[7px]"
          />
        </div>

        <button
          className="bg-[#3C47E9] text-[#E7E7EB] p-[8px]"
          onClick={() => pedirdatos(dataUbication)}
        >
          Search
        </button>
      </div>
      <div className="p-4 flex">
        <button
          className="bg-primary p-3 justify-between text-center flex outline-none border w-[100%] h-[50px] border-[#616475]"
          type="text"
        >
          <p className="text-[#E7E7EB]">London</p>
          <SlArrowRight color="#616475" className="w-[12px] h-[100%]" />
        </button>
      </div>
    </div>
  );
}
