import { Button } from '@mui/material';
import logo1 from '../../assets/img/OnlineSajha-1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const nagvation=useNavigate()
  const menulist = [
    { name: 'News', to:'./typeOfNews'},
    { name: 'Political', to:'./typeOfNews' },
    { name: 'Society',to:'./typeOfNews'},
    { name: 'Culture',to:'./typeOfNews' },
    { name: 'Lifestyle' ,to:'./typeOfNews' },
    { name: 'Entertainment',to:'./typeOfNews'  },
    { name: 'Technology', to:'./typeOfNews'},
   
    { name: 'Sports' ,to:'./typeOfNews'}
  ];
  

 
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    nagvation(event.target.value)
  };

 
  return (
    <nav className="bg-white text-gray-800 px-6 py-4 flex justify-between items-center shadow-md rounded-md">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img src={logo1} alt="Logo" className="w-40 h-auto" />
      </div>

      {/* Menu and Searchbar */}
      <div className="flex items-center space-x-6">
        {/* Dropdown Menu */}
        <div className="relative">
          <select
            id="simple-select"
            value={selectedOption}
            onChange={handleChange}
            className="bg-white text-gray-800 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ease-in-out duration-200"
          >
            <option value="">Select Category of News</option>
            {menulist.map((item, index) => (
              <option key={index} value={item.to } >
                {item.name}
              </option>
            ))}
          </select>
        </div>

        {/* Search and Language Buttons */}
        <div className="flex items-center space-x-3">
          <Button className="text-gray-800 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 hover:text-blue-500 transition-all ease-in-out duration-200">
            English
          </Button>
          <Button
            className="text-gray-800 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 hover:text-blue-500 transition-all ease-in-out duration-200"
            aria-label="Search"
          >
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
