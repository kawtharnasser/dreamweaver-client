import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
const AddPost = () => {
  let navigate = useNavigate()
  const initialState = {
    profilePic: '',
    username: '',
    description: '',
    postImg: ''
  }
  const [postState, setPostState] = useState(initialState)

  const handleChange = (event) => {
    setPostState({ ...postState, [event.target.id]: event.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    let response = await axios.post('http://localhost:3001/addpost', postState)
    setPostState(initialState)
  }
  return
}

export default AddPost
