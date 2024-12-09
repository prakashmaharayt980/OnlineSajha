import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RemoteServices from "../../RemoteServices/RemoteService";
import Relatedtable from "./Relatedtable";

const BASE_URL = import.meta.env.VITE_API_BASE_URL_IMAGE ||``

const Contentpage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedNews, setRelatedNews] = useState([]);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await RemoteServices.getNewsById(id);
        setArticle(res?.news_data);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    if (id) {
      fetchArticle();
    }
  }, [id]);

  useEffect(() => {
    const fetchRelatedNews = async (type) => {
      try {
        const res = await RemoteServices.getNewsByType(type);
        setRelatedNews(res);
      } catch (error) {
        console.error("Error fetching related news:", error);
      }
    };

    if (article) {
      fetchRelatedNews(article.type_of_news);
    }
  }, [article]);

  const { title, date_created, description, post_images, ads_images, post_by } = article || {};
  const splitDescription = description ? description.split(" ") : [];
  const firstPart = splitDescription.slice(0, 300).join(" ");
  const remainingPart = splitDescription.slice(300).join(" ");

  return (
    <div className="CONTENTPAGE flex flex-col md:flex-row gap-8 sm:p-0 lg:px-4 lg:py-8 max-w-6xl mx-auto">
      <div className="CONTENT-1 flex-1 bg-white shadow-lg rounded-lg p-6">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-2">
            {title || "Loading..."}
          </h1>
          <div className="flex items-center text-gray-600 text-sm mb-2">
            <span>{date_created ? new Date(date_created).toLocaleDateString() : "Loading..."}</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <span>Post by: </span>
            <strong className="ml-1">{post_by || "Unknown"}</strong>
          </div>
        </header>

        <main className="space-y-8">
          {post_images && post_images.length > 0 && (
            <div className="first-image mb-6">
              <img
                src={`${BASE_URL}${post_images[0].image}`}
                alt="First Post Image"
                className="w-full h-auto  object-contain rounded-lg shadow-lg"
              />
            </div>
          )}

          <p className="text-lg text-gray-700 leading-relaxed mb-6">{firstPart}</p>

          {remainingPart && (
            <div className="remaining-content mb-6">
              <p className="text-lg text-gray-700 leading-relaxed">{remainingPart}</p>
            </div>
          )}

          <div className="ad-image mb-8">
            {ads_images && ads_images.length > 0 && (
              <img
                src={`${BASE_URL}${ads_images[0].image}`}
                alt="Advertisement"
                className="w-full max-h-96  object-contain rounded-lg shadow-lg"
              />
            )}
          </div>
        </main>

        <Relatedtable newsItems={relatedNews} />
      </div>

      <div
        className="CONTENT-2 w-full md:w-1/3 bg-white shadow-lg rounded-xl p-6 sticky top-8"
        style={{ border: "1px solid #e5e7eb", maxHeight: "550px" }}
      >
        {/* Placeholder for additional content like Recent News or Trending */}
      </div>
    </div>
  );
};

export default Contentpage;
