import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDroplet,
  faWind,
  faCloudSun,
  faArrowUp,
  faArrowDown,
  faCompass
} from "@fortawesome/free-solid-svg-icons";

const WeatherCard = (props) => {
  const { data } = props;
  return (
    <div className="WeatherCard">
      <h2>Current Weather</h2>
      {data ? (
        <section className="WeatherCard-section">
          <div className="WeatherCard-left">
            <p>{data.cityName}</p>
            <p>
              <span className="icon">
                <img
                  src={`http://openweathermap.org/img/w/${data.weather.icon}.png`}
                  alt="wthr img"
                  width={75}
                />
              </span>
              <span style={{ fontSize: "40px", fontWeight: "bold" }}>
                {data.temp}°
              </span>
            </p>
            <p className="WeatherCard-left__conditions">Cloudy</p>
          </div>
          <div className="weatherCard-right">
            <p className="WeatherCard-right__feels">
              Feels like {data.feels_like}°
              <span>
                <FontAwesomeIcon className="icon" icon={faArrowUp} />
                {data.temp_max}°
              </span>
              <span>
                <FontAwesomeIcon className="icon" icon={faArrowDown} />
                {data.temp_min}°
              </span>
            </p>
            <div className="weatherCard-right__conditions">
              <div className="we_cond__item">
                <FontAwesomeIcon className="icon" icon={faDroplet} />
                Humidity: {data.humidity}%
              </div>
              <div className="we_cond__item">
                <FontAwesomeIcon className="icon" icon={faWind} />
                Wind: {data.wind} kph
              </div>
              <div className="we_cond__item">
                <FontAwesomeIcon className="icon" icon={faCompass} />
                Pressure: {data.pressure} hPa
              </div>
            </div>
          </div>
        </section>
      ) : (
        <h3>Data not available</h3>
      )}
    </div>
  );
};

export default WeatherCard;
