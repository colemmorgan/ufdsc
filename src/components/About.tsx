import React from "react";

type AboutProps = {};

const About: React.FC<AboutProps> = () => {
  return (
    <>
      <div
        className="pt-24 sm:pt-36 sm:pb-16 max-w-[910px] mx-auto px-6 sm:px-10 relative"
        id="become-a-member"
      >
        <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] lg:leading-[1.125] text-center">
          Becoming a <span className="text-green">member</span> is as easy as
          joining our <span className="text-blue">discord!</span>
        </h3>
        <div className="mt-8 flex justify-center gap-4 text-sm">
          <a
            href="https://discord.gg/b4GzPB36xy"
            target="_blank"
            className="bg-button-blue text-white rounded-md w-[180px] text-center pt-2 pb-1.5"
          >
            Join Discord
          </a>
          <a
            href="https://www.instagram.com/dsc.uf/"
            target="_blank"
            className="border border-[#cccccc] rounded-md w-[180px] text-center pt-2 pb-1.5"
          >
            Follow on IG
          </a>
        </div>

        {/* <div className="pt-28" id="about">
        <p className="text-3xl sm:text-4xl font-medium"><i>Developer Student Club</i></p>
        <div className="font-light sm:text-lg leading-loose">
          <p className="mt-6 ">
            UFDSC is a project-based club focused on helping students improve their project development
            skills. Our goal is for our members to become familiar with how a
            full-stack application is made and help them create their own!
            Whether you're a complete beginner or have some experience, we can
            match you with teams and provide the support you need to develop
            your full-stack skills and work on your own projects!
          </p>
          <p className="mt-4">
            We use a wide variety of technologies such as android
            development, web development, cloud computing and machine learning.
            Every spring we put these technologies together to compete in the
            Google DSC Solution Challenge. Find more on the solution challenge
            below.
          </p>
        </div>
      </div> */}
      </div>
      <section id="about" className="pt-28 pb-24 max-w-[1400px] mx-auto sm:px-10">
        <div className="flex justify-between pb-3 border-b border-[#cccccc] px-4 sm:px-0">
          <p className="text-2xl sm:text-4xl lg:text-5xl font-medium">
            <span className="hidden sm:inline">UF</span> Developer Student Club
          </p>
          <img src="/star.svg" className="" />
        </div>
        <div className="pt-8 sm:pt-16 max-w-[940px] mx-auto px-6 sm:px-10">
          <div className="relative">
            <img src="/star.svg" alt="" className="absolute top-2.5 -left-12 idden sm:block" />
            <p className="text-2xl lg:text-[40px] leading-tight">
              UFDSC is a <i className="text-gradient">project-based</i>{" "}
              club focused on helping students improve their{" "}
              <i className="text-gradient">project development</i> skills.
            </p>
            <img src="/star.svg" alt="" className="absolute bottom-2.5 -right-2 hidden sm:block" />
          </div>
         <div className="text-lg leading-loose">
         <p className="mt-12">Our goal is for our members to become familiar with how a
            full-stack application is made and help them create their own!
            Whether you're a complete beginner or have some experience, we can
            match you with teams and provide the support you need to develop
            your full-stack skills and work on your own projects!</p>
            <p className="mt-4"> We use a wide variety of technologies such as android
            development, web development, cloud computing and machine learning.
            Every spring we put these technologies together to compete in the
            Google DSC Solution Challenge. Find more on the solution challenge
            below.</p>
         </div>
        </div>
      </section>
    </>
  );
};
export default About;
