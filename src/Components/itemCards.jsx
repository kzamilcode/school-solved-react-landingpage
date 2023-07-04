import React from "react";

const itemCards = ({ img, title }) => {
  return (
    <div className="w-full bg-white shadow-lg p-10">
      <img src={img} alt="/" />
      <h2 className="text-[#252B42] text-[24px] font-bold mt-4">{title}</h2>
      <span className="w-10 h-[2px]  bg-[#E74040] block my-4"></span>
      <p className="max-w-[250px] text-[#737373]">
        The gradual accumulation of information about atomic and small-scale
        behaviour...
      </p>
    </div>
  );
};

export default itemCards;
