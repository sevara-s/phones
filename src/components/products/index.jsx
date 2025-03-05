import React from "react";
import { useProductData } from "../../hooks/useProducts";
import { Link } from "react-router-dom";
import { StarFilled, StarTwoTone, StarOutlined } from "@ant-design/icons";
import { ShoppingCartOutlined } from "@ant-design/icons";

const ProductCard = () => {
  const { data: products, isLoading } = useProductData();

  const generateRatingStars = (score) => {
    return Array.from({ length: 5 }, (_, index) =>
      score >= index + 1 ? (
        <StarFilled key={index} className="text-[#DFB300]" />
      ) : score > index ? (
        <StarTwoTone key={index} twoToneColor="#DFB300" />
      ) : (
        <StarOutlined key={index} className="text-[#DFB300]" />
      )
    );
  };

  return (
    <div className="grid grid-cols-4 gap-6 p-6">
      {products?.map((item) => (
        <Link
          key={item?.id}
          to={`phone/${item?.id}`}
          className="flex flex-col bg-white shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
        >
          <div className="flex justify-center items-center bg-gray-100 p-4 h-[260px]">
            <img
              src={item?.img}
              alt={item?.product_name}
              className="h-full w-full object-contain"
            />
          </div>

          <div className="p-4 flex flex-col gap-2">
            <p className="text-green-600 text-sm font-medium">
              {item?.product_name}
            </p>

            <div className="flex justify-between items-center text-sm text-gray-600">
              <div className="flex items-center gap-1">
                {generateRatingStars(item?.ratings_stars)}
                <span className="opacity-60">({item?.ratings_stars})</span>
              </div>
              <p className="line-through">
                {item?.price_original?.toLocaleString()} so’m
              </p>
            </div>

            <h1 className="text-lg font-bold text-gray-900">
              {item?.price_current?.toLocaleString()} so’m
            </h1>

            <button className="mt-3 flex items-center justify-center gap-2 bg-green-500 text-white font-medium p-2 rounded-lg hover:bg-green-600 active:scale-95 transition">
              <ShoppingCartOutlined />
              Savatchaga
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductCard;
