import React from "react";
// import './GetQuote.css';

const GetQuote = ({backgroundImage}) => {
  return (
    <div
      className="w-full bg-cover bg-center h-[500px] flex flex-col items-center justify-between my-[50px]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-[80%]">
        <div className="w-[30%] flex flex-col items-start gap-[30px]">
          <h2 className="text-[48px] text-[#06213c] font-kaisei_Decol font-normal mt-[100px]">Contact Us</h2>
          <p className="text-[24px] text-[#334155] font-kaisei_Decol font-normal">
            We’d love to hear from you! Whether you have questions, feedback, or
            inquiries about our services, feel free to reach out using the
            details below. Our team will get back to you as soon as possible.
          </p>
          <a href="/contactus" className="w-[200px] h-[50px] bg-[#06213c] text-[20px] text-white flex items-center justify-center font-kaisei_Decol no-underline"> Get a Quote</a>
        </div>
      </div>
    </div>
  );
};
export default GetQuote;
