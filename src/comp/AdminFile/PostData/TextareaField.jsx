const TextareaField = ({ id, label, value, onChange, error }) => (
    <div>
      <label htmlFor={id} className="block text-gray-700 font-medium">
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className="w-full mt-1 p-2 border rounded-md"
        rows="4"
        placeholder={`Enter ${label.toLowerCase()}`}
      ></textarea>
      {error && <div className="text-red-500 text-sm">{error}</div>}
    </div>
  );
  
  export default TextareaField;
  