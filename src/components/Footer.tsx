import React from "react";
import { Input } from "./ui/input";
import Image from "next/image";
import { Button } from "./ui/button";
import { MoveRight} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-600 lg:ps-[300px] font-thin w-full absolute left-0 ">
      <div className="mx-auto max-w-screen-xl px-4 pb-5 pt-16 sm:px-6 lg:px-0">
        <div className="flex items-center">
          <div className="mt-8 grid grid-cols-2 gap-5 lg:mt-0 lg:grid-cols-6 lg:gap-y-16">

            <div className="col-span-2 sm:col-span-1 pr-2">
              <div className="flex items-center gap-3">
                {" "}
                <Image src={"/logo.png"} alt="logo" width={40} height={40} />
                <p className="text-2xl font-bold">Comforty</p>
              </div>

              <ul className="mt-6 mb-0  space-y-4  text-[13px]">
                <li>
                  Vivamus tristique odio sit amet velit semper, eu posuere
                  turpis interdum. Cras egestas purus{" "}
                </li>
                <li>
                  <div className="flex items-center gap-5">
                  <Image
                      src={"/facebook.png"}
                      alt="icon"
                      height={54}
                      width={54}
                    />
                    <Image
                      src={"/twitter.png"}
                      alt="icon"
                      height={54}
                      width={54}
                    />
                   
                    <Image
                      src={"/instagram.png"}
                      alt="icon"
                      height={54}
                      width={54}
                    />
                    <Image
                      src={"/pinterest.png"}
                      alt="icon"
                      height={24}
                      width={24}
                    />
                    <Image
                      src={"/youtube.png"}
                      alt="icon"
                      height={24}
                      width={24}
                    />
                  </div>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-bold text-[20px] ">Category</p>

              <ul className="mt-6 space-y-2 text-slate-800 text-[16px]">
                <li>
                  <a href="#" className=" transition hover:opacity-75">
                    Sofa
                  </a>
                </li>

                <li>
                  <a href="#" className=" transition hover:opacity-75">
                    Arm Chair
                  </a>
                </li>

                <li>
                  <a href="#" className=" transition hover:opacity-75">
                    Wing Chair
                  </a>
                </li>
                <li>
                  <a href="#" className=" transition hover:opacity-75">
                    Disk Chair
                  </a>
                </li>
                <li>
                  <a href="#" className=" transition hover:opacity-75">
                    Wooden Chair
                  </a>
                </li>
                <li>
                  <a href="#" className=" transition hover:opacity-75">
                    Park bench
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-bold  text-[20px] ">Support</p>

              <ul className="mt-6 space-y-2 text-slate-800 text-[16px]">
                <li>
                  <a href="#" className=" transition hover:opacity-75">
                    Help And Support
                  </a>
                </li>

                <li>
                  <a href="#" className=" transition hover:opacity-75">
                    Terms And Condtions
                  </a>
                </li>

                <li>
                  <a href="#" className=" transition hover:opacity-75">
                    Privacy And policy
                  </a>
                </li>
                <li>
                  <a href="#" className=" transition hover:opacity-75">
                    Help
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-bold text-[20px] ">NEWSLETTER </p>

              <ul className="mt-6 space-y-4 text-[16px]">
                <li>
                  <div className="flex items-center gap-2 relative w-96 ">
                    <Input
                      type="text"
                      className="py-4 w-44"
                      placeholder="Enter Your email"
                    />
                    <Button className="bg-[#029FAE] w-24 text-white">
                      Subscribe <MoveRight />
                    </Button>
                  </div>
                </li>

                <li className="w-[320px] text-[15px]">
                  <a href="#" className=" transition hover:opacity-75">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam tincidunt erat enim.
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8  ">
          <div className="md:pr-[300px] flex md:flex-row flex-col gap-2 md:gap-0  justify-between  items-center">
            <p className="text-md text-gray-500 opacity-50">
              &copy; Copyright Rimel 2022. All right reserved
            </p>
           <Image className="opacity-40" src={"/paypal.png"} alt="paypal" width={100} height={24}/>
          </div>
        </div>
      </div>
    </footer>
  );
}
