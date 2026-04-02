import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

function CompanyCard({ company }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition duration-300 p-5 border group">

      {/* LOGO */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={company.logo || "https://via.placeholder.com/60"}
          alt="logo"
          className="w-14 h-14 rounded-lg object-cover border"
        />

        <div>
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition">
            {company.name}
          </h3>

          <p className="text-gray-500 text-sm flex items-center gap-1">
            <MapPin size={14} /> {company.location || "Unknown"}
          </p>
        </div>
      </div>

      {/* EXTRA INFO */}
      <div className="flex justify-between text-sm text-gray-500 mb-4">
        <span>{company.industry || "Industry N/A"}</span>
        <span>{company.size || "Size N/A"}</span>
      </div>

      {/* BUTTON */}
      <Link
        to={`/companies/${company._id}`}
        className="block text-center bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition font-medium"
      >
        View Company
      </Link>

    </div>
  );
}

export default CompanyCard;