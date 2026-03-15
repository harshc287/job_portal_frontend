import { useState, useEffect } from "react";
import { getRecentActivity } from "../../services/adminService";
import toast from "react-hot-toast";

function ActivityStats() {
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const data = await getRecentActivity();
        setActivity(data);
      } catch (err) {
        toast.error("Failed to load recent activity");
      } finally {
        setLoading(false);
      }
    };
    fetchActivity();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md p-4 h-48"></div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Recent Users */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="font-semibold text-gray-700 mb-3">Recent Users</h3>
        <ul className="space-y-2">
          {activity.recentUsers.map((user) => (
            <li key={user._id} className="text-sm text-gray-600">
              {user.name} – {new Date(user.createdAt).toLocaleDateString()}
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Jobs */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="font-semibold text-gray-700 mb-3">Recent Jobs</h3>
        <ul className="space-y-2">
          {activity.recentJobs.map((job) => (
            <li key={job._id} className="text-sm text-gray-600">
              {job.title} at {job.company}
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Applications */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="font-semibold text-gray-700 mb-3">Recent Applications</h3>
        <ul className="space-y-2">
          {activity.recentApplications.map((app) => (
            <li key={app._id} className="text-sm text-gray-600">
              {app.userId?.name} applied for {app.jobId?.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ActivityStats;