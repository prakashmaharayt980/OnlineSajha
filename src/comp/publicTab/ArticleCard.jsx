import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faShareAlt, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const ArticleCard = ({ title, author, date, content, image }) => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-6 p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 mb-6">
      {/* Content Section */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors duration-200">
          {title}
        </h2>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-blue-500" />
          <span>{date}</span>
          <span className="mx-2 text-gray-400">|</span>
          <span>By {author}</span>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">{content}</p>
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

      {/* Image Section */}
      {image && (
        <div className="w-full md:w-1/3">
          <img
            src={image}
            alt="Thumbnail"
            className="w-full h-auto rounded-xl object-cover shadow-md"
          />
        </div>
      )}
    </div>
  );
};

export default ArticleCard;
