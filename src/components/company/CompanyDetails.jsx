function CompanyDetails({ company }) {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">{company.name}</h2>
      
      <div className="space-y-4">
        {company.description && (
          <p className="text-gray-700 leading-relaxed">{company.description}</p>
        )}
        
        <div className="grid md:grid-cols-2 gap-4">
          {company.location && (
            <div>
              <span className="font-semibold text-gray-800">Location:</span>
              <p className="text-gray-600">{company.location}</p>
            </div>
          )}
          
          {company.website && (
            <div>
              <span className="font-semibold text-gray-800">Website:</span>
              <p className="text-gray-600">
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline break-words"
                >
                  {company.website}
                </a>
              </p>
            </div>
          )}
        </div>
        
        {/* Optional: add other fields like industry, size, etc. */}
      </div>
    </div>
  );
}

export default CompanyDetails;