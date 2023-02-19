import '../css/country.css'
import Weather from './Weather'

const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p><b>Capital: </b>{country.capital[0]}</p>
      <p><b>Area: </b>{country.area.toLocaleString()} &#13218;</p>
      <h2>Languages</h2>
      <ul>
        {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
      </ul>
      <img
        className='country__flag' 
        src={country.flags.png} 
        alt={`Flag of ${country.name.common}`} 
      />
      <Weather 
        lat={country.capitalInfo.latlng[0]} 
        lon={country.capitalInfo.latlng[1]}
        capital={country.capital[0]}
      />
    </div>
  )
}

export default Country