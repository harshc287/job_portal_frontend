import { ExternalLink, MapPin, Building2 } from "lucide-react";

function CompanyDetails({ company }) {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4">

      <div className="bg-white shadow-lg rounded-2xl p-8">

        {/* HEADER */}
        <div className="flex items-center gap-6 mb-6">
          <img
            src={company.logo || "https://via.placeholder.com/80"}
            alt="logo"
            className="w-20 h-20 rounded-xl object-cover border"
          />

          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              {company.name}
            </h1>

            <p className="text-gray-500 mt-1 flex items-center gap-2">
              <MapPin size={16} /> {company.location || "N/A"}
            </p>
          </div>
        </div>

        {/* INFO GRID */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">

          {company.industry && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Industry</p>
              <p className="font-semibold">{company.industry}</p>
            </div>
          )}

          {company.size && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Company Size</p>
              <p className="font-semibold">{company.size}</p>
            </div>
          )}

          {company.foundedYear && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Founded</p>
              <p className="font-semibold">{company.foundedYear}</p>
            </div>
          )}

          {company.website && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Website</p>
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline flex items-center gap-1"
              >
                Visit <ExternalLink size={14} />
              </a>
            </div>
          )}
        </div>

        {/* DESCRIPTION */}
        {company.description && (
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <Building2 size={18} /> About Company
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {company.description}
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

export default CompanyDetails;