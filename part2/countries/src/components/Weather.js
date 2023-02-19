import { useEffect, useState } from 'react'
import weatherService from '../services/weather'
import '../css/weather.css'

const Weather = ({ lat, lon, capital }) => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    weatherService
      .getWeather(lat, lon)
      .then(response => {
        setWeather(response.data)
      })
  }, [])

  if (weather) {
    const imgPath = weather.current.weather[0]
    const weatherIconUrl = `http://openweathermap.org/img/wn/${imgPath.icon}@2x.png`
    const weatherIconAlt = `Icon for ${imgPath.main} weather condition in ${capital}`

    return (
      <div>
        <h1>Weather in {capital}</h1>
        <p><b>Temperature: </b>{weather.current.temp} &#8451;</p>
        <img 
          className='weather__icon'
          src={weatherIconUrl} 
          alt={weatherIconAlt} 
        />
        <p><b>Wind: </b>{weather.current.wind_speed} m/s</p>
      </div>
    )
  }
}

export default Weather