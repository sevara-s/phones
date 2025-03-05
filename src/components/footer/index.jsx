import React from "react";
import { Link } from "react-router-dom";
import { AppstoreOutlined,GooglePlusSquareFilled } from "@ant-design/icons";

const Footer = () => {
  return (
    <section className="footer py-[25px] pb-[30px] bg-white">
      <div className="container max-w-[1200px] mx-auto">
        <div className="w-full grid grid-cols-2 gap-[10px]">
          <div className="flex justify-between items-start gap-[10px] w-full">
            <div className="flex flex-col justify-between items-start gap-[8px]">
              <div className="w-[100px]">
              </div>
              <p className="font-medium font-sans text-[19px] leading-[150%] text-black">
                Mobilux © 2025
              </p>
              <p className="!font-sans font-medium text-[13px] text-black">
                Barcha huquqlar kafolatlangan
              </p>
              <div className="flex justify-start items-center gap-[10px]">
               
                <span className="text-gray-400 text-xl"><GooglePlusSquareFilled/></span>{" "}
          
                <span className="text-gray-400 text-xl"><AppstoreOutlined/></span>{" "}
               
              </div>
            </div>

            <div className="flex flex-col gap-[5px] justify-start">
              <h1 className="font-medium font-sans text-[19px] leading-[150%] text-black">
                Foydali havolalar
              </h1>
              <p className="font-normal text-sm cursor-pointer leading-[150%] text-[#0d1136] hover:text-gray-600">
                Bosh sahifa
              </p>
              <p className="font-normal text-sm cursor-pointer leading-[150%] text-[#0d1136] hover:text-gray-600">
                Yordam kerakmi?
              </p>
              <p className="font-normal text-sm cursor-pointer leading-[150%] text-[#0d1136] hover:text-gray-600">
                Foydalanish shartlari
              </p>
              <p className="font-normal text-sm cursor-pointer leading-[150%] text-[#0d1136] hover:text-gray-600">
                Maxfiylik siyosati
              </p>
            </div>
          </div>

          <div className="flex flex-col pl-[140px]">
            <h1 className="font-medium font-sans text-[19px] leading-[150%] text-black">
              Biz haqimizda
            </h1>
            <p className="font-normal text-sm cursor-pointer leading-[150%] text-[#0d1136] hover:text-gray-600">
              Manzil: #214, G-dong, Lotte castle, 347 Jongno, Jongno-gu, Seoul
            </p>
            <p className="font-normal text-sm cursor-pointer leading-[150%] text-[#0d1136] hover:text-gray-600">
              Korxona nomi: Mobilux trade
            </p>
            <p className="font-normal text-sm cursor-pointer leading-[150%] text-[#0d1136] hover:text-gray-600">
              Korxona rahbari: HASANBOY TURSUNOV
            </p>
            <p className="font-normal text-sm cursor-pointer leading-[150%] text-[#0d1136] hover:text-gray-600">
              Registratsiya raqami: 433-62-00377
            </p>
            <p className="font-normal text-sm cursor-pointer leading-[150%] text-[#0d1136] hover:text-gray-600">
              Telefon raqam: 93 000 66-44 97 000 66-44
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
