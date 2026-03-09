import {deleteJob} from "../../services/adminService"

function ManageJobs({jobs}){

 const remove = async(id)=>{

  await deleteJob(id)

 }

 return(

  <div>

   {jobs.map(job=>(
    <div key={job._id}>

     <p>{job.title}</p>

     <button onClick={()=>remove(job._id)}>
      Delete
     </button>

    </div>
   ))}

  </div>

 )

}

export default ManageJobs