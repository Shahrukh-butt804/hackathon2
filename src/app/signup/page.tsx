"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import axios from "axios";
// import {baseUrl} from "../../constants/constants"

export default function Home() {
  const router = useRouter()
  const [user,setUser] = useState({
    username : "",
    email : "",
    password :""
  })

  function handleChange(e : any){
      setUser( prev => {
        return {
          ...prev,
          [e.target.name]:e.target.value
        }
      })
  }

//  async function registerUser(){
//     // console.log(user)
//    try {
//    const res= await axios.post(`${baseUrl}/user/register`,user)
//    if (res.status == 200) {
//       console.log(res)
//    }else{
//      console.log(res.data.message)
//    }
//    } catch (error) {
//       console.log("Error while sending Request")
//    }    
//   }

  return (
    <section>
      <div className=" max-w-screen-xl px-3 py-8 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-0">
          <div className="md:col-span-3">
          <img src={"./op2.png"} 
            width={800}
            height={800}
            className="rounded" alt="" />
          </div>

          <div className="flex flex-col gap-4 max-w-lg md:max-w-none">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl flex  font-semibold text-gray-900 sm:text-3xl">
                Create an account
              </h2>
              <h6 className="text-sm font-thin">Enter your details below</h6>
            </div>

            <div className="flex flex-col gap-4 mt-4">

            <input
                onChange={handleChange}
                className="border-none focus:outline-none"
                type="text"
                placeholder="Enter Your Name"
                name="username"
              />
              <hr className="h-[1.5px] bg-slate-500" />

              <input
                onChange={handleChange}
                className="border-none focus:outline-none"
                type="text"
                placeholder="Enter Your Email"
                name="email"
              />
              <hr className="h-[1.5px] bg-slate-500" />
              <input
                onChange={handleChange}
                className="border-none focus:outline-none"
                type="password"
                placeholder="Enter Your password"
                name="password"
              />
              <hr className="h-[1.5px] bg-slate-500" />
            </div>




            <Button
            // onClick={registerUser}
            className="bg-[#db4444] text-white w-full h-[56px]">Create Account</Button>
            <div className="flex items-center justify-center gap-3 w-full h-[56px] hover:bg-slate-100 rounded-md border-[1px] border-black">
            <Image src={"/google.png"} alt="google" width={24} height={24}/>
            sign up with Google

            </div>

          <p className="text-center">Already have an account? <Link className="font-semibold ml-2 underline " href={"/"}> log in</Link></p>
                 

          </div>
        </div>
      </div>
    </section>
  );
}
