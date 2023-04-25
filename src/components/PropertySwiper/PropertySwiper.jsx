import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./PropertySwiper.css";

// import required modules
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import { Image } from "react-bootstrap";
import SwiperCard from "./SwiperCard";

const PropertySwiper = ({ properties, handleSelection }) => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation, Pagination]}
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

export default PropertySwiper;
