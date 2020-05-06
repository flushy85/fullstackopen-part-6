import React from 'react'
import { notification, resetNotificationTimer } from '../reducers/notificationReducer'
import { connect } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'


const Anecdote = ({ anecdote, handleClick }) => {
  return(
    <div>
      {anecdote.content}
      <br/>
      has {anecdote.votes} 
      <button onClick={handleClick}>vote</button>
    </div>
  )
}

const Anecdotes = (props) => {
  
  const anecdotesToShow = () => {
    return  props.anecdotes.filter(anecdote => 
      anecdote.content.match(props.filter)
    )
    
  } 

  const handleClick = (anecdote) => {
    props.addVote(anecdote)
    resetNotificationTimer()
    props.notification(`You voted for "${anecdote.content}"!`, 5)
  }
  return(
    <div>
      {anecdotesToShow().map(anecdote => 
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => handleClick(anecdote)}
        />
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter,
  }
}

const mapDispatchToProps = {
  addVote,
  notification
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Anecdotes) 