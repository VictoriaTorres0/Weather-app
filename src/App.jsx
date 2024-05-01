import "./App.css";
import DropDown from "./pages/DropDown.jsx";
import SearchPlaces from "./pages/SearchPlaces.jsx";
import WeatherCalendar from "./pages/WeatherCalendar.jsx";
import TodayHighlightsSection from "./pages/TodayHighlightsSection.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function App({ text }) {
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
  const [showModal, setShowModal] = useState(false);
  const [historial, setHistorial] = useState(["Córdoba"]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const pedirDatos = async (nombre) => {
    try {
      // const respuesta = await axios.get(
      //   `https://api.openweathermap.org/data/2.5/weather?q=${nombre}&appid=520238f267d48b0a2f7b20ac55722d7e`
      // );
      // setData(respuesta.data);
    } catch (error) {
      console.log(error.name);
    }
  };

  useEffect(() => {
    pedirDatos("cordoba");
  }, []);

  if (Object.keys(data).length === 0) return;
  return (
    <div className="font-raleway">
      {showModal && (
        <DropDown
          pedirdatos={pedirDatos}
          onClose={closeModal}
          historial={historial}
          setHistorial={setHistorial}
        />
      )}

      <div className="md:flex md:justify-between ">
        <SearchPlaces data={data} openModal={openModal} />
        <div className="grow bg-secondary">
          <WeatherCalendar data={data} />
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="pb-8 grid justify-center items-center gap-4 lg:grid-rows-2 lg:grid-cols-2 place-items-center max-w-[745px] mx-auto"
          >
            <TodayHighlightsSection
              visibility={data.visibility}
              humidity={data.main.humidity}
              wind={data.wind}
              pressure={data.main.pressure}
            />
            <TodayHighlightsSection title={"dasd"} value="7" unit={"%"}>
              <div>
                <span>Icono acá</span>
                <span>SWS</span>
              </div>
            </TodayHighlightsSection>
            <TodayHighlightsSection title={"hooa"} value="84" unit={"mb"} />
            <TodayHighlightsSection title="dasd" value="6,4" unit={"$"} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;
