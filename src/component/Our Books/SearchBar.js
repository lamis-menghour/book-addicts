import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar({ handleInputChange, query }) {
  return (
    <div className="search ar">
      <input
        type="text"
        placeholder="عنوان الكتاب, المؤلف ..."
        onChange={handleInputChange}
        value={query}
      />
      <div className="search-icon">
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
  );
}

export default SearchBar;
