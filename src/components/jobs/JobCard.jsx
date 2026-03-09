import {Link} from "react-router-dom"

function JobCard({job}){

 return(

  <div className="job-card">

   <h3>{job.title}</h3>

   <p>{job.company}</p>

   <p>{job.location}</p>

   <p>Salary: {job.salary}</p>

   <Link to={`/jobs/${job._id}`}>
    View Details
   </Link>

  </div>

 )

}

export default JobCard