import { Link } from "react-router-dom"

const StartingPage = () =>{

  return(
    <div>
      <h1>Welcome to Dream Weaver</h1>
      <Link to="/register"> Sign Up</Link>
      <Link to="/sign-in"> Sign In</Link>
      
    </div>
  )
}

export default StartingPage