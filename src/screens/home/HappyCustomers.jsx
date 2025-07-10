import React from "react";
import clientImg from "../../assets/clientImg.png";

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
  return (
    <div className="flex flex-col items-center w-full mt-[100px] mb-[50px]">
      <h1 className="text-[68px] text-[#06213c] font-kaisei_Decol font-normal mb-[70px] leading-tight text-center">
        Our Happy Clients
      </h1>

      <div className="flex flex-wrap justify-center gap-6 w-full px-4">
        {clients.map((client, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-[#d9d9d9] w-full sm:w-[70%] md:w-[30%] gap-4 p-6 filter blur-[2px] scale-100 transition-all duration-300 ease-in-out hover:blur-0 hover:scale-105 cursor-pointer rounded-lg"
          >
            <img
              src={clientImg}
              alt="client"
              className="h-[130px] w-[130px] object-contain rounded-full"
            />
            <h1 className="text-xl font-semibold text-[#06213c]text-[30px] text-[#22223b] font-kaisei_Decol">
              {client.name}
            </h1>
            <h2 className="text-[20px] font-medium text-[#3a86ff] font-kaisei_Decol">
              {client.title}
            </h2>
            <p className="text-[20px] font-normal text-[#495057] font-kaisei_Decol">{client.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HappyCustomers;
