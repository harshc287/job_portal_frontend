import { useState } from "react";

function JobSearchBar({ onSearch }) {
  const [keyword, setKeyword] = useState("");

  const search = () => {
    onSearch(keyword);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Search jobs by title, company, or keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
        <button
          onClick={search}
          className="sm:w-auto w-full bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-200 font-medium"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default JobSearchBar;