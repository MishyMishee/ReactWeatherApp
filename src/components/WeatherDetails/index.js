import "./style.css";

const WeatherDetails = ({ day, icon, condition, maxTemp, minTemp }) => {
  return (
    <div className="weatherDetails">
      <p>{day}</p>

      <img
        src={`http://openweathermap.org/img/w/${icon}.png`}
        alt="wthr img"
        width={75}
      />

      <p className="conditions">{condition}</p>
      <span className="temps">
        {maxTemp}°C/{minTemp}°C
      </span>
    </div>
  );
};

export default WeatherDetails;
