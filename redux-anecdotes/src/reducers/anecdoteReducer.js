import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  switch(action.type) {
    case 'INIT_ANECDOTES':
      return action.data
    case 'VOTE': {
      const id = action.data.id 
      const anecdoteToChange = state.find(n => n.id === id)
      return state.map(anecdote => 
        anecdote !== anecdoteToChange ? anecdote : action.data
      )
    }
    case 'ADD_ANECDOTE': {
      const content = action.data
      return [...state, 
        content,
      ]
    }
    default: 
      return state
  }
}

export const addVote = (anecdote) => {
  return async dispatch =>  {
    const newVote = await anecdoteService.updateVote(anecdote)
    dispatch({
      type: 'VOTE',
      data: newVote
    })
  }
}

export const createAnecdote = (anecdote) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(anecdote)
    dispatch({
      type: 'ADD_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const initialiseAnecdotes =  () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
  
}

export default anecdoteReducer