import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProductData } from "../../hooks/useProducts";

// img
import uzb from "../../assets/svgs/lang.svg"

// icons
import { StarFilled, StarTwoTone, StarOutlined } from "@ant-design/icons";
import { ShoppingCartOutlined, LeftOutlined } from "@ant-design/icons";
import ProductDetails from "../../components/details";

const Product = () => {
  const { id } = useParams();
  const { data: phones } = useProductData();
  const product = phones?.find((phone) => phone.id === id);
  const navigate = useNavigate();

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => {
      return rating >= i + 1 ? (
        <StarFilled key={i} className="text-[#DFB300]" />
      ) : rating > i ? (
        <StarTwoTone key={i} className="text-[#DFB300]" />
      ) : (
        <StarOutlined key={i} className="text-[#DFB300]" />
      );
    });
  };

  return (
    <section className="p-[30px] rounded-xl relative">
      <p
        onClick={() => navigate(-1)}
        className="left-[80px] flex justify-start cursor-pointer hover:text-green-500 items-center gap-[2px] text-[17px] absolute"
      >
        <LeftOutlined className="text-[10px]" /> orqaga
      </p>
      <div className="container2">
        <div className="grid grid-cols-2 bg-white rounded-xl">
          <div className="flex justify-center items-center p-[20px] border-r border-gray-200">
            <img src={product?.img} alt={product?.product_name} />
          </div>
          <div className="p-[20px] flex flex-col gap-[25px]">
            <h1 className="font-sans font-medium text-2xl tracking-[0.1em] leading-[125%] text-black">
              {product?.product_name}
            </h1>
            <div className="flex justify-start items-center gap-[5px]">
              <div className="flex justify-start items-center gap-[10px]">
                <div className="flex justify-start items-center gap-[5px]">
                  {renderStars(product?.ratings_stars)}
                </div>
                <p className="opacity-60">({product?.ratings_stars})</p>
              </div>
              <p className="opacity-60 text-[13px] line-through">
                {product?.price_original?.toLocaleString()?.replace(/,/g, " ")}{" "}
                so’m
              </p>
            </div>
            <h1 className="font-sans font-medium text-[37px] text-[#1fba4a]">
              {product?.price_current?.toLocaleString()?.replace(/,/g, " ")}{" "}
              so'm
            </h1>
            <div className="flex justify-start items-center gap-[30px]">
              <button className="bg-[#000] self-start font-sans font-medium hover:bg-[#1fba4a] text-[#fff] flex justify-center items-center gap-[10px] p-[8px_100px] rounded-[6px] cursor-pointer active:scale-95 transition duration-[.2s]">
                <ShoppingCartOutlined /> Savatchaga
              </button>
              <p
                className={`flex justify-start items-center gap-[5px] font-medium font-sans ${
                  product?.availability_in_stock
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                <span
                  className={`h-[10px] w-[10px] rounded-full ${
                    product?.availability_in_stock
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                ></span>
                {product?.availability_in_stock
                  ? "Omborda mavjud"
                  : "Omborda mavjud emas"}
              </p>
            </div>
            <div className="flex justify-between items-center gap-[10px]">
              <p className="text-[17px] font-medium font-sans">Rangi:</p>
              <div className="grid grid-cols-4 gap-[10px]">
                {["#576755", "#adc5db", "#fae8d1", "#dedddd"].map(
                  (color, index) => (
                    <div
                      key={index}
                      className="p-[10px] hover:border-[#1fba4a] cursor-pointer rounded-xl border border-[#f6f8fa] flex flex-col gap-[3px] justify-center items-center"
                    >
                      <span
                        className="h-[20px] w-[20px] rounded-full"
                        style={{ background: color }}
                      ></span>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="flex justify-start items-center gap-[10px] bg-[#e9f8ed] p-[10px] rounded-md">
              <img src={uzb} alt="" />
              <p className="font-bold">O’zbekiston bo’ylab yetkazib berish:</p>
              <p>{product?.delivery_time.slice(0, 2)} ish kuni</p>
            </div>
            <div className="flex flex-col">
              <h1 className="font-medium font-sans text-[20px]">Описание</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                officia asperiores expedita voluptatibus totam cum ullam enim
                molestias quae? Sint ut dicta iste animi natus amet sequi
                repellendus quia hic?
              </p>
            </div>
          </div>
        </div>
       <ProductDetails/>
      </div>
    </section>
  );
};

export default Product;
