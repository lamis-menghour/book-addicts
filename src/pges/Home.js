import React from "react";
import HeroSection from "../component/Home/HeroSection";
import FeaturedBooksSection from "../component/Home/FeaturedBooksSection";
import BarSection from "../component/Home/BarSection";
import NewsLetter from "../component/Home/NewsLetter";
function Home() {
  return (
    <div>
      <HeroSection />
      <BarSection />
      <FeaturedBooksSection />
      <NewsLetter />
    </div>
  );
}

export default Home;
