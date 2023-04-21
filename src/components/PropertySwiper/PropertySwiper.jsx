import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./PropertySwiper.css";

// import required modules
import { Pagination } from "swiper";
import { Image } from "react-bootstrap";

const PropertySwiper = ({ properties }) => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {properties.map((property) => {
          return (
            <SwiperSlide>
              <Image src={property.photo_url} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default PropertySwiper;
