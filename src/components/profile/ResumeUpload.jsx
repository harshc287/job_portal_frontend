import {useState} from "react"
import {uploadResume} from "../../services/userService"

function ResumeUpload(){

 const [file,setFile] = useState()

 const submit = async(e)=>{

  e.preventDefault()

  const formData = new FormData()

  formData.append("resume",file)

  await uploadResume(formData)

  alert("Resume uploaded")

 }

 return(

  <form onSubmit={submit}>

   <input
   type="file"
   onChange={(e)=>setFile(e.target.files[0])}
   />

   <button>Upload</button>

  </form>

 )

}

export default ResumeUpload