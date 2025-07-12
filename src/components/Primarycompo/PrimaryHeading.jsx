import React from "react";

const PrimaryHeading = ({ children, className = "" }) => {
  return (
    <h1
      className={`text-3xl md:text-5xl xl:text-6xl text-[#06213c] font-kaisei_Decol font-normal text-center mb-5 ${className}`}
    >
      {children}
    </h1>
  );
};

export default PrimaryHeading;
