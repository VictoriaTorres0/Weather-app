export function obtenerClimaSemanal(weatherData) {
  const days = {};

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  weatherData.list.forEach((item) => {
    const date = new Date(item.dt_txt);
    const formattedDate = date.toLocaleString("en-US", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });

    const displayDate =
      date.getDate() === tomorrow.getDate() ? "Tomorrow" : formattedDate;

    if (!days[displayDate]) {
      days[displayDate] = {
        min: item.main.temp_min,
        max: item.main.temp_max,
      };
    } else {
      days[displayDate].min = Math.min(
        days[displayDate].min,
        item.main.temp_min
      );
      days[displayDate].max = Math.max(
        days[displayDate].max,
        item.main.temp_max
      );
    }

    days[displayDate].icon = item.weather[0].icon.substring(0, 2);
  });

  const result = Object.keys(days).map((date) => {
    return {
      date,
      min: days[date].min,
      max: days[date].max,
      icon: days[date].icon,
    };
  });

  return result;
}
