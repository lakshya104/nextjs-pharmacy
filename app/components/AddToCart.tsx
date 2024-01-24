import { IoCart } from "react-icons/io5";

const AddToCart = () => {
  return (
    <div className="flex p-1 md:p-2 justify-start space-x-2 group items-center hover:bg-cyan-500 transition hover:text-white rounded-3xl mt-5 md:mt-10 w-[140px] md:w-[200px] cursor-pointer">
      <div className="p-2 bg-cyan-500 rounded-full text-white">
        <IoCart className="text-lg md:text-xl" />
      </div>
      <h4 className="font-bold text-xs md:text-sm">ADD TO CART</h4>
    </div>
  );
};

export default AddToCart;
