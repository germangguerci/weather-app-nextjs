import styled from "styled-components";

export default function HourlyCard({ temperature, humidity, weather, timeText }) {
  return (
    <Card>
      {temperature}
      {humidity}
      {weather}
      {timeText}
    </Card>
  );
}

const Card = styled.li`
  display: flex;
  flex-direction: column;
`;