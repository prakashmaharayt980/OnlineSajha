import { Outlet } from 'react-router-dom';
import Navbar from '../publicTab/NavBar';
import Footer from '../publicTab/Footer';

const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="lg:w-4/5 md:w-4/5 sm:w-full  mx-auto lg:px-4 sm:px-0 md:px-8 flex-1">
        {/* The Outlet for nested routes */}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default PublicLayout;
