import { Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";

import Home from "./pges/Home";
import OurBooks from "./pges/OurBooks";
import Cart from "./pges/Cart";
import CheckOut from "./component/Cart/CheckOut";
import BookDetails from "./component/Our Books/BookDetails";
import Favorite from "./pges/Favorite";
import Login from "./pges/Login";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { FavoriteItemsProvider } from "./context/FavoriteItemsContext";
import { BookDetailsProvider } from "./context/BookDetailsContext";
import Products from "./pges/admin/Products";
import Orders from "./pges/admin/Orders";
import Categories from "./pges/admin/Categories";
import AddBook from "./component/Admin/AddBook";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { isAdmin } = useAuthContext();
  return (
    <ShoppingCartProvider>
      <FavoriteItemsProvider>
        <BookDetailsProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/كتبنا" element={<OurBooks />} />
            <Route
              path="/إقرأ-المزيد"
              element={<BookDetails link={"/كتبنا"} />}
            />
            <Route path="/المفضلة" element={<Favorite />} />
            <Route path="/مشترياتي" element={<Cart />} />
            <Route path="/checkOut" element={<CheckOut />} />

            <Route path="/admin" element={!isAdmin && <Login />} />

            <Route
              path="/admin/products"
              element={isAdmin ? <Products /> : <Login />}
            />

            <Route
              path="/admin/add-book"
              element={isAdmin ? <AddBook /> : <Login />}
            />
            <Route
              path="/admin/orders"
              element={isAdmin ? <Orders /> : <Login />}
            />
            <Route
              path="/admin/categories"
              element={isAdmin ? <Categories /> : <Login />}
            />
          </Routes>
        </BookDetailsProvider>
      </FavoriteItemsProvider>
    </ShoppingCartProvider>
  );
}

export default App;
