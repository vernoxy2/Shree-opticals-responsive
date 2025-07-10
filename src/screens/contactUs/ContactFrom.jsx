import React from 'react';
import contactFormBg from "../../assets/contactFormBg.png";

const ContactForm = () => {
  return (
    <div className="w-full my-20 flex flex-col items-center justify-center px-4">
      {/* Heading */}
      <h1 className="text-[#06213c] text-3xl sm:text-4xl md:text-5xl lg:text-[68px] font-kaisei_Decol font-normal text-center leading-tight">
        We Are Ready To Serve,
        <br />
        Get In Touch.
      </h1>

      {/* Form Container with Background */}
      <div
        className="w-full mt-10 bg-center bg-cover flex flex-col items-center justify-center py-10 px-4"
        style={{
          backgroundImage: `url(${contactFormBg})`,
          minHeight: "700px",
        }}
      >
        {/* Inputs Row */}
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6">
          {/* Name Input */}
          <div className="w-full md:w-1/2">
            <label htmlFor="name" className="text-[#06213c] text-2xl md:text-[48px] font-kaisei_Decol font-normal">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              className="w-full mt-2 px-4 py-3 rounded-[10px] text-lg bg-[#F2F0F0] border-[3px] border-white"
            />
          </div>

          {/* Email Input */}
          <div className="w-full md:w-1/2">
            <label htmlFor="email" className="text-[#06213c] text-2xl md:text-[48px] font-kaisei_Decol font-normal">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className="w-full mt-2 px-4 py-3 rounded-[10px] text-lg bg-[#F2F0F0] border-[3px] border-white"
            />
          </div>
        </div>

        {/* Message */}
        <div className="w-full max-w-6xl mt-8">
          <label htmlFor="message" className="text-[#06213c] text-2xl md:text-[48px] font-kaisei_Decol font-normal">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Type your message here..."
            className="w-full mt-2 px-4 py-3 rounded-[10px] text-lg bg-[#F2F0F0] border-[3px] border-white resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-8 w-full max-w-6xl px-6 py-4 bg-[#06213C] text-white rounded-[10px] text-lg sm:text-xl hover:bg-[#041728] transition-all duration-300"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
