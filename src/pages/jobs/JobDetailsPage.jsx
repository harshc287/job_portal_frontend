import {useEffect,useState} from "react"
import {useParams} from "react-router-dom"
import {getJobById} from "../../services/jobService"
import JobDetails from "../../components/jobs/JobDetails"

function JobDetailsPage(){

 const {id} = useParams()

 const [job,setJob] = useState(null)

 useEffect(()=>{
  getJobById(id).then(setJob)
 },[id])

 if(!job) return <p>Loading...</p>

 return <JobDetails job={job}/>

}

export default JobDetailsPage