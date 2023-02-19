import Countries from './Countries'
import Country from './Country'

const CountryInfo = ({ countriesList, handleShowCountry }) => {
  const countryCount = countriesList.length
  let countryInfo
  
  if (countryCount === 0) {
    countryInfo = null
  } else if (countryCount === 1) {
    countryInfo = <Country country={countriesList[0]} />
  } else if (countryCount < 10) {
    countryInfo = <Countries countriesList={countriesList} handleShowCountry={handleShowCountry} />
  } else if (countryCount > 10) {
    countryInfo = <div>Too many matches, make more specific query</div>
  }
  
  return (
    <div>
      {countryInfo}
    </div>
  )
}

export default CountryInfo