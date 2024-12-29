import { NavLink } from 'react-router-dom'

const Nav = () =>{

  return(
    <nav className="navbar">
      <h4>DreamWeaver</h4>
      <div>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/dreams">Dreams</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </div>
    </nav>
  )
}

export default Nav