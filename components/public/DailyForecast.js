import ForecastContainer from "../common/ForecastContainer";
import DailyCard from "./DailyCard";

export default function DailyForecast({ data }) {

  const DailyCards = data.list.map((item, index) => {
    const { temp_max, temp_min } = item.main;
    const temp = {
      max: temp_max,
      min: temp_min
    };
    const timestamp = item.dt;
    return <DailyCard key={index} temperature={temp} weather={item.weather[0]} timestamp={timestamp} />;
  });

  return (
    <ForecastContainer title="Next days" listDirection="column">
      {DailyCards}
    </ForecastContainer>
  );
}

