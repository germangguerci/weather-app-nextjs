import axios from "axios";

export default async function handler(req, res) {
  const { query: { lat, lon } } = req;

  const API_KEY = process.env.WEATHER_API_KEY;

  const apiResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&exclude={current, minutely, alerts}&appid=${API_KEY}`)
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      return err?.response?.data;
    });

  res.status(apiResponse?.cod || 500).json(apiResponse);
}
