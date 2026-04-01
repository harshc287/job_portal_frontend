// src/components/profile/EducationForm.jsx

import { useState } from "react"
import { addEducation } from "../../services/userService"

function EducationForm({ onAdd }) {

  const [form, setForm] = useState({
    institution: "",
    degree: "",
    fieldOfStudy: "",
    startYear: "",
    endYear: ""
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const submit = async (e) => {
    e.preventDefault()

    try {
      await addEducation(form)
      alert("Education Added")

      // 🔥 refresh UI
      onAdd()

      // 🔥 clear form
      setForm({
        institution: "",
        degree: "",
        fieldOfStudy: "",
        startYear: "",
        endYear: ""
      })

    } catch (err) {
      alert("Error")
    }
  }

  return (
    <form onSubmit={submit} className="space-y-3">

      <input name="institution" value={form.institution} onChange={handleChange} placeholder="Institution" />

      <input name="degree" value={form.degree} onChange={handleChange} placeholder="Degree" />

      <input name="fieldOfStudy" value={form.fieldOfStudy} onChange={handleChange} placeholder="Field Of Study" />

      <input name="startYear" value={form.startYear} onChange={handleChange} placeholder="Start Year" />

      <input name="endYear" value={form.endYear} onChange={handleChange} placeholder="End Year" />

      <button className="bg-indigo-600 text-white px-4 py-2 rounded">
        Add Education
      </button>

    </form>
  )
}

export default EducationForm