import "./App.css";
import DropDown from "./pages/DropDown.jsx";
import SearchPlaces from "./pages/SearchPlaces.jsx";
import WeatherCalendar from "./pages/WeatherCalendar.jsx";

function App() {
  return (
    <div>
      <DropDown />
      <SearchPlaces />
      <WeatherCalendar />
    </div>
  );
}

export default App;
