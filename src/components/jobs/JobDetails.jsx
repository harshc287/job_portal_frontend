import ApplyJob from "../../pages/applications/ApplyJob"

function JobDetails({job}){

 return(

  <div>

   <h2>{job.title}</h2>

   <p>{job.description}</p>

   <p>{job.location}</p>

   <p>{job.salary}</p>

   <p>{job.experienceLevel}</p>

   <ApplyJob jobId={job._id}/>

  </div>

 )

}

export default JobDetails