import React from "react";

type SolutionChallengeProps = {};

const SolutionChallenge: React.FC<SolutionChallengeProps> = () => {
  return (
    <div className="max-w-[1380px] mx-auto px-10 flex items-center pb-10">
      <figure className="w-1/2">
        <img src="/photos/solution-challenge.png" alt="" />
      </figure>
      <div className="w-1/2 pl-14">
        <p className="text-4xl font-medium">
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
            <a href="" className="underline">
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
