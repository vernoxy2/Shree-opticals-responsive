import React from 'react';
import callImg from "../../assets/callImg.png";
import mailImg from "../../assets/mailImg.png";
import locationImg from "../../assets/locationImg.png";
import mapBgImg from "../../assets/mapBgImg.png";

const ContactDetails = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10  px-4">
      
      {/* Left Contact Info */}
      <div className="w-full lg:w-[48%] flex flex-col items-center justify-center">
        
        {/* Call Section */}
        <div className="w-full bg-[#06213c] flex flex-col items-center">
          <div className="w-[90%] md:w-[50%] my-[12px]">
            <div className="flex items-center gap-[20px] my-[0px]">
              <img src={callImg} alt="call" className="h-[80px] w-[80px]" />
              <h1 className="text-white font-normal font-kaisei_Decol text-[36px] md:text-[48px]">Call Us :</h1>
            </div>
            <h1 className="text-white font-normal font-kaisei_Decol text-[36px] md:text-[48px]">
              +91 99825 76458
            </h1>
          </div>
        </div>

        {/* Email & Address Section */}
        <div className="w-[100%] md:w-[50%] my-[20px]">
          <p className="text-[#06213c] text-[20px] md:text-[24px] font-normal font-kaisei_Decol mb-6">
            I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          {/* Email */}
          <div className="flex items-center gap-[20px] my-[30px]">
            <img src={mailImg} alt="mail" className="h-[80px] w-[80px]" />
            <div>
              <h1 className="text-[#06213c] text-[36px] md:text-[48px] font-normal font-kaisei_Decol">Email :</h1>
              <p className="text-[#06213c] text-[20px] md:text-[24px] font-normal font-kaisei_Decol">
                shree234@gmail.com
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-[20px] my-[30px]">
            <img src={locationImg} alt="location" className="h-[80px] w-[80px]" />
            <div>
              <h1 className="text-[#06213c] text-[36px] md:text-[48px] font-normal font-kaisei_Decol">Address :</h1>
              <p className="text-[#06213c] text-[20px] md:text-[24px] font-normal font-kaisei_Decol">
                Pramukh Sannidhya Complex, B-5, Abrama Village, Valsad, Abrama, Gujarat 396002
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Map Section */}
      <div className="w-full lg:w-[45%] flex flex-col items-start h-[600px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.848900548641!2d72.93863877599081!3d20.594227302559858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0c3e59a68829f%3A0x9ef062442028e5b6!2sShree%20Optical!5e0!3m2!1sen!2sin!4v1749185031379!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
          className="w-[90%] h-full z-[100] border-[15px] border-white shadow-[10px_10px_20px_rgba(0,0,0,0.2)]"
        ></iframe>

        <div
          className="w-[90%] h-[100px] self-end -mt-[80px] bg-cover bg-center"
          style={{ backgroundImage: `url(${mapBgImg})` }}
        ></div>
      </div>
    </div>
  );
};

export default ContactDetails;
