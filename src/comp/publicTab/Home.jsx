
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/img/OnlineSajha-1.png';
import news1 from '../../assets/img/news1.jpg';
import adds1 from '../../assets/img/onlinekhabar.gif';
import NewsSection1 from './NewsSection1';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const nagvation=useNavigate()
    const conentDetails=()=>{
        nagvation('./contentPage')
    }
  return (
  <div>
      <div className="relative w-full my-2" onClick={conentDetails}>
      {/* Image Section */}
      <div className="relative w-full h-96 overflow-hidden">
        <img src={news1} alt="Featured" className="object-cover w-full h-full"  />
      </div>

      {/* Text Section */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-6">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 leading-tight">
          कृषिबाट गाउँमा आत्मनिर्भरता
        </h1>
      </div>

      {/* Bottom Left - Date */}
      <div className="absolute bottom-4 left-4 flex items-center space-x-2">
        <FontAwesomeIcon icon={faClock} className="text-white" />
        <span className="text-sm text-white">23 घन्टा अगाडी</span>
      </div>

      {/* Bottom Right - Logo */}
      <div className="absolute bottom-4 right-4">
        <img src={logo} alt="Logo" className="w-24 h-auto" />
      </div>
    </div>
    <div className="adsbox1 my-2">
        <img src={adds1} alt="" />
    </div>

    <NewsSection1/>
  </div>
  );
}
