export default function ContactPage() {
  return (
    <section id="contact" className=" bg-[#FFFFFF] w-full min-h-[100vh]">
      <div
        className="bg-[#001145] h-[40vh] md:h-[50vh] lg:h-[100vh] flex justify-center items-center w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/contact.svg')" }}
      >
        <div className="w-[80%] h-[40%] md:min-w-[400px] md:h-[125px] flex flex-col justify-around items-center">
          <p className=" text-center lg:text-left text-[30px] md:text-[47px] md:leading-[56px] font-semibold">
            Contact Us
          </p>
          <p className="text-center lg:text-left text-[16px] md:text-[18px]">
            We want to hear from you
          </p>
        </div>
      </div>
      <div className="h-[140vh] md:h-[95vh] lg:h-[135vh] flex flex-col justify-around py-5 md:py-10">
        <div className="w-full h-[15%] md:h-[20%] lg:h-[25%] flex flex-col justify-evenly items-center">
          <p className="text-center text-[#001145] text-[25px] md:text-[40px] xl:text-[47px] md:leading-[56px] font-semibold">
            We are here to serve You!
          </p>
          <p className="hidden md:block w-[95%] text-[#010417] lg:leading-[28px] text-center md:text-[15px] lg:text-[18px] xl:text-[21px]">
            We&apos;d love to hear from you! Whether you have a question, need
            assistance, <br /> or want to learn more about our services, our
            team is here to help{" "}
          </p>
          <p className="block md:hidden w-[95%] text-[#010417] text-center">
            We&apos;d love to hear from you! Whether you have a question, need
            assistance, or want to learn more about our services, our team is
            here to help{" "}
          </p>
        </div>
        <div className=" w-full h-[80%] md:h-[65%] flex justify-center items-center">
          <form className="w-[90%] xl:w-[75%] h-full xl:h-[100%] flex flex-col justify-around">
            <div className="w-full h-[25%] md:h-[20%] flex flex-col md:flex-row justify-between">
              <div className="w-full md:w-[48%] h-[45%] md:h-[50%] flex flex-col justify-between">
                <label
                  className="block font-semibold text-sm md:text-lg text-[#000925]"
                  htmlFor="first-name"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  className=" text-[#000925] pl-3 appearance-none rounded-[5px] border-2 border-gray-300 w-full py-2 leading-tight focus:outline-none focus:border-[#000925] caret-[#000925]"
                />
              </div>

              <div className="w-full md:w-[48%] h-[45%] md:h-[50%] flex flex-col justify-between">
                <label
                  className="block font-semibold text-sm md:text-lg text-[#000925]"
                  htmlFor="business-name"
                >
                  Business Name
                </label>
                <input
                  type="text"
                  id="business-name"
                  className="text-[#000925] pl-3 appearance-none rounded-[5px] border-2 border-gray-300 w-full py-2 leading-tight focus:outline-none focus:border-[#000925] caret-[#000925]"
                />
              </div>
            </div>
            <div className="w-full h-[25%] md:h-[20%] flex flex-col md:flex-row justify-between">
              <div className="w-full md:w-[48%] h-[45%] md:h-[50%] flex flex-col justify-between">
                <label
                  className="block font-semibold text-sm md:text-lg text-[#000925]"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className=" pl-3 appearance-none rounded-[5px] border-2 text-[#000925] border-gray-300 w-full py-2 leading-tight focus:outline-none focus:border-[#000925] caret-[#000925]"
                />
              </div>
              <div className="w-full md:w-[48%] h-[45%] md:h-[50%] flex flex-col justify-between">
                <label
                  className="block font-semibold text-sm md:text-lg text-[#000925]"
                  htmlFor="phone-number"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone-number"
                  className=" pl-3 appearance-none rounded-[5px] border-2 text-[#000925] border-gray-300 w-full py-2 leading-tight focus:outline-none focus:border-[#000925] caret-[#000925]"
                />
              </div>
            </div>
            <div className="w-full h-[25%] md:h-[40%] flex flex-col justify-end">
              <label
                className="block font-semibold text-sm md:text-lg text-[#000925] mb-3"
                htmlFor="message"
              >
                What can we do for you?
              </label>
              <textarea
                id="message"
                className="input-field rounded-[5px] border-2 text-[#000925] border-gray-300 w-full py-3 px-4 leading-tight focus:outline-none focus:border-[#000925] caret-[#000925]"
                rows={6}
                style={{ resize: "none", fontSize: "16px" }}
              ></textarea>
            </div>
            <div className="h-[10%] md:h-[20%] flex items-end">
              <a
                href="#"
                className="text-[#FFEF54] font-medium text-xs lg:text-sm flex items-center justify-center h-11 w-20 md:h-[40px] xl:h-[45px] md:w-[100px] bg-[#001145] hover:bg-[#FFEF54] hover:border hover:text-[#001145] hover:border-[#001145] rounded-[8px] shadow-md"
              >
                Send
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
