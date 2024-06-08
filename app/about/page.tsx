export default function AboutPage() {
  return (
    <section id="about" className=" bg-[#FFFFFF] w-full min-h-[100vh] pb-10">
      <div
        className="bg-[#001145] h-[40vh] md:h-[50vh] lg:h-[100vh]  flex justify-center items-center w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/about.png')" }}
      >
        <div className="w-[80%] h-[40%] md:min-w-[400px] md:h-[125px] flex flex-col justify-around items-center">
          <p className=" text-center lg:text-left text-[30px] md:text-[47px] md:leading-[56px] font-semibold">
            About Us
          </p>
          <p className="text-center lg:text-left text-[16px] md:text-[18px]">
            Who are we at Wakaboy Express?
          </p>
        </div>
      </div>
      <div className="h-[170vh] md:h-[100vh] lg:h-[150vh] flex flex-col justify-around">
        <div className=" md:h-[50vh] lg:h-[70vh] xl:h-[90vh] md:flex hidden justify-center items-center">
          <div className="w-[60%] h-full md:pl-14 xl:pl-20 flex flex-col justify-evenly">
            <p className="text-left text-[#001145] text-[30px] md:text-[40px] xl:text-[47px] md:leading-[56px] font-semibold">
              Who are we?
            </p>
            <p className=" w-[95%] text-[#010417] text-left md:text-[15px] lg:text-[18px] xl:text-[21px]">
              Wakaboy Express was founded by Ejike Chukwunyerenwa in 2019 with
              the aim of solving the struggle that small businesses face in
              finding reliable logistics partners. We aim to bridge that gap by
              providing trustworthy and efficient logistics solutions to
              businesses of all sizes.
              <br /> <br />
              At Wakaboy Express, we are committed to excellence and
              adaptability, providing tailored solutions that enhance
              operational efficiency and customer satisfaction. Whether you're a
              small business or a larger enterprise, our innovative logistics
              support is designed to help your business thrive. Trust Wakaboy
              Express to deliver the logistical reliability your business needs
              to succeed.
            </p>
          </div>
          <div className="w-[40%] h-full flex justify-end items-center">
            <img src="/rectangle.svg" alt="" />
          </div>
        </div>
        <div className="min-h-[95vh] flex md:hidden justify-center items-center">
          <div className="py-10 px-3">
            <div className="min-h-[30%] w-full flex">
              <div className=" text-[#001145]">
                <p className="text-2xl font-semibold pb-10">Who are we?</p>
                <p>
                  Wakaboy Express was founded by Ejike Chukwunyerenwa in 2019
                  with the aim of solving the struggle that small businesses
                  face in finding reliable logistics partners.
                </p>
              </div>
              <img
                src="/box.png"
                alt="Description"
                className="w-[50%] h-[50%] ml-4 rounded-lg pt-10"
              />
            </div>
            <p className="text-[#001145]">
              We aim to bridge that gap by providing trustworthy and efficient
              logistics solutions to businesses of all sizes. <br /> <br /> At
              Wakaboy Express, we are committed to excellence and adaptability,
              providing tailored solutions that enhance operational efficiency
              and customer satisfaction. Whether you're a small business or a
              larger enterprise, our innovative logistics support is designed to
              help your business thrive. Trust Wakaboy Express to deliver the
              logistical reliability your business needs to succeed.
            </p>
          </div>
        </div>
        <div className="h-[35vh] md:h-[20vh] lg:h-[30vh] flex flex-col justify-evenly items-center">
          <p className="text-center text-[#001145] text-[30px] md:text-[40px] xl:text-[47px] md:leading-[56px] font-semibold">
            Our Vision
          </p>
          <p className="hidden md:block w-[95%] text-[#010417] lg:leading-[28px] text-center md:text-[15px] lg:text-[18px] xl:text-[21px]">
          To revolutionize last-mile delivery in Lagos, becoming the trusted partner for businesses, <br /> and serving new standards of speed, reliability, and sustainability.
          </p>
          <p className="block md:hidden w-[95%] text-[#010417] text-center">
          To revolutionize last-mile delivery in Lagos, becoming the trusted partner for businesses, and serving new standards of speed, reliability, and sustainability.
          </p>
        </div>
        <div className="h-[35vh] md:h-[20vh] lg:h-[30vh] flex flex-col justify-evenly items-center">
          <p className="text-center text-[#001145] text-[30px] md:text-[40px] xl:text-[47px] md:leading-[56px] font-semibold">
            Our Mission
          </p>
          <p className="hidden md:block w-[95%] text-[#010417] lg:leading-[28px] text-center md:text-[15px] lg:text-[18px] xl:text-[21px]">
          Our mission is to provide efficient and eco-friendly last-mile delivery solutions that enhance <br /> the lives of Lagosians and empower businesses to thrive          </p>
          <p className="block md:hidden w-[95%] text-[#010417] text-center">
          Our mission is to provide efficient and eco-friendly last-mile delivery solutions that enhance the lives of Lagosians and empower businesses to thrive          </p>
        </div>
      </div>
    </section>
  );
}
