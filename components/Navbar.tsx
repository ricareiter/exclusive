import Link from "next/link";
import { CiSearch, CiHeart, CiUser, CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="container mx-auto mt-6 mb-8">
      <div className="flex justify-between items-center">
        <Link href="/">
          <div>
            <h3 className="font-bold text-2xl">Exclusive</h3>
          </div>
        </Link>
        <div>
          <ul className="flex space-x-12">
            <Link href="/">
              <li className="font-semibold hover: cursor-pointer hover:underline underline-offset-4">
                Home
              </li>
            </Link>
            <li className="font-semibold hover: cursor-pointer hover:underline underline-offset-4">
              Contact
            </li>
            <li className="font-semibold hover: cursor-pointer hover:underline underline-offset-4">
              About
            </li>
            <li className="font-semibold hover: cursor-pointer hover:underline underline-offset-4">
              Sign Up
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <div className="relative flex items-center w-full">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full pr-11 pl-4 py-2 bg-gray-100 placeholder:text-sm rounded-[6px] outline-none"
            />
            <button className="absolute right-2">
              <CiSearch className="w-6 h-6" />
            </button>
          </div>
          <div className="flex items-center space-x-4 ml-6">
            <CiHeart className="w-6 h-6 hover:cursor-pointer" />
            <Link href="/cart">
              <CiShoppingCart className="w-6 h-6 hover:cursor-pointer" />
            </Link>
            <CiUser className="w-6 h-6 hover:cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
