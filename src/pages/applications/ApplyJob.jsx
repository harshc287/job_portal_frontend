import {applyJob} from "../../services/applicationService"

function ApplyJob({jobId}){

 const apply = async()=>{

  await applyJob(jobId,{resume:""})

  alert("Applied")

 }

 return <button onClick={apply}>Apply</button>

}

export default ApplyJob