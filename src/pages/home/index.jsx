import React from "react";
import Sidebar from "../../components/sidebar";
import ShowcaseSwiper from "../../components/swiper";
import ProductCard from "../../components/products";

const HomePage = () => {
  return (
    <section className="home_page">
      <div className="all_sections flex">
        <Sidebar />
        <div className="flex flex-col p-[15px] pb-[40px]">
          <h1 className="self-start flex justify-start items-center gap-[10px] py-[20px] font-black text-[25px]">
            Yangi mahsulotlar
          </h1>
          <div className="grid grid-cols-4 gap-[10px]">
            <ProductCard/>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomePage;
