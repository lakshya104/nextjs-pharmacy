import { StaticImageData } from "next/image";
import image1 from "./assets/images/product-18-1-300x300.jpg"
import image2 from "./assets/images/product-13-300x300.jpg"
import image3 from "./assets/images/product-14-300x300.jpg"
import image4 from "./assets/images/product-15-1-300x300.jpg"
import image5 from "./assets/images/product-16-300x300.jpg"
import image6 from "./assets/images/product-17-1-300x300.jpg"
import image11 from "./assets/images/brand-1.jpg";
import image12 from "./assets/images/brand-2.jpg";
import image13 from "./assets/images/brand-3.jpg";
import image14 from "./assets/images/brand-4.jpg";
import image15 from "./assets/images/brand-1.jpg";
import image16 from "./assets/images/brand-2.jpg";
import image17 from "./assets/images/icons/stomach.svg";
import image18 from "./assets/images/icons/hospital_1.svg";
import image19 from "./assets/images/icons/drugstore.svg";
import image20 from "./assets/images/icons/bone-health.svg";
import image21 from "./assets/images/icons/stomach.svg";
import image22 from "./assets/images/icons/hospital_1.svg";
import image31 from './assets/images/product-18-1-300x300.jpg';
import image32 from './assets/images/product-03-300x300.jpg';
import image33 from './assets/images/product-01-300x300.jpg';
import image34 from './assets/images/product-17-1-300x300.jpg';
import image35 from './assets/images/product-16-300x300.jpg';
import image36 from './assets/images/product-07-300x300.jpg';
import image41 from './assets/images/categorios-1.jpg'
import image42 from './assets/images/categorios-2.jpg'
import image43 from './assets/images/categorios-3.jpg'
import image44 from './assets/images/categorios-4.jpg'
import image45 from './assets/images/categorios-5.jpg'
import image46 from './assets/images/categorios-6.jpg'
import image47 from './assets/images/categorios-7.jpg'



export interface Product {
  image: StaticImageData;
  imageAlt: string;
  discount: number;
  category: string;
  subCategory: string;
  productName: string;
  mrp: number;
  actualPrice: number;
}

export const products: Product[] = [
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

interface FeaturedBrand {
  image1: StaticImageData;
  alt1:string;
  image2: StaticImageData;
  alt2:string;
}

export const FeaturedBrandProducts: FeaturedBrand[] = [
  {
    image1: image11,
    alt1: "pills",
    image2: image17,
    alt2: "stomach"
  },
  {
    image1: image12,
    alt1: "pills",
    image2: image18,
    alt2: "stomach"
  },
  {
    image1: image13,
    alt1: "pills",
    image2: image19,
    alt2: "stomach"
  },
  {
    image1: image14,
    alt1: "pills",
    image2: image20,
    alt2: "stomach"
  },
  {
    image1: image15,
    alt1: "pills",
    image2: image21,
    alt2: "stomach"
  },
  {
    image1: image16,
    alt1: "pills",
    image2: image22,
    alt2: "stomach"
  }
]


export const shuffledProducts: Product[] = [
  {
    image: image31,
    imageAlt: "product-3",
    discount: 15,
    category: "Electronics",
    subCategory: "Gadgets",
    productName: "Health",
    mrp: 150.00,
    actualPrice: 127.50,
  },
  {
    image: image32,
    imageAlt: "product-5",
    discount: 25,
    category: "Home",
    subCategory: "Kitchen",
    productName: "Dettol",
    mrp: 80.00,
    actualPrice: 60.00,
  },
  {
    image: image33,
    imageAlt: "waterpik",
    discount: 41,
    category: "Covid",
    subCategory: "Devices",
    productName: "Waterpik WP-100",
    mrp: 196.48,
    actualPrice: 137.00,
  },
  {
    image: image34,
    imageAlt: "product-6",
    discount: 18,
    category: "Dandruff",
    subCategory: "Skincare",
    productName: "Carefree",
    mrp: 45.00,
    actualPrice: 36.90,
  },
  {
    image: image35,
    imageAlt: "another-product",
    discount: 20,
    category: "Healthcare",
    subCategory: "Supply",
    productName: "VitaminZ",
    mrp: 30.00,
    actualPrice: 24.00,
  },
  {
    image: image36,
    imageAlt: "product-4",
    discount: 30,
    category: "Tablet",
    subCategory: "Medicine",
    productName: "Multivitamin",
    mrp: 25.00,
    actualPrice: 17.50,
  },
];

export const combinedArray: Product[] = [
  {
    image: image33,
    imageAlt: "waterpik",
    discount: 41,
    category: "Covid",
    subCategory: "Devices",
    productName: "Waterpik WP-100",
    mrp: 196.48,
    actualPrice: 137.00,
  },
  {
    image: image36,
    imageAlt: "product-4",
    discount: 30,
    category: "Tablet",
    subCategory: "Medicine",
    productName: "Multivitamin",
    mrp: 25.00,
    actualPrice: 17.50,
  },
  {
    image: image34,
    imageAlt: "product-6",
    discount: 18,
    category: "Dandruff",
    subCategory: "Skincare",
    productName: "Carefree",
    mrp: 45.00,
    actualPrice: 36.90,
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
  }
];

export interface PopularCategoryDataArray {
  image: StaticImageData;
  category: string;
}

export const popularCategoryData: PopularCategoryDataArray[] = [
  {
    image:image41,
    category: "Device"
  },
  {
    image:image42,
    category: "Eyewear"
  },
  {
    image:image43,
    category: "Otc Deals"
  },
  {
    image:image44,
    category: "Aayush"
  },
  {
    image:image45,
    category: "Diabetes"
  },
  {
    image:image46,
    category: "Eyewear"
  },
  {
    image:image47,
    category: "Covid Essentials"
  }
]