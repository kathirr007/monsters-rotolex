import "./search-box-styles.css";

export const SearchBox = ({ placeholder, handleChange, inputName }) => {
  return (
    <>
      <label htmlFor={inputName} className="sr-only">
        Search For Monsters
      </label>
      <input
        type="search"
        className="search"
        id={inputName}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </>
  );
};
