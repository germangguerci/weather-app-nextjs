import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function City() {

  const router = useRouter();
  const queryCity = router.query?.city;

  const [city, setCity] = useState(null);

  useEffect(() => {
    if (router?.isReady) {
      setCity(queryCity?.replaceAll("+", " "));
    }
  }, [router?.isReady, queryCity]);

  return (
    <h1>{city}</h1>
  );
}