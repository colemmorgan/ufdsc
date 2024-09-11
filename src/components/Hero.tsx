import React from "react";

type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="max-w-[1380px] px-10 mx-auto py-28 mt-[68px]">
      <div className="flex justify-between items-center">
        <div className="">
          <h1 className="text-6xl font-semibold leading-[1.125] mb-2">
            UF Developer <br />
            Student Club (DSC)
          </h1>
          <h2 className="max-w-[600px] font-medium text-lg mb-3">
            Our DSC chapter at the <span className="text-blue">University of Florida</span> promotes the <span className="text-red-500">learning </span>
            of <span className="text-green">Google Developer</span> technologies, as well as mobile and web
            development skills essential for the <span className="text-orange">industry</span>.
          </h2>
          <div className="flex gap-4 text-sm mb-4">
            <a
              href=""
              className="bg-button-blue text-white rounded-md w-[180px] text-center pt-1.5 pb-1"
            >
              Become A Member
            </a>
            <a
              href=""
              className="border border-[#cccccc] rounded-md w-[180px] text-center pt-1.5 pb-1"
            >
              Learn More
            </a>
          </div>
          <p className="text-gray text-xs">
            A Google Developers program for university students
          </p>
        </div>
        <figure className="max-w-[460px]">
          <img src="/photos/hero-graphic.png" alt="" className="w-full" />
        </figure>
      </div>
    </div>
  );
};
export default Hero;
