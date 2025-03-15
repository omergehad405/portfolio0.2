import React from "react";
import { useSwiper } from "swiper/react";
import styles from "./Work.module.scss";

function SwiperNavButtons() {
  const swiper = useSwiper();
  return (
    <div className={styles.navigation_btns}>
      <button
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <button
        onClick={() => {
          swiper.slideNext();
        }}
      >
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default SwiperNavButtons;
