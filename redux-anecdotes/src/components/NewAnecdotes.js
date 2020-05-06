import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { notification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'


const NewAnecdote = (props) => {
  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    
    props.createAnecdote(content)
    props.notification(`You added "${content}"!`, 5)
  }


  return(
    <form onSubmit={addAnecdote}>
      <div><input name="anecdote"/></div>
      <button type="submit">create</button>
    </form>
  )
}

export default connect(
  null,
  { 
    createAnecdote,
    notification
  }
)(NewAnecdote)