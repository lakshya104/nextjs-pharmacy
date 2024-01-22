import React from "react";
import { LiaHospitalSolid } from "react-icons/lia";
import { FaRegPlusSquare } from "react-icons/fa";
import { IoDocumentSharp } from "react-icons/io5";
import { FaHeartbeat } from "react-icons/fa";
import { AiTwotoneMedicineBox } from "react-icons/ai";

const FeaturesBanner = () => {
  return (
    <div className="hidden lg:flex justify-evenly items-center h-28 bg-gray-100 w-screen">
      <div className="border-r border-gray-300 px-6 py-4">
        <div className="flex justify-center items-center space-x-10 group">
          <a href="#">
            <div className="bg-cyan-500 h-10 w-10 rounded-full flex items-center justify-center">
              <LiaHospitalSolid className="text-white group-hover:text-black font-black text-3xl" />
            </div>
          </a>
          <div>
            <h6 className="group-hover:text-cyan-500 font-semibold">
              Medicine
            </h6>
            <p>Over 25000 products</p>
          </div>
        </div>
      </div>

      <div className="border-r border-gray-300 px-6 py-4">
        <div className="flex justify-center items-center space-x-10 group">
          <a href="#">
            <div className="bg-pink-600 h-10 w-10  group-hover:bg-cyan-500 rounded-full flex items-center justify-center">
              <FaRegPlusSquare className="text-white font-black text-2xl" />
            </div>
          </a>
          <div>
            <h6 className="group-hover:text-cyan-500 font-semibold">
              Medicine
            </h6>
            <p>Over 25000 products</p>
          </div>
        </div>
      </div>

      <div className="border-r border-gray-300 px-6 py-4">
        <div className="flex justify-center items-center space-x-10 group">
          <a href="#">
            <div className="bg-green-600 h-10 w-10  group-hover:bg-cyan-500 rounded-full flex items-center justify-center">
              <IoDocumentSharp className="text-white font-black text-2xl" />
            </div>
          </a>
          <div>
            <h6 className="group-hover:text-cyan-500 font-semibold">
              Medicine
            </h6>
            <p>Over 25000 products</p>
          </div>
        </div>
      </div>

      <div className="border-r border-gray-300 px-6 py-4">
        <div className="flex justify-center items-center space-x-10 group">
          <a href="#">
            <div className="bg-indigo-900 h-10 w-10  group-hover:bg-cyan-500 rounded-full flex items-center justify-center">
              <FaHeartbeat className="text-white font-black text-2xl" />
            </div>
          </a>
          <div>
            <h6 className="group-hover:text-cyan-500 font-semibold">
              Medicine
            </h6>
            <p>Over 25000 products</p>
          </div>
        </div>
      </div>

      <div className=" px-6 py-4">
        <div className="flex justify-center items-center space-x-10 group">
          <a href="#">
            <div className="bg-orange-600 h-10 w-10  group-hover:bg-cyan-500 rounded-full flex items-center justify-center">
              <AiTwotoneMedicineBox className="text-white font-black text-2xl" />
            </div>
          </a>
          <div>
            <h6 className="group-hover:text-cyan-500 font-semibold">
              Medicine
            </h6>
            <p>Over 25000 products</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesBanner;
