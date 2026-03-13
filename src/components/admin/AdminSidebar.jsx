import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  ChartBarIcon,
  BriefcaseIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

function AdminSidebar() {
  const navigation = [
    { name: "Dashboard", to: "/admin", icon: HomeIcon },
    { name: "Analytics", to: "/admin/analytics", icon: ChartBarIcon },
    { name: "Jobs", to: "/admin/jobs", icon: BriefcaseIcon },
    { name: "Users", to: "/admin/users", icon: UsersIcon },
  ];

  return (
    <aside className="w-64 bg-white shadow-md h-screen sticky top-0">
      <div className="p-4">
        <h2 className="text-xl font-bold text-indigo-600">Admin Panel</h2>
      </div>
      <nav className="mt-4">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition ${
                isActive ? "bg-indigo-50 text-indigo-600 border-r-4 border-indigo-600" : ""
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