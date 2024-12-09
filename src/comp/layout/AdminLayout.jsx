import { Outlet } from "react-router-dom";
import AdminNav from "../AdminFile/AdminNavbar";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar takes 20% of the width */}
      <div className="flex-shrink-0 w-64">
        <AdminNav />
      </div>

      {/* Main content area takes 80% of the width */}
      <main className="flex-grow p-6">
        {/* Dashboard or any page rendered by the Outlet */}
        <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
        <h3 className="text-xl font-semibold mb-2">Welcome to the Admin Dashboard</h3>
        <div className="grid grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Total Posts</h3>
            <p className="text-4xl font-bold">120</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Tranding Post</h3>
            <p className="text-4xl font-bold">350</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Today post</h3>
            <p className="text-4xl font-bold">1</p>
          </div>
        </div>
        {/* The Outlet is where other nested routes render */}
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
