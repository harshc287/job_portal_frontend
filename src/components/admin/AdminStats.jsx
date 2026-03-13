import { useState, useEffect } from "react";
import { getStats } from "../../services/adminService"; // adjust path

function AdminStats() {
  const [stats, setStats] = useState({ users: 0, jobs: 0, applications: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getStats();
        setStats(data);
      } catch (err) {
        setError("Failed to load stats");
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  const statCards = [
    { label: "Total Users", value: stats.users, color: "bg-blue-500" },
    { label: "Total Jobs", value: stats.jobs, color: "bg-green-500" },
    { label: "Applications", value: stats.applications, color: "bg-purple-500" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {statCards.map((stat) => (
        <div key={stat.label} className="bg-white rounded-lg shadow-md p-6">
          <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mb-4`}>
            {/* You can add an icon here */}
          </div>
          <p className="text-gray-600 text-sm">{stat.label}</p>
          <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}

export default AdminStats;