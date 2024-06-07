export default function AboutPage() {
  return (
    <section id="about" className=" bg-[#FFFFFF] w-full min-h-[100vh]">
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

    </section>
  );
}
