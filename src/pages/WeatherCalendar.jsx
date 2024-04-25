function WeatherCalendar({ data }) {
  return (
    <div className="bg-[#100E1D] justify-center grid grid-rows-3 grid-flow-col gap-4 pt-20 pb-20 md:w-[510px] md:grid md:grid-rows-1 md:gap-3 md:pb-12 lg:w-[700px]">
      <div className="bg-[#1E213A] grid items-center w-[120px] h-[177px] md:w-[85px] md:h-[150px] lg:w-[120px] lg:h-[200px]">
        <p className="text-[#E7E7EB] md:text-[14px]">Tomorrow</p>
        <img src="/src/images/snow.png" alt="" />
        <div className="flex text-center justify-center gap-2">
          <p className="text-[#E7E7EB] md:text-[13px]">16°c</p>
          <p className="text-[#A09FB1] md:text-[13px]">11°C</p>
        </div>
      </div>
      <div className="bg-[#1E213A] grid items-center w-[120px] h-[177px] md:w-[85px] md:h-[150px] lg:w-[120px] lg:h-[200px]">
        <p className="text-[#E7E7EB] md:text-[14px]">Mon, 8 Jun</p>
        <img src="/src/images/snow.png" alt="" />
        <div className="flex text-center justify-center gap-2">
          <p className="text-[#E7E7EB] md:text-[13px]">16°c</p>
          <p className="text-[#A09FB1] md:text-[13px]">11°C</p>
        </div>
      </div>
      <div className="bg-[#1E213A] grid items-center w-[120px] h-[177px] md:w-[85px] md:h-[150px] lg:w-[120px] lg:h-[200px]">
        <p className="text-[#E7E7EB] md:text-[14px]">Wed, 10 Jun</p>
        <img src="/src/images/snow.png" alt="" />
        <div className="flex text-center justify-center gap-2">
          <p className="text-[#E7E7EB] md:text-[13px]">16°c</p>{" "}
          <p className="text-[#A09FB1] md:text-[13px]">11°C</p>
        </div>
      </div>
      <div className="bg-[#1E213A] grid items-center w-[120px] h-[177px] md:w-[85px] md:h-[150px] lg:w-[120px] lg:h-[200px]">
        <p className="text-[#E7E7EB] md:text-[14px]">Sun, 7 Jun</p>
        <img src="/src/images/snow.png" alt="" />
        <div className="flex text-center justify-center gap-2">
          <p className="text-[#E7E7EB] md:text-[13px]">16°c</p>{" "}
          <p className="text-[#A09FB1] md:text-[13px]">11°C</p>
        </div>
      </div>
      <div className="bg-[#1E213A] grid items-center w-[120px] h-[177px] md:w-[85px] md:h-[150px] lg:w-[120px] lg:h-[200px]">
        <p className="text-[#E7E7EB] md:text-[14px]">Tue, 9 Jun</p>
        <img src="/src/images/snow.png" alt="" />
        <div className="flex text-center justify-center gap-2">
          <p className="text-[#E7E7EB] md:text-[13px]">16°c</p>{" "}
          <p className="text-[#A09FB1] md:text-[13px]">11°C</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCalendar;
