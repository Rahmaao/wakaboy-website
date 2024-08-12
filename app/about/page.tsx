import Image from "next/image";

export default function AboutPage() {
  return (
    <section id="about" className="bg-[#FFFFFF] w-full min-h-[100vh] pb-10">
      <div
        className="bg-[#001145] h-[40vh] md:h-[50vh] lg:h-[100vh] flex justify-center items-center w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/about.svg')" }}
      >
        <div className="w-[80%] h-[40%] md:min-w-[400px] md:h-[125px] flex flex-col justify-around items-center">
          <p className="text-center lg:text-left text-[30px] md:text-[47px] md:leading-[56px] font-semibold">
            About Us
          </p>
          <p className="text-center lg:text-left text-[16px] md:text-[18px]">
            Who are we at Wakaboy Express?
          </p>
        </div>
      </div>
      <div className="min-h-[170vh] md:min-h-[100vh] lg:min-h-[150vh] flex flex-col justify-around">
        <div className="md:h-[50vh] lg:h-[70vh] xl:h-[90vh] md:flex hidden justify-center items-center">
          <div className="w-[60%] h-full md:pl-14 xl:pl-20 flex flex-col justify-evenly">
            <p className="text-left text-[#001145] text-[30px] md:text-[40px] xl:text-[47px] md:leading-[56px] font-semibold">
              Who are we?
            </p>
            <p className="w-[95%] text-[#010417] text-left md:text-[15px] lg:text-[18px] xl:text-[21px]">
              At Wakaboy Express, we&apos;re committed to bridging the gap between
              businesses and consumers with fast, reliable, and affordable
              delivery services. Based in Nigeria, we provide tailored solutions
              that cater to the unique needs of our diverse clientele.
              <br /> <br />
              Founded in 2020 amidst the bustling markets of Lagos, Wakaboy Express was created to address the urgent need for dependable delivery services. Our founders, seasoned professionals with deep roots in logistics and technology, were inspired by personal experiences of service inconsistencies and market gaps. Recognizing the potential for a logistics service that truly understands local challenges, Wakaboy Express was born.
            </p>
          </div>
          <div className="w-[40%] h-full flex justify-end items-center">
            <Image
              src="/rectangle.svg"
              alt=""
              width={500}
              height={300}
              style={{ width: "auto", height: "100%" }} // Maintain aspect ratio
            />
          </div>
        </div>
        <div className="min-h-[95vh] flex md:hidden justify-center items-center">
          <div className="py-10 px-3">
            <div className="min-h-[30%] w-full flex items-start">
              <div className="text-[#001145] flex-1">
                <p className="text-2xl font-semibold pb-10">Who are we?</p>
                <p>
                  At Wakaboy Express, we&apos;re committed to bridging the gap
                  between businesses and consumers with fast, reliable, and
                  affordable delivery services. Based in Nigeria, we provide
                  tailored solutions that cater to the unique needs of our
                  diverse clientele.
                </p>
              </div>
              <div className="ml-4 mt-20">
                <Image
                  src="/box.png"
                  alt="Description"
                  width={300}
                  height={300}
                  className="rounded-lg object-contain max-w-[150px] sm:max-w-[200px] w-full"
                />
              </div>
            </div>
            <p className="text-[#001145] mt-4">
              Founded in 2020 amidst the bustling markets of Lagos, Wakaboy Express was created to address the urgent need for dependable delivery services. Our founders, seasoned professionals with deep roots in logistics and technology, were inspired by personal experiences of service inconsistencies and market gaps. Recognizing the potential for a logistics service that truly understands local challenges, Wakaboy Express was born.
            </p>
          </div>
        </div>
        <div className="min-h-[35vh] mb-8 lg:my-8 md:min-h-[20vh] lg:h-[30vh] flex flex-col justify-evenly items-center">
          <p className="text-center text-[#001145] text-[30px] md:text-[40px] xl:text-[47px] md:leading-[56px] font-semibold">
            Our Mission
          </p>
          <p className="hidden md:block w-[95%] text-[#010417] lg:leading-[28px] text-center md:text-[15px] lg:text-[18px] xl:text-[21px]">
            At Wakaboy Express, our mission is to empower businesses and enrich
            communities across Nigeria by providing dependable and efficient
            delivery solutions. We aim to simplify logistics with a
            customer-first approach, ensuring that every package is handled with
            utmost care and precision. Our commitment extends beyond mere
            deliveries; we strive to enhance the operational capabilities of our
            clients, helping them thrive in an increasingly competitive
            marketplace.{" "}
          </p>
          <p className="block md:hidden w-[95%] text-[#010417] text-center">
            At Wakaboy Express, our mission is to empower businesses and enrich
            communities across Nigeria by providing dependable and efficient
            delivery solutions. We aim to simplify logistics with a
            customer-first approach, ensuring that every package is handled with
            utmost care and precision. Our commitment extends beyond mere
            deliveries; we strive to enhance the operational capabilities of our
            clients, helping them thrive in an increasingly competitive
            marketplace.
          </p>
        </div>
        <div className="min-h-[35vh] md:min-h-[20vh] lg:h-[30vh] flex flex-col justify-evenly items-center">
          <p className="text-center text-[#001145] text-[30px] md:text-[40px] xl:text-[47px] md:leading-[56px] font-semibold">
            Our Vision
          </p>
          <p className="hidden md:block w-[95%] text-[#010417] lg:leading-[28px] text-center md:text-[15px] lg:text-[18px] xl:text-[21px]">
            Our vision is to set new benchmarks in the logistics industry of Nigeria and beyond. We are driven to innovate, leading with sustainable and technology-driven solutions that anticipate and fulfill the evolving needs of our diverse clientele. By 2030, we aim to expand our reach across West Africa, offering an unrivaled logistics network that supports businesses and stimulates local economies.
          </p>
          <p className="block md:hidden w-[95%] text-[#010417] text-center">
            Our vision is to set new benchmarks in the logistics industry of Nigeria and beyond. We are driven to innovate, leading with sustainable and technology-driven solutions that anticipate and fulfill the evolving needs of our diverse clientele. By 2030, we aim to expand our reach across West Africa, offering an unrivaled logistics network that supports businesses and stimulates local economies.
          </p>
        </div>
      </div>
    </section>
  );
}
