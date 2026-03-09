import {useState} from "react"
import {scheduleInterview} from "../../services/interviewService"

function InterviewSchedule(){

 const [applicationId,setApplicationId] = useState("")
 const [candidate,setCandidate] = useState("")
 const [date,setDate] = useState("")
 const [meetingLink,setMeetingLink] = useState("")

 const submit = async(e)=>{

  e.preventDefault()

  await scheduleInterview({
   applicationId,
   candidate,
   date,
   meetingLink
  })

  alert("Interview Scheduled")

 }

 return(

  <form onSubmit={submit}>

   <h2>Schedule Interview</h2>

   <input placeholder="Application ID" onChange={(e)=>setApplicationId(e.target.value)} />

   <input placeholder="Candidate ID" onChange={(e)=>setCandidate(e.target.value)} />

   <input type="date" onChange={(e)=>setDate(e.target.value)} />

   <input placeholder="Meeting Link" onChange={(e)=>setMeetingLink(e.target.value)} />

   <button>Schedule</button>

  </form>

 )

}

export default InterviewSchedule