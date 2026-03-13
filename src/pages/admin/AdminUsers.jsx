import AdminSidebar from "../../components/admin/AdminSidebar";
import ManageUsers from "../../components/admin/ManageUsers";

function AdminUsers() {
  return (
    <div className="flex">
      <AdminSidebar />
      <main className="flex-1 p-8 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Manage Users</h1>
        <ManageUsers />
      </main>
    </div>
  );
}

export default AdminUsers;