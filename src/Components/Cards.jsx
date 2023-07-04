import React from "react";
import CountUp from "react-countup";
import ItemCards from "./itemCards";
import cardOne from "../assets/icon cool-icon-l1.png";
import cardTwo from "../assets/icon cool-icon-l4.png";
import cardThree from "../assets/icon cool-icon-l7.png";
const Cards = () => {
  return (
    <div className="w-full relative -top-[160px] ">
      <div className="max-w-[1080px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ItemCards img={cardOne} title="Certified Teacher" />
        <ItemCards img={cardTwo} title="NonCertified Teacher" />
        <ItemCards img={cardThree} title="Professional Teacher" />
      </div>
    </div>
  );
};

export default Cards;
