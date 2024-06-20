import Image from 'next/image';
import ServicesCard from '../components/services';
import Waitlistbutton3 from '../components/waitlist_btn3';

export default function Home() {
  return (
    <section id="home" className="bg-[#FFFFFF] w-full min-h-[100vh]">
      <div className="bg-[#001145] h-[90vh] md:h-[50vh] lg:h-[100vh] lg:pl-20 flex justify-center lg:justify-start items-center w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero.svg')" }}>
        <div className="flex flex-col justify-between bg-purple-400 w-[90%] md:w-[80%] lg:w-[65%] xl:w-[45%] h-[45%] md:h-[60%] lg:h-[45%]">
          <p className="text-center bg-red-400 lg:text-left text-[30px] md:text-[47px] md:leading-[56px] font-semibold">
            Streamline Your Logistics with Wakaboy Express
          </p>
          <p className="text-center lg:text-left text-[14px] md:text-[16px]">
            We specialize in providing efficient solutions for all your supply chain needs. From transportation to warehousing, we&apos;ve got you covered.
          </p>
          <div className="w-full h-[50px] md:h-[64px] flex">
            <input
              type="text"
              placeholder="Input your email address"
              className="text-[#001145] rounded-l-[8px] pl-5 text-[11px] md:text-[15px] w-[70%] h-full"
            />
            <Waitlistbutton3 />
          </div>
        </div>
      </div>
      <div className="bg-[#001145] h-[35vh] md:h-[20vh] lg:h-[30vh] w-full md:flex">
        <div className="w-full md:w-[50%] h-[50%] md:h-full flex justify-around items-center">
          <div className="w-[40%] md:w-[48%] lg:w-[40%] xl:w-[30%] h-[90%] md:h-[75%] flex flex-col justify-evenly items-center">
            <Image src="/clock.png" alt="Clock icon" width={40} height={40} />
            <p className="text-[15px] md:text-lg xl:text-2xl text-center">
              24/7 Customer <br /> Service
            </p>
          </div>
          <div className="w-[40%] md:w-[48%] lg:w-[40%] xl:w-[30%] h-[90%] md:h-[75%] flex flex-col justify-evenly items-center">
            <Image src="/star.png" alt="Star icon" width={40} height={40} />
            <p className="text-[15px] md:text-lg xl:text-2xl text-center">
              99% On-Time <br /> Delivery Rate
            </p>
          </div>
        </div>
        <div className="w-full md:w-[50%] h-[50%] md:h-full flex justify-around items-center">
          <div className="w-[40%] md:w-[48%] lg:w-[40%] xl:w-[30%] h-[90%] md:h-[75%] flex flex-col justify-evenly items-center">
            <Image src="/truck-fast.png" alt="Truck icon" width={40} height={40} />
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
      <div className="bg-[#FFFFFF] min-h-[90vh] md:min-h-[70vh] lg:min-h-[120vh] w-full flex flex-col justify-around my-10">
        <div className="h-[15%] md:h-[10%] w-full flex justify-center items-center">
          <p className="text-center lg:text-left text-[30px] text-[#001145] md:text-[47px] md:leading-[56px] font-semibold">
            Seamless Delivery Services
          </p>
        </div>
        <div className="bg-[#FFFFFF] h-[80%] w-full">
          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:gap-4 xl:pl-8">
            <div className="p-4">
              <ServicesCard
                headertext="E-Commerce Support"
                text="We provide support to E-commerce businesses"
                img="/shop.png"
              />
            </div>
            <div className="p-4">
              <ServicesCard
                headertext="Express Delivery"
                text="Need your package delivered swiftly? We got you"
                img="/clock2.png"
              />
            </div>
            <div className="p-4">
              <ServicesCard
                headertext="Supply Chain"
                text="Want to deliver to more than one person? We can do that"
                img="/truck-time.png"
              />
            </div>
            <div className="p-4">
              <ServicesCard
                headertext="Scheduled Pickup"
                text="You can pick up or send an item at a specific time"
                img="/calendar.png"
              />
            </div>
            <div className="p-4">
              <ServicesCard
                headertext="Distribution"
                text="Efficient distribution of products to various locations"
                img="/truck-fast2.png"
              />
            </div>
            <div className="p-4">
              <ServicesCard
                headertext="Last Mile Delivery"
                text="Efficient distribution of products to various locations"
                img="/amico2.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#001145] via-[#87874D] to-[#FFEF54] h-[80vh] md:h-[40vh] lg:h-[75vh] xl:h-[100vh] w-full flex flex-col md:flex-row">
        <div className="w-full h-[50%] md:w-[50%] md:h-full flex flex-col justify-center items-center">
          <div className="w-[90%] lg:w-[80%] xl:w-[85%] h-[65%] md:h-[60%] lg:h-[40%] flex flex-col justify-between">
            <p className="text-center md:text-left text-[30px] md:text-[35px] xl:text-[50px] xl:leading-[56px] font-semibold">
              Get notified when our app launches
            </p>
            <div className="w-full h-[50px] md:h-[55px] xl:h-[64px] flex">
              <input
                type="text"
                placeholder="Input your email address"
                className="text-[#001145] rounded-l-[8px] pl-5 text-[11px] md:text-[15px] w-[70%] h-full"
              />
              <Waitlistbutton3 />
            </div>
          </div>
        </div>
        <div className="w-full h-[50%] md:w-[50%] md:h-full flex justify-center items-center">
          <div className="rounded-full w-[255px] md:w-[325px] lg:w-[485px] xl:w-[585px] h-[255px] md:h-[325px] lg:h-[485px] xl:h-[585px] bg-white">
            {/* Placeholder or content for the circle */}
          </div>
        </div>
      </div>
    </section>
  );
}
