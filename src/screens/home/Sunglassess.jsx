import React from 'react'
import PrimaryHeading from '../../components/Primarycompo/PrimaryHeading'

const SunglassessData = [
  {
    id: 1,
    label: "Cat Eye",
    image: "",
  },
  {
    id: 2,
    label: "Oval",
    image: "",
  },
  {
    id: 3,
    label: "Square",
    image: "",
  },
  {
    id: 4,
    label: "Round",
    image: "",
  },
  {
    id: 5,
    label: "Hexagonal",
    image: "",
  },
  {
    id: 6,
    label: "Aviator",
    image: "",
  },
];

const Sunglassess = () => {
  return (
    <div className='py-10 md:py-20 space-y-4 md:space-y-8'>
      <PrimaryHeading>Sunglassess</PrimaryHeading>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 container ">
        {SunglassessData.map((item) => (
          <div className="p-[3px] rounded-[10px] bg-gradient-to-b from-[#D5FEFF] to-[#92CAD4] group">
            <div className="flex flex-col items-center p-4 rounded-[6px] bg-white duration-300 group-hover:bg-[#D5FEFF]">
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-auto object-contain group-hover:scale-90 duration-300"
              />
              <p className="mt-3 text-base md:text-lg xl:text-xl font-kaisei_Decol text-[#06213c] font-normal text-center">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sunglassess
