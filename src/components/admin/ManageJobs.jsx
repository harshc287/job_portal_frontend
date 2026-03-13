import { useState, useEffect } from "react";
import { getJobs } from "../../services/jobService"; // adjust if you have admin job fetch
import { deleteJob } from "../../services/adminService";
import { TrashIcon, PencilIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function ManageJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchJobs = async () => {
    try {
      // Assuming you have an admin endpoint to get all jobs
      const data = await getJobs(); // modify if needed
      setJobs(data);
    } catch (err) {
      setError("Failed to load jobs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this job?")) return;
    try {
      await deleteJob(id);
      setJobs(jobs.filter((job) => job._id !== id));
    } catch (err) {
      alert("Failed to delete job");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Company
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Location
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {jobs.map((job) => (
            <tr key={job._id}>
              <td className="px-6 py-4 whitespace-nowrap">{job.title}</td>
              <td className="px-6 py-4 whitespace-nowrap">{job.company}</td>
              <td className="px-6 py-4 whitespace-nowrap">{job.location}</td>
              <td className="px-6 py-4 whitespace-nowrap space-x-2">
                <Link
                  to={`/jobs/${job._id}/edit`}
                  className="text-indigo-600 hover:text-indigo-800"
                >
                  <PencilIcon className="w-5 h-5 inline" />
                </Link>
                <button
                  onClick={() => handleDelete(job._id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <TrashIcon className="w-5 h-5 inline" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageJobs;