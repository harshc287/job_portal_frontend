import {useState} from "react"

function JobFilter({onFilter}){

 const [location,setLocation] = useState("")
 const [experience,setExperience] = useState("")

 const applyFilter = ()=>{

  onFilter({
   location,
   experience
  })

 }

 return(

  <div>

   <input
   placeholder="Location"
   onChange={(e)=>setLocation(e.target.value)}
   />

   <input
   placeholder="Experience"
   onChange={(e)=>setExperience(e.target.value)}
   />

   <button onClick={applyFilter}>
    Apply Filter
   </button>

  </div>

 )

}

export default JobFilter