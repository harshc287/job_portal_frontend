import { useState } from "react"
import { createCompany } from "../../services/companyService"
import { useNavigate } from "react-router-dom"

function CreateCompany() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: "",
    description: "",
    location: "",
    website: ""
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const submit = async (e) => {
    e.preventDefault()

    await createCompany(form)

    alert("Company created!")
    navigate("/companies")
  }

  return (
    <div className="max-w-xl mx-auto py-10">
      <form onSubmit={submit} className="bg-white p-6 rounded-lg shadow space-y-4">
        <h2 className="text-xl font-bold">Create Company</h2>

        <input name="name" placeholder="Company Name" onChange={handleChange} className="input" />
        <input name="location" placeholder="Location" onChange={handleChange} className="input" />
        <input name="website" placeholder="Website" onChange={handleChange} className="input" />
        <textarea name="description" placeholder="Description" onChange={handleChange} className="input" />

        <button className="bg-indigo-600 text-white px-4 py-2 rounded">
          Create
        </button>
      </form>
    </div>
  )
}

export default CreateCompany