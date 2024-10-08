import React from "react";

type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="mx-auto mt-28 sm:mt-40 md:mt-52 flex max-w-[1300px] justify-between px-6 sm:px-10">
      <div className="">
        <p className="text-sm sm:text-base">
          University of Florida <span className="text-lg">&nbsp;🐊</span>
        </p>
        <h1 className="mt-2 text-4xl md:text-5xl font-semibold leading-tight">
          Developer <br className="sm:hidden"/> Student Club 💻
        </h1>
        <h2 className="mt-3 sm:mt-5 max-w-[560px] sm:text-xl font-medium">
          Learn <span className="text-blue">Google Developer</span> technologies
          as well as mobile and web development skills essential for the{" "}
          <span className="text-red">industry.</span>
        </h2>
        <div className="mt-4 flex gap-4">
          <a
            href=""
            className="rounded-md bg-blue px-10 py-2 text-xs sm:text-sm text-white"
          >
            Join Discord
          </a>
          <a
            href=""
            className="rounded-md border border-blue px-10 py-2 text-xs sm:text-sm"
          >
            Learn More
          </a>
        </div>
        <p className="text-xs mt-4 opacity-70 sm:hidden"> A Google Developers program for university students</p>
      </div>
      <div className="hidden xl:flex flex-col items-end justify-end">
        <div className="flex gap-4">
          <img src="google.webp" alt="" className="max-w-[30px] grayscale" />
          <img src="uf.svg" alt="" />
        </div>
        <p className="mt-3 text-sm opacity-80">
          A Google Developers program for university students
        </p>
      </div>
    </div>
  );
};
export default Hero;
