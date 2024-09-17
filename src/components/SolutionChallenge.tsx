import React from "react";

type SolutionChallengeProps = {};

const SolutionChallenge: React.FC<SolutionChallengeProps> = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-6 sm:px-10 pb-10">
      <p className="text-2xl sm:text-4xl font-medium mb-8">
        What is the Google DSC Solution Challenge?
      </p>
      <figure className="">
        <img src="/photos/solution-challenge.png" alt="" />
      </figure>

      <div className="flex flex-col gap-4 mt-6 text-lg leading-relaxed">
        <p className="">
          The Solution Challenge is a contest held in the spring where DSCs
          create innovative solutions to local community problems using Google
          products or platforms
        </p>
        <p>
          We will begin creating teams and brainstorming ideas in January. Join
          our Discord to stay updated.
        </p>
        <p>
          <a
            href="https://developers.google.com/community/gdsc-solution-challenge"
            target="_blank"
            className="underline"
          >
            Click here
          </a>{" "}
          to learn more about the solution challenge.
        </p>
      </div>
    </div>
  );
};
export default SolutionChallenge;
