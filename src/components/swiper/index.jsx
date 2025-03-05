import React, { useRef, useEffect, useState } from "react";
import { Button } from "antd";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import showcase from "../../assets/imgs/showcase.png";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const ShowcaseSwiper = () => {
  const prevButton = useRef(null);
  const nextButton = useRef(null);
  const carouselRef = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWidth = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (carouselRef.current && carouselRef.current.swiper) {
        const swiperInstance = carouselRef.current.swiper;
        swiperInstance.params.navigation.prevEl = prevButton.current;
        swiperInstance.params.navigation.nextEl = nextButton.current;
        swiperInstance.navigation.init();
        swiperInstance.navigation.update();
      }
    }, 100);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <Swiper 
        ref={carouselRef} 
        modules={[Pagination, Autoplay, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="w-full"
      >
        {[showcase, showcase].map((image, idx) => (
          <SwiperSlide key={idx} className="w-full h-[400px] flex items-center justify-center">
            <img src={image} alt={`Slide ${idx}`} className="w-full h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>

      <Button
        ref={prevButton}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-gray-700 p-3 rounded-full shadow-lg hover:bg-gray-200 transition-all z-10 sm:p-2 sm:left-2"
        icon={<LeftOutlined />}
        type="text"
        size="large"
      />
      <Button
        ref={nextButton}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-gray-700 p-3 rounded-full shadow-lg hover:bg-gray-200 transition-all z-10 sm:p-2 sm:right-2"
        icon={<RightOutlined />}
        type="text"
        size="large"
      />
    </div>
  );
};

export default ShowcaseSwiper;
