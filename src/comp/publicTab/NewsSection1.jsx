import React from 'react';
import news1 from '../../assets/img/news1.jpg'; // Replace with your actual image
import adds1 from '../../assets/img/onlinekhabar.gif';
// Fake data for news
const newslist = [
  {
    title: "रोल्पामा खेलकुद मैदान निर्माणका लागि क्लवलाई दुई युवाद्वारा दुई लाख सहयोग",
    imgSrc: news1,
    description: "A brief description of the news goes here."
  },
  {
    title: "नेपालमा राष्ट्रिय खेलकुद महोत्सवको तयारी",
    imgSrc: news1,
    description: "Details about the national sports festival preparations."
  },
  {
    title: "शिक्षा क्षेत्रमा सुधारका लागि सरकारको नयाँ पहल",
    imgSrc: news1,
    description: "Government's new initiative to improve the education sector."
  }
  // ,
  // {
  //   title: "शिक्षा क्षेत्रमा सुधारका लागि सरकारको नयाँ पहल",
  //   imgSrc: news1,
  //   description: "Government's new initiative to improve the education sector."
  // }
];

export default function NewsSection1() {
  return (
  <div>
      <div className="container">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600  p-2 rounded-lg shadow-lg mb-8 text-start">
        <div className="text-white text-4xl font-extrabold">समाचार</div>
      </div>

      {/* News Item Section - Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* First News Item - Larger Size */}
        <div className="lg:col-span-4 col-span-1 bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300  ">
          <img src={newslist[0].imgSrc} alt="News" className="w-full h-60 object-cover rounded-t-lg" />
          <div className="p-4">
            <h3 className="font-bold text-lg">{newslist[0].title}</h3>
            <p className="text-gray-600">{newslist[0].description}</p>
          </div>
        </div>

        {/* Smaller News Items - 2 Columns Layout */}
        <div className="lg:col-span-1 col-span-1 space-y-4">
          {newslist.slice(1).map((news, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 ">
              <img src={news.imgSrc} alt="News" className="w-full h-32 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="font-bold text-md">{news.title}</h3>
      
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Adds Box Section */}
      <div className="adds-box mt-6 mb-4">
        <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3">
          <li><img src={news1} alt="Ad" className="w-full h-80 object-contain rounded-lg" /></li>
          <li><img src={news1} alt="Ad" className="w-full  h-80 object-contain rounded-lg" /></li>
          <li><img src={news1} alt="Ad" className="w-full  h-80 object-contain rounded-lg" /></li>
      
        </ul>
      </div>
    </div>
    <div className="container mb-1">
    

      {/* News Item Section - Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
      

        {/* Smaller News Items - 2 Columns Layout */}
        <div className="lg:col-span-1 col-span-1 space-y-4">
          {newslist.slice(1).map((news, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 ">
              <img src={news.imgSrc} alt="News" className="w-full h-32 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="font-bold text-md">{news.title}</h3>
      
              </div>
            </div>
          ))}
        </div>
          {/* First News Item - Larger Size */}
          <div className="lg:col-span-4 col-span-1 bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300  ">
          <img src={newslist[0].imgSrc} alt="News" className="w-full h-60 object-cover rounded-t-lg" />
          <div className="p-4">
            <h3 className="font-bold text-lg">{newslist[0].title}</h3>
            <p className="text-gray-600">{newslist[0].description}</p>
          </div>
        </div>
      </div>

     
    </div>
    <div className="adsbox1 my-3">
        <img src={adds1} alt="" />
    </div>
   {/* Smaller News Items - 2 Columns Layout */}
   <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 my-3">
          {newslist.slice(1).map((news, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 ">
              <img src={news.imgSrc} alt="News" className="w-full  h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="font-bold text-md">{news.title}</h3>
      
              </div>
            </div>
          ))}
        </div>
  </div>
  );
}
