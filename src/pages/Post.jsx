import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
const Post = () => {
  const [posts, setPosts] = useState([])
  const getPosts = async () => {
    try {
      let res = await axios.get('http://localhost:3001/posts')
      setPosts(res.data)
    } catch (err) {
      console.log(err)
    }
    useEffect(() => {
      getIssues()
    }, [])
  }
  return <div></div>
}

export default Post
