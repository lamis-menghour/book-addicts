import { React, useState } from "react";
import Sidebar from "../component/Our Books/Sidebar";
import BooksContainer from "../component/Our Books/BooksContainer";
// import SearchBar from "../component/Our Books/SearchBar";
import BookCard from "../component/Our Books/BookCard";
import books from "../dataBase/data";

function OurBooks() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = books.filter(
    (book) => book.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    console.log("selectedCategory =  ", selectedCategory);
  };

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
          category === selected || price === selected || language === selected
      );
      console.log("filteredBooks = ", filteredBooks);
    }

    return filteredBooks.map((item, index) => (
      <BookCard
        // img={img}
        // title={title}
        // author={author}
        // pages={pages}
        // reviews={reviews}
        // price={price}
        item={item}
        key={index}
      />
    ));
  }

  const result = filteredData(books, selectedCategory, query);
  // console.log("result = ", result);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <BooksContainer
        result={result}
        query={query}
        handleInputChange={handleInputChange}
      />
    </>
  );
}

export default OurBooks;
