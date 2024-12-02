import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="container mx-auto mt-6 mb-8">
      <div className="flex justify-between items-center bg-gray-300">
        <div>
          <h3 className="font-bold text-2xl">Exclusive</h3>
        </div>
        <div>
          <ul className="flex space-x-12">
            <li className="font-semibold hover: cursor-pointer hover:underline underline-offset-4">
              Home
            </li>
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
        <div>
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="px-4 py-2 bg-gray-100 placeholder:text-sm rounded-[6px]"
            />
            <CiSearch className="absolute right-1 w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
