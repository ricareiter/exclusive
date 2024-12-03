"use client";
import { useDispatch } from "react-redux";
import { addProduct } from "@/lib/cartSlice";
import Image, { StaticImageData } from "next/image";
import { IoMdStar } from "react-icons/io";

interface Props {
  productName: string;
  productPrice: number;
  productImage: StaticImageData;
  productReviews: number;
}

const ProductCard = ({
  productName,
  productPrice,
  productImage,
  productReviews,
}: Props) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() =>
        dispatch(
          addProduct({
            productName: productName,
            productPrice: productPrice,
            productReviews: productReviews,
          })
        )
      }
    >
      <div className="relative w-64 h-48 flex flex-col items-center justify-center bg-slate-100 rounded-md group group-hover: cursor-pointer">
        <Image src={productImage} alt="" className="w-40 mix-blend-multiply" />
        <div className="absolute hidden bottom-0 bg-black w-full text-center px-4 py-2 rounded-b-md group-hover:block">
          <p className="text-white">Add To Cart</p>
        </div>
      </div>
      <h4 className="font-bold mt-4">{productName}</h4>
      <p className="font-semibold text-red-500 mt-1 mb-1">${productPrice}</p>
      <div className="flex items-center space-x-2">
        <div className="flex">
          <IoMdStar className="w-5 h-5 text-yellow-400" />
          <IoMdStar className="w-5 h-5 text-yellow-400" />
          <IoMdStar className="w-5 h-5 text-yellow-400" />
          <IoMdStar className="w-5 h-5 text-yellow-400" />
          <IoMdStar className="w-5 h-5 text-yellow-400" />
        </div>
        <p className="text-gray-500 font-semibold">({productReviews})</p>
      </div>
    </div>
  );
};

export default ProductCard;
