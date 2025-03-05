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
            {/* <ShowcaseSwiper/> */}
     
     
            <ProductCard/>
           
        </div>
      </div>
    </section>
  );
};
export default HomePage;
