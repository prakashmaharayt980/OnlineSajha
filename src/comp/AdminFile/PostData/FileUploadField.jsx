const FileUploadField = ({ id, label, files, onFileChange, onRemove }) => (
    <div>
      <label htmlFor={id} className="block text-gray-700 font-medium">
        {label}
      </label>
      <input
        type="file"
        id={id}
        name={id}
        multiple
        accept="image/jpeg, image/png, image/jpg"
        onChange={onFileChange}
        className="w-full mt-1 p-2 border rounded-md"
      />
      <div className="mt-2 flex flex-wrap gap-2">
        {files.map((file, index) => (
          <div key={index} className="relative">
            <img
              src={URL.createObjectURL(file)}
              alt={`Preview ${index}`}
              className="w-20 h-20 object-cover rounded-md"
            />
            <button
              type="button"
              onClick={() => onRemove(index)}
              className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
  
  export default FileUploadField;
  