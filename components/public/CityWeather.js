import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { styled } from 'styled-components';
import getCityWeather from '../../utils/getCityWeather';
import HourlyForecast from './HourlyForecast';

export default function CityWeather({ lat, lon }) {

  const { isLoading, error, data } = useQuery(['getCityWeather', { lat, lon }], async () => getCityWeather(lat, lon));

  return (
    <Container>
      {isLoading && "loading"}
      {error && "error"}
      {data && <HourlyForecast data={data} />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;