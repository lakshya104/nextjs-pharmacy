"use client";
import Image from "next/image";
import React from "react";
import image1 from "../assets/images/brand-1.jpg";
import image2 from "../assets/images/icons/stomach.svg";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const FeaturedBrand = () => {
  return (
    <section className="bg-gray-100 h-[50vh]">
      <div className="flex items-center justify-center flex-col space-y-4 p-5 w-[100%]">
        <h2 className="text-2xl font-bold">Featured Brands</h2>

        <ShadcnCarouselV2 />
      </div>
    </section>
  );
};

export default FeaturedBrand;

export function ShadcnCarouselV2() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-[280px] md:w-[750px] lg:w-[1080px] m-auto"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="basis-[100%] md:basis-1/2 lg:basis-1/4"
          >
            <div className="w-[280px] md:w-[240px] h-[40vh] relative p-1">
              <Image
                src={image1}
                className="cursor-pointer rounded-lg transition duration-500 hover:rounded-xl hover:scale-110"
                alt="pills"
                width={305}
                height={210}
              />
              <div className="absolute flex items-center justify-center w-[200px] bg-white rounded-lg p-5 md:right-5 right-10 top-28">
                <a href="#">
                  <Image
                    src={image2}
                    className=" transition duration-500 hover:scale-110"
                    alt="stomach"
                    width={120}
                    height={80}
                  />
                </a>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="lg:block hidden" />
      <CarouselNext className="lg:block  hidden" />
    </Carousel>
  );
}
