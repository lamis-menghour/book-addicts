import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function AddBook({ setShowAddBook, onBookAdded }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [pages, setPages] = useState("");
  const [author, setAuthor] = useState("");
  const [language, setLanguage] = useState("");
  const [category, setCategory] = useState("");
  const [dscrp, setDscrp] = useState("");

  const book = {
    title: title,
    price: price,
    pages: pages,
    author: author,
    language: language,
    category: category,
    dscrp: dscrp,
  };

  const addBook = async (e) => {
    e.preventDefault();

    // Simple validation to check if any of the input fields is empty
    if (
      !title.trim() ||
      !price.trim() ||
      !author.trim() ||
      !language.trim() ||
      !category.trim() ||
      !dscrp.trim()
    ) {
      alert("الرجاء ملء جميع الحقول");
      return;
    }

    await fetch("http://localhost:8000/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    });

    // Reset form fields after submission
    setTitle("");
    setPrice("");
    setPages("");
    setAuthor("");
    setLanguage("");
    setCategory("");
    setDscrp("");

    onBookAdded();
    setShowAddBook(false); // Hide the AddBook component after submitting
  };

  return (
    <form className="form">
      <div className="add-book">
        <div className="close">
          <FontAwesomeIcon
            icon={faClose}
            onClick={() => setShowAddBook(false)}
          />
        </div>
        <input
          type="text"
          name="title"
          placeholder="العنوان"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="السعر"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="number"
          name="pages"
          placeholder="عدد الصفحات"
          value={pages}
          onChange={(e) => setPages(e.target.value)}
        />
        <input
          type="text"
          name="author"
          placeholder="الكاتب"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <input
          type="text"
          name="language"
          placeholder="اللغة"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="النوع"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <textarea
          type="text"
          name="dscrp"
          placeholder="الوصف"
          value={dscrp}
          onChange={(e) => setDscrp(e.target.value)}
          required
        />
        <button type="submit" onClick={addBook}>
          إضافة
        </button>
      </div>
    </form>
  );
}
export default AddBook;
