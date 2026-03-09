import {useEffect,useState} from "react"
import {getJobs} from "../../services/jobService"
import ManageJobs from "../../components/admin/ManageJobs"

function AdminJobs(){

 const [jobs,setJobs] = useState([])

 useEffect(()=>{
  getJobs().then(setJobs)
 },[])

 return(

  <div>

   <h2>Jobs</h2>

   <ManageJobs jobs={jobs}/>

  </div>

 )

}

export default AdminJobs