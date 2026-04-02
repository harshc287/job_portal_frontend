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
    <aside className="w-64 h-screen sticky top-0 bg-white border-r shadow-sm flex flex-col">

      {/* 🔷 HEADER */}
      <div className="px-6 py-5 border-b bg-gradient-to-r from-indigo-600 to-indigo-500">
        <h2 className="text-xl font-bold text-white tracking-wide">
          Admin Panel
        </h2>
        <p className="text-xs text-indigo-100 mt-1">
          Manage platform
        </p>
      </div>

      {/* 🔹 NAV */}
      <nav className="flex-1 px-4 py-6 space-y-2">

        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group
              ${
                isActive
                  ? "bg-indigo-50 text-indigo-600 shadow-sm"
                  : "text-gray-600 hover:bg-gray-100 hover:text-indigo-600"
              }`
            }
          >
            {/* ICON */}
            <item.icon className="w-5 h-5 group-hover:scale-110 transition" />

            {/* TEXT */}
            {item.name}
          </NavLink>
        ))}

      </nav>

      {/* 🔻 FOOTER */}
      <div className="p-4 border-t text-xs text-gray-400 text-center">
        © 2026 JobPortal
      </div>

    </aside>
  );
}

export default AdminSidebar;