import React from "react";
import Navbar from "../../components/Navbar/Navbar";

const Header = ({ backgroundImage, headingText, description, buttonText, onButtonClick }) => {
  return (
    <div className="w-full h-full md:pb-6 sm:pb-[100px] flex flex-col items-center justify-center">
      <div
        className="w-full bg-cover bg-center h-[850px] flex flex-col items-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Navbar />

        <div className="flex flex-row items-center justify-between w-[90%] my-[100px]">
          {/* Left Text Section */}
          <div className="flex flex-col items-center justify-center h-[80%] w-[45%]">
            <div className="flex flex-col justify-center gap-[50px]">
              <h1 className="text-[65px] text-[#06213C] font-normal font-kaisei_Decol mt-[100px]">
                {headingText}
              </h1>

              <p className="w-[400px] text-[24px] text-[#06213C] font-normal font-kaisei_Decol leading-[38px]">
                {description}
              </p>

              {buttonText && (
                <button
                  onClick={onButtonClick}
                  className="mt-4 px-6 py-3 bg-[#06213C] text-white text-lg rounded hover:bg-[#04305A] transition-all duration-300"
                >
                  {buttonText}
                </button>
              )}
            </div>
          </div>

          {/* Right (Image or Content Area) */}
          <div className="flex flex-col items-center justify-center h-[80%] w-[45%]">
            {/* Optional image or content goes here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
