import ForecastContainer from "../common/ForecastContainer";
import HourlyCard from "./HourlyCard";

export default function HourlyForecast({ data }) {
  return (
    <ForecastContainer>
      <HourlyCard />
    </ForecastContainer>
  );
}

