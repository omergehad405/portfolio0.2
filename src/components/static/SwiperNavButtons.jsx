import React from "react";
import { useSwiper } from "swiper/react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

function SwiperNavButtons() {
  const swiper = useSwiper();
  return (
    <div className="flex float-right items-center justify-center gap-4 mt-4 cursor-pointer">
      <button
        onClick={() => {
          swiper.slidePrev();
        }}
        className="px-3 py-1 bg-primary text-white text-xl rounded hover:bg-primary-dark transition cursor-pointer"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={() => {
          swiper.slideNext();
        }}
        className="px-3 py-1 bg-primary text-white text-xl rounded hover:bg-primary-dark transition cursor-pointer"
      >
        <FaArrowRight />
      </button>
    </div>
  );
}

export default SwiperNavButtons;
