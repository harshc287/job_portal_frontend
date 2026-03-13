import { useState } from "react"
import { applyJob } from "../../services/applicationService"

function ApplyJob({ jobId }) {

 const [resume,setResume] = useState("")
 const [coverLetter,setCoverLetter] = useState("")
 const [applied,setApplied] = useState(false)
 const [loading,setLoading] = useState(false)

 const submit = async(e)=>{

  e.preventDefault()

  try{

   setLoading(true)

   await applyJob(jobId,{
    resume,
    coverLetter
   })

   alert("Application submitted successfully")

   setApplied(true)

  }catch(err){

   if(err.response?.data?.message === "Already applied"){
    alert("You already applied for this job")
    setApplied(true)
   }else{
    alert("Application failed")
   }

  }finally{

   setLoading(false)

  }

 }

 return(

  <div className="bg-gray-50 p-6 rounded-lg shadow">

   <h3 className="text-xl font-semibold mb-4">Apply for this Job</h3>

   <form onSubmit={submit} className="space-y-4">

    <input
     type="text"
     placeholder="Paste your resume link"
     value={resume}
     onChange={(e)=>setResume(e.target.value)}
     className="w-full border p-2 rounded"
     required
    />

    <textarea
     placeholder="Write a cover letter (optional)"
     value={coverLetter}
     onChange={(e)=>setCoverLetter(e.target.value)}
     className="w-full border p-2 rounded"
     rows="4"
    />

    <button
     type="submit"
     className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
     disabled={applied || loading}
    >
     {applied ? "Applied ✓" : loading ? "Applying..." : "Apply Now"}
    </button>

   </form>

  </div>

 )

}

export default ApplyJob