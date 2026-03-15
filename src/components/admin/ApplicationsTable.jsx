import { useState, useEffect } from "react";
import { getApplications } from "../../services/adminService";
import toast from "react-hot-toast";

function ApplicationsTable() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchApps = async () => {
    try {
      setLoading(true);
      const data = await getApplications(page);
      setApplications(data.applications);
      setTotalPages(data.totalPages);
    } catch {
      toast.error("Failed to load applications");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApps();
  }, [page]);

  if (loading) return <div className="bg-white rounded-lg shadow-md p-4 animate-pulse h-64"></div>;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Candidate</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Job</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {applications.map((app) => (
            <tr key={app._id}>
              <td className="px-6 py-4 whitespace-nowrap">{app.userId?.name || 'N/A'}</td>
              <td className="px-6 py-4 whitespace-nowrap">{app.userId?.email || 'N/A'}</td>
              <td className="px-6 py-4 whitespace-nowrap">{app.jobId?.title || 'N/A'}</td>
              <td className="px-6 py-4 whitespace-nowrap">{app.jobId?.company || 'N/A'}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  app.status === 'accepted' ? 'bg-green-100 text-green-800' :
                  app.status === 'rejected' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {app.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination controls */}
    </div>
  );
}

export default ApplicationsTable;