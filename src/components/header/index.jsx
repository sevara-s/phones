import React from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, Dropdown, Badge } from "antd";
import {
  FilterOutlined,
  SearchOutlined,
  BellOutlined,
  LoginOutlined
} from "@ant-design/icons";

// logo
import logo from "../../assets/svgs/logo.svg";
import lang from "../../assets/svgs/lang.svg";

const Header = () => {
  const navigate = useNavigate();

  return (
    <section className="header py-[20px]">
      <div className="container flex items-center justify-between">
        <img onClick={() => navigate("/")} src={logo} alt="" />
        {/* search */}
        <div className="flex-1  max-w-3xl mx-4">
          <form
            action=""
            className="flex border-2 border-green-500  item-center gap-3 rounded-lg justify-between max-[631px]:hidden"
          >
            <SearchOutlined className="text-gray-400 pl-4" />
            <input
              type="text"
              placeholder="Qidirish"
              className=" py-2 w-full outline-none "
            />
            <button
              size="large"
              className="flex px-4 py-2 rounded-r-md text-white items-center !bg-green-500 hover:!bg-green-600 border-none"
            >
              <FilterOutlined />

              <span className="ml-2">Filter</span>
            </button>
          </form>
        </div>
        {/* lang */}
        <div className="lang flex items-center gap-[5px]">
          <img src={lang} alt="" />
          <p>UZ</p>
        </div>
        <Badge count={0} showZero={false}>
          <Button
            type="text"
            icon={<BellOutlined className="text-xl text-gray-700" />}
            size="large"
            className=" flex items-center justify-center"
          />
        </Badge>

        <div className="flex items-center">
                <LoginOutlined />
              </div>

        <div className="w-full hidden max-[630px]:flex my-3">
          <form
            action=""
            className="flex border-2 border-green-500  item-center gap-3 rounded-lg justify-between w-full"
          >
            <SearchOutlined className="text-gray-400 pl-4" />
            <input
              type="text"
              placeholder="Qidirish"
              className=" py-2 w-full outline-none "
            />
            <button
              size="large"
              className="flex px-4 py-2 rounded-r-md text-white items-center !bg-green-500 hover:!bg-green-600 border-none"
            >
              <FilterOutlined />

              <span className="ml-2">Filter</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Header;
