import { useEffect } from 'react';
import { useQuery } from 'react-query';

export default function CityWeather({ lat, lon }) {

  /*  const { isLoading, error, data } = useQuery(['getCityWeather', { lat, lon }], async () => getCityWeather(lat, lon)); */

  return (
    <p>{lat}</p>
    /*  <div>
       {isLoading && "loading"}
       {error && "error"}
       {data && "data loaded"}
     </div> */
  );
}