import React from "react";

type SolutionChallengeProps = {};

const SolutionChallenge: React.FC<SolutionChallengeProps> = () => {
  return (
    <div className="max-w-[1380px] mx-auto px-6 sm:px-10 flex flex-col lg:flex-row items-center pb-10">
      <figure className="lg:w-1/2 mb-8 lg:mb-0">
        <img src="/photos/solution-challenge.png" alt="" />
      </figure>
      <div className="lg:w-1/2 lg:pl-14">
        <p className="text-2xl sm:text-4xl font-medium">
          What is the Google DSC Solution Challenge?
        </p>
        <div className="flex flex-col gap-4 mt-6 leading-relaxed">
          <p className="">
            The Solution Challenge is a contest held in the spring where DSCs
            create innovative solutions to local community problems using Google
            products or platforms
          </p>
          <p>
            We will begin creating teams and brainstorming ideas in January.
            Join our Discord to stay updated.
          </p>
          <p>
            <a href="https://developers.google.com/community/gdsc-solution-challenge" target="_blank" className="underline">
              Click here
            </a>{" "}
            to learn more about the solution challenge.
          </p>
        </div>
      </div>
    </div>
  );
};
export default SolutionChallenge;
