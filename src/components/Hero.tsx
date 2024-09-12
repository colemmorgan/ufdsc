import React from "react";

type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="max-w-[1380px] px-6 sm:px-10 mx-auto py-20 sm:py-28 mt-[68px]">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="lg:pr-4">
          <h1 className="text-center lg:text-left text-[32px] sm:text-5xl xl:text-[56px] 2xl:text-6xl font-semibold leading-[1.125] mb-4 lg:mb-2">
            UF Developer <br />
            Student Club (DSC)
          </h1>
          <h2 className="text-center lg:text-left max-w-[600px] font-medium text-sm sm:text-base lg:text-lg mb-3">
            Our DSC chapter at the <span className="text-blue">University of Florida</span> promotes the <span className="text-red-500">learning </span>
            of <span className="text-green">Google Developer</span> technologies, as well as mobile and web
            development skills essential for the <span className="text-orange">industry</span>.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm mb-4 mt-4 sm:mt-0">
            <a
              href="#become-a-member"
              className="bg-button-blue text-white rounded-md w-full sm:w-[180px] text-center pt-1.5 pb-1"
            >
              Become A Member
            </a>
            <a
              href="#about"
              className="border border-[#cccccc] rounded-md w-full sm:w-[180px] text-center pt-1.5 pb-1"
            >
              Learn More
            </a>
          </div>
          <p className="text-gray text-xs text-center lg:text-left">
            A Google Developers program for university students
          </p>
        </div>
        <figure className="max-w-[420px] xl:max-w-[460px] mt-12 lg:mt-0">
          <img src="/photos/hero-graphic.png" alt="" className="w-full" />
        </figure>
      </div>
    </div>
  );
};
export default Hero;
