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
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [data, setData] = useState({});
  const [week, setWeek] = useState([]);
  const [dataUbication, setDataUbication] = useState("");
  const [activeButton, setactiveButton] = useState("metric");
  const [showModal, setShowModal] = useState(false);
  const [history, sethistory] = useState(["Córdoba"]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const requestingData = async (name, lat, lon) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?units=${activeButton}&appid=${
        import.meta.env.VITE_API_KEY
      }`;

      if (name) url += `&q=${name}`;
      if (lat && lon) url += `&lat=${lat}&lon=${lon}`;

      const { data } = await axios.get(url);
      requestingDataSemana(data.coord.lon, data.coord.lat);
      setData(data);
    } catch (error) {
      toast.error("An unexpected error has occurred.");
    }
  };

  const requestingDataSemana = async (lon, lat) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${activeButton}&appid=${
          import.meta.env.VITE_API_KEY
        }`
      );
      setWeek(obtenerClimaSemanal(response.data));
    } catch (error) {
      toast.error("An unexpected error has occurred.");
    }
  };

  useEffect(() => {
    requestingData(dataUbication || "cordoba");
  }, [activeButton]);

  return (
    <div className="font-raleway">
      {showModal && (
        <DropDown
          requestingData={requestingData}
          onClose={closeModal}
          history={history}
          sethistory={sethistory}
          dataUbication={dataUbication}
          setDataUbication={setDataUbication}
        />
      )}

      <div className="lg:flex lg:justify-between">
        <SearchPlaces
          data={data}
          openModal={openModal}
          unit={activeButton}
          requestingData={requestingData}
        />

        <div className="grow bg-secondary">
          <div className="text-white hidden lg:flex lg:justify-end  max-w-[948px] mx-auto mb-5 mt-10 lg:max-w-[820px]">
            <div>
              <button
                onClick={() => setactiveButton("metric")}
                className={`p-4 rounded-full font-bold w-[32px] ms-3 lg:text-[20px] lg:p-[8px] lg:w-[46px] lg:font-bold ${
                  activeButton === "metric"
                    ? "bg-[#E7E7EB] text-[#110E3C]"
                    : "bg-[#585676]"
                }`}
              >
                °C
              </button>
            </div>
            <div>
              <button
                onClick={() => setactiveButton("imperial")}
                className={`p-4 rounded-full font-bold w-[32px] ms-3 lg:text-[20px] lg:p-[8px] lg:w-[46px] lg:font-bold ${
                  activeButton === "imperial"
                    ? "bg-[#E7E7EB] text-[#110E3C]"
                    : "bg-[#585676]"
                }`}
              >
                °F
              </button>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-5 py-8">
            {week.map((data, key) => (
              <WeatherCalendar
                key={key}
                title={data.date}
                C1={data.max}
                C2={data.min}
                icon={data?.icon}
                unit={activeButton}
              />
            ))}
          </div>
          <div className="">
            <h2 className="text-[24px] text-start font-semibold text-[#E7E7EB] pl-3 lg:pl-16 pb-5">
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
              value={data?.wind?.speed ?? ""}
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
              value={data?.main?.humidity || 0}
              unit="%"
            >
              <div className="px-8">
                <div className="flex justify-between text-[12px] font-bold text-[#A09FB1]">
                  <p>0</p> <p>50</p> <p>100</p>
                </div>
                <ProgressBar
                  completed={data?.main?.humidity || 0}
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
              value={data?.visibility || 0}
              unit="miles"
            />
            <TodayHighlightsSection
              title="Air pressure"
              value={data?.main?.pressure || 0}
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

      <ToastContainer />
    </div>
  );
}

export default App;
