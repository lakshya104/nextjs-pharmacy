import Banner from "./components/Banner";
import  DailyDeals  from "./components/DailyDeals";
import FeaturedBrand from "./components/FeaturedBrand";
import ProductCards from "./components/ProductCards";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Banner />
      <ProductCards />
      <Services />
      <DailyDeals />
      <FeaturedBrand />
    </>
  );
}
