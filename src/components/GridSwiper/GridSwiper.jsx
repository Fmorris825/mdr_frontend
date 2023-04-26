import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Grid, Pagination } from "swiper";

const GridSwiper = () => {
  return (
    <>
      <Swiper
        slidesPerView={5}
        grid={{
          rows: 3,
        }}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        {properties.map((property) => {
          return (
            <SwiperSlide>
              <SwiperCard
                property={property}
                handleSelection={handleSelection}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default GridSwiper;
