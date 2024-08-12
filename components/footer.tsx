import WaitlistForm2 from "./waitlist-form2";
import Waitlistbutton2 from "./waitlist_btn2";
import Image from "next/image"; // Import Image from next/image

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
            <div className="w-[32%] md:w-[35%] h-full md:h-[80%] flex flex-col">
              <p className="text-[#001145] font-semibold md:text-[20px] pb-2 md:pb-4">
                Quick Links
              </p>
              <a
                className="text-[#001145] text-sm lg:text-[16px] pb-1 md:pb-2"
                href="/about"
              >
                About Us
              </a>
              <a
                className="text-[#001145] text-sm lg:text-[16px] pb-1 md:pb-2"
                href="/delivery_services"
              >
                Services
              </a>
              <a
                className="text-[#001145] text-sm lg:text-[16px] pb-1 md:pb-2"
                href="/contact"
              >
                Contact
              </a>
            </div>
            <div className="w-[68%] md:w-[65%] h-full md:h-[80%] flex flex-col">
              <p className="text-[#001145] font-semibold md:text-[20px] pb-2 md:pb-4">
                Contact Us
              </p>
              <a
                className="text-[#001145] text-sm lg:text-[16px] mb-2 pb-1 md:pb-2 flex items-center"
                href="https://wa.me/2347088124733"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 text-[#25D366]"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.002 2.01c-5.52 0-10 4.483-10 10.002 0 1.767.467 3.465 1.347 4.983l-1.466 5.35 5.531-1.451c1.488.827 3.152 1.256 4.857 1.256 5.52 0 10-4.483 10-10.002 0-5.521-4.48-10.001-10-10.001zm4.837 14.382c-.25.699-1.212 1.25-1.984 1.381-.53.085-1.179.152-3.453-.727-2.898-1.2-4.766-4.146-4.917-4.337-.154-.191-1.178-1.573-1.178-3.001 0-1.429.75-2.134 1.018-2.424.268-.29.589-.365.79-.365s.396.003.567.009c.185.007.433-.069.68.524.25.605.852 2.084.927 2.235.073.15.121.326.023.526-.097.2-.146.325-.292.496-.145.172-.307.38-.437.511-.147.148-.299.309-.128.607.17.298.756 1.245 1.626 2.018 1.119 1.014 2.06 1.331 2.36 1.478.298.148.473.13.646-.085.173-.213.742-.866.941-1.164.195-.293.396-.246.67-.148.273.099 1.719.81 2.013.956.298.146.496.22.57.342.075.124.075.727-.176 1.425z" />
                </svg>
                +2347088124733
              </a>
              <a
                className="text-[#001145] text-sm lg:text-[16px] mb-2 pb-1 md:pb-2 flex items-center"
                href="mailto:wakaboyexpress@gmail.com"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                wakaboyexpress@gmail.com
              </a>
              {/* <a
                className="text-[#001145] text-sm lg:text-[16px] mb-2 pb-1 md:pb-2 flex items-center"
                href="mailto:wakaboyexpress@gmail.com"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                wakaboyexpress@gmail.com
              </a> */}
              <a
                className="text-[#001145] text-sm lg:text-[16px] pb-1 md:pb-2 flex "
                href="https://maps.google.com/?q=26+Olaniyi+street,+off+pedro+road,+Ladi-lak.+Bariga"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-9 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                26 Olaniyi street, off pedro road, Ladi-lak. Bariga.
              </a>
            </div>
          </div>
          <div className="w-[85%] md:w-[30%] xl:w-[25%] h-[200px] md:h-full flex items-center">
            <div className="w-full h-full md:h-[80%]">
              <p className="text-[#001145] font-semibold md:text-[20px] pb-4">
                Newsletter Signup
              </p>
              <WaitlistForm2 />
              <div className="w-[55%] md:w-[70%] lg:w-[60%] h-[20%] mt-4 flex justify-between items-center">
                <a href="">
                  <Image
                    src="/fb.svg"
                    alt="Facebook"
                    width={32}
                    height={32}
                    className="w-[24px] lg:w-[32px] lg:h-[32px] h-[24px]"
                  />
                </a>
                <a href="">
                  <Image
                    src="/ig.svg"
                    alt="Instagram"
                    width={32}
                    height={32}
                    className="w-[24px] lg:w-[32px] lg:h-[32px] h-[24px]"
                  />
                </a>
                <a href="">
                  <Image
                    src="/in.svg"
                    alt="LinkedIn"
                    width={32}
                    height={32}
                    className="w-[24px] lg:w-[32px] lg:h-[32px] h-[24px]"
                  />
                </a>
                <a href="">
                  <Image
                    src="/x.svg"
                    alt="Other Social Media"
                    width={32}
                    height={32}
                    className="w-[24px] lg:w-[32px] lg:h-[32px] h-[24px]"
                  />
                </a>
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
