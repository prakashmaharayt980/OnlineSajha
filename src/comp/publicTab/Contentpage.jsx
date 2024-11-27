import React from "react";
import news1 from "../../assets/img/news1.jpg"; // Replace with your actual image
import ads3 from "../../assets/img/ads3.jpg"; // Replace with your actual image
import video1 from "../../assets/video/vi.mp4"; // Replace with your actual video
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import Relatedtable from "./Relatedtable";

const Contentpage = () => {
  const hasImage = true; // Boolean to simulate if the image exists

  return (
    <div className="CONTENTPAGE flex flex-col md:flex-row gap-8 px-4 py-8 max-w-6xl mx-auto">
      {/* Content-1 */}
      <div className="CONTENT-1 flex-1 bg-white shadow-lg rounded-lg p-6">
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-2">
            रोल्पामा खेलकुद मैदान निर्माणका लागि क्लबलाई दुई युवाद्वारा दुई लाख सहयोग
          </h1>
          <div className="flex items-center text-gray-600 text-sm">
            <FontAwesomeIcon icon={faClock} className="mr-2" />
            <span>2081/4/3</span>
          </div>
        </header>

        {/* Main Content */}
        <main className="space-y-8">
          {/* First Section */}
          <div className="relative mb-6">
            <img
              src={news1}
              alt="Construction site with a tractor"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            ४ मंसिर, रोल्पा । समृद्ध युवा क्लब माडी गापा–३ ढाडबाङ रोल्पालाई
            स्थानीय दुई युवाले दुई लाख नगद सहयोग गरेका छन्। समृद्ध युवा क्लबका
            सदस्यहरुलाई तथा तीनजुले बघुडेँखोला कृषि तथा पशुपन्छी फर्म घोराही
            उपमहानगरपालिका–२३ का प्राविधिक समेत रहेका बलबहादुर सत्तलाधिकार
            क्लबलाई एक लाख सहयोग गरेका छन्।
          </p>

          {/* Second Section */}
          <div
            className={`flex flex-col md:flex-row items-start gap-6 ${
              hasImage ? "" : "md:flex-col"
            }`}
          >
            {/* Image Section */}
            {hasImage && (
              <div className="md:w-1/3">
                <img
                  src={news1}
                  alt="Additional Content"
                  className="w-full object-cover rounded-lg shadow-lg"
                />
              </div>
            )}

            {/* Content Section */}
            <div
              className={`${
                hasImage ? "md:w-2/3" : "w-full"
              } space-y-4 text-lg text-gray-700 leading-relaxed`}
            >
              <p>
                समृद्ध युवा क्लबका सदस्यहरुलाई तथा तीनजुले बघुडेँखोला कृषि तथा
                पशुपन्छी फर्म घोराही उपमहानगरपालिका–२३ का प्राविधिक समेत रहेका
                बलबहादुर सत्तलाधिकार क्लबलाई एक लाख सहयोग गरेका छन्।
              </p>
            </div>
          </div>

          {/* Ads Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src={news1}
              alt="News"
              className="w-full max-h-96 object-cover rounded-lg shadow-lg"
            />
            <img
              src={ads3}
              alt="Advertisement"
              className="w-full max-h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Video Section */}
          <div className="video-box bg-gray-100 rounded-lg shadow-md overflow-hidden mt-6">
            {/* Title Section */}
            <header className="py-2">
              <h2 className="text-lg font-semibold bg-blue-700 w-1/3 rounded-r-3xl shadow-md p-2">
                News Video
              </h2>
            </header>

            {/* Video Section */}
            <div className="relative">
              <video
                src={video1}
                controls
                className="w-full max-h-96 rounded-b-lg"
              />
            </div>
          </div>
        </main>

        <Relatedtable />
      </div>

      <div 
  className="CONTENT-2 w-full md:w-1/3 bg-white shadow-lg rounded-xl p-6 sticky top-8" 
  style={{  border: '1px solid #e5e7eb',maxHeight:'550px' }}
>
  {/* Recent News Section */}
  <div className="Recent-news mb-8">
    <h2 className="text-xl font-bold mb-4 text-gray-700 border-b-2 pb-2 border-gray-200">
      📢 Recent News
    </h2>
    <ul className="space-y-4 ml-5 list-none overflow-y-auto h-44 custom-scrollbar">
      <li className="page text-gray-600 hover:text-indigo-600 font-medium cursor-pointer transition duration-200 ease-in-out border-b border-gray-300 pb-2">
        Big news event 1
      </li>
      <li className="page text-gray-600 hover:text-indigo-600 font-medium cursor-pointer transition duration-200 ease-in-out border-b border-gray-300 pb-2">
        Breaking news 2
      </li>
      <li className="page text-gray-600 hover:text-indigo-600 font-medium cursor-pointer transition duration-200 ease-in-out border-b border-gray-300 pb-2">
        Exciting update 3
      </li>
      <li className="page text-gray-600 hover:text-indigo-600 font-medium cursor-pointer transition duration-200 ease-in-out border-b border-gray-300 pb-2">
        Headline 4
      </li>
      <li className="page text-gray-600 hover:text-indigo-600 font-medium cursor-pointer transition duration-200 ease-in-out border-b border-gray-300 pb-2">
        Story of the day 5
      </li>
    </ul>
  </div>

  {/* Trending Section */}
  <div className="Trending">
    <h2 className="text-xl font-bold mb-4 text-gray-700 border-b-2 pb-2 border-gray-200">
      🌟 Trending
    </h2>
    <ul className="space-y-4 ml-5 list-none overflow-y-auto h-44 custom-scrollbar">
      <li className="page text-gray-600 hover:text-green-600 font-medium cursor-pointer transition duration-200 ease-in-out border-b border-gray-300 pb-2">
        Viral topic 1
      </li>
      <li className="page text-gray-600 hover:text-green-600 font-medium cursor-pointer transition duration-200 ease-in-out border-b border-gray-300 pb-2">
        Trending topic 2
      </li>
      <li className="page text-gray-600 hover:text-green-600 font-medium cursor-pointer transition duration-200 ease-in-out border-b border-gray-300 pb-2">
        Popular event 3
      </li>
      <li className="page text-gray-600 hover:text-green-600 font-medium cursor-pointer transition duration-200 ease-in-out border-b border-gray-300 pb-2">
        Must-read 4
      </li>
      <li className="page text-gray-600 hover:text-green-600 font-medium cursor-pointer transition duration-200 ease-in-out border-b border-gray-300 pb-2">
        Buzz 5
      </li>
    </ul>
  </div>
</div>



    </div>
  );
};

export default Contentpage;
