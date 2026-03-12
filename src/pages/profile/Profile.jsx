import { useEffect, useState } from "react"
import { getProfile } from "../../services/userService"

import ProfileCard from "../../components/profile/ProfileCard"
import ResumeUpload from "../../components/profile/ResumeUpload"
import ExperienceForm from "../../components/profile/ExperienceForm"
import EducationForm from "../../components/profile/EducationForm"

function Profile(){

 const [user,setUser] = useState(null)

 useEffect(()=>{
  getProfile().then(setUser)
 },[])

 if(!user) return <p>Loading...</p>

 return (

  <div className="max-w-4xl mx-auto space-y-6">

    {/* Profile Info */}
    <ProfileCard user={user}/>

    {/* Resume Upload */}
    <ResumeUpload/>

    {/* Experience Section */}
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Experience</h2>

      {user.experience?.map((exp,index)=>(
        <div key={index} className="border-b py-2">
          <p className="font-semibold">{exp.position}</p>
          <p className="text-gray-600">{exp.company}</p>
        </div>
      ))}

      <ExperienceForm/>
    </div>

    {/* Education Section */}
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Education</h2>

      {user.education?.map((edu,index)=>(
        <div key={index} className="border-b py-2">
          <p className="font-semibold">{edu.degree}</p>
          <p className="text-gray-600">{edu.institution}</p>
        </div>
      ))}

      <EducationForm/>
    </div>

  </div>

 )

}

export default Profile