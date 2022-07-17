import axios from 'axios';

export default function getCityWeather(lat, lon) {
  return axios.get(`/api/openweathermap/one-call/?lat=${lat}&lon=${lon}`);
}