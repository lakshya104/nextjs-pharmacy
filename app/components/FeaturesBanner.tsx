import React from "react";
import { LiaHospitalSolid } from "react-icons/lia";
import { FaRegPlusSquare } from "react-icons/fa";
import { IoDocumentSharp } from "react-icons/io5";
import { FaHeartbeat } from "react-icons/fa";
import { AiTwotoneMedicineBox } from "react-icons/ai";

const FeaturesBanner = () => {
  return (
    <div className=" hidden lg:flex justify-evenly items-center h-28 bg-gray-100 w-[100%]">
      <div className="border-r border-gray-300 px-6 py-4">
        <FeaturesBannerCard
          title="Medicine"
          desc="Over 25000 products"
          iconBg="bg-cyan-500"
        >
          <LiaHospitalSolid className="text-white group-hover:text-black font-black text-3xl" />
        </FeaturesBannerCard>
      </div>

      <div className="border-r border-gray-300 px-6 py-4">
        <FeaturesBannerCard
          title="Medicine"
          desc="Over 25000 products"
          iconBg="bg-pink-600"
        >
          <FaRegPlusSquare className="text-white font-black text-2xl" />
        </FeaturesBannerCard>
      </div>

      <div className="border-r border-gray-300 px-6 py-4">
        <FeaturesBannerCard
          title="Medicine"
          desc="Over 25000 products"
          iconBg="bg-green-600"
        >
          <IoDocumentSharp className="text-white font-black text-2xl" />
        </FeaturesBannerCard>
      </div>

      <div className="border-r border-gray-300 px-6 py-4">
        <FeaturesBannerCard
          title="Medicine"
          desc="Over 25000 products"
          iconBg="bg-indigo-900"
        >
          <FaHeartbeat className="text-white font-black text-2xl" />
        </FeaturesBannerCard>
      </div>

      <div className="px-6 py-4">
        <FeaturesBannerCard
          title="Medicine"
          desc="Over 25000 products"
          iconBg="bg-orange-600"
        >
          <AiTwotoneMedicineBox className="text-white font-black text-2xl" />
        </FeaturesBannerCard>
      </div>
    </div>
  );
};

export default FeaturesBanner;

interface FeaturesBannerCardProps {
  children: React.ReactNode;
  title: string;
  desc: string;
  iconBg: string;
}

export const FeaturesBannerCard: React.FC<FeaturesBannerCardProps> = ({
  children,
  title,
  desc,
  iconBg,
}) => {
  return (
    <div className="flex justify-center items-center space-x-10 group">
      <a href="#">
        <div
          className={`${iconBg} h-10 w-10 group-hover:bg-cyan-500 rounded-full flex items-center justify-center`}
        >
          {children}
        </div>
      </a>
      <div>
        <h6 className="group-hover:text-cyan-500 font-semibold">{title}</h6>
        {desc}
      </div>
    </div>
  );
};
