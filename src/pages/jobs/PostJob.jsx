// src/pages/jobs/PostJob.jsx

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
    description: ""
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const submit = async (e) => {
    e.preventDefault()

    await createJob(form)
    alert("Job Posted")

    navigate("/my-jobs")
  }

  return (
    <div className="max-w-2xl mx-auto py-10">

      <h2 className="text-2xl font-bold mb-6">Post a Job</h2>

      <form onSubmit={submit} className="space-y-4 bg-white p-6 rounded-lg shadow">

        <input name="title" placeholder="Job Title" onChange={handleChange} className="input" />

        <input name="company" placeholder="Company Name" onChange={handleChange} className="input" />

        <input name="location" placeholder="Location" onChange={handleChange} className="input" />

        <input name="salary" placeholder="Salary" onChange={handleChange} className="input" />

        <textarea name="description" placeholder="Job Description" onChange={handleChange} className="input" />

        <button className="w-full bg-indigo-600 text-white py-2 rounded-lg">
          Post Job
        </button>

      </form>

    </div>
  )
}

export default PostJob