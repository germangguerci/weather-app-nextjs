import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import CityWeather from "../components/public/CityWeather";
import getCityData from "../utils/getCityData";

export default function City() {

  const router = useRouter();
  const queryCity = router.query?.city;

  const [city, setCity] = useState(null);
  const [cityData, setCityData] = useState(null);

  useEffect(() => {
    if (router?.isReady) {
      setCity(queryCity?.replaceAll("+", " "));
    }
  }, [router?.isReady, queryCity]);

  useEffect(() => {
    if (city) {
      const response = getCityData(city);
      if (response) {
        setCityData(response);
      }
    }
  }, [city]);

  return (

    !cityData ? <p>City not found</p>
      : <CityWeather lat={cityData?.lat} lon={cityData?.lon} />
  );
}