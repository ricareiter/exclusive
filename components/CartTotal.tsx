"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CartTotal = () => {
  const products = useSelector((state) => state.cart);
  const [totalCartValue, setTotalCartValue] = useState(0);
  const shippingValue = 0;

  useEffect(() => {
    const total = products.reduce((total, product) => {
      return total + product.productPrice * product.productQuantity;
    }, 0);

    setTotalCartValue(total);
  }, [products]);

  return (
    <div className="w-1/3 mt-14 mb-8 border-2 border-black mx-auto px-6 py-10">
      <h4 className="font-semibold text-2xl mb-4">Cart Total</h4>
      <div className="flex items-center justify-between">
        <p>Subtotal:</p>
        <p>${totalCartValue}</p>
      </div>
      <hr className="border border-black mt-2 mb-2" />
      <div className="flex items-center justify-between">
        <p>Shipping</p>
        <p>Free</p>
      </div>
      <hr className="border border-black mt-2 mb-2" />
      <div className="flex items-center justify-between">
        <p>Total</p>
        <p>${totalCartValue + shippingValue}</p>
      </div>
      <div className="text-center">
        <button className="text-white bg-red-500 border border-red-500 px-8 py-2 rounded-md mt-6 hover:cursor-pointer hover:text-red-500 hover:bg-white">
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default CartTotal;
