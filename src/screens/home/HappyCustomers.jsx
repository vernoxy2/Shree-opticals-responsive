import React, { useState } from "react";
import clientImg from "../../assets/clientImg.png";
import PrimaryHeading from "../../components/Primarycompo/PrimaryHeading";

const clients = [
  {
    name: "Roman Reigns",
    title: "Founder",
    description:
      "Passionate about eye health, Dr. Harper ensures every exam is thorough and every client gets the best care possible.",
  },
  {
    name: "Roman Reigns",
    title: "Founder",
    description:
      "Passionate about eye health, Dr. Harper ensures every exam is thorough and every client gets the best care possible.",
  },
  {
    name: "Roman Reigns",
    title: "Founder",
    description:
      "Passionate about eye health, Dr. Harper ensures every exam is thorough and every client gets the best care possible.",
  },
];

const HappyCustomers = () => {
  const [activeIndex, setActiveIndex] = useState(1); // 2nd item active by default

  return (
    <div className="py-10 md:py-20 space-y-5 md:space-y-8">
      <PrimaryHeading className='pb-10'>Our Happy Customers</PrimaryHeading>

      <div
        className="container flex flex-col lg:flex-row items-center justify-between gap-12"
        onMouseLeave={() => setActiveIndex(1)} // Reset to 2nd card when no hover
      >
        {clients.map((client, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              className={`flex flex-col items-center text-center bg-[#d9d9d9] w-full gap-3 p-6 cursor-pointer transition-all duration-300 ease-in-out
                ${isActive ? "blur-0 scale-110 bg-[#c4d1d9]" : "blur-[2px] scale-100"}`}
            >
              <img
                src={clientImg}
                alt="client"
                className="h-[130px] w-[130px] object-contain rounded-full"
              />
              <h1 className="text-[30px] font-semibold text-[#22223b] font-kaisei_Decol">
                {client.name}
              </h1>
              <h2 className="text-[20px] font-medium text-[#3a86ff] font-kaisei_Decol">
                {client.title}
              </h2>
              <p className="text-[20px] font-normal text-[#495057] font-kaisei_Decol">
                {client.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HappyCustomers;
