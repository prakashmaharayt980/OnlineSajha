import { useFormik } from "formik";
import * as Yup from "yup";

import InputField from "./InputField";
import SelectField from "./SelectField";
import TextareaField from "./TextareaField";
import FileUploadField from "./FileUploadField";
import RemoteServices from "../../../RemoteServices/RemoteService";

const newsOptions = ["News", "Sports", "Entertainment", "Technology", "Health", "Political", "Society", "Culture"];

const CreateNews = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      type_of_news: "",
      description: "",
      post_images: [],
      ads_images: [], // Add ads_images field
      post_by: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      type_of_news: Yup.string().required("Type of news is required"),
      description: Yup.string().required("Description is required"),
      post_by: Yup.string().required("Author name is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((file) => formData.append(key, file));
        } else {
          formData.append(key, value);
        }
      });

      try {
        const response = await RemoteServices.postNews(formData);
        if(response.status === 200) alert("News successfully submitted!");
        resetForm();
      } catch (error) {
        console.error("Error posting news data:", error);
        alert("Failed to submit news. Please try again.");
      }
    },
  });

  const handleFileChange = (e, field) => {
    const files = Array.from(e.target.files).filter((file) =>
      ["image/jpeg", "image/png", "image/jpg"].includes(file.type)
    );
    formik.setFieldValue(field, [
      ...formik.values[field],
      ...files,
    ]);
  };

  const handleRemoveImage = (index, field) => {
    const updatedImages = formik.values[field].filter((_, i) => i !== index);
    formik.setFieldValue(field, updatedImages);
  };

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <InputField
        id="title"
        label="Title"
        value={formik.values.title}
        onChange={formik.handleChange}
        error={formik.touched.title && formik.errors.title}
      />
      <SelectField
        id="type_of_news"
        label="Type of News"
        value={formik.values.type_of_news}
        onChange={formik.handleChange}
        options={newsOptions}
        error={formik.touched.type_of_news && formik.errors.type_of_news}
      />
      <TextareaField
        id="description"
        label="Description"
        value={formik.values.description}
        onChange={formik.handleChange}
        error={formik.touched.description && formik.errors.description}
      />
      
      {/* Post Images Field */}
      <FileUploadField
        id="post_images"
        label="Post Images"
        files={formik.values.post_images}
        onFileChange={(e) => handleFileChange(e, "post_images")}
        onRemove={(index) => handleRemoveImage(index, "post_images")}
      />
      
      {/* Ads Images Field */}
      <FileUploadField
        id="ads_images"
        label="Ads Images"
        files={formik.values.ads_images}
        onFileChange={(e) => handleFileChange(e, "ads_images")}
        onRemove={(index) => handleRemoveImage(index, "ads_images")}
      />
      
      <InputField
        id="post_by"
        label="Post By"
        value={formik.values.post_by}
        onChange={formik.handleChange}
        error={formik.touched.post_by && formik.errors.post_by}
      />
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
        onKeyDown={(e) => e.key === "Enter" && formik.handleSubmit()}
      >
        Publish News
      </button>
    </form>
  );
};

export default CreateNews;
