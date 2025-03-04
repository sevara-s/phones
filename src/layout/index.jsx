import { Outlet } from "react-router-dom";
import { useIsFetching } from "@tanstack/react-query";
import Header from "../components/header";

const MainLayout = () => {

  return (
    <>
      <div className="all_section flex flex-col min-h-screen">
        <Header />
        <Outlet/>
      </div>
    </>
  );
};

export default MainLayout;
