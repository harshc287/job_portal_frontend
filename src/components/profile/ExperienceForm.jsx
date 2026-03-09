import {useState} from "react"

function ExperienceForm(){

 const [experience,setExperience] = useState("")

 const submit = (e)=>{
  e.preventDefault()
  console.log(experience)
 }

 return(

  <form onSubmit={submit}>

   <input
   placeholder="Experience"
   onChange={(e)=>setExperience(e.target.value)}
   />

   <button>Add</button>

  </form>

 )

}

export default ExperienceForm