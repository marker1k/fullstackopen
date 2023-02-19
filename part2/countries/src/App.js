import { useEffect, useState } from 'react'
import CountryInfo from './components/CountryInfo'
import countriesService from './services/countries' 

const App = () => {
  const [countries, setCountries] = useState([])
  const [countriesList, setCountriesList] = useState([])

  useEffect(() => {
    countriesService
      .getAll()
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleChange = (event) => {
    const value = event.target.value
    let newList
    if (value) {
      newList = countries.filter(country => {
        return country.name.common.toLowerCase().includes(value.toLowerCase())
      })
    } else {
      newList = []
    }
    setCountriesList(newList)
  }

  const handleShowCountry = (country) => {
    setCountriesList(Array(country))
  }

  return (
   <div>
    <form>
      <label htmlFor='input'>Find countries: </label>
      <input id='input' onChange={handleChange}></input>
    </form>
    <CountryInfo 
      countriesList={countriesList}
      handleShowCountry={handleShowCountry}
    />
   </div>
  )
}

export default App;
