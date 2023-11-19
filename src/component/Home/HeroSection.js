import { React } from "react";
import { useBookDetails } from "../../context/BookDetailsContext";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

import books from "../../dataBase/data";

function HeroSection({ handleClick }) {
  const sortedBooks = [...books].sort((a, b) => b.price - a.price);
  const top10Books = sortedBooks.slice(0, 10); // Select the first 10 books
  const { openBookDetails } = useBookDetails();

  return (
    <div className="hero-section ar">
      <div className="content">
        <h3>اكتشف كتابك القادم</h3>
        <p>
          استكشف مجموعة كتبنا من جميع الأنواع، بما في ذلك الخيال والواقع
          والأطفال والمزيد.
        </p>
        <a href="كتبنا" className="btn">
          تسوق الآن!
        </a>
      </div>

      <div id="swiper-stand">
        <Swiper
          loop={true}
          centerdSlides={true}
          spaceBetween={25}
          autoplay={{
            dalay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay]}
          className="books-swiper"
        >
          {top10Books.map((book) => (
            <SwiperSlide
              className="swiper-slide"
              onClick={() => {
                handleClick();
                openBookDetails(book.id);
              }}
            >
              <img src={`img/${book.title}.jpg`} alt="book" />
            </SwiperSlide>
          ))}
        </Swiper>

        <img src="img/shelf.png" className="stand" alt="stand" />
      </div>
    </div>
  );
}

export default HeroSection;
