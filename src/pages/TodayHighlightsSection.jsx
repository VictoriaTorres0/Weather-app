function TodayHighlightsSection({ title, value, unit, children = undefined }) {
  return (
    <div className="bg-primary w-[340px] h-[200px] lg:w-[368px] lg:h-[226px]  flex flex-col justify-center">
      <h2 className="text-[#E7E7EB] text-[20px] font-normal">{title}</h2>
      <div>
        <span className="text-[70px] font-semibold text-[#E7E7EB] pr-3">
          {value}
        </span>
        <span className="text-[#E7E7EB] text-[30px]">{unit}</span>
      </div>
      {children}
    </div>
  );
}

export default TodayHighlightsSection;
