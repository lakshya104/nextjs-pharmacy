import Banner from "./components/Banner";
import  DailyDeals  from "./components/DailyDeals";
import ProductCards from "./components/ProductCards";
import Services from "./components/Services";
import SingleProductCard from "./components/SingleProductCard";

export default function Home() {
  return (
    <>
      <Banner />
      <ProductCards />
      <Services />
      {/* <SingleProductCard /> */}
      <DailyDeals />
    </>
  );
}
