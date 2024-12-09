
import PropTypes from "prop-types";

const Relatedtable = ({ newsItems }) => {
  // Use Vite's environment variable
  const base = import.meta.env.VITE_API_BASE_URL_IMAGE || "";

  // Ensure newsItems.data is an array or default to an empty array
  const items = Array.isArray(newsItems?.data) ? newsItems.data : [];


  return (
    <div className="max-w-7xl mx-auto mt-2 px-2 py-4">
      {items.length > 0 ? (
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 border-b-2 border-black">
          Related News To {items[0]?.type_of_news} 
        </h2>
      ) : (
        <h2 className="text-xl text-gray-600 mb-8">No related news found.</h2>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => (window.location.href = `/contentPage/${item.id}`)}
            className=" bg-white hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            {item?.post_images[0]?.image && (
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={`${base}${item.post_images[0].image}`}
                  alt={item.title}
                  className="w-full h-56 object-contain  transition-transform duration-300 transform hover:scale-105"
                />
              </div>
            )}
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-600 transition-colors duration-300 break-words">
              {truncateText(item.title, 80)}
              </h3>
              <p className="text-gray-500 text-sm">{ formatDate(item.date_created )}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Relatedtable.propTypes = {
  newsItems: PropTypes.oneOfType([
    PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          type_of_news: PropTypes.string.isRequired,
          date_created: PropTypes.string.isRequired,
          post_images: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.number.isRequired,
              image: PropTypes.string.isRequired,
              news: PropTypes.string.isRequired,
            })
          ),
        })
      ),
    }),
    PropTypes.object, // Fallback in case an invalid data type is passed
  ]),
};

export default Relatedtable;
function truncateText(text, maxLength) {
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
}

function formatDate(date) {
  const d = new Date(date);
  const day = d.getDate();
  const month = d.toLocaleString("default", { month: "short" });
  return `${day} ${month}`;
}