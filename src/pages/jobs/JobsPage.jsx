import { useEffect, useState } from "react";
import { getJobs } from "../../services/jobService";
import JobList from "../../components/jobs/JobList";
import JobSearchBar from "../../components/jobs/JobSearchBar";
import JobFilter from "../../components/jobs/JobFilter";
import Loader from "../../components/common/Loader";

function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchKeyword, setSearchKeyword] = useState("");
  const [filters, setFilters] = useState({
    location: "",
    experience: "",
  });

  const fetchJobs = async () => {
    try {
      setLoading(true);

      const data = await getJobs({
        keyword: searchKeyword,
        ...filters,
      });

      setJobs(data);
      setError(null);
    } catch (err) {
      setError("Failed to load jobs. Try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [searchKeyword, filters]);

  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
  };

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Find Your Dream Job
          </h1>
          <p className="text-gray-500 mt-1">
            Explore opportunities from top companies 🚀
          </p>
        </div>
      </div>

      {/* SEARCH */}
      <div className="container mx-auto px-4 mt-6">
        <JobSearchBar onSearch={handleSearch} />
      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* FILTER SIDEBAR */}
        <div className="lg:col-span-1">
          <JobFilter onFilter={handleFilter} />
        </div>

        {/* JOB LIST */}
        <div className="lg:col-span-3">

          {/* LOADING */}
          {loading && (
            <div className="flex justify-center py-10">
              <Loader />
            </div>
          )}

          {/* ERROR */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg">
              {error}
            </div>
          )}

          {/* EMPTY STATE */}
          {!loading && !error && jobs.length === 0 && (
            <div className="bg-white border rounded-lg shadow-sm p-10 text-center">
              <h2 className="text-xl font-semibold text-gray-700">
                No jobs found 😕
              </h2>
              <p className="text-gray-500 mt-2">
                Try changing filters or search keyword
              </p>

              <button
                onClick={() => {
                  setSearchKeyword("");
                  setFilters({ location: "", experience: "" });
                }}
                className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* JOB LIST */}
          {!loading && !error && jobs.length > 0 && (
            <>
              <div className="mb-4 text-sm text-gray-500">
                Showing {jobs.length} job(s)
              </div>

              <JobList jobs={jobs} />
            </>
          )}

        </div>
      </div>
    </div>
  );
}

export default JobsPage;