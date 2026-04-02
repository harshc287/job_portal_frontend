import { useState } from "react"
import { createCompany } from "../../services/companyService"
import { useNavigate } from "react-router-dom"

function CreateCompany() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
    logo: "",
    industry: "",
    size: "",
    foundedYear: ""
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const submit = async (e) => {
    e.preventDefault()

    if (!form.name) {
      setError("Company name is required")
      return
    }

    try {
      setLoading(true)
      setError("")

      await createCompany(form)

      navigate("/my-companies")

    } catch (err) {
      setError(err.response?.data?.message || "Failed to create company")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">

      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-8">

        {/* HEADER */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Create Company
          </h2>
          <p className="text-gray-500 mt-1">
            Add your company details to start posting jobs
          </p>
        </div>

        {/* ERROR */}
        {error && (
          <div className="mb-4 bg-red-50 text-red-600 p-3 rounded-lg border">
            {error}
          </div>
        )}

        {/* FORM */}
        <form onSubmit={submit} className="space-y-5">

          {/* NAME */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company Name *
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter company name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          {/* LOCATION */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="e.g. Mumbai, India"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* WEBSITE */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Website
            </label>
            <input
              name="website"
              value={form.website}
              onChange={handleChange}
              placeholder="https://example.com"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* LOGO */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Logo URL
            </label>
            <input
              name="logo"
              value={form.logo}
              onChange={handleChange}
              placeholder="Paste logo image URL"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* INDUSTRY */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Industry
            </label>
            <input
              name="industry"
              value={form.industry}
              onChange={handleChange}
              placeholder="e.g. IT, Finance"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* SIZE + YEAR */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Size
              </label>
              <input
                name="size"
                value={form.size}
                onChange={handleChange}
                placeholder="e.g. 50-100"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Founded Year
              </label>
              <input
                name="foundedYear"
                type="number"
                value={form.foundedYear}
                onChange={handleChange}
                placeholder="e.g. 2015"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={4}
              placeholder="Write about your company..."
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg text-white font-semibold transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {loading ? "Creating..." : "Create Company"}
          </button>

        </form>
      </div>
    </div>
  )
}

export default CreateCompany