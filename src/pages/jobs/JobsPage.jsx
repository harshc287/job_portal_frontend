import { useEffect, useState } from "react";
import { getJobs } from "../../services/jobService";
import JobList from "../../components/jobs/JobList";
import JobSearchBar from "../../components/jobs/JobSearchBar";
import JobFilter from "../../components/jobs/JobFilter";
import Loader from "../../components/common/Loader";

function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filters, setFilters] = useState({ location: "", experience: "" });

  // Fetch jobs with filters
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const data = await getJobs({ keyword: searchKeyword, ...filters });
        setJobs(data);
        setError(null);
      } catch (err) {
        setError("Failed to load jobs. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [searchKeyword, filters]);

  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
  };

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Find Your Dream Job</h1>

      {/* Search Bar */}
      <JobSearchBar onSearch={handleSearch} />

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-8">
        {/* Sidebar Filter */}
        <div className="lg:col-span-1">
          <JobFilter onFilter={handleFilter} />
        </div>

        {/* Job Listings */}
        <div className="lg:col-span-3">
          {loading && <Loader />}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg">
              {error}
            </div>
          )}
          {!loading && !error && jobs.length === 0 && (
            <div className="bg-gray-50 border border-gray-200 text-gray-600 px-6 py-12 rounded-lg text-center">
              <p className="text-lg">No jobs found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchKeyword("");
                  setFilters({ location: "", experience: "" });
                }}
                className="mt-4 text-indigo-600 hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
          {!loading && !error && jobs.length > 0 && <JobList jobs={jobs} />}
        </div>
      </div>
    </div>
  );
}

export default JobsPage;