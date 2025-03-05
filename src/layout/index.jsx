import { Outlet } from "react-router-dom";
import { useIsFetching } from "@tanstack/react-query";
import Header from "../components/header";
import Footer from "../components/footer";
import ProductCard from "../components/products";

const MainLayout = () => {

  return (
    <>
      <div className="all_section flex flex-col min-h-screen">
        <Header />
        {/* <ProductCard/> */}
        <Outlet/>
        <Footer/>
      </div>
    </>
  );
};

export default MainLayout;
