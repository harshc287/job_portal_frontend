import {useState} from "react"
import {createJob} from "../../services/jobService"

function PostJob(){

 const [title,setTitle] = useState("")
 const [description,setDescription] = useState("")
 const [salary,setSalary] = useState("")
 const [location,setLocation] = useState("")

 const submit = async(e)=>{

  e.preventDefault()

  await createJob({
   title,
   description,
   salary,
   location
  })

  alert("Job Posted")

 }

 return(

  <form onSubmit={submit}>

   <h2>Post Job</h2>

   <input
   placeholder="Title"
   onChange={(e)=>setTitle(e.target.value)}
   />

   <textarea
   placeholder="Description"
   onChange={(e)=>setDescription(e.target.value)}
   />

   <input
   placeholder="Salary"
   onChange={(e)=>setSalary(e.target.value)}
   />

   <input
   placeholder="Location"
   onChange={(e)=>setLocation(e.target.value)}
   />

   <button>Post</button>

  </form>

 )

}

export default PostJob