import { Link } from "react-router-dom";

function CompanyCard({ company }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{company.name}</h3>
      <p className="text-gray-600 mb-4">{company.location}</p>
      <Link
        to={`/companies/${company._id}`}
        className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-200 text-sm font-medium"
      >
        View Company
      </Link>
    </div>
  );
}

export default CompanyCard;