import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
const AddPost = () => {
  let navigate = useNavigate()
  const initial = {
    profilePic: '',
    username: '',
    description: '',
    postImg: ''
  }
  const [post, setPost] = useState(initial)
  return
}

export default AddPost
