import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faShareAlt, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const ArticleCard = ({ title, author, date, content, images,id }) => {
  const image = images && images.length > 0 ? images[0].image : null;
  const truncatedContent = content && content.length > 200 ? content.slice(0, 200) + '...' : content;
 const base = import.meta.env.VITE_API_BASE_URL_IMAGE || ``
  return (
    <div className="flex flex-col md:flex-row items-start gap-6 lg:p-6 sm:p-4 bg-white  transition-shadow duration-300 mb-6"
     onClick={() => (window.location.href = `/contentPage/${id}`)}
    >
      <div className="flex-1">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors duration-200">
          {title}
        </h2>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-blue-500" />
          <span>{new Date(date).toLocaleDateString()}</span>
          <span className="mx-2 text-gray-400">|</span>
          <span>By {author}</span>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
          {truncatedContent}
        </p>
        <div className="mt-4 flex gap-6">
          <button className="text-sm flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200">
            <FontAwesomeIcon icon={faThumbsUp} className="mr-2" />
            सम्भव
          </button>
          <button className="text-sm flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200">
            <FontAwesomeIcon icon={faShareAlt} className="mr-2" />
            सेयर
          </button>
        </div>
      </div>

      {image && (
        <div className="w-full md:w-1/3  object-contain">
          <img
            src={base+image}
            alt="Thumbnail"
            className="w-full  max-h-80  rounded-xl object-contain "
          />
        </div>
      )}
    </div>
  );
};

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string
    })
  ),
  id:PropTypes.string
};

export default ArticleCard;
