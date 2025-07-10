import React from 'react'
import headerBgImg from "../../assets/headerBgImg.png";
import Navbar from '../../components/Navbar/Navbar'
import SpecsHover from '../../components/specsHover/SpecsHover'

const HomeHeader = () => {
  return (
    <div
        className="w-full bg-cover bg-center h-[850px] flex flex-col items-center"
        style={{ backgroundImage: `url(${headerBgImg})` }}
      >
        <Navbar />
        <div className="flex flex-row items-center justify-between w-[90%] my-[100px]">
          <div className="flex flex-col items-center justify-center h-[80%] w-[45%]">
            <div className="flex flex-col justify-center gap-[50px]">
              <h1 className="text-[65px] text-white font-normal font-kaisei_Decol mt-[100px]">
                Where Vision <br /> Meets Innovation.
              </h1>

              <p className="w-[400px] text-[24px] text-white font-normal font-kaisei_Decol leading-[40px]Home-SubContainer-Description ">
                Stylish tortoiseshell glasses with clear nose pads, dual-tone
                temples, lightweight lenses, and UV-protected, anti-glare vision
                enhancement.
              </p>

              <a href="/contactus" className="w-[200px] h-[50px] bg-[#06213c] text-[20px] text-white flex items-center justify-center font-kaisei_Decol no-underline">
                Visit Now
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-[80%] w-[45%]">
            <SpecsHover />
          </div>
        </div>
      </div>
  )
}

export default HomeHeader
