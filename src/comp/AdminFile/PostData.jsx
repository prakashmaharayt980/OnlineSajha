import { useFormik, FieldArray } from "formik";
import * as Yup from "yup";
import RemoteServices from "../../RemoteServices/RemoteService";

const PostData = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      type_of_news: "",
      description: "",
      ads_images: [],
      post_images: [],
      post_by: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      type_of_news: Yup.string().required("Type of news is required"),
      description: Yup.string().required("Description is required"),
      post_by: Yup.string().required("Author name is required"),
    }),
    onSubmit: async (values) => {
      const formData = new FormData();
      
      // Append the form fields to FormData
      formData.append("title", values.title);
      formData.append("type_of_news", values.type_of_news);
      formData.append("description", values.description);
      formData.append("post_by", values.post_by);
      
      // Append each file in the post_images array
      values.post_images.forEach((file, index) => {
        formData.append("post_images", file);  // Name must match the field on backend
      });
  
      // Append each file in the ads_images array
      values.ads_images.forEach((file, index) => {
        formData.append("ads_images", file);  // Name must match the field on backend
      });
  
      try {
        const response = await RemoteServices.postNews(formData);
        console.log(response);  // Log the response
      } catch (error) {
        console.error("Error posting news data:", error);  // Handle error
      }
    },
  });
  

  const newsOptions = ["News", "Sports", "Entertainment", "Technology", "Health"]; // Options for dropdown

  const handleImageChange = (e, type) => {
    const files = Array.from(e.target.files); // Convert FileList to Array
    formik.setFieldValue(type, [...formik.values[type], ...files]); // Add new files to the existing array
  };

  const handleRemoveImage = (type, index) => {
    const updatedImages = formik.values[type].filter((_, i) => i !== index);
    formik.setFieldValue(type, updatedImages); // Update state after removing image
  };

  return (
    <div className="flex-grow max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-semibold mb-6">Create a New Post</h1>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-gray-700 font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="Enter post title"
            required
          />
          {formik.errors.title && formik.touched.title && (
            <div className="text-red-500 text-sm">{formik.errors.title}</div>
          )}
        </div>

        {/* Types of News */}
        <div>
          <label htmlFor="type_of_news" className="block text-gray-700 font-medium">
            Types of News
          </label>
          <select
            id="type_of_news"
            name="type_of_news"
            value={formik.values.type_of_news}
            onChange={formik.handleChange}
            className="w-full mt-1 p-2 border rounded-md"
            required
          >
            <option value="" disabled>
              Select a type of news
            </option>
            {newsOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          {formik.errors.type_of_news && formik.touched.type_of_news && (
            <div className="text-red-500 text-sm">{formik.errors.type_of_news}</div>
          )}
        </div>

        {/* Post Images */}
        <div>
          <label htmlFor="post_images" className="block text-gray-700 font-medium">
            Post Images
          </label>
          <input
            type="file"
            id="post_images"
            multiple
            onChange={(e) => handleImageChange(e, "post_images")}
            className="w-full mt-1"
          />
          <div className="flex flex-wrap gap-2 mt-2">
            {formik.values.post_images.map((image, index) => (
              <div key={index} className="relative w-24 h-24">
                <img
                  src={URL.createObjectURL(image)}
                  alt={`post-${index}`}
                  className="w-full h-full object-cover rounded-md"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage("post_images", index)}
                  className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-gray-700 font-medium">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="Enter post description"
            rows="4"
            required
          ></textarea>
          {formik.errors.description && formik.touched.description && (
            <div className="text-red-500 text-sm">{formik.errors.description}</div>
          )}
        </div>

        {/* Ads Images */}
        <div>
          <label htmlFor="ads_images" className="block text-gray-700 font-medium">
            Ads Images
          </label>
          <input
            type="file"
            id="ads_images"
            multiple
            onChange={(e) => handleImageChange(e, "ads_images")}
            className="w-full mt-1"
          />
          <div className="flex flex-wrap gap-2 mt-2">
            {formik.values.ads_images.map((image, index) => (
              <div key={index} className="relative w-24 h-24">
                <img
                  src={URL.createObjectURL(image)}
                  alt={`ad-${index}`}
                  className="w-full h-full object-cover rounded-md"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage("ads_images", index)}
                  className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Post By */}
        <div>
          <label htmlFor="post_by" className="block text-gray-700 font-medium">
            Post By
          </label>
          <input
            type="text"
            id="post_by"
            name="post_by"
            value={formik.values.post_by}
            onChange={formik.handleChange}
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="Enter author name"
            required
          />
          {formik.errors.post_by && formik.touched.post_by && (
            <div className="text-red-500 text-sm">{formik.errors.post_by}</div>
          )}
        </div>

        {/* Publish Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostData;
