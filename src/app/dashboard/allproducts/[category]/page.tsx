"use client";

import Footer from "@/components/Footer";
import { urlFor } from "@/lib/sanityClient";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Spinner from "../../../../components/SpinnerTAIL";
import { getStaticPropsAllData } from "@/lib/getPost";
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
];

export default function Page({ params }: { params: { category?: string } }) {
  let { category } = params;
  category =category?.replace("%20"," ")

  const router = useRouter();
  const [products, setProducts] = useState([]);

  async function getData() {
    const res = await getStaticPropsAllData(category);
    if (res?.props?.categories) {
      setProducts(res?.props?.categories);
      // console.log("this is console of getData",res?.props?.categories)
    }
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="px-10 lg:px-[300px] my-24 ">
        {/* All products */}
        <div className="font-semibold text-center md:text-start text-[32px] mt-10">
          {category !== "null" ? category : "All Products"}
        </div>

        <div className="flex items-center justify-center md:justify-normal flex-wrap gap-3 mt-6 mb-24">
          {products.length > 0 ?
            products.map((product: any, index) => (
           <div key={index} className="max-w-[298px] p-1 ">
              {" "}
              <img
                src={urlFor(product?.image).url()} 
                alt="image"
              />
              <div className="flex items-center justify-between">

                <div className="flex flex-col gap-1">
                <div className="flex justify-between gap-2 items-center mt-2">
                <h1 className="text-md hover:text-[#029FAE] font-semibold">{product?.title}</h1>
                <ShoppingCart
                onClick={() =>  router.push(`/dashboard/allproducts/detail?productId=${String(product._id)}`)}
                className="hover:bg-[#029FAE] hover:text-white bg-slate-100 rounded-sm p-[0px]" />

                </div>

                  <h1 className="text-sm hover:text-[#029FAE]">{product?.description?.slice(0,50)}</h1>
                  <h1 className="font-bold">${product?.price}</h1>

                </div>

              </div>
            </div>


            ))
          :
          <div className=''>
          <Spinner />
          </div>
          
          }
        </div>

        {/* Subscribe to Newsletter */}
      </div>

      <div className="flex flex-col gap-2 px-4 md:px-0 bg-slate-200 pt-16">
        <div className="font-semibold text-3xl text-center mt-10">
          Or subscribe to the newsletter
        </div>

        <div>
          <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-24 mt-4">
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
              <hr className="hidden md:block h-[1.5px] bg-slate-500" />
            </div>
          </div>
        </div>

        <div className="font-semibold text-3xl text-center mt-20">
          Follow products and discounts on Instagram
        </div>

        <div className="flex px-10 lg:px-[300px] items-center justify-center md:justify-normal flex-wrap gap-3 mt-6 mb-24">
          {product.map((product, index) => (
            <div key={index} className=" p-1">
              {" "}
              <Image src={product.image} alt="image" width={135} height={135} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
