import WeatherCard from "./WeatherCard";
import "./ReactWeather.css";
import ForecastCard from "./ForecastCard";
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";

const API_KEY = "d0f30d0ef26524ab8fc67add631bf76d";
const ReactWeather = (props) => {
  const [searchText, setSearchText] = useState("London");
  const [weatherData, setWeatherData] = useState();
  const [forecastData, setForecastData] = useState([]);
  useEffect(() => {
    handleSearch();
  }, []);
  const handleSearch = () => {
    axios
      .post(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          searchText +
          "&units=metric&appid=" +
          API_KEY
      )
      .then((res) => {
        console.log(res);
        setWeatherData({
          ...res.data.main,
          cityName: res.data.name,
          wind: res.data.wind.speed,
          weather: {
            ...res.data.weather[0]
          }
        });
      });
    axios
      .post(
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
          searchText +
          "&units=metric&appid=" +
          API_KEY
      )
      .then((res) => {
        const { list = [] } = res.data;
        const tempList = [];
        for (let i = 0; i < list.length; i += 8) {
          console.log(list[i]);
          const tempObj = {
            day: dayjs.unix(list[i].dt).format("dddd"),
            icon: list[i].weather[0].icon,
            condition: list[i].weather[0].description,
            maxTemp: list[i].main.temp_max,
            minTemp: list[i].main.temp_min
          };
          tempList.push(tempObj);
        }
        setForecastData([...tempList]);
      });
  };

  return (
    <div className="ReactWeather">
      <h1>Weather</h1>
      <div style={{ marginBottom: "10px" }}>
        <input onChange={(e) => setSearchText(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <WeatherCard data={weatherData} />
      <ForecastCard data={forecastData} />
    </div>
  );
};

export default ReactWeather;
