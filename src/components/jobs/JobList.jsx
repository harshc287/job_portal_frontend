import JobCard from "./JobCard"

function JobList({jobs}){

 return(

  <div>

   {jobs.map(job=>(
     <JobCard key={job._id} job={job}/>
   ))}

  </div>

 )

}

export default JobList