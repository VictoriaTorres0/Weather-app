// @ts-nocheck
import "./App.css";
import DropDown from "./pages/DropDown.jsx";
import SearchPlaces from "./pages/SearchPlaces.jsx";
import WeatherCalendar from "./pages/WeatherCalendar.jsx";
import TodayHighlightsSection from "./pages/TodayHighlightsSection.jsx";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";
import ProgressBar from "@ramonak/react-progress-bar";
import axios from "axios";
import { obtenerClimaSemanal } from "./utils/obtener-clima-semanal";

function App() {
  const [data, setData] = useState({});
  const [week, setWeek] = useState([]);
  const [dataUbication, setDataUbication] = useState("");
  const [botonActivo, setBotonActivo] = useState("metric"); // metric o imperial
  const [showModal, setShowModal] = useState(false);
  const [historial, setHistorial] = useState(["Córdoba"]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const pedirDatos = async (nombre, lat, lon) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?units=${botonActivo}&appid=${
        import.meta.env.VITE_API_KEY
      }`;

      if (nombre) url += `&q=${nombre}`;
      if (lat && lon) url += `&lat=${lat}&lon=${lon}`;

      const { data } = await axios.get(url);
      pedirDatosSemana(data.coord.lon, data.coord.lat);
      setData(data);
    } catch (error) {
      console.log(error.name);
    }
  };

  const pedirDatosSemana = async (lon, lat) => {
    try {
      const respuesta = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${botonActivo}&appid=${
          import.meta.env.VITE_API_KEY
        }`
      );
      setWeek(obtenerClimaSemanal(respuesta.data));
    } catch (error) {
      console.log(error.name);
    }
  };

  useEffect(() => {
    pedirDatos(dataUbication || "cordoba");
  }, [botonActivo]);

  if (Object.keys(data).length === 0 || week.length === 0) return;
  return (
    <div className="font-raleway">
      {showModal && (
        <DropDown
          pedirdatos={pedirDatos}
          onClose={closeModal}
          historial={historial}
          setHistorial={setHistorial}
          dataUbicacion={dataUbication}
          setDataUbication={setDataUbication}
        />
      )}

      <div className="lg:flex lg:justify-between">
        <SearchPlaces
          data={data}
          openModal={openModal}
          unidad={botonActivo}
          pedirDatos={pedirDatos}
        />
        <div className="grow bg-secondary">
          <div className="text-white hidden lg:flex lg:justify-end  max-w-[948px] mx-auto mb-5 mt-10 lg:max-w-[820px]">
            <div>
              <button
                onClick={() => setBotonActivo("metric")}
                className={`p-4 rounded-full font-bold w-[32px] ms-3 lg:text-[20px] lg:p-[8px] lg:w-[46px] lg:font-bold ${
                  botonActivo === "metric"
                    ? "bg-[#E7E7EB] text-[#110E3C]"
                    : "bg-[#585676]"
                }`}
              >
                °C
              </button>
            </div>
            <div>
              <button
                onClick={() => setBotonActivo("imperial")}
                className={`p-4 rounded-full font-bold w-[32px] ms-3 lg:text-[20px] lg:p-[8px] lg:w-[46px] lg:font-bold ${
                  botonActivo === "imperial"
                    ? "bg-[#E7E7EB] text-[#110E3C]"
                    : "bg-[#585676]"
                }`}
              >
                °F
              </button>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-5 py-8">
            {/* Nueva forma con map. Solo se puede hacer si tenés un array de elementos */}
            {week.map((datos, key) => (
              <WeatherCalendar
                key={key}
                title={datos.date}
                C1={datos.max}
                C2={datos.min}
                icon={datos?.icon}
                unidad={botonActivo}
              />
            ))}
          </div>
          <div className="max-w-[745px] lg:flex justify-center lg:pl-[270px] ">
            <h2 className="text-[24px] text-start font-semibold text-[#E7E7EB] pl-3  pb-5">
              Today’s Hightlights
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="pb-16 grid justify-center items-center gap-4 lg:gap-12 lg:grid-rows-2 lg:grid-cols-2 place-items-center max-w-[745px] mx-auto"
          >
            <TodayHighlightsSection
              title={"Wind status"}
              value={data.wind.speed}
              unit="mph"
            >
              <div className="flex justify-center gap-2">
                <FaLocationArrow
                  className="bg-[#616375] text-[#E7E7EB] p-1 rounded-full  "
                  size={30}
                />
                <span className="text-[#E7E7EB]">SWS</span>
              </div>
            </TodayHighlightsSection>
            <TodayHighlightsSection
              title="Humidity"
              value={data.main.humidity}
              unit="%"
            >
              <div className="px-8">
                <div className="flex justify-between text-[12px] font-bold text-[#A09FB1]">
                  <p>0</p> <p>50</p> <p>100</p>
                </div>
                <ProgressBar
                  completed={data.main.humidity}
                  bgColor="#FFEC65"
                  isLabelVisible={false}
                  height="12px"
                />
                <p className="text-end text-[12px] font-bold text-[#A09FB1]">
                  %
                </p>
              </div>
            </TodayHighlightsSection>
            <TodayHighlightsSection
              title="Visibility"
              value={data.visibility}
              unit="miles"
            />
            <TodayHighlightsSection
              title="Air pressure"
              value={data.main.pressure}
              unit="mb"
            />
          </motion.div>
          <h2 className="text-[#A09FB1] text-[14px] font-bold">
            Created by&nbsp;
            <a
              href="https://www.linkedin.com/in/victoria-torres-396251287/"
              target="_blank"
              className="underline font-extrabold"
            >
              Victoria Torres&nbsp;
            </a>
            - devChallenges.io
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App;
