"use client";
import Image from "next/image";
import keyboardImage from "@/public/images/AK-900 Wired Keyboard.jpg";
import { IoMdStar } from "react-icons/io";
import { FaMinus, FaPlus } from "react-icons/fa";
import { TbRecycle, TbTruckDelivery } from "react-icons/tb";
import { useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { addProduct } from "@/lib/cartSlice";
import { useState } from "react";

const ProductPage = () => {
  const searchParams = useSearchParams();
  const productName = searchParams.get("productName");
  const productPrice = searchParams.get("productPrice");
  const productReviews = searchParams.get("productReviews");
  const [productQuantity, setProductQuantity] = useState(1);

  const dispatch = useDispatch();

  const handleProductQuantity = (btn: string) => {
    if (productQuantity === 1 && btn === "subtract") return;
    if (btn === "add") {
      setProductQuantity(productQuantity + 1);
    } else if (btn === "subtract") {
      setProductQuantity(productQuantity - 1);
    }
  };

  return (
    <div className="container flex mx-auto space-x-12 mt-14">
      <div className="flex items-center justify-center space-x-8 w-2/3">
        <div className="space-y-4">
          <div className="bg-slate-100 py-8 px-6 rounded-md">
            <Image
              src={keyboardImage}
              alt=""
              className="w-40 mix-blend-multiply"
            />
          </div>
          <div className="bg-slate-100 py-8 px-6 rounded-md">
            <Image
              src={keyboardImage}
              alt=""
              className="w-40 mix-blend-multiply"
            />
          </div>
          <div className="bg-slate-100 py-8 px-6 rounded-md">
            <Image
              src={keyboardImage}
              alt=""
              className="w-40 mix-blend-multiply"
            />
          </div>
          <div className="bg-slate-100 py-8 px-6 rounded-md">
            <Image
              src={keyboardImage}
              alt=""
              className="w-40 mix-blend-multiply"
            />
          </div>
        </div>
        <div className="bg-slate-100 py-40 px-10 rounded-md">
          <Image
            src={keyboardImage}
            alt=""
            className="w-[480px] mix-blend-multiply"
          />
        </div>
      </div>
      <div className="w-1/3 mt-10">
        <h3 className="font-bold text-2xl">{productName}</h3>
        <div className="flex items-center space-x-3 mt-2 mb-2">
          <div className="flex">
            <IoMdStar className="w-5 h-5 text-yellow-400" />
            <IoMdStar className="w-5 h-5 text-yellow-400" />
            <IoMdStar className="w-5 h-5 text-yellow-400" />
            <IoMdStar className="w-5 h-5 text-yellow-400" />
            <IoMdStar className="w-5 h-5 text-yellow-400" />
          </div>
          <p className="text-gray-500 text-sm">({productReviews} Reviews)</p>
          <p className="text-green-400 text-sm">In Stock</p>
        </div>
        <p className="font-semibold text-xl mb-4">${productPrice}.00</p>
        <p className="font-semibold text-sm tracking-wide">
          PlayStation 5 Controller Skin High quality vinyl with air channel
          adhesive for easy bubble free install & mess free removal Pressure
          sensitive.
        </p>
        <div className="flex items-center space-x-4 mt-8">
          <div className="relative w-40">
            <input
              type="number"
              value={productQuantity}
              className="border-2 border-gray-400 text-center font-bold text-lg w-full py-2 rounded-sm appearance-none"
            />
            <div className="absolute bottom-0 left-0 bg-white group hover:bg-red-500 hover:cursor-pointer transition-all duration-100">
              <FaMinus
                onClick={() => handleProductQuantity("subtract")}
                className="w-12 h-12 border-2 border-gray-400 p-1 group-hover:text-white group-hover:border-red-500"
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-white group hover:bg-red-500 hover:cursor-pointer transition-all duration-100">
              <FaPlus
                onClick={() => handleProductQuantity("add")}
                className="w-12 h-12 border-2 border-gray-400 p-1 group-hover:text-white group-hover:border-red-500"
              />
            </div>
          </div>
          <button
            onClick={() =>
              dispatch(
                addProduct({
                  productName: productName,
                  productPrice: productPrice,
                  productQuantity: productQuantity,
                })
              )
            }
            className="bg-red-500 font-semibold text-white rounded-sm px-14 py-3 border border-red-500 hover:text-red-500 hover:bg-white hover:cursor-pointer transition-all duration-200"
          >
            Buy Now
          </button>
        </div>
        <hr className="border-2 border-gray-300 mt-12 mb-12" />
        <div className="flex flex-col border-2 border-gray-400 rounded-md mt-8 py-6 px-6 space-y-8">
          <div className="flex items-center space-x-4">
            <TbTruckDelivery className="w-11 h-11" />
            <div className="space-y-1">
              <p className="text-lg font-semibold">Free Delivery</p>
              <p className="text-sm font-semibold underline">
                Enter your postal code for Delivery Availability
              </p>
            </div>
          </div>
          <hr className="border border-gray-400" />
          <div className="flex items-center space-x-4">
            <TbRecycle className="w-11 h-11" />
            <div className="space-y-1">
              <p className="text-lg font-semibold">Return Delivery</p>
              <p className="text-sm font-semibold underline">
                Free 30 Days Delivery Returns. Details
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
