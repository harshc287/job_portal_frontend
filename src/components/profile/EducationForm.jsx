import {useState} from "react"

function EducationForm(){

 const [education,setEducation] = useState("")

 const submit = (e)=>{
  e.preventDefault()
  console.log(education)
 }

 return(

  <form onSubmit={submit}>

   <input
   placeholder="Education"
   onChange={(e)=>setEducation(e.target.value)}
   />

   <button>Add</button>

  </form>

 )

}

export default EducationForm