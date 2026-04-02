import { useEffect, useState } from "react"
import { getCompanies } from "../../services/companyService"
import CompanyList from "../../components/company/CompanyList"

function Companies() {

  const [companies, setCompanies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetch = async () => {
      const data = await getCompanies()
      setCompanies(data)
      setLoading(false)
    }
    fetch()
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Explore Companies
      </h1>

      {loading ? (
        <p className="text-gray-500">Loading companies...</p>
      ) : companies.length === 0 ? (
        <p className="text-gray-500">No companies found</p>
      ) : (
        <CompanyList companies={companies} />
      )}

    </div>
  )
}

export default Companies