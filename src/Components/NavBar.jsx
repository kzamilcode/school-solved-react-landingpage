import { useState } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);
  return (
    <div className=" w-full h-[91px] mx-auto bg-light-white">
      <div className="md:max-w-[1080px] max-w-[680px] mx-auto w-full h-full flex items-center justify-between  px-5 lg:px-0">
        <div className="flex justify-between gap-x-14">
          <h3>BrandName</h3>

          <ul className="md:flex hidden gap-x-5 ">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="md:flex hidden gap-x-10 lg:mr-20 text-[14px] font-bold items-center z-20 relative">
          <a href="">
            <button>login</button>
          </a>
          <a href="">
            <button className="bg-parimary px-6 py-4 rounded-[5px]">
              JOIN US <AiOutlineArrowRight className="inline-block" />
            </button>
          </a>
        </div>
        <div className="md:hidden z-10 relative" onClick={handleClick}>
          {toggle ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>
      <div
        className={
          toggle ? "absolute z-10 bg-white p-4 w-full px-8 md:hidden" : "hidden"
        }
      >
        <ul className="flex gap-y-10 flex-col">
          <li className="hover:bg-gray-300  p-4">
            <a href="#">Home</a>
          </li>
          <li className="hover:bg-gray-300  p-4">
            <a href="#">Product</a>
          </li>
          <li className="hover:bg-gray-300  p-4">
            <a href="#">Pricing</a>
          </li>
          <li className="hover:bg-gray-300  p-4">
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="flex flex-col md:hidden gap-10 mt-6  p-4 text-[14px] font-bold e">
          <a href="">
            <button className="text-center w-full border border-solid p-4">
              login
            </button>
          </a>
          <a href="">
            <button className="bg-parimary px-6 py-4 rounded-[5px] w-full">
              JOIN US <AiOutlineArrowRight className="inline-block" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
