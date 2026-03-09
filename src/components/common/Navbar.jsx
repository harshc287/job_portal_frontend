import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

function Navbar(){

 const {user,logout} = useContext(AuthContext)

 return(

  <nav className="navbar">

   <h2>JobPortal</h2>

   <div>

    <Link to="/">Home</Link>
    <Link to="/jobs">Jobs</Link>
    <Link to="/companies">Companies</Link>

    {user && <Link to="/profile">Profile</Link>}

    {user?.role === "employer" && (
      <Link to="/post-job">Post Job</Link>
    )}

    {user?.role === "admin" && (
      <Link to="/admin">Admin</Link>
    )}

    {!user ? (
      <>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      </>
    ):(
      <button onClick={logout}>Logout</button>
    )}

   </div>

  </nav>

 )

}

export default Navbar