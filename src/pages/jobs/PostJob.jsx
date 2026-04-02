import { useState } from "react"
import { createJob } from "../../services/jobService"
import { useNavigate } from "react-router-dom"

function PostJob() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    experienceLevel: "",
    skillsRequired: "",
    description: ""
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const submit = async (e) => {
    e.preventDefault()

    const payload = {
      ...form,
      salary: Number(form.salary),
      skillsRequired: form.skillsRequired.split(",").map(s => s.trim())
    }

    await createJob(payload)

    alert("✅ Job Posted Successfully")
    navigate("/my-jobs")
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 border">

        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          🚀 Post a New Job
        </h2>

        <form onSubmit={submit} className="space-y-5">

          {/* TITLE */}
          <Input label="Job Title" name="title" onChange={handleChange} />

          {/* COMPANY */}
          <Input label="Company Name" name="company" onChange={handleChange} />

          {/* LOCATION */}
          <Input label="Location" name="location" onChange={handleChange} />

          {/* SALARY */}
          <Input label="Salary (₹)" name="salary" type="number" onChange={handleChange} />

          {/* EXPERIENCE */}
          <div>
            <label className="label">Experience Level</label>
            <select
              name="experienceLevel"
              onChange={handleChange}
              className="input"
            >
              <option value="">Select</option>
              <option>Fresher</option>
              <option>1 Year</option>
              <option>2 Years</option>
              <option>3+ Years</option>
              <option>5+ Years</option>
            </select>
          </div>

          {/* SKILLS */}
          <div>
            <label className="label">Skills (comma separated)</label>
            <input
              name="skillsRequired"
              placeholder="React, Node, MongoDB"
              onChange={handleChange}
              className="input"
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="label">Job Description</label>
            <textarea
              name="description"
              rows="5"
              onChange={handleChange}
              className="input"
            />
          </div>

          {/* BUTTON */}
          <button className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition font-semibold">
            Post Job
          </button>

        </form>
      </div>
    </div>
  )
}

/* 🔹 REUSABLE INPUT */
function Input({ label, name, type = "text", onChange }) {
  return (
    <div>
      <label className="label">{label}</label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        className="input"
      />
    </div>
  )
}

export default PostJob