import Banner from "./components/Banner";
import  DailyDeals  from "./components/DailyDeals";
import FeaturedBrand from "./components/FeaturedBrand";
import HealthProduct from "./components/HealthProduct";
import PopularCategories from "./components/PopularCategories";
import ProductCards from "./components/ProductCards";
import Services from "./components/Services";
import TrendingProduct from "./components/TrendingProduct";

export default function Home() {
  return (
    <>
      <Banner />
      <ProductCards />
      <Services />
      <DailyDeals />
      <FeaturedBrand />
      <HealthProduct />
      <PopularCategories />
      <TrendingProduct />
    </>
  );
}
