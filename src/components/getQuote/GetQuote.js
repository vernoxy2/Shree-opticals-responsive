import React from "react";
// import './GetQuote.css';

const GetQuote = ({backgroundImage}) => {
  return (
    <div
      className="w-full bg-cover bg-center h-[400px] sm:h-[500px] flex flex-col items-center justify-between "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-[80%]">
        <div className="w-[80%] sm:w-[60%] lg:w-[40%] flex flex-col items-start gap-[30px]">
          <h2 className="md:text-4xl lg:text-5xl text-[#06213c] font-kaisei_Decol font-normal mt-[100px]">Contact Us</h2>
          <p className="text-xs md:text-base lg:text-2xl text-[#334155] font-kaisei_Decol font-normal">
            We’d love to hear from you! Whether you have questions, feedback, or
            inquiries about our services, feel free to reach out using the
            details below. Our team will get back to you as soon as possible.
          </p>
          <a href="/contactus" className="w-[200px] h-[50px] bg-[#06213c] text-white text-[20px] 
                       flex items-center justify-center font-kanit no-underline rounded 
                       transition-all duration-300 hover:bg-[#0a2e50]
                       max-md:w-[180px] max-md:h-[45px] max-md:text-[18px]
                       max-sm:w-[160px] max-sm:h-[40px] max-sm:text-[16px]"> Get a Quote</a>
        </div>
      </div>
    </div>
  );
};
export default GetQuote;
