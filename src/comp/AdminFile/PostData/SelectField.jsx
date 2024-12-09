const SelectField = ({ id, label, value, onChange, options, error }) => (
    <div>
      <label htmlFor={id} className="block text-gray-700 font-medium">
        {label}
      </label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className="w-full mt-1 p-2 border rounded-md"
      >
        <option value="" disabled>
          Select {label.toLowerCase()}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <div className="text-red-500 text-sm">{error}</div>}
    </div>
  );
  
  export default SelectField;
  