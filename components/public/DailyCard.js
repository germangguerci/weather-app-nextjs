import Image from "next/image";
import styled from "styled-components";

export default function DailyCard({ temperature, weather, timestamp }) {
  const date = new Date(timestamp * 1000);
  const textDate = new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(date);
  return (
    <Card>
      <IconContainer>
        <Image
          src={`http://openweathermap.org/img/wn/${weather?.icon}@2x.png`}
          height='100%'
          width="100%"
          alt={"icon of " + weather?.description}
        />
      </IconContainer>
      <DateAndWeather>
        <Span>{textDate}</Span>
        <Span>{weather?.description}</Span>
      </DateAndWeather>
      <BlackSpan>{Math.ceil(temperature?.max).toString().slice(0, 2) + "°"}</BlackSpan>
      <BlackSpan>{Math.ceil(temperature?.min).toString().slice(0, 2) + "°"}</BlackSpan>
    </Card>
  );
}

const Card = styled.li`
  display: flex;
  width: 100%;
  height: 8rem;
  padding: 1.5rem;
  background-color: #ffffff;
  font-size: 1.3rem;  
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid #e7e7e7;
`;

const Span = styled.span`
  color: #70757a;
  text-transform: capitalize;
`;

const BlackSpan = styled(Span)`
  color:#3c4043;
`;

const DateAndWeather = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconContainer = styled.div`
  display: flex;
  width: 4.8rem;
  height: 4.8rem;
`;