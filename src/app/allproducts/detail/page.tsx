"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {ShoppingCart } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import Footer from '@/components/Footer'
import { getProductById } from '@/lib/getPost'
import { urlFor } from '@/lib/sanityClient'
import Spinner from '@/components/spinner'


const FeaturedProduct = [
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
    const searchParams = useSearchParams();
    const productId = searchParams.get('productId');
    const [product,setProducts] = useState<any>("")

   useEffect(() => {
    if (productId) {
      getProductById(productId)
      .then(res => {
        setProducts(res)
        console.log(res)
      });

    }
    }, [productId]) 


  return (

    <>
    <section className='my-2 md:my-20'>
    <div className=" mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-[180px]">
      {product ? (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-start md:gap-10">

      <div>
           <img
                src={urlFor(product?.image)?.url()} 
                alt="image"
                className='w-full'
              />
        </div>


        <div>
          <div className="max-w-lg md:max-w-none flex flex-col gap-5">
            <h2 className="text-3xl w-80 font-bold text-gray-900 sm:text-3xl lg:text-5xl">
            {product?.title}
            </h2>
            <div className='w-28 p-1 rounded-full px-1 text-center bg-[#049eaf]  text-white'>$ {product?.price} USD</div>
  
            <p className="mt-5 text-gray-700">
              {product?.description}
            </p>
            <Button
            onClick={()=> router.push("/bag")} className="bg-[#029FAE] w-28 px-2 text-white">
            <ShoppingCart />  Add To Cart 
                    </Button>
          </div>
        </div>
  
   
      </div>
          )
          :
          <div className='absolute top-0 text-center'>
          <Spinner />
          </div>
          }

    </div>
  </section>

        <div className='md:px-10 lg:px-[300px]'>
        
        <div className='flex justify-center gap-12 md:justify-between items-center mb-10'>
        <p className=" font-semibold text-[28px] mt-10">Featured Product</p>
        <p className=" font-semibold underline text-[16px] mt-10">View All</p>
        </div>

      <div className="flex items-center justify-center md:justify-normal flex-wrap gap-4 mt-6 mb-24">
        {FeaturedProduct.map((product, index) => (
          <div key={index} className=" p-1">
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
