import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminStats from "../../components/admin/AdminStats";

function AdminDashboard() {
  return (
    <div className="flex">
      <AdminSidebar />
      <main className="flex-1 p-8 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>
        <AdminStats />
        {/* Additional widgets can go here */}
      </main>
    </div>
  );
}

export default AdminDashboard;