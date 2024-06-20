import Waitlistbutton2 from "./waitlist_btn2";
import Image from 'next/image'; // Import Image from next/image

export const Footer = () => {
  return (
    <>
      <div className="w-full h-[550px] md:h-[450px] flex flex-col justify-center items-center pt-5 md:pt-10 bg-[#FFEF54]">
        <div className="flex flex-col items-center md:items-center md:flex-row justify-evenly bg-[#FFEF54] w-full h-[480px] md:h-[80%]">
          <div className="w-[85%] md:w-[20%] lg:w-[20%] h-[100px] md:h-full">
            <a className="inline-flex items-center h-full md:h-[50%] w-[30%] md:w-full" href="#">
              <Image
                src="/wakaboy2.png"
                alt="Company Logo"
                width={400}
                height={400}
                className="object-cover w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]"
              />
            </a>
          </div>
          <div className="w-[85%] md:w-[35%] xl:w-[30%] h-[180px] md:h-full flex items-center">
            <div className="w-[40%] h-full md:h-[80%] flex flex-col">
              <p className="text-[#001145] font-semibold md:text-[20px] pb-2 md:pb-4">Company</p>
              <a className="text-[#001145] text-sm lg:text-[16px] pb-1 md:pb-2" href="/about">About Us</a>
              <a className="text-[#001145] text-sm lg:text-[16px] pb-1 md:pb-2" href="/delivery_services">Services</a>
              <a className="text-[#001145] text-sm lg:text-[16px] pb-1 md:pb-2" href="/contact">Contact</a>
            </div>
            <div className="w-[60%] h-full md:h-[80%] flex flex-col">
              <p className="text-[#001145] font-semibold md:text-[20px] pb-2 md:pb-4">Deliveries</p>
              <a className="text-[#001145] text-sm lg:text-[16px] pb-1 md:pb-2" href="/delivery_services">E-Commerce Support</a>
              <a className="text-[#001145] text-sm lg:text-[16px] pb-1 md:pb-2" href="/delivery_services">Supply Chain Management</a>
              <a className="text-[#001145] text-sm lg:text-[16px] pb-1 md:pb-2" href="/delivery_services">Multiple Deliveries</a>
              <a className="text-[#001145] text-sm lg:text-[16px] pb-1 md:pb-2" href="/delivery_services">Scheduled pickup</a>
              <a className="text-[#001145] text-sm lg:text-[16px] pb-1 md:pb-2" href="/delivery_services">Distribution</a>
            </div>
          </div>
          <div className="w-[85%] md:w-[30%] xl:w-[25%] h-[200px] md:h-full flex items-center">
            <div className="w-full h-full md:h-[80%]">
              <p className="text-[#001145] font-semibold md:text-[20px] pb-4">Stay Connected</p>
              <input type="text" className="text-[#001145] h-10 md:h-12 w-[85%] rounded-[8px] pl-5 text-xs md:text-sm mb-2 md:mb-4" placeholder="Input your email address" />
              <Waitlistbutton2 />
              <div className="w-[55%] md:w-[70%] lg:w-[60%] h-[20%] mt-4 flex justify-between items-center">
                <a href=""><Image src="/fb.svg" alt="Facebook" width={32} height={32} className="w-[24px] lg:w-[32px] lg:h-[32px] h-[24px]" /></a>
                <a href=""><Image src="/ig.svg" alt="Instagram" width={32} height={32} className="w-[24px] lg:w-[32px] lg:h-[32px] h-[24px]" /></a>
                <a href=""><Image src="/in.svg" alt="LinkedIn" width={32} height={32} className="w-[24px] lg:w-[32px] lg:h-[32px] h-[24px]" /></a>
                <a href=""><Image src="/x.svg" alt="Other Social Media" width={32} height={32} className="w-[24px] lg:w-[32px] lg:h-[32px] h-[24px]" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[70px] md:h-[20%] bg-[#001145] lg:pl-32 w-full flex justify-center lg:justify-start items-center">
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

export default Footer;
