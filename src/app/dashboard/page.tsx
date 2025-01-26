"use client"
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/lib/sanityClient";
import { MoveRight, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Spinner from "@/components/SpinnerTAIL";
import { getStaticPropsAllData, getStaticPropsCategories } from "../../lib/getPost";
const logos = [
  { image: "/l1.png" },
  { image: "/l2.png" },
  { image: "/l3.png" },
  { image: "/l4.png" },
  { image: "/l5.png" },
  { image: "/l6.png" },
  { image: "/l7.png" },
];

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
];

export default function Home() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  const router = useRouter()

  async function getCategory(){
   const res= await getStaticPropsCategories()
   setCategories(res?.props?.categories)
  //  console.log("this is console of getCategory",res?.props?.categories)
  }

  async function getData(){
    const res= await getStaticPropsAllData()
    if(res?.props?.categories){
      setProducts(res?.props?.categories)
      // console.log("this is console of getData",res?.props?.categories)
    }
   }
   useEffect(() => {
    getData()
    getCategory()
   },[])


  return (
    <>
      <div className="md:px-5 lg:px-[300px] flex justify-center items-center ">
        <div className="md:bg-[url('/herobg.png')] w-full rouded-lg mt-3 bg-cover bg-center md:h-screen">
          <div className="flex flex-col gap-2 md:gap-4 px-10 mt-10 md:mt-0 md:justify-center h-full items-start  ">
            <p className="text-slate-700">Welcome to chairy</p>
            <p className="font-bold text-[45px] md:text-[55px] md:w-[530px] h-[198px] tracking-tight leading-none">
              Best Furniture Collection for your interior.
            </p>
            <Button
            onClick={()=> router.push("/dashboard/allproducts")}
            className="bg-[#029FAE] text-white">
              {" "}
              shop Now <MoveRight />
            </Button>
          </div>




          <div className="flex items-center justify-center md:justify-normal flex-wrap  gap-5 mt-6">
            {logos.map((logo, index) => (
              <div key={index} className=" p-1">
                {" "}
                <Image src={logo.image} alt="image" width={100} height={100} />
              </div>
            ))}
          </div>

          {/* Featured Product */}
          <div className="font-semibold text-center md:text-start text-[32px] mt-10">Featured Product</div>
          <div className="flex items-center justify-center md:justify-normal flex-wrap gap-3 mt-6 mb-24">
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

                  <ShoppingCart className="hover:bg-[#029FAE] hover:text-white bg-slate-200 rounded-sm p-[2px]" />
                </div>
              </div>
            ))}
          </div>

          {/* Category*/}
          <div className="font-semibold text-center md:text-start text-[32px] mt-10">Top Categories</div>
          <div className="flex items-center justify-center md:justify-normal flex-wrap gap-2 mt-6 mb-24">
            {categories.length> 0 ? categories.map((product:any, index) => (
                   <div key={index} className="max-w-[298px] p-1 ">
                   {" "}
                   <img
                     src={urlFor(product?.image).url()} 
                     alt="image"
                   />
                   <div className="flex items-center justify-between bg-black text-white rounded-b-sm">
   
                     <div className="flex flex-col gap-1">
                     <div className="flex justify-between gap-2 items-center mt-2">
                     <h1 className="text-md hover:text-[#029FAE] font-semibold px-2 pb-1">{product?.title}</h1>
                     {/* <ShoppingCart className="hover:bg-[#029FAE] hover:text-white bg-slate-100 rounded-sm p-[0px]" /> */}
   
                     </div>
   
                       {/* <h1 className="text-sm hover:text-[#029FAE]">{product?.description?.slice(0,20)}</h1> */}
                       {/* <h1 className="font-bold">${product?.price}</h1> */}
   
                     </div>
   
                   </div>
                 </div>
            ))
            :
            <div className='absolute '>
            <Spinner />
            </div>
            }
          </div>





          {/* Explore NEW */}
        
    <div className="container px-5 md:px-0 py-2  lg:pt-24 relative">

    <div className="flex absolute left-[-180px] top-80">
  <h1 className="text-2xl rotate-90">Explore new and popular styles</h1>
</div>

    <div className="-m-1 flex flex-wrap md:-m-2">

    <div className="flex w-full md:w-1/2 flex-wrap">
      <div className="w-full p-1 md:p-2">
      <Image
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={"/en1.png"}
          width={100}
          height={100} />
      </div>
    
     
    </div>

    <div className="flex w-full md:w-1/2 flex-wrap">
      <div className="w-full md:w-1/2 p-1 md:p-2">
      <Image
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={"/en2.png"}
          width={100}
          height={100} />
      </div>

      <div className="w-full md:w-1/2 p-1 md:p-2">
      <Image
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={"/en3.png"}
          width={100}
          height={100} />
      </div>



      <div className="w-full md:w-1/2 p-1 md:p-2">
        <Image
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={"/en4.png"}
          width={100}
          height={100} />
      </div>
      <div className="w-full md:w-1/2 p-1 md:p-2">
        <Image
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={"/en5.png"}
          width={100}
          height={100} />
      </div>
    </div>





  </div>
    </div>
    
          {/* Our Product */}

         <div className="font-semibold text-[32px] mt-10 text-center">Our Product</div>
          <div className="flex items-center justify-center md:justify-normal flex-wrap gap-3 mt-6 mb-24">

            {products?.length > 0 ? products?.map((product : any, index) => (
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
            <div className='absolute '>
            <Spinner />
            </div>
            }

          </div>
    
    
    
    

    
    <Footer/>
    </div>
      </div>
    
    </>
  );
}
