import React from 'react'
import {MapPin,Phone,Clock2} from "lucide-react"
import Image from 'next/image'
import Footer from '@/components/Footer'

const data = [
    {
        image : "/trophy.png",
        heading : "High Quality",
        text:"crafted from top materials"
    },
    {
        image : "/warranty.png",
        heading : "Warranty Protection",
        text:"Over 2 years"
    },
    {
        image : "/support.png",
        heading : "24 / 7 Support",
        text:"Dedicated support"
    },
]


export default function page() {
  return (
    <>
    <div>
        <div className='flex flex-col justify-center items-center gap-5 mt-10 '>
            <h1 className='text-4xl font-bold'>Get In Touch With Us</h1>
            <p className='w-[644px] text-slate-500'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>

        <div className='flex justify-center items-start gap-24'>
            <div className='w-[300px] flex pt-8   lg:pt-12 flex-col gap-10 '>

            <div className='flex items-start gap-5'>
                <div ><MapPin /></div>
                <div>
                <h1 className='text-2xl font-bold'>Address</h1>
                <p>236 5th SE Avenue, New York NY10000, United States</p>
                </div>
            </div>

            <div className='flex items-start gap-5'>
                <div><Phone/></div>
                <div>
                <h1 className='text-2xl font-bold'>Phone</h1>
                <p>Mobile: +(84) 546-6789</p>
                <p>Hotline: +(84) 456-6789</p>
                </div>
            </div>

            <div className='flex items-start gap-5'>
                <div><Clock2/></div>
                <div><h1 className='text-2xl font-bold'>Working Time</h1>
                <p>Monday-Friday: 9:00 - 22:00</p>
                <p>Saturday-Sunday: 9:00 - 21:00</p></div>
            </div>


            </div>

            {/* Form */}
                
            <div className="rounded-lg w-[500px]  p-8  lg:col-span-3 lg:p-12">
        <form action="#" className="space-y-10">


          <div className='flex flex-col gap-5'>
            <label  htmlFor="name">Your Name</label>
            <input
              className="w-full ps-5 border border-black py-5 rounded-lg  p-3 text-sm"
              placeholder="ABC"
              type="text"
              id="name"
            />
          </div>



          <div className='flex flex-col gap-5'>
            <label  htmlFor="name">Email Address</label>
            <input
              className="w-full ps-5 border border-black py-5 rounded-lg  p-3 text-sm"
              placeholder="ABC@def.com"
              type="text"
              id="name"
            />
          </div>



          
          <div className='flex flex-col gap-5'>
            <label  htmlFor="name">Subject</label>
            <input
              className="w-full ps-5 border border-black py-5 rounded-lg  p-3 text-sm"
              placeholder="This is an optional"
              type="text"
              id="name"
            />
          </div>


     

          <div className='flex flex-col gap-5'>
            <label  htmlFor="message">Message</label>
            <textarea
              className="w-full rounded-lg h-[150px] pt-5 px-5 border border-black p-3 text-sm"
              placeholder="Hi i'd like to ask about"
              id="message"
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-52 rounded-lg bg-[#049eaf] px-5 py-3 font-medium text-white "
            >
              Submit
            </button>
          </div>
        </form>    
            </div>



        </div>


          {/* Cards */}

          <div className='flex justify-center items-center'>
          <div className='bg-slate-100 w-[1000px] flex justify-center py-20 px-5 items-center gap-20 mb-24'>
            {data.map((data,index)=>(
                <div key={index} className='flex gap-3 items-start'>
                    <Image src={data.image} alt='image' width={80} height={80}/>
                    <div>
                        <h1 className='text-xl font-bold'>{data.heading}</h1>
                        <h1>{data.text}</h1>
                    </div>
                </div>
            ))}
            </div>
          </div>
    </div>

  <Footer/>
    </>
  )
}
