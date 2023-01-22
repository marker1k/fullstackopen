import { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  )
}

const Statistics = ({ good, neutral, bad, total }) => {
  if (total === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine text='good' value={good} />
        <StatisticLine text='neutral' value={neutral} />
        <StatisticLine text='bad' value={bad} />
        <StatisticLine text='all' value={total} />
        <StatisticLine text='average' value={(good - bad)/(total)} />
        <StatisticLine text='positive' value={`${(good/(total))*100} %`} />
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState([])

  const handleGoodClick = () => {
    setGood(good + 1)
    setTotal(total.concat('G'))
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setTotal(total.concat('N'))
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setTotal(total.concat('B'))
  }
  
  return (
    <div>
      <h1>Give feedback</h1>
        <div>
          <Button text='good' handleClick={handleGoodClick}/>
          <Button text='neutral' handleClick={handleNeutralClick} />
          <Button text='bad' handleClick={handleBadClick} />
        </div>
      <h1>Statistics</h1>
        <Statistics 
          good={good} 
          neutral={neutral} 
          bad={bad} 
          total={total.length}
        />
    </div>
  )
}

export default App