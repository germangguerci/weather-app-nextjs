import ForecastContainer from "../common/ForecastContainer";
import DailyCard from "./DailyCard";

export default function DailyForecast({ data }) {

  const DailyCards = data.list.map((item, index) => {
    const { temp, humidity } = item.main;
    const hour = item.dt_txt.slice(10, 16);
    return <DailyCard key={index} temperature={temp} humidity={humidity} weather={item.weather[0]} timeText={hour} />;
  });

  return (
    <ForecastContainer title="Next days" listDirection="column">
      {DailyCards}
    </ForecastContainer>
  );
}

