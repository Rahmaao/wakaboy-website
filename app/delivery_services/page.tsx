export default function AboutPage() {
  return (
    <section
      id="about"
      className="bg-[#FFFFFF] w-full min-h-[150vh] md:min-h-[135vh] lg:min-h-[200vh]"
    >
      <div
        className="bg-[#001145] h-[40vh] md:h-[50vh] lg:h-[100vh] flex justify-center items-center w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/services.svg')" }}
      >
        <div className="w-[80%] h-[40%] md:min-w-[400px] md:h-[125px] flex flex-col justify-around items-center">
          <p className="text-center lg:text-left text-[30px] md:text-[47px] md:leading-[56px] font-semibold">
            Services
          </p>
          <p className="hidden md:block text-center text-[16px] md:text-[18px]">
            Are you a vendor or a business owner? Let us take the stress of
            delivery <br /> off you by handling all your delivery needs.
          </p>
          <p className="block md:hidden text-center text-[16px] md:text-[18px]">
            Are you a vendor or a business owner? Let us take the stress of
            delivery off you by handling all your delivery needs.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-full h-full px-5 md:px-10 xl:px-20 py-10 xl:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-10">
            <div className="bg-[#FFFFFF] xl:w-[85%] p-5">
              <div className="pb-3">
                <p className="font-bold text-lg md:text-xl lg:text-2xl text-[#000000]">
                Same-Day Delivery
                </p>
              </div>
              <div className="pb-5">
                <p className="text-sm md:text-base lg:text-lg text-[#000000]">
                Need it delivered today? Our same-day service ensures that your package reaches its destination swiftly within the same day. Ideal for urgent documents, last-minute gifts, or any item that just can’t wait.                  {/* As a leading tech-driven logistics company, we understand and
                  meet the unique demands of E-commerce. We also understand that
                  effective and reliable logistics are essential for successful
                  E-commerce. <br />
                  <br />
                  Whether you&apos;re an online retailer, B2B, B2C, C2C, or
                  multichannel seller, we provide customized delivery solutions
                  to help you achieve your goals. */}
                </p>
              </div>
              <div>
                <a
                  href="/contact"
                  className="text-[#FFEF54] font-medium text-xs lg:text-sm flex items-center justify-center h-10 w-24 md:h-[40px] xl:h-[50px] md:w-[135px] bg-[#001145] hover:bg-[#FFEF54] hover:border-2 hover:text-[#001145] hover:border-[#001145] rounded-[8px] shadow-md"
                >
                  Contact Us
                </a>
              </div>
            </div>
            {/* Add another card here */}
            <div className="bg-[#FFFFFF] xl:w-[85%] p-5">
              <div className="pb-3">
                <p className="font-bold text-lg md:text-xl lg:text-2xl text-[#000000]">
                Scheduled Delivery
                </p>
              </div>
              <div className="pb-5">
                <p className="text-sm md:text-base lg:text-lg text-[#000000]">
                Plan your deliveries according to your timetable with our flexible scheduled delivery service. Perfect for businesses managing regular shipments or customers who prefer to receive items at a specific time.
                  {/* Experience the convenience of our fast and reliable express
                  delivery services. Designed for customers who need their
                  packages delivered quickly, we offer both same-day and
                  next-day delivery options. <br />
                  <br />
                  Our efficient logistics network ensures that your parcels
                  reach their destination on time, every time. Trust us to
                  provide a seamless and speedy delivery experience that meets
                  your urgent needs. */}
                </p>
              </div>
              <div>
                <a
                  href="/contact"
                  className="text-[#FFEF54] font-medium text-xs lg:text-sm flex items-center justify-center h-10 w-24 md:h-[40px] xl:h-[50px] md:w-[135px] bg-[#001145] hover:bg-[#FFEF54] hover:text-[#001145] hover:border-[#001145] hover:border-2 rounded-[8px] shadow-md"
                >
                  Contact Us
                </a>
              </div>
            </div>
            {/* Add more cards if needed */}
            <div className="bg-[#FFFFFF] xl:w-[85%] p-5">
              <div className="pb-3">
                <p className="font-bold text-lg md:text-xl lg:text-2xl text-[#000000]">
                Business Logistics Solutions
                </p>
              </div>
              <div className="pb-5">
                <p className="text-sm md:text-base lg:text-lg text-[#000000]">
                We provide comprehensive logistics solutions tailored to business needs, ensuring that your operations run smoothly, and your customers remain happy. From bulk shipments to inventory management, we handle it all.
                  {/* We provide end-to-end supply chain management solutions,
                  including demand planning, procurement, logistics
                  coordination, and inventory optimization, to streamline
                  operations and improve efficiency for B2B clients. */}
                </p>
              </div>
              <div>
                <a
                  href="/contact"
                  className="text-[#FFEF54] font-medium text-xs lg:text-sm flex items-center justify-center h-10 w-24 md:h-[40px] xl:h-[50px] md:w-[135px] bg-[#001145] hover:bg-[#FFEF54] hover:border-2 hover:text-[#001145] hover:border-[#001145] rounded-[8px] shadow-md"
                >
                  Contact Us
                </a>
              </div>
            </div>
            {/* Add another card here */}
            <div className="bg-[#FFFFFF] xl:w-[85%] p-5">
              <div className="pb-3">
                <p className="font-bold text-lg md:text-xl lg:text-2xl text-[#000000]">
                Custom Solutions
                </p>
              </div>
              <div className="pb-5">
                <p className="text-sm md:text-base lg:text-lg text-[#000000]">
                Have unique delivery needs? Our custom solutions service allows us to work directly with you to create a delivery strategy that fits your specific requirements.
                  {/* Our scheduled pickup service offers convenient and reliable
                  collection at a time that suits you. <br /> <br />
                  Whether for business or personal needs, our team will collect
                  your packages from your location and ensure prompt delivery.
                  Simplify your logistics with our flexible pickup options. */}
                </p>
              </div>
              <div>
                <a
                  href="/contact"
                  className="text-[#FFEF54] font-medium text-xs lg:text-sm flex items-center justify-center h-10 w-24 md:h-[40px] xl:h-[50px] md:w-[135px] bg-[#001145] hover:bg-[#FFEF54] hover:border-2 hover:text-[#001145] hover:border-[#001145] rounded-[8px] shadow-md"
                >
                  Contact Us
                </a>
              </div>
            </div>
            {/* <div className="bg-[#FFFFFF] xl:w-[85%] p-5">
              <div className="pb-3">
                <p className="font-bold text-lg md:text-xl lg:text-2xl text-[#000000]">
                  Distribution
                </p>
              </div>
              <div className="pb-5">
                <p className="text-sm md:text-base lg:text-lg text-[#000000]">
                  We provide secure storage, advanced inventory management, and
                  efficient distribution services. <br /> <br />
                  Our comprehensive solutions streamline your supply chain,
                  reduce costs, and ensure timely delivery to various locations.
                </p>
              </div>
              <div>
                <a
                  href="/contact"
                  className="text-[#FFEF54] font-medium text-xs lg:text-sm flex items-center justify-center h-10 w-24 md:h-[40px] xl:h-[50px] md:w-[135px] bg-[#001145] hover:bg-[#FFEF54] hover:border-2 hover:text-[#001145] hover:border-[#001145] rounded-[8px] shadow-md"
                >
                  Contact Us
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
