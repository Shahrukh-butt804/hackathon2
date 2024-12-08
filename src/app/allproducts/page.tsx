"use client"

import React from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";


const featuredProduct = [
  {
    image: "/fp1.png",
    name: "Library Stool Chair",
    price: 20,
  },
  {
    image: "/fp2.png",
    name: "Library Stool Chair",
    price: 20,
  },
  { image: "/fp3.png", name: "Library Stool Chair", price: 20 },
  { image: "/fp4.png", name: "Library Stool Chair", price: 20 },
  { image: "/op5.png", name: "Library Stool Chair", price: 20 },
  { image: "/op6.png", name: "Library Stool Chair", price: 20 },
  { image: "/op7.png", name: "Library Stool Chair", price: 20 },
  { image: "/op8.png", name: "Library Stool Chair", price: 20 },
  {
    image: "/op1.png",
    name: "Library Stool Chair",
    price: 20,
  },
  {
    image: "/op2.png",
    name: "Library Stool Chair",
    price: 20,
  },
  { image: "/op3.png", name: "Library Stool Chair", price: 20 },
  { image: "/op4.png", name: "Library Stool Chair", price: 20 },

];

const product = [
    { image: "/op7.png", name: "Library Stool Chair", price: 20 },
    { image: "/op5.png", name: "Library Stool Chair", price: 20 },

    {
      image: "/op1.png",
      name: "Library Stool Chair",
      price: 20,
    },
    {
      image: "/op2.png",
      name: "Library Stool Chair",
      price: 20,
    },
    { image: "/op3.png", name: "Library Stool Chair", price: 20 },
    { image: "/op4.png", name: "Library Stool Chair", price: 20 },
]

export default function Page() {
    const router = useRouter()
  return (
      <>
    <div className="px-[300px] my-24 ">
      {/* Featured Product */}
      <div className="font-semibold text-[32px] mt-10">All products</div>
      <div className="flex items-center flex-wrap gap-3 mt-6 mb-24">
        {featuredProduct.map((product, index) => (
          <div key={index} className=" p-1">
            {" "}
            <Image
              src={product.image}
              alt="image"
              width={210}
              height={220}
            />
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-0">
                <h1 className="text-md hover:text-[#029FAE]">{product.name}</h1>
                <h1 className="font-bold">${product.price}</h1>
              </div>

              <ShoppingCart
              onClick={()=> router.push("/allproducts/detail")}
              className="hover:bg-[#029FAE] hover:text-white bg-slate-200 rounded-sm p-[2px]" />
            </div>
          </div>
        ))}
      </div>
      
      {/* Subscribe to Newsletter */}
      
      </div>

       <div className="flex flex-col gap-2 bg-slate-200 pt-16">
      <div className="font-semibold text-3xl text-center mt-10">Or subscribe to the newsletter</div>

        <div>
        <div className="flex flex-row justify-center gap-24 mt-4">
             <div>
             <input
                className="border-none w-80 bg-transparent focus:outline-none p-2"
                type="text"
                placeholder="Enter Your Email"
              />
               <hr className="h-[1.5px] bg-slate-500" />
             </div>
           <div>
           <input
                className="border-none w-24 bg-transparent focus:outline-none cursor-pointer hover:bg-slate-200 p-2"
                type="text"
                disabled
                
                placeholder="Submit"
              />
              <hr className="h-[1.5px] bg-slate-500" />
           </div>
            </div>
        </div>


        <div className="font-semibold text-3xl text-center mt-20">Follow products and discounts on Instagram</div>
        
        <div className="flex px-[300px] items-center flex-wrap gap-3 mt-6 mb-24">
        {product.map((product, index) => (
          <div key={index} className=" p-1">
            {" "}
            <Image
              src={product.image}
              alt="image"
              width={135}
              height={135}
            />
          </div>
        ))}
      </div>


        </div>
        
        <Footer/>
        </>
  );
}
