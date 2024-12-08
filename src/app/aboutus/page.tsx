"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const product = [
  {
    image: "/bd1.png",
    heading: "Next day as standard",
    text: "Order before 3pm and get your order the next day as standard",
  },
  {
    image: "/bd2.png",
    heading: "Made by true artisans",
    text: "Handmade crafted goods made with real passion and craftmanship",
  },
  {
    image: "/bd3.png",
    heading: "Unbeatable prices",
    text: "For our materials and quality you won’t find better prices anywhere",
  },
  {
    image: "/bd4.png",
    heading: "Recycled packaging",
    text: "We use 100% recycled to ensure our footprint is more manageable",
  },
  

];

export default function Page() {
  return (
    <>
      <section className="my-20">
        <div className=" mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-[180px]">

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-start md:gap-2"
          >
            <div className="w-full flex flex-col justify-between h-[454px] bg-[#007580] text-white">


              <div className="flex flex-col gap-5 p-5">
                <h2 className="text-3xl font-bold">About Us - Comforty</h2>
                <p>
                  At Comforty, we believe that the right chair can transform
                  your space and elevate your comfort. Specializing in ergonomic
                  design, premium materials, and modern aesthetics, we craft
                  chairs that seamlessly blend style with functionality.{" "}
                </p>
              </div>
              <div className="p-5">
                <Button className="bg-[#258992]">View Collection</Button>
              </div>
            </div>
            <div className="w-full h-[478px]">
              <Image
                src={"/en3.png"}
                className="rounded"
                alt="sofa"
                width={500}
                height={500}
              />
            </div>


          </div>
        </div>
      </section>

      <div className="md:px-[300px]">
        <p className=" font-semibold text-[24px] md:text-[28px] text-center md:mt-10">
          What makes our Brand Different
        </p>

        <div className="flex items-center justify-center md:justify-normal flex-wrap gap-7 text-[#16808b] mt-6 mb-24">
          {product.map((product, index) => (
            <div key={index} className="w-72 md:w-52 h-44 bg-gray-200  p-5">
              {" "}
              <Image src={product.image} alt="image" width={24} height={24} />
              <div className="flex flex-col gap-2 mt-2">
                <h1 className="text-md  ">{product.heading}</h1>
                <h1 className=" text-sm">{product.text}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>


          {/* Our Product */}

          <section className="">
            <h1 className="md:px-[300px] text-center md:text-start text-2xl font-bold">Our Popular Products </h1>
        <div className=" mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-[180px]">

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-start md:gap-2"
          >
            <div className="w-full flex  flex-col gap-3 md:h-[454px] ">

            <Image
                src={"/opp1.png"}
                className="rounded"
                alt="sofa"
                width={500}
                height={500}
              />
              <div className="flex flex-col gap-1 text-slate-500">
                <p>The Poplar suede sofa</p>
                <p>$99.00</p>
              </div>
         
            </div>

            
            <div className="w-full flex gap-2 h-[270px]">
           <div>
           <Image
                src={"/opp2.png"}
                className="rounded"
                alt="sofa"
                width={250}
                height={250}
              />
                  <div className="flex flex-col gap-1 mt-2 text-slate-500">
                <p>The Dandy chair</p>
                <p>$99.00</p>
              </div>
           </div>
              <div>
              <Image
                src={"/opp3.png"}
                className="rounded"
                alt="sofa"
                width={250}
                height={250}
              />
              <div className="flex flex-col gap-1 mt-2 text-slate-500">
                <p>The Dandy chair</p>
                <p>$99.00</p>
              </div>
              </div>
            </div>


          </div>
        </div>
      </section>


      <Footer />
    </>
  );
}
