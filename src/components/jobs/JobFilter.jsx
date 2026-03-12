import { useState } from "react";

function JobFilter({ onFilter }) {
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");

  const applyFilter = () => {
    onFilter({ location, experience });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Filter Jobs</h3>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
        <input
          type="text"
          placeholder="Experience (e.g., 2 years)"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
        <button
          onClick={applyFilter}
          className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}

export default JobFilter;