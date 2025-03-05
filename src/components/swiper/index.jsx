import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import showcase from "../../assets/imgs/showcase.png";

const ShowcaseSwiper = () => {
  const swiperRef = useRef(null);

  return (
    <div className="relative w-full">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
        className="w-full"
      >
        {[showcase, showcase].map((image, idx) => (
          <SwiperSlide
            key={idx}
            className="w-full h-[400px] flex items-center justify-center"
          >
            <img
              src={image}
              alt={`Slide ${idx}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="prev-btn absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-200 transition">
        <LeftOutlined className="text-gray-700" />
      </button>
      <button className="next-btn absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-200 transition">
        <RightOutlined className="text-gray-700" />
      </button>
    </div>
  );
};

export default ShowcaseSwiper;
