import { Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

import Home from "./pges/Home";
import OurBooks from "./pges/OurBooks";
import Cart from "./pges/Cart";
import CheckOut from "./component/Cart/CheckOut";
import BookDetails from "./component/Our Books/BookDetails";
import BottomNavbar from "./component/BottomNavbar";
import Favorite from "./pges/Favorite";
import Login from "./pges/Login";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { FavoriteItemsProvider } from "./context/FavoriteItemsContext";
import { BookDetailsProvider } from "./context/BookDetailsContext";

function App() {
  return (
    <ShoppingCartProvider>
      <FavoriteItemsProvider>
        <BookDetailsProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/كتبنا" element={<OurBooks />} />
            <Route path="/إقرأ-المزيد" element={<BookDetails  link={"/كتبنا"}/>} />
            <Route path="/المفضلة" element={<Favorite />} />
            <Route path="/مشترياتي" element={<Cart />} />
            <Route path="/checkOut" element={<CheckOut />} />
          </Routes>
          {/* <Footer /> */}
          {/* <BottomNavbar /> */}
        </BookDetailsProvider>
      </FavoriteItemsProvider>
    </ShoppingCartProvider>
  );
}

export default App;
