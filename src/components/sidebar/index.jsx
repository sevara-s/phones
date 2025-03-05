import React from "react";
import { ShoppingCartOutlined, RightOutlined } from "@ant-design/icons"; // Ant Design icons

const Sidebar = () => {
  return (
    <div className="sticky top-0 bg-white h-screen min-w-[240px] p-[10px_20px]">
      <div className="flex flex-col gap-[28px] w-full">
        <button className="!bg-[#1fba4a] flex items-center justify-center gap-[10px] w-full text-white p-[7px] rounded-[6px] cursor-pointer active:scale-95 transition duration-[200ms]">
          <ShoppingCartOutlined />
          Maxsus buyurtma
        </button>

        <p className="w-full flex justify-between items-center gap-[10px] text-[#212121] font-medium cursor-pointer select-none hover:text-[#1fba4a] transition duration-[200ms]">
          Smartfonlar
          <RightOutlined />
        </p>

        <p className="w-full flex justify-between items-center gap-[10px] text-[#212121] font-medium cursor-pointer select-none hover:text-[#1fba4a] transition duration-[200ms]">
          Planshetlar
          <RightOutlined />
        </p>

        <p className="w-full flex justify-between items-center gap-[10px] text-[#212121] font-medium cursor-pointer select-none hover:text-[#1fba4a] transition duration-[200ms]">
          Quloqchinlar
          <RightOutlined />
        </p>

        <p className="w-full flex justify-between items-center gap-[10px] text-[#212121] font-medium cursor-pointer select-none hover:text-[#1fba4a] transition duration-[200ms]">
          Xotira kartalari
          <RightOutlined />
        </p>

        <p className="w-full flex justify-between items-center gap-[10px] text-[#212121] font-medium cursor-pointer select-none hover:text-[#1fba4a] transition duration-[200ms]">
          Smartfon aksesuarlari
          <RightOutlined />
        </p>

        <p className="w-full flex justify-between items-center gap-[10px] text-[#212121] font-medium cursor-pointer select-none hover:text-[#1fba4a] transition duration-[200ms]">
          Gadjetlar
          <RightOutlined />
        </p>

        <p className="w-full flex justify-between items-center gap-[10px] text-[#212121] font-medium cursor-pointer select-none hover:text-[#1fba4a] transition duration-[200ms]">
          Quvvatlovchi uskunalar
          <RightOutlined />
        </p>

        <p className="w-full flex justify-between items-center gap-[10px] text-[#212121] font-medium cursor-pointer select-none hover:text-[#1fba4a] transition duration-[200ms]">
          Kabellar
          <RightOutlined />
        </p>
      </div>
    </div>
  );
};

export default Sidebar;