import React, { useState, createContext, useContext } from "react";
import Sidebar from "../component/Our Books/Sidebar";
import BooksContainer from "../component/Our Books/BooksContainer";
import BookCard from "../component/Our Books/BookCard";
import books from "../dataBase/data";

// Create a context
const BooksContext = createContext();

function OurBooks() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // The "filter" method is a higher-order array method in JavaScript. It creates a new array
  // containing all elements that pass a provided test implemented by the provided function.

  // The "indexOf" method returns the index at which the specified substring is found in the given string.
  // If indexOf(query) is not equal to -1, it means that the query string is found in the title, and the book "passes" the filter.
  // If indexOf(query) is equal to -1, it means that the query string is not found in the title, and the book "does not pass" the filter.
  const filteredItems = books.filter(
    (book) => book.title.indexOf(query) !== -1
  );

  function filteredData(books, selected, query) {
    let filteredBooks = books;

    // Filtering Input Items
    if (query) {
      filteredBooks = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredBooks = filteredBooks.filter(
        ({ category, price, language }) =>
          selected.includes(category) ||
          selected.includes(price) ||
          selected.includes(language)
      );
    }

    return filteredBooks.map((item, index) => (
      <BookCard item={item} key={index} />
    ));
  }

  const result = filteredData(books, selectedCategory, query);

  return (
    <BooksContext.Provider
      value={{ handleChange, handleInputChange, result, query }}
    >
      <Sidebar />
      <BooksContainer />
    </BooksContext.Provider>
  );
}

// Use this custom hook to access the context in child components
export const useBooksContext = () => useContext(BooksContext);

export default OurBooks;
