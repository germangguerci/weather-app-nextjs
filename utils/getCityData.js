export default function getCityData(cityName) {
  const targetCity = citiesData.filter(city => {
    return city?.city_name.toLowerCase() === cityName.toLowerCase();
  });
  return (targetCity[0]);
}

//This data can be future replaced with an API call.
const citiesData = [
  {
    city_name: 'Rio de Janeiro',
    country_code: 'BR',
    country_full: 'Brazil',
    lat: '-22.90278',
    lon: '-43.2075'
  },
  {
    city_name: 'Beijing',
    country_code: 'CN',
    country_full: 'China',
    lat: '39.916668',
    lon: '116.383331'
  },
  {
    city_name: 'Los Angeles',
    country_code: 'US',
    country_full: 'United States',
    lat: '34.05223',
    lon: '-118.24368'
  },
];