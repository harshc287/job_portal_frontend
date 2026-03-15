import { useState, useEffect } from "react";
import { getStats } from "../../services/adminService";
import { UsersIcon, BriefcaseIcon, DocumentTextIcon } from "@heroicons/react/24/outline";
import toast from "react-hot-toast";

function AdminStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getStats();
        setStats(data);
      } catch (err) {
        toast.error("Failed to load stats");
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md p-6 h-32"></div>
        ))}
      </div>
    );
  }

  const statCards = [
    { label: "Total Users", value: stats.users, icon: UsersIcon, color: "bg-blue-500" },
    { label: "Total Jobs", value: stats.jobs, icon: BriefcaseIcon, color: "bg-green-500" },
    { label: "Applications", value: stats.applications, icon: DocumentTextIcon, color: "bg-purple-500" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {statCards.map((stat) => (
        <div key={stat.label} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
          <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mb-4`}>
            <stat.icon className="w-6 h-6 text-white" />
          </div>
          <p className="text-gray-600 text-sm">{stat.label}</p>
          <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}

export default AdminStats;