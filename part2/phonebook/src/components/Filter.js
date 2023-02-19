const Filter = ({ handleFilterChange, filter }) => {
  return (
    <div>
      <label htmlFor="filter">filter: </label>
      <input 
        id="filter" 
        type="text" 
        title="Enter characters to filter..." 
        onChange={handleFilterChange} 
        value={filter} 
      />
    </div>
  )
}

export default Filter