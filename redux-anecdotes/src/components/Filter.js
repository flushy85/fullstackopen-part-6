import React from 'react'
import { filterResults } from '../reducers/filterReducer'
import { connect } from 'react-redux'


const Filter = (props) => {
  

   const handleChange = (event) => {
    const text = event.target.value
    props.filterResults(text)
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter<input onChange={handleChange}
        type="text"
      />
    </div>
  )
}


export default connect(
  null,
  { filterResults }
)(Filter)