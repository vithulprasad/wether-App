import "./App.css";
import Search from "./components/search/search";
import CurrentWether from "../src/components/current-wether/wether";
import { weather_api_url, whether_api_key } from "./api";
import { useState } from "react";
import Forecast from "../src/components/foredcast/forcast";
// import image from '../public/01d.png'

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const handleOnSearchChange = (searchData) => {
    console.log(searchData, "this is the search data");
    const [lat, lon] = searchData.value.split(" ");
    console.log(lat, "this is the latitude ---------", lon);
    const currentWeatherFetch = fetch(
      `${weather_api_url}weather?lat=${lat}&lon=${lon}&appid=${whether_api_key}&units=metric`
    );
    const forecastFetch = fetch(
      `${weather_api_url}forecast?lat=${lat}&lon=${lon}&appid=${whether_api_key}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (res) => {
        const weatherResponse = await res[0].json();
        const forecastResponse = await res[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => {
        console.log(err, "this is the error message from the weather");
      });
  };

  console.log(currentWeather, "this is the current weather");
  console.log(forecast, "current forecast response");
  return (
    <div className="App">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWether data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
