import React from "react";
// @ts-ignore
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between align-center h-[80px] max-w-[1200px] mx-auto px-10 ">
      <div className="">
        <a href="/" className="flex flex-row">
          <img src={logo} alt="logo" className=" mr-1" />
          <p className="text-base font-PlusJakartaSansBold text-gray-600 ">
            Milton
          </p>
        </a>
      </div>

      <ul className="list-none lg:flex hidden justify-end gap-10 items-center font-PlusJakartaSansBold text-gray-500 text-base">
        <li className="justify-end hover:underline items-center transition duration-300 ease-in-out">
          <a href="#features">Features</a>
        </li>
        <li className="justify-end hover:underline items-center transition duration-300 ease-in-out">
          <a href="#testimonials">Testimonial</a>
        </li>
        <li className="justify-end hover:underline items-center transition duration-300 ease-in-out">
          <a href="#pricing">Pricing</a>
        </li>
        <li className="justify-end hover:underline items-center transition duration-300 ease-in-out">
          <a href="#faqs">FAQs</a>
        </li>
        <li className="justify-end hover:underline items-center transition duration-300 ease-in-out">
          <a href="#blog">Blog</a>
        </li>
      </ul>

      <div className="flex gap-2">
        <a href="#login">
          <button className="bg-slate-100 text-gray-600 rounded-xl py-2 px-5 font-PlusJakartaSansBold text-base">
            <p>Log in</p>
          </button>
        </a>
        <a href="#contact">
          <button className="bg-black text-[#FEFEFE] rounded-xl py-2 px-5 font-PlusJakartaSansBold text-base">
            <p>Get started</p>
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
