import React, { useState } from "react";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

const features = [
  {
    img: "/photos/solution-challenge.png",
    title: "Google Solution Challenge 📝",
    desc: "The Solution Challenge is a contest held in the spring where DSCs create innovative solutions to local community problems using Google products or platforms. We will begin creating teams and brainstorming ideas in January. Join our Discord to stay updated.",
  },
  {
    img: "/photos/event-placeholder.webp",
    title: "Social Events 🎉",
    desc: "Join Developer Student Club for exciting social events and fun collaborations with other campus groups. Meet new people, expand your network, and enjoy tech-themed hangouts with a vibrant community of like-minded students!",
  },
  {
    img: "/photos/technical.png",
    title: "Technical Workshops ⚙️",
    desc: "Dive into hands-on coding sessions at our Technical Workshops. Learn practical skills, tackle real-world projects, and boost your tech know-how. From beginner-friendly intros to advanced topics, there's something for everyone!",
  },
];
const About: React.FC = () => {
  const [resultsLength,setResultsLength] = useState<number>(2)

  const toggleResults = () => {
    resultsLength === 2 ? setResultsLength(3) : setResultsLength(2);
  }
  return (
    <div className="mx-auto max-w-[1300px] px-6 sm:px-10 pt-16 sm:pt-24" id="about">
      <h3 className="text-2xl sm:text-3xl font-semibold">What We Do</h3>
      <div className="mt-4 sm:mt-6">
        <p className="text-2xl md:text-4xl lg:text-[40px] lg:leading-[1.3725]">
          Developer Student Club is a
          <span className="font-medium text-blue"> project-based</span> club
          focused on helping students improve their{" "}
          <span className="font-medium text-blue">project development </span>
          skills.
        </p>
        <p className="pt-3  sm:text-xl font-light leading-relaxed">
          Our goal is to help members learn full-stack development and create
          their own applications. Whether you're a beginner or have some
          experience, we'll match you with teams and provide support to develop
          your skills and work on projects.
        </p>
      </div>
      <div className="mt-8 grid lg:grid-cols-2  gap-x-5 gap-y-10">
        {features.slice(0,resultsLength).map((feature) => (
          <Feature
            key={feature.title}
            img={feature.img}
            title={feature.title}
            desc={feature.desc}
          />
        ))}
      </div>
      <div className="show-more-shadow mt-8 sm:mt-12 flex cursor-pointer items-center justify-between rounded-full px-6 py-2.5" onClick={toggleResults}>
        <span className="text-sm sm:text-base">{resultsLength === 2 ? "Show More" : "Show Less"}</span>
        <span className="sm:text-lg">
          {resultsLength === 2 ? <FaAngleDoubleDown /> : <FaAngleDoubleUp />}
        </span>
      </div>
      
    </div>
  );
};

export default About;

type FeatureProps = {
  img: string;
  title: string;
  desc: string;
};

const Feature: React.FC<FeatureProps> = ({ img, title, desc }) => {
  return (
    <div className="">
      <div className="flex sm:h-[400px] w-full items-center justify-center rounded-md bg-blue bg-opacity-70 p-6 sm:p-8">
        <img src={img} alt="" className="max-h-full rounded-md" />
      </div>
      <p className="mt-6 text-lg sm:text-xl font-medium">{title}</p>
      <p className="mt-2 pr-4 sm:text-lg">{desc}</p>
    </div>
  );
};
