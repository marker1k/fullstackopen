const Persons = ({ persons, filter, handlePersonDelete }) => {
  const personsToShow = (filter) => {
    if (filter === "") {
      return persons
    } else {
      return persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    }
  }

  return (
    <ul>
      {
        personsToShow(filter).map(person => {
          return (
            <li key={person.id}>
              {`${person.name} ${person.number}`} <button onClick={() => handlePersonDelete(person.id)}>delete</button>
            </li>
          )
        })
      }
    </ul>
  )
}

export default Persons