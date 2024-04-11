function DropDown() {
  return (
    <div className="DropDown-container">
      <div className="flex justify-end">
        <button className="text-white text-[22px] pr-4">x</button>
      </div>
      <div className="pt-5 flex justify-center">
        <div className="pr-[78px]">
          <input
            type="text"
            placeholder="🔍︎ search location"
            className=" w-[130%] text-center border border-x-zinc-50 p-[7px]"
          />
        </div>

        <button className="bg-blue-700 text-white p-[8px]">Search</button>
      </div>
      <button className="border w-[90%] h-[50px]">London</button>
    </div>
  );
}

export default DropDown;
