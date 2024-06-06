"use client";

const ServicesCard = ({ headertext, text, img }) => {
  return (
    <a href="">
    <div
      className="hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-[150px] md:w-[100%] xl:w-[386px] h-[180px] md:h-[250px] lg:h-[286px] md:pt-5 bg-center bg-no-repeat flex flex-col justify-evenly rounded-lg border border-[#0000001A] items-center bg-[#FFFFFF]"    >
      <div
        className="h-[20%] md:h-[25%] w-[25%] md:w-[30%] lg:w-[25%] xl:w-[25%] rounded-lg bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${img})` }}
      ></div>

      <div className="text-center min-h-[15%] md:h-[15%]">
        {
          <p className=" font-bold text-[14px] md:text-[18px] lg:text-[25px]  text-[#000000]">
            {" "}
            {headertext}
          </p>
        }
      </div>
      <div className="w-[95%] h-[30%] md:h-[40%] text-center">
        {
          <p className="font-medium text-xs md:text-lg xl:text-xl text-[#000000]">
            {" "}
            {text}
          </p>
        }
      </div>
      
    </div></a>
  );
};

export default ServicesCard;
