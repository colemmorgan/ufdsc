import React from "react";

type AboutProps = {};

const About: React.FC<AboutProps> = () => {
  return (
    <>
      <div
        className="pt-20 sm:pt-36 max-w-[910px] mx-auto px-4 sm:px-10 relative pb-4"
        id="become-a-member"
      >
        <h3 className="font-semibold text-[34px]  sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.125] text-center">
          Becoming a <span className="text-purple">member</span> is as easy as
          joining our <span className="text-blue">discord!</span>
        </h3>
        <div className="mt-8 flex justify-center gap-4 text-sm">
          <a
            href="https://discord.gg/b4GzPB36xy"
            target="_blank"
            className="bg-purple text-black rounded-md w-[180px] text-center py-2"
          >
            Join Discord
          </a>
          <a
            href="https://www.instagram.com/dsc.uf/"
            target="_blank"
            className="border border-[#cccccc] rounded-md w-[180px] text-center py-2"
          >
            Follow on IG
          </a>
        </div>
      </div>

      <div
        className="max-w-[1280px] mx-auto px-6 sm:px-10  pt-20 sm:pt-28 pb-8 sm:pb-16"
        id="about"
      >
        <div className="flex justify-between pb-3 border-b border-[#383838]">
          <p className="text-2xl sm:text-4xl font-medium">About Us</p>
        </div>
        <div className="flex flex-col xl:flex-row  items-center pt-8">
          <div className="max-w-[800px] w-full ">
            <h3 className="text-[22px] sm:text-3xl md:text-4xl lg:text-5xl leading-normal lg:leading-tight font-medium text-center xl:text-left">
              UFDSC is a{" "}
              <span className="text-gradient font-semibold italic">
                project-based
              </span>{" "}
              club focused on helping students improve their{" "}
              <span className="text-gradient font-semibold italic">
                project development
              </span>{" "}
              skills.
            </h3>
            <p className="mt-6 sm:text-lg md:text-xl leading-relaxed">
              Our goal is for our members to become familiar with how a
              full-stack application is made and help them create their own!
              Whether you're a complete beginner or have some experience, we can
              match you with teams and provide the support you need to develop
              your full-stack skills and work on your own projects!
            </p>
          </div>
          <div className="w-full max-w-[400px] xl:pl-12 mt-8 sm:mt-12 xl:mt-0 px-2">
            <p className="text-center text-lg sm:text-xl">
              Upcoming/Recent Event
            </p>
            <figure className="relative w-full aspect-auto mt-4 sm:mt-6">
              <a
                href="https://www.instagram.com/p/DATcfzExkdy/"
                target="_blank"
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 opacity-0 transition-all hover:bg-opacity-80 hover:opacity-100  "
              >
                <span className="bg-white text-black rounded-full py-1 px-6 font-medium  sm:text-xl">
                  View post on Instagram
                </span>
              </a>
              <img
                src="/photos/event-placeholder.webp"
                alt=""
                className="rounded-md"
              />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
