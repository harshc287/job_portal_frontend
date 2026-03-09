import {useEffect,useState} from "react"
import {getMyInterviews} from "../../services/interviewService"

function MyInterviews(){

 const [interviews,setInterviews] = useState([])

 useEffect(()=>{
  getMyInterviews().then(setInterviews)
 },[])

 return(

  <div>

   <h2>My Interviews</h2>

   {interviews.map(i=>(
    <div key={i._id}>
     {i.date}
    </div>
   ))}

  </div>

 )

}

export default MyInterviews