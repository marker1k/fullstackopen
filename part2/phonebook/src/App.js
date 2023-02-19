import { useEffect, useState } from 'react'
import './app.css'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    console.log('Use Effect')
    personsService
      .getAll()
      .then(response => {
        setPersons(response)
      })
  }, [])

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const clearFields = () => {
    setNewName('')
    setNewPhone('')
  }

  const hideNotification = (timeout) => {
    setTimeout(() => {setNotification(null)}, timeout)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newPhone
    }
    if (!persons.map(person => person.name).includes(newName)) {
      // if there is no person with this name in state add new
      personsService
        .createPerson(nameObject)
        .then(response => {
          setPersons(persons.concat(response))
          setNotification({
            text: `Added ${newName}`,
            type: 'info'
          })
        })
      clearFields()
    } else {
      // if person with given name exists, then update phone number
      const existingPerson = persons.find(person => person.name === newName)
      const updatedPerson = {...existingPerson, number: newPhone}
      personsService
        .updatePhone(updatedPerson)
        .then(response => {
          const newPersons = persons.map(person => {
            if (person.id === response.id) {
              return response
            } else {
              return person
            }
          })
          setPersons(newPersons)
          setNotification({
            text: `Updated ${updatedPerson.name}`,
            type: 'info'
          })
        })
      clearFields()
    }
  }

  const handlePersonDelete = (id) => {
    const person = persons.find(person => person.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      personsService
        .deletePerson(id)
        .then(response => setPersons(persons.filter(person => person.id !== id)))
        .catch(error => {
          setNotification({
            text: `Information about ${person.name} has already been removed from server`,
            type: 'error'
          })
          setPersons(persons.filter(person => person.id !== id))
        })
    }
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification 
        message={notification}
        hideNotification={hideNotification} 
      />
        <Filter 
          handleFilterChange={handleFilterChange} 
          filter={newFilter}
        />
      <h2>Add New</h2>
        <PersonForm
          handleSubmit={addPerson}
          handleNameChange={handleNameChange}
          nameValue={newName}
          handlePhoneChange={handlePhoneChange}
          phoneValue={newPhone}
        />
      <h2>Numbers</h2>
        <Persons 
          persons={persons}
          filter={newFilter}
          handlePersonDelete={handlePersonDelete}
        />
    </div>
  )
}

export default App