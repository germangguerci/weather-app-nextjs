import axios from 'axios';

export default function getCityWeather(lat, lon) {
  return axios.get(`/api/openweathermap/forecast/?lat=${lat}&lon=${lon}`);
}