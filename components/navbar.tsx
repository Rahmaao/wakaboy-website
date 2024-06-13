"use client";

import { useState } from "react";
import Waitlistbutton from "./waitlist_btn";

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const [isMobile] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const handleNavItemClick = () => {
    if (isMobile) {
      setActive(false);
    }
  };

  const navbarItems = [
    { url: "/", text: "Home" },
    { url: "/about", text: "About Us" },
    { url: "/delivery_services", text: "Services" },
    { url: "/contact", text: "Contact Us" },
  ];

  return (
    <>
      <nav
        className={`flex items-center bg-[#001145] justify-around lg:justify-between flex-wrap w-full lg:px-10 h-24 lg:h-28 relative z-50`}
      >
        <a
          className="inline-flex items-center lg:pl-0 h-[90%] w-[50%] md:w-[30%] lg:w-[15%]"
          href="#"
        >
          <img
            src="/wakaboy.png"
            alt="Logo"
            className="object-cover md:w-[300px] md:h-[300px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px]"
          />
        </a>
        <button
          className="inline-flex p-3 hover:text-[#98914b] rounded lg:hidden text-[#FFEF54] ml-auto outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            active ? "block bg-[#001145]" : "hidden"
          } w-full pl-7 lg:pl-0 flex lg:flex flex-col lg:flex-row items-end lg:items-center lg:justify-around lg:w-[70%] lg:h-[90%] absolute top-full left-0 lg:static z-40`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center items-start lg:justify-between w-auto text-right pr-3 lg:w-[60%] xl:w-[50%] lg:h-auto">
            {navbarItems.map((item, index) => (
              <a
                key={index}
                href={item.url}
                onClick={handleNavItemClick}
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 text-[13px] md:text-[15px] text-[#FFFFFF] font-Poppins font-[400] items-center justify-center relative hover:text-[#FFEF54]"
                style={{ textDecoration: "none" }}
              >
                {item.text}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[45%] rounded-full h-[3px] bg-[#6554CF] transition-all duration-300 opacity-0"></span>
              </a>
            ))}
          </div>

          <div className="flex justify-end items-center h-14 w-[55%] lg:h-full lg:w-[20%] pr-3 lg:pl-3 lg:ml-[100px]">
            <Waitlistbutton />
          </div>
        </div>
      </nav>
    </>
  );
};
