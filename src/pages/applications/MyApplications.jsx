import {useEffect,useState} from "react"
import {getMyApplications} from "../../services/applicationService"

function MyApplications(){

 const [apps,setApps] = useState([])

 useEffect(()=>{
  getMyApplications().then(setApps)
 },[])

 return(

  <div>

   <h2>My Applications</h2>

   {apps.map(app=>(
    <div key={app._id}>
     {app.jobId.title}
    </div>
   ))}

  </div>

 )

}

export default MyApplications