import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
const AddPost = ({ posts, setPosts }) => {
  let navigate = useNavigate()
  const initialState = {
    profilePic: '', //of user
    username: '', //of user
    description: '',
    postImg: ''
  }
  const [postState, setPostState] = useState(initialState)

  const handleChange = (event) => {
    setPostState({ ...postState, [event.target.id]: event.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    let response = await axios.post('http://localhost:3001/posts', postState)
    setPostState(initialState)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="description">Post Description:</label>
      <textarea
        id="description"
        cols="30"
        rows="10"
        onChange={handleChange}
        value={postState.description}
      ></textarea>
      <label htmlFor="category">Select Category</label>
      <select id="category" onChange={handleChange} value={postState.category}>
        {/* //need to edit this */}
        <option value="study">Study</option>
        <option value="fitness">Fitness</option>
        <option value="motivation">Motivation</option>
        <option value="general">General</option>
      </select>

      <button type="submit">Post</button>
    </form>
  )
}

export default AddPost
