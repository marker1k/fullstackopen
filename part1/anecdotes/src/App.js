import { useState } from 'react'

const TopAnecdote = (props) => {
  if (props.totalVotes === 0) {
    return (
      <div>
        There is no votes yet.
      </div>
    )
  }
  return (
    <div>
      {props.anecdotes[props.maxVoteKey]}
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  
  const initialVotesState = anecdotes.map((elem, index) => index).reduce((accumulator, value) => {
    return {...accumulator, [value]: 0};
  }, {}) // to not hardcode quantity of anecdotes I make initial votes object dynamically {0: 0, 1: 0, ..., X: 0}
  
  const [votes, setVotes] = useState(initialVotesState)
  const [selected, setSelected] = useState(0)
  const [total, setTotal] = useState(0)

  const maxVoteKey = Object.keys(votes).filter((key) => votes[key] === Math.max(...Object.values(votes)))[0] // find key of maximum votes value

  const handleVoteClick = () => {
    const votesCopy = {...votes}
    votesCopy[selected] += 1
    setVotes(votesCopy)
    setTotal(total + 1)
  }

  const handleNextClick = () => {
    const rndNum = Math.floor(Math.random() * anecdotes.length)
    setSelected(rndNum)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>
        {anecdotes[selected]}
      </div>
      <div>
        <button onClick={handleVoteClick}>vote</button>
        <button onClick={handleNextClick}>next anecdote</button>
      </div>
      <h1>Anecdote with most votes</h1>
      <TopAnecdote 
        totalVotes={total} 
        anecdotes={anecdotes} 
        maxVoteKey={maxVoteKey} 
      />
    </div>
  )
}

export default App