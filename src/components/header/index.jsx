import React from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "antd";
import { FilterOutlined, SearchOutlined } from "@ant-design/icons";

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
        <div style={{ display: "flex", gap: 3 }}>
          <Input
            placeholder="Search..."
            style={{
              width: "80%",
              borderRadius: 4,
              borderColor: "#1fba4a",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
            prefix={<SearchOutlined style={{ color: "#bfbfbf" }} />}
          />
          <Button
            type="primary"
            style={{
              backgroundColor: "#52c41a",
              borderColor: "#52c41a",
              borderRadius: 4,
            }}
          >
            <FilterOutlined />
            Filter
          </Button>
        </div>
        {/* lang */}
        <div className="lang">
            <img src={lang} alt="" />
            <p>UZ</p>
        </div>
      </div>
    </section>
  );
};

export default Header;
