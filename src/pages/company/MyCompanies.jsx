import { useEffect, useState } from "react"
import { getMyCompanies, deleteCompany } from "../../services/companyService"
import { Link } from "react-router-dom"

function MyCompanies() {
  const [companies, setCompanies] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchCompanies = async () => {
    try {
      const data = await getMyCompanies()
      setCompanies(data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCompanies()
  }, [])

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure to delete this company?")
    if (!confirmDelete) return

    try {
      await deleteCompany(id)
      fetchCompanies()
    } catch (err) {
      alert("Delete failed")
    }
  }

  return (
    <div className="max-w-5xl mx-auto py-8">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">My Companies</h2>

        <Link
          to="/create-company"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          + Create Company
        </Link>
      </div>

      {/* LOADING */}
      {loading && <p className="text-gray-500">Loading...</p>}

      {/* EMPTY */}
      {!loading && companies.length === 0 && (
        <div className="text-center bg-gray-50 p-6 rounded-lg border">
          <p className="text-gray-600">No companies created yet</p>
        </div>
      )}

      {/* LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {companies.map((c) => (
          <div
            key={c._id}
            className="bg-white p-5 rounded-lg shadow border hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-gray-800">
              {c.name}
            </h3>

            <p className="text-gray-500 text-sm mb-3">
              {c.location || "No location"}
            </p>

            <div className="flex justify-between items-center">
              <Link
                to={`/companies/${c._id}`}
                className="text-indigo-600 text-sm hover:underline"
              >
                View
              </Link>

              <button
                onClick={() => handleDelete(c._id)}
                className="text-red-500 text-sm hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default MyCompanies