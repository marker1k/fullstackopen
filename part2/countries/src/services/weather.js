import axios from 'axios'

const weatherUrl = 'https://api.openweathermap.org/data/3.0/onecall'
const weatherApiKey = process.env.REACT_APP_API_KEY

const getWeather = (lat, lon) => {
  const request = axios.get(`${weatherUrl}?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric&exclude=minutely,hourly,daily,alerts`)
  return request.then(response => response)
}

export default { getWeather }