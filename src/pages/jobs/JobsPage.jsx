import {useEffect,useState} from "react"
import {getJobs} from "../../services/jobService"
import JobList from "../../components/jobs/JobList"

function JobsPage(){

 const [jobs,setJobs] = useState([])

 useEffect(()=>{
  getJobs().then(setJobs)
 },[])

 return(

  <div>

   <h2>Jobs</h2>

   <JobList jobs={jobs}/>

  </div>

 )

}

export default JobsPage