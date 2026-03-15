import AdminSidebar from "../../components/admin/AdminSidebar";
import { useEffect, useState } from "react";
import { getPendingJobs, approveJob, rejectJob } from "../../services/adminService";
import toast from "react-hot-toast";

function AdminPendingJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const data = await getPendingJobs(page, 10); // pass page & limit
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

  return (
    <div className="flex">
      <AdminSidebar />
      <main className="flex-1 p-8 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold mb-6">Pending Jobs</h1>

        <div className="bg-white rounded-lg shadow-md p-6">
          {loading ? (
            // Skeleton loader
            <div className="animate-pulse space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-48"></div>
                    <div className="h-3 bg-gray-200 rounded w-32"></div>
                  </div>
                  <div className="space-x-2">
                    <div className="h-8 bg-gray-200 rounded w-16 inline-block"></div>
                    <div className="h-8 bg-gray-200 rounded w-16 inline-block"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : jobs.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No pending jobs</p>
          ) : (
            <>
              {jobs.map((job) => (
                <div
                  key={job._id}
                  className="border-b border-gray-100 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center"
                >
                  <div>
                    <h2 className="font-semibold text-gray-800">{job.title}</h2>
                    <p className="text-gray-500 text-sm">{job.company}</p>
                  </div>
                  <div className="mt-2 sm:mt-0 space-x-2">
                    <button
                      onClick={() => handleApprove(job._id)}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleReject(job._id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm transition"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ))}

              {/* Pagination */}
              <div className="flex justify-between items-center mt-6">
                <button
                  disabled={page === 1}
                  onClick={() => setPage((p) => p - 1)}
                  className="px-4 py-2 bg-indigo-600 text-white rounded disabled:opacity-50 hover:bg-indigo-700 transition"
                >
                  Previous
                </button>
                <span className="text-gray-600">
                  Page {page} of {totalPages}
                </span>
                <button
                  disabled={page === totalPages}
                  onClick={() => setPage((p) => p + 1)}
                  className="px-4 py-2 bg-indigo-600 text-white rounded disabled:opacity-50 hover:bg-indigo-700 transition"
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default AdminPendingJobs;