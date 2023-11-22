import { React, useState } from "react";
import HeroSection from "../component/Home/HeroSection";
import FeaturedBooksSection from "../component/Home/FeaturedBooksSection";
import BarSection from "../component/Home/BarSection";
import BookDetails from "../component/Our Books/BookDetails";
import Footer from "../component/Home/Footer";

function Home() {
  const [showBookDetails, setShowBookDetails] = useState(false);
  const handleSlideClick = () => {
    setShowBookDetails(true);
  };

  const handleCloseBookDetails = () => {
    setShowBookDetails(false);
  };

  return (
    <div>
      <HeroSection handleClick={handleSlideClick} />
      {showBookDetails && (
        <BookDetails link={"/"} handleClick={handleCloseBookDetails} />
      )}
      <BarSection />
      <FeaturedBooksSection />
      <Footer />
    </div>
  );
}

export default Home;
