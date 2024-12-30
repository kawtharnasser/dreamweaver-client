import React, { useState } from 'react'
import { BASE_URL } from '../services/api'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  let navigate = useNavigate()

  const [message, setMessage] = useState('')

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage('')

    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok) {
        setMessage('Login successful!')
        console.log('Logged-in user:', data.user) // User details for debugging
        // Optionally, store user/token in localStorage or context
        navigate('/home')
      } else {
        setMessage(data.msg || 'Login failed') // Show error message
      }
    } catch (error) {
      console.error('Error during login:', error)
      setMessage('Network error. Please try again later.')
    }
  }

  return (
    <div>
      <h2>Sign In</h2>
      <p>{message}</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}

export default SignIn
