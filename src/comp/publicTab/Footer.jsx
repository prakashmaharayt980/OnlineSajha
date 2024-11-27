import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 text-sm">
      {/* Top Section */}
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-white">
            जनआकांक्षा सञ्चारद्वारा सञ्चालित
          </h3>
          <p>रोल्पा नगरपालिका-४ टुँडिखेल लिवाङ, रोल्पा</p>
          <p>📞 <span className="font-medium">०८६-४४०३०६</span></p>
          <p>📧 <span className="font-medium">onlinesajhanews@gmail.com</span></p>
          <p>सूचना विभाग दर्ता नं. २३९-२०७८/७९</p>
        </div>

        {/* Column 2 */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-white">सम्पादक</h3>
          <p className="font-medium">प्रविन सुमार</p>
        </div>

        {/* Column 3 */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-white">महत्त्वपूर्ण लिङ्कहरू</h3>
          <ul className="space-y-2">
            <li className="hover:text-blue-400 transition">About Us</li>
            <li className="hover:text-blue-400 transition">Contact</li>
            <li className="hover:text-blue-400 transition">Advertisement</li>
            <li className="hover:text-blue-400 transition">Unicode</li>
            <li className="hover:text-blue-400 transition">Horoscope</li>
            <li className="hover:text-blue-400 transition">ePaper</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700"></div>

      {/* Bottom Section */}
      <div className="bg-gray-800 py-4 text-center text-xs text-gray-400">
        <p>©2024 onlinesajha.com, All Rights Reserved.</p>
      
      </div>
    </footer>
  );
};

export default Footer;
