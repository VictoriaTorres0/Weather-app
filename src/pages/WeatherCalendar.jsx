function WeatherCalendar({ data }) {
  return (
    <div className="bg-[#100E1D] justify-center grid grid-rows-3 grid-flow-col gap-4 pt-20 pb-20">
      <div className="bg-[#1E213A] w-[120px] h-[177px]">
        <p className="text-[#E7E7EB]">Tomorrow</p>
        <img src="/src/images/snow.png" alt="" />
        <div className="flex text-center justify-center gap-2">
          <p>16°c</p> <p>11°C</p>
        </div>
      </div>
      <div className="bg-[#1E213A] w-[120px] h-[177px]">
        <p className="text-[#E7E7EB]">Mon, 8 Jun</p>
        <img src="/src/images/snow.png" alt="" />
        <div className="flex text-center justify-center gap-2">
          <p>16°c</p> <p>11°C</p>
        </div>
      </div>
      <div className="bg-[#1E213A] w-[120px] h-[177px]">
        <p className="text-[#E7E7EB]">Wed, 10 Jun</p>
        <img src="/src/images/snow.png" alt="" />
        <div className="flex text-center justify-center gap-2">
          <p>16°c</p> <p>11°C</p>
        </div>
      </div>
      <div className="bg-[#1E213A] w-[120px] h-[177px]">
        <p className="text-[#E7E7EB]">Sun, 7 Jun</p>
        <img src="/src/images/snow.png" alt="" />
        <div className="flex text-center justify-center gap-2">
          <p>16°c</p> <p>11°C</p>
        </div>
      </div>
      <div className="bg-[#1E213A] w-[120px] h-[177px]">
        <p className="text-[#E7E7EB]">Tue, 9 Jun</p>
        <img src="/src/images/snow.png" alt="" />
        <div className="flex text-center justify-center gap-2">
          <p>16°c</p> <p>11°C</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCalendar;
