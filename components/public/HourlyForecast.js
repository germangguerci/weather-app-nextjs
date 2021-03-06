import ForecastContainer from "../common/ForecastContainer";
import HourlyCard from "./HourlyCard";

export default function HourlyForecast({ data }) {

  const HourlyCards = data.list.map((item, index) => {
    const { temp, humidity } = item.main;
    const hour = item.dt_txt.slice(10, 16);
    const timestamp = item.dt;
    return <HourlyCard
      key={index}
      temperature={temp}
      humidity={humidity}
      weather={item.weather[0]}
      timeText={hour}
      timestamp={timestamp}
    />;
  });


  return (
    <ForecastContainer title="Next hours">
      {HourlyCards}
    </ForecastContainer>
  );
}

