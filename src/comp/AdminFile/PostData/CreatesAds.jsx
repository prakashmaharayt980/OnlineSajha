import { useFormik } from "formik";
import * as Yup from "yup";
import RemoteServices from "../../../RemoteServices/RemoteService";

const CreateAds = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      image: null, // Single image
      post_by: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      image: Yup.mixed().required("Image is required"),
      post_by: Yup.string().required("Author name is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value);
      });

      try {
        const response = await RemoteServices.postadsSeperate(formData);
        if(response.status === 200) {
          alert("Ads successfully submitted!");
          resetForm();
          formik.setFieldValue("image", null);
        } 

       
      } catch (error) {
        console.error("Error posting ads data:", error);
        alert("Failed to submit ads. Please try again.");
      }
    },
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && ["image/jpeg", "image/png", "image/jpg"].includes(file.type)) {
      formik.setFieldValue("image", file);
    } else {
      alert("Only JPG, JPEG, and PNG images are allowed.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      formik.handleSubmit(); // Trigger form submission on Enter
    }
  };

  return (
    <form onSubmit={formik.handleSubmit} onKeyDown={handleKeyDown} className="space-y-4">
      {/* Title Field */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
        />
        {formik.touched.title && formik.errors.title && (
          <p className="text-red-600 text-sm">{formik.errors.title}</p>
        )}
      </div>

      {/* Image Field */}
      <div>
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
          Ads Image
        </label>
        <input
          id="image"
          name="image"
          type="file"
          accept="image/jpeg,image/png,image/jpg"
          onChange={handleFileChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
        />
        {formik.touched.image && formik.errors.image && (
          <p className="text-red-600 text-sm">{formik.errors.image}</p>
        )}
      </div>

      {/* Post By Field */}
      <div>
        <label htmlFor="post_by" className="block text-sm font-medium text-gray-700">
          Post By
        </label>
        <input
          id="post_by"
          name="post_by"
          type="text"
          value={formik.values.post_by}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
        />
        {formik.touched.post_by && formik.errors.post_by && (
          <p className="text-red-600 text-sm">{formik.errors.post_by}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
      >
        Publish Ads
      </button>
    </form>
  );
};

export default CreateAds;
