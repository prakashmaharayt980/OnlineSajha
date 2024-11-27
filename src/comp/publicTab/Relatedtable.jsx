import React from "react";
import ads3 from "../../assets/img/ads3.jpg";

const Relatedtable = () => {
  const newsItems = [
    {
      id: 1,
      image: ads3,
      title: "सामाजिक सुरक्षा कोषमा १७ लाखभन्दा बढी श्रमिक आबद्ध",
      date: "मंसिर ११, २०८०",
    },
    {
      id: 2,
      image: ads3,
      title:
        "कूटनीतिक र विशेष राहदानी प्रयोग गरेर अफ्रुससी जाने कर्मचारीलाई अंकुश लगाउने तयारी",
      date: "मंसिर ११, २०८०",
    },
    {
      id: 3,
      image: ads3,
      title: "तानसेनको छापगाउँमा फलामखानीको उत्खनन अध्ययन गर्न माग",
      date: "मंसिर ११, २०८०",
    },
    {
      id: 4,
      image: ads3,
      title: "अब कसैले अनाथ भए भनु पर्दैन, सरकार साथमा छ : प्रधानमन्त्री ओली",
      date: "मंसिर ११, २०८०",
    },
    {
      id: 5,
      image: ads3,
      title: "आवासीय चिकित्सकलाइ भत्ता थपी निर्णयबाट पछि हट्यो आयोग",
      date: "मंसिर ११, २०८०",
    },
    {
      id: 6,
      image: ads3,
      title: "आजको मौसम : तराईका केही स्थानमा हल्का हुस्सु",
      date: "मंसिर ११, २०८०",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-2 py-4">
      <h2 className="text-3xl font-semibold text-gray-900 mb-8">थप केही समाचारबाट &gt;</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {newsItems.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 rounded-lg shadow-lg bg-white hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="overflow-hidden rounded-t-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover transition-transform duration-300 transform hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-600 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Relatedtable;
