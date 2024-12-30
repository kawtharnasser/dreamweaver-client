import './App.css'

import { useState } from 'react' 

import { Route, Routes } from 'react-router-dom'

import Nav from './components/Nav'

import StartingPage from './pages/StartingPage'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import Home from './pages/Home' //contain the category and posts

//profile
import Profile from './pages/Profile' //show profile
import EditProfile from './pages/EditProfile' // edit profile


//post imports
import Post from './pages/Post'
import AddPost from './pages/AddPost'
import EditPost from './pages/EditPost'

//task imports
import Dreams from './pages/Dreams'

function App() {
  const [user,setUser] = useState(null)

  const handleLogOut = () =>{
    setUser(null)
    localStorage.clear()
  }

  return(
    <div>
      <header>
        <Nav user={user}
        handleLogOut={handleLogOut}/>
        

      </header>

      <Routes>
        {/* user routes */}
        <Route path='/' element={<StartingPage />}/>
        <Route path='/sign-in' element = {<SignIn />} />
        <Route path='/register' element = {<Register />} />
        
        <Route path='/profile' element={<Profile />} />
        <Route path='/edit-profile' element={<EditProfile />} />

        <Route path='/home' element={<Home />} /> {/* will have the <Post />, and <Category /> components */}        
        {/* Post Routs */}
        

        {/* Task Routs*/}
        <Route path='dreams' element={<Dreams />} />

      </Routes>
    </div>
  )
}

export default App
