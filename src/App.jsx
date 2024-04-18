import "./App.css";
import DropDown from "./pages/DropDown.jsx";
import SearchPlaces from "./pages/SearchPlaces.jsx";
import WeatherCalendar from "./pages/WeatherCalendar.jsx";
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    coord: {
      lon: -64.1811,
      lat: -31.4135,
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01d",
      },
    ],
    base: "stations",
    main: {
      temp: 28.47,
      feels_like: 27.67,
      temp_min: 28.47,
      temp_max: 28.47,
      pressure: 1016,
      humidity: 34,
    },
    visibility: 10000,
    wind: {
      speed: 1.03,
      deg: 0,
    },
    clouds: {
      all: 0,
    },
    dt: 1713387256,
    sys: {
      type: 1,
      id: 8226,
      country: "AR",
      sunrise: 1713350308,
      sunset: 1713390807,
    },
    timezone: -10800,
    id: 3860259,
    name: "Córdoba",
    cod: 200,
  });

  const pedirDatos = (nombre) => {
    console.log("pidiendo datos de ", nombre);
  };

  return (
    <div>
      <DropDown pedirdatos={pedirDatos} />
      <SearchPlaces data={data} />
      <WeatherCalendar />
    </div>
  );
}

export default App;
