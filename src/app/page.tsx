"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MoveRight, ShoppingCart } from "lucide-react";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

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

const topCategories = [
  { image: "/tc1.png" },
  { image: "/tc2.png" },
  { image: "/tc3.png" },
];

const ourProduct = [
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
  { image: "/op5.png", name: "Library Stool Chair", price: 20 },
  { image: "/op6.png", name: "Library Stool Chair", price: 20 },
  { image: "/op7.png", name: "Library Stool Chair", price: 20 },
  { image: "/op8.png", name: "Library Stool Chair", price: 20 },
];

export default function Home() {

  const router = useRouter()

  return (
    <>
      <div className="px-[300px] flex justify-center items-center ">
        <div className="bg-[url('/herobg.png')] w-full rouded-lg mt-3 bg-cover bg-center h-screen">
          <div className="flex flex-col gap-4 px-10 justify-center h-full items-start  ">
            <p className="text-slate-700">Welcome to chairy</p>
            <p className="font-bold text-[55px] w-[530px] h-[198px] tracking-tight leading-none">
              Best Furniture Collection for your interior.
            </p>
            <Button
            onClick={()=> router.push("/allproducts")}
            className="bg-[#029FAE] text-white">
              {" "}
              shop Now <MoveRight />
            </Button>
          </div>

          <div className="flex items-center flex-wrap gap-5 mt-6">
            {logos.map((logo, index) => (
              <div className=" p-1">
                {" "}
                <Image src={logo.image} alt="image" width={100} height={100} />
              </div>
            ))}
          </div>

          {/* Featured Product */}
          <div className="font-semibold text-[32px] mt-10">Featured Product</div>
          <div className="flex items-center flex-wrap gap-3 mt-6 mb-24">
            {featuredProduct.map((product, index) => (
              <div className=" p-1">
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
          <div className="font-semibold text-[32px] mt-10">Top Categories</div>
          <div className="flex items-center flex-wrap gap-4 mt-6 mb-24">
            {topCategories.map((product, index) => (
              <div className=" p-1">
                {" "}
                <Image
                key={index}
                  src={product.image}
                  alt="image"
                  width={280}
                  height={280}
                />
              </div>
            ))}
          </div>





          {/* Explore NEW */}
        
    <div className="container  py-2  lg:pt-24 relative">

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

               {/* Featured Product */}
               <div className="font-semibold text-[32px] mt-10 text-center">Featured Product</div>
          <div className="flex items-center flex-wrap gap-3 mt-6 mb-24">
            {ourProduct.map((product, index) => (
              <div className=" p-1">
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
    
    
    
    

    
    <Footer/>
    </div>
      </div>
    
    </>
  );
}
