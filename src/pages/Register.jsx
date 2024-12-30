import React, { useState } from 'react'
import { BASE_URL } from '../services/api'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    profileImg: ''
  })

  let navigate = useNavigate()

  const [message, setMessage] = useState('')

  // Handle input changes "onChange()"
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // Handle form submission "onSubmit"
  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage('')

    try {
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok) {
        setMessage(data.msg) // Show success message
        setFormData({ username: '', email: '', password: '', profileImg: '' }) // Reset form
        navigate('/sign-in')
      } else {
        setMessage(data.msg || 'Registration failed') // Show error message
      }
    } catch (error) {
      console.error('Error during registration:', error)
      setMessage('Network error. Please try again later.')
    }
  }

  return (
    <div>
      <h2>Register</h2>
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
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
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
        <div>
          <label>Profile Image URL (optional):</label>
          <input
            type="text"
            name="profileImg"
            value={formData.profileImg}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register
