// src/components/profile/ExperienceForm.jsx

import { useState } from "react"
import { addExperience } from "../../services/userService"

function ExperienceForm({ onAdd }) {

  const [form, setForm] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    description: ""
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const submit = async (e) => {
    e.preventDefault()

    try {
      await addExperience(form)
      alert("Experience Added")

      // 🔥 refresh UI
      onAdd()

      // 🔥 clear form
      setForm({
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: ""
      })

    } catch (err) {
      alert("Error")
    }
  }

  return (
    <form onSubmit={submit} className="space-y-3">

      <input name="company" value={form.company} onChange={handleChange} placeholder="Company" />

      <input name="position" value={form.position} onChange={handleChange} placeholder="Position" />

      <input type="date" name="startDate" value={form.startDate} onChange={handleChange} />

      <input type="date" name="endDate" value={form.endDate} onChange={handleChange} />

      <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" />

      <button className="bg-indigo-600 text-white px-4 py-2 rounded">
        Add Experience
      </button>

    </form>
  )
}

export default ExperienceForm