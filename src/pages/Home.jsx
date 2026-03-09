import { Link } from "react-router-dom"

function Home(){

 return(

  <div>

   <h1>Welcome to Job Portal</h1>

   <p>Find your dream job</p>

   <Link to="/jobs">
    Browse Jobs
   </Link>

  </div>

 )

}

export default Home