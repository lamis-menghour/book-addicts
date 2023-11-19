import React from "react";
import SearchBar from "./SearchBar";
import { useBooksContext } from "../../pges/OurBooks";

function BooksContainer() {
  const { result} = useBooksContext();
  return (
    <div className="books-section ">
      <SearchBar />
      <div className="books-container">{result}</div>
    </div>
  );
}

export default BooksContainer;
