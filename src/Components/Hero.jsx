const Hero = () => {
  return (
    <div className="w-full heroBg bg-cover h-screen relative -top-[91px]">
      <div className="max-w-[1080px] mx-auto text-[#96BB7C] pt-20">
        <h3> Online training</h3>
        <h1 className="text-[58px] max-w-[500px] font-bold leading-[80px] text-[#252B42] my-6">
          25K+ STUDENTS TRUST US
        </h1>
        <p className="max-w-[380px] text-[20px] text-[#737373]">
          Our goal is to make online education work for everyone
        </p>
        <div className="text-[14px] font-bold flex gap-x-5 mt-8">
          <button className="px-8 py-3 bg-[#96BB7C] text-white rounded-[5px]">
            Get Quote Now
          </button>
          <button className="px-8 py-3 border border-solid border-[#96BB7C] text-[#96BB7C] rounded-[5px]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
