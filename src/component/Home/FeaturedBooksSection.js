import React from "react";
import FeaturedBook from "./FeaturedBook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

function FeaturedBooksSection() {
  const featuredBooks = [
    {
      image: "/img/قوة التفكير الإيجابي.jpg",
      title: "قوة التفكير الإيجابي",
      newPrice: "1000",
      oldPrice: "1300",
    },
    {
      image: "/img/العادات الذرية.jpg",
      title: "العادات الذرية",
      newPrice: "1200",
      oldPrice: "1000",
    },
    {
      image: "/img/الجساسة.jpg",
      title: "الجساسة",
      newPrice: "1000",
      oldPrice: "1300",
    },
    {
      image: "/img/فن قراءة العقول.jpg",
      title: "فن قراءة العقول",
      newPrice: "1400",
      oldPrice: "1500",
    },
    {
      image: "/img/جلسات نفسية.jpg",
      title: "جلسات نفسية",
      newPrice: "1200",
      oldPrice: "1500",
    },
    {
      image: "/img/فن الإغواء.jpg",
      title: "فن الإغواء",
      newPrice: "2800",
      oldPrice: "3100",
    },
    {
      image: "/img/الوحش الذي يسكنك يمكن أن يكون لطيفا.jpg",
      title: "الوحش الذي يسكنك يمكن أن يكون لطيفا",
      newPrice: "1200",
      oldPrice: "1500",
    },
    {
      image: "/img/كن الشخص الذي يجعلك سعيدا.jpg",
      title: "كن الشخص الذي يجعلك سعيدا",
      newPrice: "2800",
      oldPrice: "3100",
    },
  ];

  return (
    <div className="featured-books ar">
      <h2 className="featured-books-title">تخفيضات</h2>
      {/* <h2 className="featured-books-title">الكتب المميزة</h2> */}
      <div className="featured-books-container">
        <Swiper
          navigation={{
            prevEl: ".swiper-button-next",
            nextEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
          spaceBetween={20}
          centerdSlides={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            // 987: {
            //   slidesPerView: 3,
            // },
            1024: {
              slidesPerView: 3,
            },
            1600: {
              slidesPerView: 4,
            },
          }}
          className="books-swiper"
        >
          {featuredBooks.map((book, index) => (
            <SwiperSlide className="swiper-slide">
              <FeaturedBook book={book} key={index} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom navigation buttons */}
        <div className="swiper-button-prev">
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div className="swiper-button-next">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </div>
  );
}

export default FeaturedBooksSection;
