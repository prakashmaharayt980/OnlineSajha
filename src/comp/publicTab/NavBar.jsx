import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Importing FontAwesome icons

import news1 from '../../assets/img/news1.jpg';
import logo1 from '../../assets/img/OnlineSajha-1.png';
import LoginModal from './Login';

const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false); // State for mobile nav toggle
  const [loginbox, setloginbox] = useState(false)
  const navigate = useNavigate();

  // Menu List
  const menulist = [
    { name: 'News', to: './typeOfNews' },
    { name: 'Political', to: './typeOfNews' },
    { name: 'Society', to: './typeOfNews' },
    { name: 'Culture', to: './typeOfNews' },
    { name: 'Lifestyle', to: './typeOfNews' },
    { name: 'Entertainment', to: './typeOfNews' },
    { name: 'Technology', to: './typeOfNews' },
    { name: 'Sports', to: './typeOfNews' },
  ];

  // Date Formatting
  const currentDate = new Date();
  const bsDate = '2079-09-13'; // Example, replace with actual conversion logic
  const adDate = format(currentDate, 'eeee, MMMM dd, yyyy'); // AD Date

  const handleOpenLogin = () => setloginbox(!loginbox);
  // Handle menu click navigation
  const handleClick = (to) => {
    setSelectedOption(to);
    navigate(to);
  };

  return (
    <div>
      {/* Header Section */}
      <header className="bg-white text-gray-800 px-8 py-2 md:py-4 flex flex-col items-center justify-between shadow-md border-b-2 border-gray-200">
        {/* Mobile Layout */}
        <div className="block lg:hidden w-full">
          {/* Logo */}
          <div className="flex justify-center mt-4">
            <img src={logo1} alt="Logo" className="w-32 h-auto" />
          </div>

          {/* Avatar for Login */}
          <div    onClick={handleOpenLogin} className="flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200 mt-6">
            <Avatar alt="User Avatar" src={news1} className="w-16 h-16 shadow-lg" />
            <div className="ml-4">
              <h1 className="font-semibold text-lg text-gray-700 hover:text-blue-600 transition-colors duration-300">
                Login
              </h1>
            </div>
          </div>

          {/* Date Section */}
          <div className="mt-6 text-center text-sm text-gray-600">
            <p className="font-medium">{bsDate} (Bikram Sambat)</p>
            <p className="font-medium">{adDate} (AD)</p>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex w-full justify-between items-center">
          {/* Date Section */}
          <div className="flex flex-col items-center space-y-1 text-sm text-gray-600">
            <p className="font-medium">{bsDate} (Bikram Sambat)</p>
            <p className="font-medium">{adDate} (AD)</p>
          </div>

          {/* Logo */}
          <div className="flex items-center justify-center mt-2">
            <img src={logo1} alt="Logo" className="max-w-[300px] h-auto" />
          </div>

          {/* Avatar for Login */}
          <div className="cursor-pointer  transition-transform duration-200 flex flex-row items-center "
          onClick={handleOpenLogin}
          >
            <Avatar alt="User Avatar" src={news1} className="w-12 h-12 shadow-lg" />
          </div>
        </div>
      </header>

      {/* Navbar Section with Menu List */}
      <nav className="bg-white text-gray-800 px-8 py-2 align-middle  flex justify-center items-center shadow-md rounded-md sticky top-0 z-50">
        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden flex items-center">
          <FontAwesomeIcon
            icon={faBars} // Use FontAwesome icon here
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)} // Toggle mobile nav visibility
            className="text-gray-800 text-2xl cursor-pointer"
          />
        </div>

        {/* Menu List for Desktop */}
        <ul className="hidden lg:flex space-x-8 justify-center items-center text-center  text-x font-semibold">
          {menulist.map((item, index) => (
            <li key={index} className="cursor-pointer hover:text-blue-600 transition-all ease-in-out duration-200 text-center border-b-2 border-transparent hover:border-blue-600 pb-2">
              <span onClick={() => handleClick(item.to)}>{item.name}</span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu (conditionally rendered based on state) */}
        {isMobileNavOpen && (
          <div className="lg:hidden fixed top-0 left-0 right-0 bg-white shadow-lg z-50 px-6 py-4">
            <FontAwesomeIcon
              icon={faTimes} // Use FontAwesome icon here
              onClick={() => setIsMobileNavOpen(false)} // Close mobile nav
              className="text-gray-800 text-2xl cursor-pointer absolute top-4 right-4"
            />

            <ul className="space-y-4 text-lg font-semibold">
              {menulist.map((item, index) => (
                <li key={index} className="cursor-pointer hover:text-blue-500 transition-all ease-in-out duration-200 text-center border-b-2 border-transparent hover:border-blue-600 pb-2">
                  <span onClick={() => handleClick(item.to)}>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      <LoginModal Open={loginbox} handleOpenLogin={handleOpenLogin} />
    </div>
  );
};

export default Navbar;
