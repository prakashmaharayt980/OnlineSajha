import React from "react";

export default function NewsLayout({ articles }) {
  // Separate articles: Featured news at the top and others below.
  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Top Featured News Section */}
      <FeaturedNews article={featuredArticle} />

      {/* Grid for Remaining Articles */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {/* Left Column: Headlines List */}
        <HeadlinesList articles={otherArticles.slice(0, 4)} />

        {/* Right Column: Secondary Featured News */}
        <SecondaryFeaturedNews article={otherArticles[4]} />
      </div>
    </div>
  );
}

function FeaturedNews({ article }) {
  return (
    <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
      <img
        src={article.post_images[0].image}
        alt={article.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
        <h1 className="text-white text-4xl font-bold mb-4">{article.title}</h1>
        <p className="text-white text-sm">{truncateText(article.description, 120)}</p>
      </div>
    </div>
  );
}

function HeadlinesList({ articles }) {
  return (
    <div className="col-span-2">
      {articles.map((article) => (
        <div key={article.id} className="border-b border-gray-200 pb-4 mb-4">
          <h3 className="font-bold text-lg">{article.title}</h3>
          <p className="text-sm text-gray-600">
            {truncateText(article.description, 100)}
          </p>
        </div>
      ))}
    </div>
  );
}

function SecondaryFeaturedNews({ article }) {
  return (
    <div className="relative h-full bg-gray-100 rounded-lg overflow-hidden shadow-lg">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-56 object-cover"
      />
      <div className="absolute bottom-0 inset-x-0 bg-black bg-opacity-50 p-4">
        <h3 className="text-white text-lg font-bold">{article.title}</h3>
        <p className="text-white text-sm">
          {truncateText(article.description, 80)}
        </p>
      </div>
    </div>
  );
}

function truncateText(text, maxLength) {
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
}
