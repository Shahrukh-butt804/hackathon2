"use client";

import React from "react";
import { Trash2, Heart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

export default function Page() {
  const router = useRouter();
  return (
    <>
    <section className="px-5 md:px-10 lg:px-[300px] mb-2 md:mb-24">
      <div className="mx-auto max-w-screen-xl  py-8 ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 md:items-center md:gap-10">
          <div className="md:col-span-3 ">
            <h1 className="my-5 text-xl font-semibold">Bag</h1>

            <div className="flex gap-5 items-start">
              <div>
                <Image src={"/fp3.png"} alt="pic" width={120} height={150} />
              </div>
              <div className="flex justify-between w-full p-1 ">
                <div className="flex flex-col gap-2 text-slate-500 text-sm">
                  <p className="text-black text-lg">Library Stool Chair</p>
                  <p>Ashen Slate/Cobalt Bliss</p>
                  <div className="flex justify-between items-center">
                    <p>size L</p>
                    <p>Quantity 1</p>
                  </div>

                  <div className="flex justify-start gap-2 items-center">
                    <Heart size={20} />
                    <Trash2 size={20} />
                  </div>
                </div>
                <div className="text-black">MRP: $99</div>
              </div>
            </div>

            <div className="flex gap-5 mt-5 items-start">
              <div>
                <Image src={"/op5.png"} alt="pic" width={120} height={150} />
              </div>
              <div className="flex justify-between w-full p-1 ">
                <div className="flex flex-col gap-2 text-slate-500 text-sm">
                  <p className="text-black text-lg">Library Stool Chair</p>
                  <p>Ashen Slate/Cobalt Bliss</p>
                  <div className="flex justify-between items-center">
                    <p>size L</p>
                    <p>Quantity 1</p>
                  </div>

                  <div className="flex justify-start gap-2 items-center">
                    <Heart size={20} />
                    <Trash2 size={20} />
                  </div>
                </div>
                <div className="text-black">MRP: $99</div>
              </div>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-xl  text-gray-900 sm:text-2xl">
                Summary
              </h2>

              <div className="flex text-[12px] justify-between items-center mt-5">
                <p>Subtotal</p>
                <p>$198.00</p>
              </div>
              <div className="flex text-[12px] justify-between items-center mt-3">
                <p>Estimated Delivery & Handling</p>
                <p>Free</p>
              </div>
              <hr className="h-[1.5px] bg-slate-500" />
              <div className="flex text-[12px] justify-between items-center mt-5">
                <p>Total</p>
                <p>$198.00</p>
              </div>
              <hr className="h-[1.5px] bg-slate-500" />

             <div className="text-center md:text-start lg:text-center">
             <Button
                onClick={() => router.push("/bag")}
                className="bg-[#029FAE] w-52 p-5 mt-5  rounded-full text-white"
              >
                Member Checkout
              </Button>
             </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}
