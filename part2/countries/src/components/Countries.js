const Countries = ({ countriesList, handleShowCountry }) => {
  return (
    <ul>
      {
        countriesList.map(country => {
          return (
            <li key={country.cca3}>
              {country.name.common}
              <button 
                key={country.cca2} 
                onClick={() => handleShowCountry(country)}>
                  Show
              </button>
            </li>
          )
        })
      }
    </ul>
  )
  
}

export default Countries