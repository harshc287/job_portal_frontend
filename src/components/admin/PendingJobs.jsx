import { useState, useEffect } from "react";
import { getPendingJobs, approveJob, rejectJob } from "../../services/adminService";
import toast from "react-hot-toast";

function PendingJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const data = await getPendingJobs(page);
      setJobs(data.jobs);
      setTotalPages(data.totalPages);
    } catch {
      toast.error("Failed to load pending jobs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [page]);

  const handleApprove = async (id) => {
    try {
      await approveJob(id);
      toast.success("Job approved");
      fetchJobs();
    } catch {
      toast.error("Approval failed");
    }
  };

  const handleReject = async (id) => {
    try {
      await rejectJob(id);
      toast.success("Job rejected");
      fetchJobs();
    } catch {
      toast.error("Rejection failed");
    }
  };

  if (loading) return <div className="bg-white rounded-lg shadow-md p-4 animate-pulse h-64"></div>;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {jobs.map((job) => (
            <tr key={job._id}>
              <td className="px-6 py-4 whitespace-nowrap">{job.title}</td>
              <td className="px-6 py-4 whitespace-nowrap">{job.company}</td>
              <td className="px-6 py-4 whitespace-nowrap space-x-2">
                <button
                  onClick={() => handleApprove(job._id)}
                  className="bg-green-600 text-white px-3 py-1 rounded text-sm"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleReject(job._id)}
                  className="bg-red-600 text-white px-3 py-1 rounded text-sm"
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
    </div>
  );
}

export default PendingJobs;