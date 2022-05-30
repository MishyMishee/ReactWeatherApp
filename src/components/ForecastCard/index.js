import WeatherDetails from "../WeatherDetails";
import "./style.css";

const ForecastCard = (props) => {
  const { data } = props;
  return (
    <div className="forecastCard">
      {data.map((item, index) => {
        return <WeatherDetails key={`weDetail${index}`} {...item} />;
      })}
    </div>
  );
};

export default ForecastCard;
