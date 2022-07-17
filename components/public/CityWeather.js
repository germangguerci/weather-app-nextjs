import { useEffect } from 'react';
import { useQuery } from 'react-query';
import getCityWeather from '../../utils/getCityWeather';

export default function CityWeather({ lat, lon }) {

  const { isLoading, error, data } = useQuery(['getCityWeather', { lat, lon }], async () => getCityWeather(lat, lon));

  return (
    <div>
      {isLoading && "loading"}
      {error && "error"}
      {data && "data loaded"}
    </div>
  );
}