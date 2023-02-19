const PersonForm = ({ handleSubmit, handleNameChange, nameValue, handlePhoneChange, phoneValue }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">name: </label>
        <input 
          id="name" 
          type="text" 
          title="Enter name..." 
          onChange={handleNameChange} 
          value={nameValue} 
        />
      </div>
      <div>
        <label htmlFor="number">number: </label>
        <input 
          id="number" 
          type="text" 
          title="Enter phone number..." 
          onChange={handlePhoneChange} 
          value={phoneValue} 
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm