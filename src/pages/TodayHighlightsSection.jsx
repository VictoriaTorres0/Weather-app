function TodayHighlightsSection({ title, value, unit, children = undefined }) {
  return (
    <div className="bg-primary  w-[340px] h-[200px]">
      <h2 className="text-white">{title}</h2>
      <div>
        <span>{value}</span>
        <span>{unit}</span>
      </div>
      {children}
    </div>
  );
}

export default TodayHighlightsSection;
