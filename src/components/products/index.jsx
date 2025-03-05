import React from "react";
import { useProductData } from "../../hooks/useProducts";
import { Link } from "react-router-dom";

 
import { StarFilled, StarTwoTone, StarOutlined } from "@ant-design/icons";
import { ShoppingCartOutlined } from "@ant-design/icons";

const ProductCard = () => {
    const { data: products, isLoading } = useProductData();

    console.log("Data:", products);
    console.log("Loading:", isLoading);
     

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
        <>
            {products?.map((item) => (
                <Link
                    key={item?.id}
                    to={`phone/${item?.id}`}
                    className="flex flex-col gap-[5px] p-[10px_15px] bg-white rounded-[8px] justify-between">
                    <div className="flex justify-center items-center p-[10px] h-[250px]">
                        <img
                            src={item?.img}
                            alt={item?.product_name}
                            className="h-full w-full object-contain"
                        />
                    </div>

                    <p className="font-normal text-sm leading-[143%] text-[#1fba4a]">
                        {item?.product_name}
                    </p>

                    <div className="flex justify-between items-center gap-[5px]">
                        <div className="flex justify-start items-center gap-[3px] text-[13px]">
                            {generateRatingStars(item?.ratings_stars)}
                            <p className="opacity-60">({item?.ratings_stars})</p>
                        </div>

                        <p className="opacity-60 text-[13px] line-through">
                            {item?.price_original
                                ?.toLocaleString()
                                ?.replace(/,/g, " ")}{" "}
                            so’m
                        </p>
                    </div>

                    <h1 className="font-extrabold text-lg leading-[133%] text-[#0a0a0a]">
                        {item?.price_current
                            ?.toLocaleString()
                            ?.replace(/,/g, " ")}{" "}
                        so’m
                    </h1>

                    <button className="bg-[#f6f8fa] !font-sans font-medium border border-[#1fba4a] hover:bg-[#1fba4a] text-[#0a0a0a] hover:text-white flex justify-center items-center gap-[10px] w-full p-[8px] rounded-[6px] cursor-pointer active:scale-95 transition duration-[.2s]">
                        <ShoppingCartOutlined />
                        Savatchaga
                    </button>
                </Link>
            ))}
        </>
    );
};

export default ProductCard;
