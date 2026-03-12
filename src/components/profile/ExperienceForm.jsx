import { useState } from "react"
import { addExperience } from "../../services/userService"

function ExperienceForm(){

const [form,setForm] = useState({
company:"",
position:"",
startDate:"",
endDate:"",
description:""
})

const handleChange = (e)=>{
setForm({...form,[e.target.name]:e.target.value})
}

const submit = async(e)=>{
e.preventDefault()

try{
await addExperience(form)
alert("Experience Added")
}catch(err){
alert("Error")
}

}

return(

<div className="bg-white rounded-lg shadow-md p-6">

<h3 className="text-lg font-semibold mb-4">Add Experience</h3>

<form onSubmit={submit} className="space-y-3">

<input name="company" placeholder="Company" onChange={handleChange}/>

<input name="position" placeholder="Position" onChange={handleChange}/>

<input type="date" name="startDate" onChange={handleChange}/>

<input type="date" name="endDate" onChange={handleChange}/>

<textarea name="description" placeholder="Description" onChange={handleChange}/>

<button className="bg-indigo-600 text-white px-4 py-2 rounded">
Add Experience
</button>

</form>

</div>

)

}

export default ExperienceForm