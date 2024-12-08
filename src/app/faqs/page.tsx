import Accordion from "@/components/Accordian";
import Footer from "@/components/Footer";

import React from 'react'

export default function page() {
  return (
    <div className="px-5 md:px-[300px] mb-24">
      
          <div className='flex flex-col justify-center items-center gap-5 mt-10 '>
            <h1 className='text-2xl md:text-4xl font-bold'>Questions Looks Here</h1>
            <p className=' w-[344px] md:w-[644px] text-sm text-slate-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
          </div>
 
     <div className="my-16">
      <Accordion/>
    </div>

    <Footer/>

    </div>
  )
}
