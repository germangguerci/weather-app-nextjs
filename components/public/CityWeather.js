import styled from "styled-components";
import { useQuery } from 'react-query';

import getCityWeather from '../../utils/getCityWeather';
import HourlyForecast from './HourlyForecast';

export default function CityWeather({ lat, lon }) {

  const { isLoading, error, data } = useQuery(['getCityWeather', { lat, lon }], async () => getCityWeather(lat, lon));

  return (
    <Container>
      {isLoading && "loading"}
      {error && "error"}
      {data && <HourlyForecast data={data?.data} />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;