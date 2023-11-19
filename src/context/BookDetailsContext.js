// BookDetailsContext.js
import { createContext, useContext, useState } from "react";

const BookDetailsContext = createContext();

export const BookDetailsProvider = ({ children }) => {
  // const [selectedBookId, setSelectedBookId] = useState(null);
  const [selectedBookId, setSelectedBookId] = useState();

  const openBookDetails = (bookId) => {
    setSelectedBookId(bookId);
  };

  const closeBookDetails = () => {
    setSelectedBookId(null);
  };

  return (
    <BookDetailsContext.Provider
      value={{ selectedBookId, openBookDetails, closeBookDetails }}
    >
      {children}
    </BookDetailsContext.Provider>
  );
};

export const useBookDetails = () => useContext(BookDetailsContext);
