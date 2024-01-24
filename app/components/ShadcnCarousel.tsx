import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import SingleProductCard from "./SingleProductCard";
import { Product } from "../staticData";

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

interface ShadcnCarouselV2 {
  children: React.ReactNode;
}

export const ShadcnCarouselV2: React.FC<ShadcnCarouselV2> = ({ children }) => {
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
      {children}
      <CarouselPrevious className="lg:block hidden" />
      <CarouselNext className="lg:block  hidden" />
    </Carousel>
  );
};
