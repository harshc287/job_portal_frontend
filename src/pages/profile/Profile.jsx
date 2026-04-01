// src/pages/profile/Profile.jsx

import { useEffect, useState } from "react"
import { getProfile } from "../../services/userService"

import ProfileCard from "../../components/profile/ProfileCard"
import ResumeUpload from "../../components/profile/ResumeUpload"
import ExperienceForm from "../../components/profile/ExperienceForm"
import EducationForm from "../../components/profile/EducationForm"

function Profile() {

  const [user, setUser] = useState(null)
  const [editMode, setEditMode] = useState(false)

  // 🔥 Fetch profile
  const fetchProfile = async () => {
    const data = await getProfile()
    setUser(data)
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  if (!user) return <p>Loading...</p>

  return (
    <div className="max-w-4xl mx-auto space-y-6">

      {/* Profile Info */}
      <ProfileCard user={user} />

      {/* Update Button */}
      {!editMode && (
        <button
          onClick={() => setEditMode(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded"
        >
          Update Profile
        </button>
      )}

      {/* Cancel Button */}
      {editMode && (
        <button
          onClick={() => setEditMode(false)}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>
      )}

      {/* Resume Upload */}
      <ResumeUpload />

      {/* EXPERIENCE */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Experience</h2>

        {/* VIEW MODE */}
        {!editMode && (
          <>
            {user.experience?.length > 0 ? (
              user.experience.map((exp) => (
                <div key={exp._id} className="border-b py-2">
                  <p className="font-semibold ">Position: {exp.position}</p>
                  <p className="text-gray-600">Experience: {exp.company}</p>
                  <p className="text-sm text-gray-500">Description: {exp.description}</p>
                </div>
              ))
            ) : (
              <p>No experience added</p>
            )}
          </>
        )}

        {/* EDIT MODE */}
        {editMode && (
          <ExperienceForm onAdd={fetchProfile} />
        )}
      </div>

      {/* EDUCATION */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Education</h2>

        {/* VIEW MODE */}
        {!editMode && (
          <>
            {user.education?.length > 0 ? (
              user.education.map((edu) => (
                <div key={edu._id} className="border-b py-2">
                  <p className="font-semibold">{edu.degree}</p>
                  <p className="text-gray-600">{edu.institution}</p>
                  <p className="text-sm text-gray-500">{edu.fieldOfStudy}</p>
                </div>
              ))
            ) : (
              <p>No education added</p>
            )}
          </>
        )}

        {/* EDIT MODE */}
        {editMode && (
          <EducationForm onAdd={fetchProfile} />
        )}
      </div>

    </div>
  )
}

export default Profile