"use client";

import Image from "next/image";
import {
  OctagonAlert,
  ArrowDown,
  Check,
  ShoppingCart,
  Menu,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      {/*  Top Nav */}
      <div className="flex justify-center md:justify-between bg-[#272343] text-white items-center 
       md:px-5 lg:px-[300px] py-[14px]">
        <div className="hidden items-center gap-2 md:flex">
          {" "}
          <span>
            <Check size={16} />
          </span>
          <p>Free shipping on all orders over $50</p>
        </div>

        <div className="flex items-center gap-5">
          <span className="flex cursor-pointer items-center gap-2">
            Eng <ArrowDown className="text-sm" size={16} />
          </span>
          <span className="cursor-pointer" onClick={() => router.push("/faqs")}>
            Faqs
          </span>
          <span className="flex items-center cursor-pointer gap-2">
            <OctagonAlert size={16} /> Need Help
          </span>
        </div>
      </div>

      {/* Mid Nav */}
      <div className="flex justify-between bg-[#f0f2f3]  items-center px-5 lg:px-[300px] py-[20px]">
        <div className="flex items-center gap-3">
          {" "}
          <Image src={"/logo.png"} alt="logo" width={40} height={40} />
          <p className="text-3xl font-bold">Comforty</p>
        </div>

        <div className="flex items-center gap-4 rounded-lg p-2 bg-white">
          <ShoppingCart />
          <span>Cart</span>
          <span className="w-8 h-8 flex justify-center items-center bg-[#007580] text-white rounded-full">
            2
          </span>
        </div>
      </div>

      {/* Navbar */}
      <div className="flex justify-between shadow-lg  items-center px-5 lg:px-[300px] py-[14px]">
        <div className="hidden md:flex items-center gap-[32px] font-bold text-[14px] text-slate-500">
          <h1
            onClick={() => router.push("/")}
            className="hover:text-[#007580] cursor-pointer"
          >
            Home
          </h1>
          <h1 className="hover:text-[#007580] cursor-pointer">Shop</h1>
          <h1 className="hover:text-[#007580] cursor-pointer">Product</h1>
          <h1 className="hover:text-[#007580] cursor-pointer">Pages</h1>
          <h1
            onClick={() => router.push("/contactus")}
            className="hover:text-[#007580] cursor-pointer"
          >
            Contact us
          </h1>

          <h1
            onClick={() => router.push("/aboutus")}
            className="hover:text-[#007580] cursor-pointer"
          >
            About us
          </h1>
        </div>

        <div className="flex items-center gap-4 rounded-lg p-2 ">
          <div className="flex items-center gap-3">
            <p>Contact :</p>
            <span className="font-bold">(808) 555-0111</span>
          </div>
        </div>

        <div onClick={() => setIsOpen(!isOpen)} className="block md:hidden">
          <Menu />
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } bg-white shadow-xl transition-all duration-300 w-48 h-fit p-2 absolute top-52 right-1`}
        >
          <div className="flex flex-col items-center gap-[32px] font-bold text-[14px] text-slate-500">
            <h1
              onClick={() => router.push("/")}
              className="hover:text-[#007580] cursor-pointer"
            >
              Home
            </h1>
            <h1 className="hover:text-[#007580] cursor-pointer">Shop</h1>
            <h1 className="hover:text-[#007580] cursor-pointer">Product</h1>
            <h1 className="hover:text-[#007580] cursor-pointer">Pages</h1>
            <h1
              onClick={() => router.push("/contactus")}
              className="hover:text-[#007580] cursor-pointer"
            >
              Contact us
            </h1>

            <h1
              onClick={() => router.push("/aboutus")}
              className="hover:text-[#007580] cursor-pointer"
            >
              About us
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
