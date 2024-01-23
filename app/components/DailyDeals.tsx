"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SingleProductCard from "./SingleProductCard";

const DailyDeals = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex p-5 justify-center md:justify-center flex-col md:flex-row space-y-4 items-center space-x-2">
        <h2 className="md:text-4xl text-2xl font-bold">Deal Of The Day </h2>
        <span className="text-white bg-pink-600 rounded-2xl px-4 text-lg md:text-xl py-2 font-bold">
          End in: 29:23:54
        </span>
      </div>

      <div>
        <ShadcnCarousel />
      </div>
    </div>
  );
};

export default DailyDeals;

export function ShadcnCarousel() {
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
      className="w-full max-w-xs"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <SingleProductCard />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
