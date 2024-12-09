import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ArticleCard from "./ArticleCard";
import RemoteServices from "../../RemoteServices/RemoteService";
import { useParams } from "react-router-dom";

export default function TypesOfNews() {
  const { typeofNews } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);  // Added state for totalCount

  const fetchArticles = async () => {
    if (isLoading) return; // Prevent multiple fetches at once

    setIsLoading(true);

    try {
      // Assuming the response object structure is { data: [...], total_count: number }
      const response = await RemoteServices.getSelectedNews(typeofNews, currentPage);

      const newArticles = response.data;  // Extract the articles from the response
      setTotalCount(response.total_count);  // Set total count for pagination

      setArticles((prevArticles) => {
        const newSet = new Set(prevArticles.map((article) => article.id));
        return [...prevArticles, ...newArticles.filter((article) => !newSet.has(article.id))];
      });
      
      setCurrentPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setArticles([]);  // Reset articles when the `typeofNews` changes
    setTotalCount(0);  // Reset total count when the `typeofNews` changes
    setCurrentPage(1);  // Reset to first page when `typeofNews` changes
    fetchArticles();
  }, [typeofNews]);

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mb-8 text-center md:text-left border-b-2 border-black py-2">
        {typeofNews} 
      </h1>
      <InfiniteScroll
        dataLength={articles.length}  // Use the length of articles array here
        next={fetchArticles}
        hasMore={articles.length < totalCount}  // Check if there are more articles based on total count
        loader={<p className="text-center text-gray-500 mt-6">Loading more articles...</p>}
        endMessage={
          articles.length >= totalCount && <p className="text-center text-gray-500 mt-6">No more articles to load.</p>
        }
        scrollThreshold={0.9}
      >
        <div className="space-y-6">
          {articles.map((article) => (
            <div key={article.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <ArticleCard
                id={article.id}
                title={article.title}
                author={article.post_by}
                content={article.description}
                date={article.date_created}
                images={article.post_images}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
