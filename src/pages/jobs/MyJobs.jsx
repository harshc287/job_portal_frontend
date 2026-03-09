import {useEffect,useState} from "react"
import {getJobs} from "../../services/jobService"

function MyJobs(){

 const [jobs,setJobs] = useState([])

 useEffect(()=>{
  getJobs().then(setJobs)
 },[])

 return(

  <div>

   <h2>My Jobs</h2>

   {jobs.map(job=>(
    <div key={job._id}>
     {job.title}
    </div>
   ))}

  </div>

 )

}

export default MyJobs