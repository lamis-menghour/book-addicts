import React from "react";
import SearchBar from "./SearchBar";

function BooksContainer({ result, query, handleInputChange }) {
  return (
    <div className="books-section ">
      <SearchBar query={query} handleInputChange={handleInputChange} />
      <div className="books-container">{result}</div>
    </div>
  );
}

export default BooksContainer;
