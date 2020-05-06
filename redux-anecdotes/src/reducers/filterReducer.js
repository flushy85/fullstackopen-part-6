const initialState = ''

const filterReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FILTER': {
      return action.text
    }
    default:
      return state
  }
}


export const filterResults = (text) => {
  return {
    type: 'FILTER',
    text,
  }
} 

export default filterReducer