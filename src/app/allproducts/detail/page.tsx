"use client"

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {ShoppingCart } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Footer from '@/components/Footer'


const product = [
    { image: "/op7.png", name: "Library Stool Chair", price: 20 },
    { image: "/op5.png", name: "Library Stool Chair", price: 20 },

    {
      image: "/op1.png",
      name: "Library Stool Chair",
      price: 20,
    },
    { image: "/op3.png", name: "Library Stool Chair", price: 20 },
    { image: "/op4.png", name: "Library Stool Chair", price: 20 },
]


export default function Page() {
    const router=useRouter()
  return (

    <>
    <section className='my-20'>
    <div className=" mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-[180px]">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-start md:gap-10">

      <div>
          <Image
            src={"/sofa.png"}
            className="rounded"
            alt="sofa"
            width={500}
            height={500}

          />
        </div>


        <div>
          <div className="max-w-lg md:max-w-none flex flex-col gap-5">
            <h2 className="text-3xl w-80 font-bold text-gray-900 sm:text-3xl lg:text-5xl">
            Library Stool Chair
            </h2>
            <div className='w-28 p-1 rounded-full px-1 text-center bg-[#049eaf]  text-white'>$20.00 USD</div>
  
            <p className="mt-5 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
              architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas
              sequi.
            </p>
            <Button
            onClick={()=> router.push("/bag")} className="bg-[#029FAE] w-28 px-2 text-white">
            <ShoppingCart />  Add To Cart 
                    </Button>
          </div>
        </div>
  
   
      </div>
    </div>
  </section>

        <div className='px-[300px]'>
        
        <div className='flex justify-between items-center mb-10'>
        <p className=" font-semibold text-[28px] mt-10">Featured Product</p>
        <p className=" font-semibold underline text-[16px] mt-10">View All</p>
        </div>

      <div className="flex items-center flex-wrap gap-4 mt-6 mb-24">
        {product.map((product, index) => (
          <div className=" p-1">
            {" "}
            <Image
              src={product.image}
              alt="image"
              width={163}
              height={164}
            />
              <div className="flex justify-between items-center mt-2">
                <h1 className="text-xs hover:text-[#029FAE]">{product.name}</h1>
                <h1 className="font-bold text-xs">${product.price}</h1>
              </div>
            </div>
        ))}
      </div>
        </div>


            <Footer/>
  </>
  )
}
