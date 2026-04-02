import { useEffect, useState } from "react"
import { getMyCompanies, deleteCompany } from "../../services/companyService"

function MyCompanies() {
  const [companies, setCompanies] = useState([])

  const fetch = async () => {
    const data = await getMyCompanies()
    setCompanies(data)
  }

  useEffect(() => {
    fetch()
  }, [])

  const remove = async (id) => {
    await deleteCompany(id)
    fetch()
  }

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">My Companies</h2>

      {companies.map(c => (
        <div key={c._id} className="p-4 border rounded mb-3">
          <h3 className="font-semibold">{c.name}</h3>
          <p>{c.location}</p>

          <button
            onClick={() => remove(c._id)}
            className="text-red-500 mt-2"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default MyCompanies