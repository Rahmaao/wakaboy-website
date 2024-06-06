"use client";

import Waitlistbutton2 from "./waitlist_btn2";

// import { Mail, MapPin, Smartphone } from "lucide-react";

export const Footer = () => {
  return (
    <>
      <div className="w-full h-[550px] md:h-[450px] flex flex-col justify-center items-center pt-5 md:pt-10 bg-[#FFEF54]">
        <div className="flex flex-col items-center md:items-center md:flex-row justify-evenly bg-[#FFEF54] w-full h-[480px] md:h-[80%]">
          <div className="w-[85%] md:w-[20%] lg:w-[20%] h-[100px] md:h-full">
          <a
          className="inline-flex items-center h-full md:h-[50%] w-[30%] md:w-full"
          href="#"
        >
          <img
            src="/wakaboy2.png"
            alt="Logo"
            className="object-cover w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]"
          />
        </a>

          </div>
          <div className="w-[85%] md:w-[35%] xl:w-[30%] h-[180px] md:h-full flex items-center">
            <div className="w-[40%] h-full md:h-[80%] flex flex-col">
              <p className="text-[#001145] font-semibold md:text-[20px] pb-2 md:pb-4">Company</p>
              <a className="text-[#001145] text-sm lg:text-[16px] pb-1 md:pb-2" href="">About Us</a>
              <a className="text-[#001145] text-sm lg:text-[16px] pb-1 md:pb-2" href="">Services</a>

              <a className="text-[#001145] text-sm lg:text-[16px] pb-1 md:pb-2" href="">Contact</a>

            </div>
            <div className=" w-[60%] h-full md:h-[80%] flex flex-col">
              <p className="text-[#001145] font-semibold md:text-[20px] pb-2 md:pb-4">Deliveries</p>
              <a className="text-[#001145] text-sm lg:text-[16px] pb-1 md:pb-2" href="">E-Commerce Support</a>
              <a className="text-[#001145] text-sm lg:text-[16px] pb-1 md:pb-2" href="">Supply Chain Management</a>

              <a className="text-[#001145] text-sm lg:text-[16px] pb-1 md:pb-2" href="">Multiple Deliveries</a>
              <a className="text-[#001145] text-sm lg:text-[16px] pb-1 md:pb-2" href="">Scheduled pickup</a>

              <a className="text-[#001145] text-sm lg:text-[16px] pb-1 md:pb-2" href="">Distribution</a>


            </div>


          </div>
          <div className="w-[85%] md:w-[30%] xl:w-[25%] h-[200px] md:h-full flex items-center">
          <div className="w-full h-full md:h-[80%]">
          <p className="text-[#001145] font-semibold md:text-[20px] pb-4">Stay Connected</p>
          <input type="text" className=" h-10 md:h-12 w-[85%] rounded-[8px] pl-5 text-xs md:text-sm mb-2 md:mb-4" placeholder="Input your email address" />
          <Waitlistbutton2/>
          <div className="w-[55%] md:w-[70%] lg:w-[60%] h-[20%] mt-4 flex justify-between items-center">
            <a href=""><img src="/fb.svg" className="w-[24px] lg:w-[32px] lg:h-[32px] h-[24px]" /></a>
            <a href=""><img src="/ig.svg" className="w-[24px] lg:w-[32px] lg:h-[32px] h-[24px]" /></a>

            <a href=""><img src="/in.svg" className="w-[24px] lg:w-[32px] lg:h-[32px] h-[24px]" /></a>

            <a href=""><img src="/x.svg" className="w-[24px] lg:w-[32px] lg:h-[32px] h-[24px]" /></a>


          </div>

          </div>


          </div>
          
        </div>
        <div className=" h-[70px] md:h-[20%] bg-[#001145] lg:pl-32 w-full flex justify-center lg:justify-start items-center">
          <div className="h-[50%] flex justify-center items-center">
            <p className="text-[10px] lg:text-xs text-center text-[#CECECE]">
              Copyright © [2024] • Wakaboy Express •
            </p>
          </div>
        </div>
      </div> 
    </>
  );
};
