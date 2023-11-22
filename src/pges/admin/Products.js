import { React, useEffect, useState } from "react";
import AddBook from "../../component/Admin/AddBook";
import BookCard from "../../component/Our Books/BookCard";
import { useLocalStorage } from "../../hooks/useLocalStorage";

function Products() {
  const [showAddBook, setShowAddBook] = useState(false);
  const [products, setProducts] = useLocalStorage("products",[]);

  const onBookAdded = () => {
    // Refetch the list of books
    fetch("http://localhost:8000/books", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((updated_Products) => {
        setProducts(updated_Products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  useEffect(() => onBookAdded);

  return (
    <div className="products-container">
      <h1>كل الكتب</h1>

      <div className="book-list">
        {products.map((product, index) => (
          <BookCard key={index} item={product} className="book" />
        ))}
      </div>

      {showAddBook && (
        <AddBook setShowAddBook={setShowAddBook} onBookAdded={onBookAdded} />
      )}

      <button
        className="btn"
        type="button"
        onClick={() => setShowAddBook(true)}
      >
        إضافة كتاب{" "}
      </button>
    </div>
  );
}

export default Products;
