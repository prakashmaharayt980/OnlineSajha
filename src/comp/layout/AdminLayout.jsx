import { Outlet } from 'react-router-dom';
import AdminNav from '../AdminFile/AdminNavbar';


const AdminLayout = () => {


    
  return (
    <div className="flex flex-row min-h-screen">
      {/* Sidebar takes 25% */}
      <div className="flex-shrink-0 w-1/5" >
        <AdminNav  />
      </div>

      {/* Outlet takes 75% */}
      <main className="flex-grow bg-gray-100 w-4/5" >
        <Outlet  />
      </main>
    </div>
  );
};

export default AdminLayout;
