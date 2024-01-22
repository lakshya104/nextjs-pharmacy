import Image from "next/image";
import FeaturesBanner from "./FeaturesBanner";
import { FaArrowRight } from "react-icons/fa";
import bannerFirst from "../assets/images/banner-first.png";
import bannerCorner from "../assets/images/banner-cornerfirst.png";
import { GrCurrency } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";

const Banner = () => {
  return (
    <section className="flex items-center justify-center flex-col">
      <FeaturesBanner />

      <div className="bg-[url('./assets/images/h1-slider01.jpg')] w-screen py-8">
        <div className=" flex justify-center items-center space-x-40 space-y-8">
          <div className="banner_slider__image">
            <Image
              width={600}
              height={600}
              src={bannerFirst}
              alt="banner-image"
            />
          </div>

          <div className="flex justify-center items-center flex-col space-y-3">
            <h2 className="text-6xl text-white font-bold">
              Flat 25% off <br /> Medicine Order
            </h2>
            <div className="flex justify-between items-center w-96">
              <p className="text-white font-bold">
                Code: SAVE18
              </p>

              <div className="flex justify-between items-center">
                <a href="#" className="p-3 group rounded-full bg-white hover:bg-cyan-500 mr-2">
                  {" "}
                  <FaArrowRight className="group-hover:text-white text-black"/>
                </a>

                <a href="#" className="text-white">
                  SHOP NOW
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center">
             <div className="flex justify-center items-center flex-col space-y-3">
             <div className="flex items-center justify-center">
                <div className="p-3 rounded-full bg-white mr-2">
                  <GrCurrency className="text-cyan-500 text-3xl"/>
                </div>
                <p className="text-white font-bold">Win big offers</p>
              </div>
              <div className="flex items-center justify-center">
              <div className="p-3 rounded-full bg-white mr-2">
                  <TbTruckDelivery className="text-cyan-500 text-3xl" />
                </div>
                <p className="text-white font-bold">Free delivery</p>
              </div>
             </div>
              <div className="mt-10">
                <Image
                  src={bannerCorner}
                  width={250}
                  height={250}
                  alt="corner"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
