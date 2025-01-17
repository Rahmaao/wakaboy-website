"use client";

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    businessName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const emailSubject = `Inquiry about ${formData.businessName}`;
    const emailBody = `
My name is ${formData.firstName}

${formData.message}

You can reach me on ${formData.email} or ${formData.phoneNumber}
    `;

    window.location.href = `mailto:wakaboyexpress@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  };

  return (
    <section id="contact" className="bg-[#FFFFFF] w-full min-h-[100vh]">
      <div
        className="bg-[#001145] h-[40vh] md:h-[50vh] lg:h-[100vh] flex justify-center items-center w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/contact.svg')" }}
      >
        <div className="w-[80%] text-[#FAFAFA] h-[40%] md:min-w-[400px] md:h-[125px] flex flex-col justify-around items-center">
          <p className="text-center lg:text-left text-[30px] md:text-[47px] md:leading-[56px] font-semibold">
            Contact Us
          </p>
          <p className="text-center lg:text-left text-[16px] md:text-[18px]">
            We&apos;re Here to Help!
          </p>
        </div>
      </div>
      <div className="h-[140vh] md:h-[95vh] lg:h-[135vh] flex flex-col justify-around py-5 md:py-10">
        <div className="w-full h-[15%] md:h-[20%] lg:h-[25%] flex flex-col justify-evenly items-center">
          <p className="text-center text-[#001145] text-[25px] md:text-[40px] xl:text-[47px] mb-2 md:leading-[56px] font-semibold">
            Your Satisfaction is Our Priority!
          </p>
          <p className="hidden md:block w-[95%] text-[#010417] lg:leading-[28px] text-center md:text-[15px] lg:text-[18px] xl:text-[21px]">
            Whether you have questions about our services, need assistance with an existing order, or want to discuss bespoke logistics solutions, our dedicated team is ready to assist you.
          </p>
          <p className="block md:hidden w-[95%] text-[#010417] text-center">
            Whether you have questions about our services, need assistance with an existing order, or want to discuss bespoke logistics solutions, our dedicated team is ready to assist you.
          </p>
        </div>
        <div className="w-full h-[80%] md:h-[65%] flex justify-center items-center">
          <form onSubmit={handleSubmit} className="w-[90%] xl:w-[75%] h-full xl:h-[100%] flex flex-col justify-around">
            <div className="w-full h-[25%] md:h-[20%] flex flex-col md:flex-row justify-between">
              <div className="w-full md:w-[48%] h-[45%] md:h-[50%] flex flex-col justify-between">
                <label className="block font-semibold text-sm md:text-lg text-[#000925]" htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="text-[#000925] pl-3 appearance-none rounded-[5px] border-2 border-gray-300 w-full py-2 leading-tight focus:outline-none focus:border-[#000925] caret-[#000925]"
                />
              </div>
              <div className="w-full md:w-[48%] h-[45%] md:h-[50%] flex flex-col justify-between">
                <label className="block font-semibold text-sm md:text-lg text-[#000925]" htmlFor="businessName">
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className="text-[#000925] pl-3 appearance-none rounded-[5px] border-2 border-gray-300 w-full py-2 leading-tight focus:outline-none focus:border-[#000925] caret-[#000925]"
                />
              </div>
            </div>
            <div className="w-full h-[25%] md:h-[20%] flex flex-col md:flex-row justify-between">
              <div className="w-full md:w-[48%] h-[45%] md:h-[50%] flex flex-col justify-between">
                <label className="block font-semibold text-sm md:text-lg text-[#000925]" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="pl-3 appearance-none rounded-[5px] border-2 text-[#000925] border-gray-300 w-full py-2 leading-tight focus:outline-none focus:border-[#000925] caret-[#000925]"
                />
              </div>
              <div className="w-full md:w-[48%] h-[45%] md:h-[50%] flex flex-col justify-between">
                <label className="block font-semibold text-sm md:text-lg text-[#000925]" htmlFor="phoneNumber">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="pl-3 appearance-none rounded-[5px] border-2 text-[#000925] border-gray-300 w-full py-2 leading-tight focus:outline-none focus:border-[#000925] caret-[#000925]"
                />
              </div>
            </div>
            <div className="w-full h-[25%] md:h-[40%] flex flex-col justify-end">
              <label className="block font-semibold text-sm md:text-lg text-[#000925] mb-3" htmlFor="message">
                What can we do for you?
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleInputChange}
                className="input-field rounded-[5px] border-2 text-[#000925] border-gray-300 w-full py-3 px-4 leading-tight focus:outline-none focus:border-[#000925] caret-[#000925]"
                rows={6}
                style={{ resize: "none", fontSize: "16px" }}
              ></textarea>
            </div>
            <div className="h-[10%] md:h-[20%] flex items-end">
              <button
                type="submit"
                className="text-[#FFEF54] font-medium text-xs lg:text-sm flex items-center justify-center h-11 w-20 md:h-[40px] xl:h-[45px] md:w-[100px] bg-[#001145] hover:bg-[#FFEF54] hover:border hover:text-[#001145] hover:border-[#001145] rounded-[8px] shadow-md"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}