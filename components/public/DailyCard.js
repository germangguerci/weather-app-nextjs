import Image from "next/image";
import styled from "styled-components";

export default function DailyCard({ temperature, humidity, weather, timeText }) {
  return (
    <Card>
      <Temperature>{Math.ceil(temperature).toString().slice(0, 2) + "°"}</Temperature>
      <Span>{humidity + '%'}</Span>
      <IconContainer>
        <Image
          src={`http://openweathermap.org/img/wn/${weather?.icon}@2x.png`}
          height='100%'
          width="100%"
          alt={"icon of " + weather?.description}
        />
      </IconContainer>
      <Span>{timeText}</Span>
    </Card>
  );
}

const Card = styled.li`
  display: flex;
  flex-direction: column;
  width: 7.5rem;
  height: 12rem;
  padding: 1.5rem;
  background-color: #ffffff;
  font-size: 1.3rem;  
  justify-content: center;
  align-items: center;
  text-align: center;
  border-right: 1px solid #e7e7e7;
`;

const Span = styled.span`
  color: #70757a;
`;

const Temperature = styled(Span)`
  color:#3c4043;
`;

const IconContainer = styled.div`
  display: flex;
  width: 4.8rem;
  height: 4.8rem;
`;