import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  ChartBarIcon,
  BriefcaseIcon,
  UsersIcon,
  ClockIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

function AdminSidebar() {
  const navigation = [
    { name: "Dashboard", to: "/admin", icon: HomeIcon },
    { name: "Users", to: "/admin/users", icon: UsersIcon },
    { name: "Jobs", to: "/admin/jobs", icon: BriefcaseIcon },
    { name: "Pending Jobs", to: "/admin/pending-jobs", icon: ClockIcon },
    { name: "Applications", to: "/admin/applications", icon: DocumentTextIcon },
    { name: "Analytics", to: "/admin/analytics", icon: ChartBarIcon },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white shadow-lg h-screen sticky top-0">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-xl font-bold text-indigo-400">Admin Panel</h2>
      </div>
      <nav className="mt-6">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition ${
                isActive ? "bg-gray-800 text-white border-l-4 border-indigo-500" : ""
              }`
            }
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default AdminSidebar;