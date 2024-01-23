import Image from "next/image";
import React from "react";
import image from "../assets/images/product-18-1-300x300.jpg";
import { IoStar } from "react-icons/io5";
import { IoCart } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaEye } from "react-icons/fa";


const SingleProductCard = () => {
  return (
    <div className="p-8 m-2 transition hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-[300px] group ">
      <div className="flex justify-center items-center flex-col relative ">
        <div className="daily-deal--product__image">
          <Image width={300} height={300} src={image} alt="waterpik" />
        </div>
        <div className="absolute top-0 left-0 px-2 py-1 bg-green-500 rounded-lg">
          <span className="text-white">-41% Off</span>
        </div>
        <div className="absolute top-0 right-0 flex justify-center items-center flex-col space-y-4">
          <div className="p-2.5 bg-gray-200 rounded-full hover:text-white hover:bg-cyan-500">
           <FaHeart />
          </div>
          <div className="p-2.5 bg-gray-200 rounded-full opacity-0 transition group-hover:opacity-100 hover:text-white hover:bg-cyan-500">
            <FaArrowRight />
          </div>
          <div className="p-2.5 bg-gray-200 rounded-full opacity-0 transition group-hover:opacity-100 hover:text-white hover:bg-cyan-500">
            <FaEye/>
          </div>
        </div>
        <div className="daily-deal--product__content">
          <div className="text-gray-500 text-lg">
            <a href="#">Covid Essential</a> <a href="#">(Devices)</a>
          </div>
          <h3 className="text-2xl font-bold">
            <a href="#">Waterpik WP-100 – Dental Care</a>
          </h3>
          <div className="flex justify-start text-yellow-400 font-bold text-2xl space-x-1 mt-5 mb-2 items-center">
            <IoStar />
            <IoStar />
            <IoStar/>
            <IoStar />
            <IoStar />
          </div>
          <div className="daily-deal--product__price">
            <p className="text-red-500 text-2xl font-bold">
              $137.00<span className="line-through text-gray-500 ml-4">$196.48</span>
            </p>
          </div>
          <div className="flex p-2 justify-start space-x-2 group items-center hover:bg-cyan-500 transition hover:text-white rounded-3xl mt-10 w-[200px] cursor-pointer">
              <div className="p-2 bg-cyan-500 rounded-full text-white"><IoCart className="text-3xl"/></div>
              <h4 className="font-bold text-lg">ADD TO CART</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
