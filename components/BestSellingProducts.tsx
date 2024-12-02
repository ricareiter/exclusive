import ProductCard from "./ProductCard";
import keyboardImage from "@/public/images/AK-900 Wired Keyboard.jpg";

const BestSellingProducts = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between mb-10">
        <h3 className="font-bold text-3xl">Best Selling Products</h3>
        <button className="bg-red-500 text-white px-8 py-2 rounded-md border border-red-500 hover:text-red-500 hover:bg-white hover:cursor-pointer transition-all duration-200">
          View All
        </button>
      </div>
      <div className="flex items-center justify-between">
        <ProductCard
          productName="AK-900 Wired Keyboard"
          productPrice={260}
          productImage={keyboardImage}
          productReviews={65}
        />
        <ProductCard
          productName="AK-900 Wired Keyboard"
          productPrice={260}
          productImage={keyboardImage}
          productReviews={65}
        />
        <ProductCard
          productName="AK-900 Wired Keyboard"
          productPrice={260}
          productImage={keyboardImage}
          productReviews={65}
        />
        <ProductCard
          productName="AK-900 Wired Keyboard"
          productPrice={260}
          productImage={keyboardImage}
          productReviews={65}
        />
        <ProductCard
          productName="AK-900 Wired Keyboard"
          productPrice={260}
          productImage={keyboardImage}
          productReviews={65}
        />
      </div>
    </div>
  );
};

export default BestSellingProducts;
