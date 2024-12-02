import React from "react";
import keyboardImage from "@/public/images/AK-900 Wired Keyboard.jpg";
import CartItem from "@/components/CartItem";
import CartTotal from "@/components/CartTotal";

const page = () => {
  return (
    <div className="container mx-auto mt-14">
      <table className="w-full">
        <thead className="border shadow-md rounded-lg">
          <tr>
            <th className="px-4 py-4">Product</th>
            <th className="px-4 py-4">Price</th>
            <th className="px-4 py-4">Quantity</th>
            <th className="px-4 py-4">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <CartItem
            productImage={keyboardImage}
            productName="AK-900 Wired Keyboard"
            productQuantity={1}
            productPrice={650}
          />
          <CartItem
            productImage={keyboardImage}
            productName="AK-900 Wired Keyboard"
            productQuantity={1}
            productPrice={650}
          />
          <CartItem
            productImage={keyboardImage}
            productName="AK-900 Wired Keyboard"
            productQuantity={1}
            productPrice={650}
          />
        </tbody>
      </table>
      <CartTotal />
    </div>
  );
};

export default page;
