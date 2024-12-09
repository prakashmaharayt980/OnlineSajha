import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import RemoteServices from "../../RemoteServices/RemoteService";
import { useNavigate } from "react-router-dom";
import ModalAds from "./ModelNews";
const base = import.meta.env.VITE_API_BASE_URL_IMAGE ||``


export default function Home() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [AdsHomeData, setAdsHomeData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RemoteServices.getAllNews();
        const responseAds = await RemoteServices.getHomeAds();
        setNewsData(response.data);
        setAdsHomeData(responseAds);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  const topArticle = newsData[0];
  const otherArticles = newsData.slice(1);

  return (
<>
  <div className="container mx-auto px-4 py-10">
      {/* Top Featured Article */}
      {topArticle && <FeaturedArticle article={topArticle} />}

      {/* Grid for Other Articles */}
      <hr className="my-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {otherArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      <hr className="my-10" />
      <AdPlaceholder AdsHomeData={AdsHomeData} />
      <hr className="my-10" />
      <TypesOfNewsList />
    </div>

   <ModalAds AdsHomeData={AdsHomeData}/>
</>
  );
}

function FeaturedArticle({ article }) {
  const navigate = useNavigate();

  return (
    <div
      className="mb-10 cursor-pointer"
      onClick={() => navigate(`/contentPage/${article.id}`)}
    >
      <img
        src={`${base + article.post_images?.[0]?.image}`}
        alt={article.title}
        className="w-full h-96 object-contain"
      />
      <div className="mt-4">
        <h1 className="text-2xl font-bold text-gray-900"> {truncateText(article.title, 50)}{}</h1>
        <p className="text-gray-700 mt-2">
          {truncateText(article.description, 500)}
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Posted on {formatDate(article.date_created)}
        </p>
      </div>
    </div>
  );
}

FeaturedArticle.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    post_images: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string,
      })
    ),
    date_created: PropTypes.string.isRequired,
  }).isRequired,
};

function ArticleCard({ article }) {
  return (
    <div
      className="flex flex-col cursor-pointer"
      onClick={() => (window.location.href = `/contentPage/${article.id}`)}
    >
      <img
        src={`${base + article.post_images?.[0]?.image}`}
        alt={article.title}
        className="w-full h-48 object-contain rounded-md shadow-sm mb-4"
      />
      <div>
        <h2 className="text-lg font-bold text-gray-800 break-words"> {truncateText(article.title, 70)}</h2>
        <p className="text-base text-gray-600 mt-2 break-words">{truncateText(article.description, 180)}</p>
        <p className="text-xs text-gray-500 mt-2">
          Posted on {formatDate(article.date_created)}
        </p>
      </div>
    </div>
  );
}

ArticleCard.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    post_images: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string,
      })
    ),
    date_created: PropTypes.string.isRequired,
  }).isRequired,
};

function AdPlaceholder({ AdsHomeData }) {

  if (!AdsHomeData?.length) {
    return <p className="text-center text-gray-500">No ads available.</p>;
  }

  return (
 <div>
  <p className="text-center text-gray-500"> ads available.</p>;
     <div className="grid grid-cols-1 md:grid-cols-2  items-center gap-4">
      
      {AdsHomeData.map((ad) => (
        <div key={ad?.id} className="border rounded-md   shadow-sm">
          <img
            src={`${base + ad?.image}`}
            alt={ad?.title || "Ad"}
            className="w-full sm:h-48 lg:h-96 object-contain"
          />
       
        </div>
      ))}
    </div>
 </div>
  );
}

AdPlaceholder.propTypes = {
  AdsHomeData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string,
    })
  ).isRequired,
};



 function TypesOfNewsList() {
  const [sportsData, setSportsData] = useState([]);
  const [politicsData, setPoliticsData] = useState([]);
  const [technologyData, setTechnologyData] = useState([]);
  const [entertainmentData, setEntertainmentData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch data for each category
    const fetchData = async () => {
      try {
        const responseSports = await RemoteServices.getSelectedNews('Sports',1);
        const responsePolitics = await RemoteServices.getSelectedNews( 'Political',1);
        const responseTechnology = await RemoteServices.getSelectedNews( 'Technology',1);
        const responseEntertainment = await RemoteServices.getSelectedNews( 'Entertainment',1);
        
        setSportsData(responseSports.data);
        setPoliticsData(responsePolitics.data);
        setTechnologyData(responseTechnology.data);
        setEntertainmentData(responseEntertainment.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of News</h2>
      <div className="grid grid-cols-1 bg-white">
        {/* Sports Category */}
    {    sportsData.length > 0 &&
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center border-b-2 border-black">
         <h3 className="text-lg font-semibold text-gray-800">Sports</h3>
          <button className="mt-4 text-blue-500 font-semibold " onClick={() => navigate("/typeOfNews/Sports")}>
            View More
          </button>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4 ">
            {sportsData.length > 0 ? (
              sportsData.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))
            ) : (
              <p className="text-sm text-gray-600">Loading sports news...</p>
            )}
          </div>
        </div>}

        {/* Politics Category */}
     {   politicsData.length  > 0 &&
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center border-b-2 border-black">
         <h3 className="text-lg font-semibold text-gray-800">Political</h3>
          <button className="mt-4 text-blue-500 font-semibold " onClick={() => navigate("/typeOfNews/Political")}>
            View More
          </button>
         </div>
          <ul className="mt-4 space-y-2">
            {politicsData.length > 0 ? (
              politicsData.map((article) => (
                <li key={article.id} className="text-sm text-gray-600 my-5">
                 <div className="mb-2" >
                   <h4 className="font-bold cursor-pointer text-lg border-b" onClick={() => navigate(`/contentPage/${article.id}`)}>{article.title}</h4>
                   <p className="text-base text-gray-600 mt-2">{truncateText(article.description, 700)}</p>
                   <p className="text-sm text-gray-500 mt-2">
                     Posted on {formatDate(article.date_created)}
                   </p>
                 </div>
                </li>
              ))
            ) : (
              <p className="text-sm text-gray-600">Loading politics news...</p>
            )}
          </ul>
        </div>}

        {/* Technology Category */}
    {    technologyData.length  > 0 &&
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center border-b-2 border-black">
         <h3 className="text-lg font-semibold text-gray-800">Technology</h3>
          <button className="mt-4 text-blue-500 font-semibold underline" onClick={() => navigate("/typeOfNews/Technology")} >
            View More
          </button>
         </div>
          <div className="mt-4">
            {technologyData.length > 0 ? (
              technologyData.map((article) => (
             <>
                <div
                className="flex flex-row cursor-pointer gap-4"
                onClick={() => navigate( `/contentPage/${article.id}`)}
              >
                <img
                  src={`${base + article.post_images?.[0]?.image}`}
                  alt={article.title}
                  className=" h-48 object-contain rounded-md shadow-sm "
                />
                <div>
                  <h2 className="text-lg font-bold text-gray-800 break-words"> {truncateText(article.title, 70)}</h2>
                  <p className="text-base text-gray-600 mt-2 break-words">{truncateText(article.description, 180)}</p>
                  <p className="text-xs text-gray-500 mt-2">
                    Posted on {formatDate(article.date_created)}
                  </p>
                </div>
              </div>
             </>
              ))
            ) : (
              <p className="text-sm text-gray-600">Loading technology news...</p>
            )}
          </div>
        </div>}

        {/* Entertainment Category */}
  {      entertainmentData.length  > 0 &&
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center border-b-2 border-black">
         <h3 className="text-lg font-semibold text-gray-800">Entertainment</h3>
          <button className="mt-4 text-blue-500 font-semibold underline" onClick={() => navigate("/typeOfNews/Entertainment")} >
            View More
          </button>
         </div>
          <div className="mt-4">
            {entertainmentData.length > 0 ? (
              entertainmentData.map((article) => (
                <>
                <div
                className="flex flex-row-reverse cursor-pointer gap-4 "
                onClick={() => navigate( `/contentPage/${article.id}`)}
              >
                <img
                  src={`${base + article.post_images?.[0]?.image}`}
                  alt={article.title}
                  className=" h-48 object-contain rounded-md shadow-sm "
                />
                <div>
                  <h2 className="text-lg font-bold text-gray-800 break-words"> {truncateText(article.title, 70)}</h2>
                  <p className="text-base text-gray-600 mt-2 break-words">{truncateText(article.description, 180)}</p>
                  <p className="text-xs text-gray-500 mt-2">
                    Posted on {formatDate(article.date_created)}
                  </p>
                </div>
              </div>
             </>
              ))
            ) : (
              <p className="text-sm text-gray-600">Loading entertainment news...</p>
            )}
          </div>
        </div>}
      </div>
    </div>
  );
}

{}

// Utility Functions
function truncateText(text, maxLength) {
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
}

function formatDate(date) {
  const d = new Date(date);
  const day = d.getDate();
  const month = d.toLocaleString("default", { month: "short" });
  return `${day} ${month}`;
}
