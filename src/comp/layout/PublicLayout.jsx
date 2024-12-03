import { Outlet } from 'react-router-dom';
import Navbar from '../publicTab/NavBar';
import Footer from '../publicTab/Footer';

const PublicLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="w-4/5 m-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default PublicLayout;
