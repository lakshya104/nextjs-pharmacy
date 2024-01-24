import { StaticImageData } from "next/image";
import image1 from "./assets/images/product-18-1-300x300.jpg"
import image2 from "./assets/images/product-13-300x300.jpg"
import image3 from "./assets/images/product-14-300x300.jpg"
import image4 from "./assets/images/product-15-1-300x300.jpg"
import image5 from "./assets/images/product-16-300x300.jpg"
import image6 from "./assets/images/product-17-1-300x300.jpg"


interface Product {
    image: StaticImageData;
    imageAlt: string;
    discount: number;
    category: string;
    subCategory: string;
    productName: string;
    mrp: number;
    actualPrice: number;
  }

const products: Product[] = [
    {
      image: image1,
      imageAlt: "waterpik",
      discount: 41,
      category: "Covid",
      subCategory: "Devices",
      productName: "Waterpik WP-100",
      mrp: 196.48,
      actualPrice: 137.00,
    },
    {
      image: image2,
      imageAlt: "another-product",
      discount: 20,
      category: "Healthcare",
      subCategory: "Supply",
      productName: "VitaminZ",
      mrp: 30.00,
      actualPrice: 24.00,
    },
    {
        image: image3,
        imageAlt: "product-3",
        discount: 15,
        category: "Electronics",
        subCategory: "Gadgets",
        productName: "Health",
        mrp: 150.00,
        actualPrice: 127.50,
      },
      {
        image: image4,
        imageAlt: "product-4",
        discount: 30,
        category: "Tablet",
        subCategory: "Medicine",
        productName: "Multivitamin",
        mrp: 25.00,
        actualPrice: 17.50,
      },
      {
        image: image5,
        imageAlt: "product-5",
        discount: 25,
        category: "Home",
        subCategory: "Kitchen",
        productName: "Dettol",
        mrp: 80.00,
        actualPrice: 60.00,
      },
      {
        image: image6,
        imageAlt: "product-6",
        discount: 18,
        category: "Dandruff",
        subCategory: "Skincare",
        productName: "Carefree",
        mrp: 45.00,
        actualPrice: 36.90,
      },
   
  ];
  
  export default products;
  