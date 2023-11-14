import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import books from "../../dataBase/data";
import { useFavoriteIcon } from "../../context/FavoriteItemsContext";
import BookCard from "../Our Books/BookCard";

function FavoriteItem({ id }) {
  const { removeFromFavorite } = useFavoriteIcon();
  const item = books.find((item) => item.id === id);

  if (item == null) return null;

  return (
    <BookCard item={item}/>
  );
}

export default FavoriteItem;
