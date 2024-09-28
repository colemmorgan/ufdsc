import React from "react";

import FadeIn from "./motion-components/FadeIn";

type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="sm:min-h-screen flex flex-col justify-between w-full">
      <span id="placeholder" />
      <div className="pt-32 pb-12 sm:pb-0 sm:pt-24 lg:pt-40  lg:pb-28 px-6 sm:px-10 flex flex-col lg:flex-row items-center justify-between w-full  max-w-[1280px] mx-auto relative z-10">
        <div className="w-full max-w-[700px] flex flex-col items-center lg:items-start">
          <FadeIn delay={0.1}>
            <p className="font-light text-light-gray text-xs sm:text-normal">
              Join <span className="text-purple">422</span> other developers on
              Discord!
            </p>
          </FadeIn>
          <h1 className="flex text-4xl md:text-[44px] xl:text-[52px] 2xl:text-6xl font-semibold flex-wrap mt-2 leading-[1.375] lg:leading-tight 2xl:leading-[1.375]  justify-center lg:justify-start">
            <FadeIn delay={0.15}>
              <span className="hidden sm:block">UF&nbsp;</span>
            </FadeIn>
            <FadeIn delay={0.22}>
              <span>Google&nbsp;</span>
            </FadeIn>
            <FadeIn delay={0.29}>
              <span>Developer&nbsp;</span>
            </FadeIn>
            <FadeIn delay={0.36}>
              <span>Student&nbsp;</span>
            </FadeIn>
            <br />
            <FadeIn delay={0.43}>
              <span>Club</span>
            </FadeIn>
          </h1>

          <FadeIn delay={0.5}>
            <h2 className="mt-3 sm:mt-4 max-w-[560px]  sm:text-lg xl:text-xl leading-normal text-center lg:text-start">
              Learn <span className="text-purple">Google Developer</span>{" "}
              technologies as well as mobile and web development skills
              essential for the <span className="text-blue">industry.</span>
            </h2>
          </FadeIn>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 text-sm items-center sm:items-start w-full sm:w-auto">
            <div className="w-full sm:w-auto">
              <FadeIn delay={0.57}>
                <a
                  href="https://discord.gg/b4GzPB36xy"
                  target="_blank"
                  className="text-black bg-purple px-12 py-1.5 sm:py-2 rounded-md font-semibold w-full block text-center"
                >
                  Join Discord
                </a>
              </FadeIn>
            </div>
            <div className="w-full sm:w-auto">
              <FadeIn delay={0.64}>
                <a
                  href="#about"
                  className="border border-gray px-12 py-1.5 sm:py-2 rounded-md block text-center"
                >
                  Learn More
                </a>
              </FadeIn>
            </div>
          </div>
        </div>
        <div className="flex  justify-center lg:justify-end lg:pl-10 max-w-[500px] w-full mt-16 lg:mt-0">
          <FadeIn delay={0.71}>
            <figure className="">
              <img
                src="/photos/hero-graphic.png"
                alt=""
                className="w-[380px] xl:w-[420px] 2xl:w-[460px] aspect-[1.19]"
              />
            </figure>
          </FadeIn>
        </div>
      </div>
      <div className="max-w-[408px] mx-auto mt-2 sm:mt-16 pb-8">
        <div className="flex items-center justify-center gap-4 mb-4 h-[30px]">
          <img src="/google.webp" alt="" className="w-[30px] grayscale" />
          <img src="/uf.svg" alt="" className="w-[40px] " />
        </div>
        <p className="text-light-gray text-xs sm:text-sm text-center">
          A Google Developers program for university students
        </p>
      </div>
    </div>
  );
};
export default Hero;
