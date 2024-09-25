import React from "react";
import { FaPeopleGroup, FaCode } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa6";

type FeaturesProps = {};

const Features: React.FC<FeaturesProps> = () => {
  return (
    <div className="pt-24 sm:pt-36 pb-8 sm:pb-14 px-6 sm:px-10 max-w-[1280px] mx-auto flex flex-wrap gap-8 xl:gap-6 flex-col lg:flex-row justify-center">
      <div className="bg-[#1e1e1e] border border-[#383838] py-10 px-4 sm:px-6  lg:w-[370px] flex flex-col items-center rounded-lg bs">
        <div className="h-20 w-20 bs border border-[#383838] rounded-md flex items-center justify-center">
          <span className="text-purple text-4xl">
            <FaPeopleGroup />
          </span>
        </div>
        <p className="text-xl mt-6">Connect With Students</p>
        <p className="mt-4 text-center">
          Work alongside fellow students to build innovative projects, share
          knowledge, and learn from each other in a supportive community.
        </p>
      </div>
      <div className="bg-[#1e1e1e] border border-[#383838] py-10 px-4 sm:px-6  lg:w-[370px] flex flex-col items-center rounded-lg bs">
        <div className="h-20 w-20 bs border border-[#383838] rounded-md flex items-center justify-center">
          <span className="text-purple text-4xl">
            <FaCode />
          </span>
        </div>
        <p className="text-xl mt-6">Real World Technologies</p>
        <p className="mt-4 text-center">
          Join our project-based club to gain hands-on experience with
          real-world technologies like web development, mobile apps, and cloud
          computing
        </p>
      </div>
      <div className="bg-[#1e1e1e] border border-[#383838] py-10 px-4 sm:px-6 lg:w-[370px] flex flex-col items-center rounded-lg bs">
        <div className="h-20 w-20 bs border border-[#383838] rounded-md flex items-center justify-center">
          <span className="text-purple text-4xl">
            <FaTrophy />
          </span>
        </div>
        <p className="text-xl mt-6 text-center">
          Compete In Google Competitions
        </p>
        <p className="mt-4 text-center">
          Participate in Google Developer competitions to challenge your skills,
          solve real-world problems, and showcase your coding talents on a
          global stage.
        </p>
      </div>
    </div>
  );
};
export default Features;
