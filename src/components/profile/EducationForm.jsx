import { useState } from "react"
import { addEducation } from "../../services/userService"

function EducationForm() {

const [form,setForm] = useState({
  institution:"",
  degree:"",
  fieldOfStudy:"",
  startYear:"",
  endYear:""
})

const handleChange = (e)=>{
  setForm({...form,[e.target.name]:e.target.value})
}

const submit = async (e)=>{
  e.preventDefault()

  try{
    await addEducation(form)
    alert("Education Added")
  }catch(err){
    alert("Error")
  }
}

return(

<div className="bg-white rounded-lg shadow-md p-6">

<h3 className="text-lg font-semibold mb-4">Add Education</h3>

<form onSubmit={submit} className="space-y-3">

<input name="institution" placeholder="Institution" onChange={handleChange} />

<input name="degree" placeholder="Degree" onChange={handleChange} />

<input name="fieldOfStudy" placeholder="Field Of Study" onChange={handleChange} />

<input name="startYear" placeholder="Start Year" onChange={handleChange} />

<input name="endYear" placeholder="End Year" onChange={handleChange} />

<button className="bg-indigo-600 text-white px-4 py-2 rounded">
Add Education
</button>

</form>

</div>

)

}

export default EducationForm