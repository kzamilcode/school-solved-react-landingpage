import PackImg from "../assets/thumb-concept-15.png";
import { AiOutlineRight } from "react-icons/ai";
const Pack = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1080px] mx-auto grid md:grid-cols-2 gap-x-48 items-center">
        <img src={PackImg} alt="/" />
        <div className="">
          <span className="w-10 h-[4px] bg-[#E74040] block"></span>
          <h2 className="max-w-[120px] text-[40px] font-bold leading-[50px] my-6">
            Approdable Packages
          </h2>
          <p className="max-w-[320px] text-[14px] leading-[20px]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
          <a className="text-[#96BB7C] mt-6 block" href="#">
            Learn More <AiOutlineRight className="inline-block" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pack;
