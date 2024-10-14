import React from "react";
import FadeIn from "./motion-components/FadeIn";

type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="px-6 sm:px-10 bg-gray-50">
      <div className="mx-auto flex flex-col lg:flex-row max-w-[1220px] justify-between pb-16 lg:pb-60  pt-28 sm:pt-40 lg:pt-[272px] items-center relative">
        <div className="relative z-10 flex flex-col sm:items-center sm:text-center lg:text-left lg:items-start pb-12 lg:pb-0">
          <h1 className="text-[40px] leading-tight sm:text-5xl xl:text-[54px] font-semibold pb-2">Developer Student Club</h1>
          <p className="max-w-[560px] xl:max-w-[600px]  sm:text-xl font-medium">
            Learn <span className="text-blue">Google Developer</span>{" "}
            technologies as well as mobile and web development skills essential
            for the <span className="text-blue">industry.</span>
          </p>
          <div className="mt-4 flex gap-4">
            <a
              href=""
              className="rounded-md bg-blue px-8 py-2 text-xs text-white sm:px-10 sm:text-sm"
            >
              Join Discord
            </a>
            <a
              href=""
              className="rounded-md border border-blue px-8 py-2 text-xs sm:px-10 sm:text-sm"
            >
              Learn More
            </a>
          </div>
          <p className="mt-4 text-xs sm:text-sm opacity-60">A Google Developers program for university students.</p>
        </div>
        <figure className="lg:absolute -right-12 xl:right-0 lg:mt-0 sm:scale-[.80] xl:scale-100">
          <FadeIn delay={0.15}>
          <img src="wire.png" alt="" loading="lazy" />
          </FadeIn>
        </figure>
    
      </div>
    </div>
  );
};
export default Hero;
