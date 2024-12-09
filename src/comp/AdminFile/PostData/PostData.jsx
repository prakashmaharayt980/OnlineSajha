import { useState } from "react";
import CreateNews from "./CreateNews";
import CreateAds from "./CreatesAds";


const PostData = () => {
  const [isCreatingNews, setIsCreatingNews] = useState(true);

  return (
    <div className="flex-grow max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-semibold mb-6">Create a New Post</h1>

      {/* Buttons to toggle between forms */}
      <div className="flex space-x-4 mb-6">
        <button
          type="button"
          onClick={() => setIsCreatingNews(true)}
          className={`${
            isCreatingNews ? "bg-blue-500" : "bg-gray-300"
          } text-white py-2 px-4 rounded-md`}
        >
          Create News
        </button>
        <button
          type="button"
          onClick={() => setIsCreatingNews(false)}
          className={`${
            !isCreatingNews ? "bg-blue-500" : "bg-gray-300"
          } text-white py-2 px-4 rounded-md`}
        >
          Create Ads
        </button>
      </div>

      {/* Render appropriate form */}
      {isCreatingNews ? <CreateNews/> : <CreateAds />}
    </div>
  );
};

export default PostData;
