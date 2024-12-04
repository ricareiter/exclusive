"use client";
import keyboardImage from "@/public/images/AK-900 Wired Keyboard.jpg";
import CartItem from "@/components/CartItem";
import CartTotal from "@/components/CartTotal";
import { useSelector } from "react-redux";

const Cart = () => {
  const products = useSelector((state) => state.cart);

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
          {products.map((product) => (
            <CartItem
              key={product.productName}
              productImage={keyboardImage}
              productName={product.productName}
              productQuantity={product.productQuantity}
              productPrice={product.productPrice}
              productSubtotal={product.productSubtotal}
            />
          ))}
        </tbody>
      </table>
      <CartTotal />
    </div>
  );
};

export default Cart;
