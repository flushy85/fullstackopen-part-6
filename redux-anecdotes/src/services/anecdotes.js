import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const createNew = async (content) => {
  const object = { content, votes: 0 }
  const res = await axios.post(baseUrl, object)
  return res.data
}

const updateVote = async (anecdote) => {
  const object = {
    content: anecdote.content,
    votes: anecdote.votes + 1,
    id: anecdote.id
  }
  
  const res = await axios.put(`${baseUrl}/${anecdote.id}`, object)
  return res.data
}

export default {
   getAll,
   createNew,
   updateVote,
 }