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
import { products } from "../staticData";
import type { Product } from "../staticData";

interface ProductCarouselProps {
  title: string;
  timer: string | null;
  productArray: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({
  title,
  timer,
  productArray,
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex p-7 justify-center md:pl-24 md:justify-start md:w-[80%] flex-col md:flex-row space-y-4 md:space-y-0 items-center space-x-2">
        <h2 className="md:text-3xl text-2xl font-bold">{title} </h2>
        {timer != null && (
          <span className="text-white bg-pink-600 rounded-2xl px-4 text-lg md:text-xl py-2 font-bold">
            {timer}
          </span>
        )}
      </div>

      <div className="flex items-center justify-center">
        <ShadcnCarousel productsPrimary={productArray} />
      </div>
    </div>
  );
};

export default ProductCarousel;

interface ShadcnCarouselProps {
  productsPrimary: Product[];
}

export const ShadcnCarousel: React.FC<ShadcnCarouselProps> = ({
  productsPrimary,
}) => {
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
      className="w-[280px] md:w-[750px] lg:w-[1080px] m-auto "
    >
      <CarouselContent>
        {productsPrimary.map((item, index) => (
          <CarouselItem
            key={index}
            className="basis-[100%] md:basis-1/2 lg:basis-1/4"
          >
            <div className="p-1">
              <SingleProductCard
                image={item.image}
                imageAlt={item.imageAlt}
                discount={item.discount}
                category={item.category}
                subCategory={item.subCategory}
                productName={item.productName}
                mrp={item.mrp}
                actualPrice={item.actualPrice}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="lg:block hidden" />
      <CarouselNext className="lg:block  hidden" />
    </Carousel>
  );
};
