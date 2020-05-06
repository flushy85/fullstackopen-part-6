import React, { useEffect } from 'react'
import Anecdotes from './components/Anecdotes'
import NewAnecdotes from './components/NewAnecdotes'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { useDispatch } from 'react-redux'
import { initialiseAnecdotes } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initialiseAnecdotes())
  }, [dispatch])

  
  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <Notification />
      <Anecdotes />
      <h2>create new</h2>
      <NewAnecdotes />
    </div>
  )
}

export default App