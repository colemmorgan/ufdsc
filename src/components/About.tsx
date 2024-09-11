import React from "react";

type AboutProps = {};

const About: React.FC<AboutProps> = () => {
  return (
    <div className="py-28 max-w-[910px] mx-auto">
      <h3 className="font-semibold text-[56px] leading-snug text-center">
        Becoming a member is as easy as joining our discord!
      </h3>
      <div className="mt-8 flex justify-center gap-4 text-sm">
        <a
          href=""
          className="bg-button-blue text-white rounded-md w-[180px] text-center pt-2 pb-1.5"
        >
          Join Discord
        </a>
        <a
          href=""
          className="border border-[#cccccc] rounded-md w-[180px] text-center pt-2 pb-1.5"
        >
          Follow on IG
        </a>
      </div>
      <div className="mt-28">
        <p className="text-4xl font-medium"> What is UFDSC?</p>
        <div className="font-light">
          <p className="mt-6 text-lg leading-loose">
            UFDSC is focused on helping students improve their project development
            skills. Our goal is for our members to become familiar with how a
            full-stack application is made and help them create their own!
            Whether you're a complete beginner or have some experience, we can
            match you with teams and provide the support you need to develop
            your full-stack skills and work on your own projects!
          </p>
          <p className="mt-4 text-lg leading-loose">
            We use a wide variety of technologies such as android
            development, web development, cloud computing and machine learning.
            Every spring we put these technologies together to compete in the
            Google DSC Solution Challenge. Find more on the solution challenge
            below.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
