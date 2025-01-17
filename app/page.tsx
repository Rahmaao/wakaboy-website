import Image from "next/image";
import ServicesCard from "../components/services";
import Waitlistbutton3 from "../components/waitlist_btn3";
import WaitlistForm from "../components/waitlist-form";

export default function Home() {
  return (
    <section
      id="home"
      className="bg-[#FFFFFF] w-full min-h-[100vh] overflow-x-hidden"
    >
      <div
        className="bg-[#001145] h-[90vh] md:h-[50vh] lg:h-[100vh] lg:pl-20 flex justify-center lg:justify-start items-center w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero.svg')" }}
      >
        <div className="flex text-[#FAFAFA] flex-col justify-between w-[90%] md:w-[80%] lg:w-[65%] xl:w-[50%] h-[35%] md:h-[50%] lg:h-[40%]">
          <p className="hidden md:block text-center lg:text-left text-[30px] md:text-[47px] md:leading-[56px] font-semibold">
            Right on Time, <br /> Every Time
          </p>
          <p className="block md:hidden text-center lg:text-left text-[30px] md:text-[47px] md:leading-[56px] font-semibold">
            Right on Time, <br /> Every Time
          </p>
          <p className="text-center lg:text-left text-[14px] md:text-[16px]">
            Sign up now for exclusive early access to our mobile app and special
            offers!
          </p>
          
          <WaitlistForm />
        </div>
      </div>
      <div className="bg-[#001145] h-[35vh] md:h-[20vh] lg:h-[30vh] w-full md:flex">
        <div className="w-full md:w-[50%] h-[50%] md:h-full flex justify-around items-center">
          <div className="w-[40%] md:w-[48%] lg:w-[40%] xl:w-[35%] h-[90%] md:h-[75%] flex flex-col justify-evenly items-center">
            <Image
              src="/clock.png"
              alt="Clock icon"
              width={40}
              height={40}
              style={{ width: "40px", height: "40px" }}
            />
            <p className="text-[15px] md:text-lg xl:text-2xl text-center">
              Prompt Customer <br /> Service
            </p>
          </div>
          <div className="w-[40%] md:w-[48%] lg:w-[40%] xl:w-[30%] h-[90%] md:h-[75%] flex flex-col justify-evenly items-center">
            <Image
              src="/star.png"
              alt="Star icon"
              width={40}
              height={40}
              style={{ width: "40px", height: "40px" }}
            />
            <p className="text-[15px] md:text-lg xl:text-2xl text-center">
              Timely Delivery
              <br />
              Track Record
            </p>
          </div>
        </div>
        <div className="w-full md:w-[50%] h-[50%] md:h-full flex justify-around items-center">
          <div className="w-[40%] md:w-[48%] lg:w-[40%] xl:w-[30%] h-[90%] md:h-[75%] flex flex-col justify-evenly items-center">
            <Image
              src="/truck-fast.png"
              alt="Truck icon"
              width={40}
              height={40}
            />
            <p className="text-[15px] md:text-lg xl:text-2xl text-center">
              Amazing Delivery <br /> Solutions
            </p>
          </div>
          <div className="w-[40%] md:w-[48%] lg:w-[40%] xl:w-[30%] h-[90%] md:h-[75%] flex flex-col justify-evenly items-center">
            <Image src="/frame.png" alt="Frame icon" width={40} height={40} />
            <p className="text-[15px] md:text-lg xl:text-2xl text-center">
              Professionally <br /> Trained Drivers
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#FFFFFF] min-h-[80vh] md:min-h-[70vh] lg:min-h-[120vh] w-full flex flex-col justify-around my-10">
        <div className="h-[15%] md:h-[10%] w-full flex justify-center items-center">
          <p className="text-center lg:text-left text-[30px] text-[#001145] md:text-[47px] md:leading-[56px] font-semibold">
            Seamless Delivery Services
          </p>
        </div>
        <div className="bg-[#FFFFFF] h-[80%] w-full my-5 mx-2 lg:mx-5">
          <div className="w-full grid grid-cols-2 lg:grid-cols-2 gap-4 xl:gap-8">
            <ServicesCard
              headertext="Same-Day Delivery"
              text="Need it fast? Count on us for same-day delivery within Lagos."
              img="/clock2.png"
            />
            <ServicesCard
              headertext="Business Solutions"
              text="Logistics solutions for businesses of all sizes"
              img="/shop.png"
            />

            <ServicesCard
              headertext="Scheduled Pickup"
              text="Plan your deliveries according to your timetable"
              img="/calendar.png"
            />
            <ServicesCard
              headertext="Custom Solutions"
              text="Have unique delivery needs?"
              img="/amico2.png"
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#001145] via-[#87874D] to-[#FFEF54] h-[80vh] md:h-[40vh] lg:h-[75vh] xl:h-[100vh] w-full flex flex-col md:flex-row">
        <div className="w-full h-[50%] md:w-[50%] md:h-full flex flex-col justify-center items-center">
          <div className="w-[90%] lg:w-[80%] xl:w-[85%] h-[65%] md:h-[60%] lg:h-[40%] flex flex-col justify-between">
            <p className="text-center md:text-left text-[30px] md:text-[35px] xl:text-[50px] xl:leading-[56px] font-semibold">
            Early Access to Our Mobile App
            </p>
            <WaitlistForm />
          </div>
        </div>
        <div className="w-full h-[50%] md:w-[50%] md:h-full flex justify-center items-center">
          <div className="flex justify-between w-[255px] md:w-[325px] lg:w-[485px] xl:w-[585px] h-[255px] md:h-[325px] lg:h-[485px] xl:h-[585px]">
            <div>
              <Image
                src="/Mockup.png"
                alt="Truck icon"
                width={254}
                height={400}
              />
            </div>
            <div className="flex items-end">
              <Image
                src="/Mockup2.png"
                alt="Truck icon"
                width={254}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
