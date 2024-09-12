import React from "react";

const features = [
  {
    title: "Learn Real-World Technologies",
    desc: "Join our project-based club to gain hands-on experience with real-world technologies like web development, mobile apps, and cloud computing",
    color: "#4285F4",
  },
  {
    title: "Compete In Google Dev Competitions",
    desc: "Participate in Google Developer competitions to challenge your skills, solve real-world problems, and showcase your coding talents on a global stage.",
    color: "#FBBC04",
  },
  {
    title: "Collaborate With Other Students",
    desc: "Work alongside fellow students to build innovative projects, share knowledge, and learn from each other in a supportive community.",
    color: "#34A853",
  },
];

const Features: React.FC = () => {
  return (
    <div className=" bg-off-white border-y-2 border-light-gray">
      <div className="max-w-[1380px] mx-auto flex flex-col lg:flex-row h-full">
        {features.map((feature, index) => (
          <Feature
            key={index}
            title={feature.title}
            desc={feature.desc}
            color={feature.color}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};
export default Features;

type FeatureProps = {
  title: string;
  desc: string;
  color: string;
  index: number;
};

const Feature: React.FC<FeatureProps> = ({ title, desc, color, index }) => {
  return (
    // Last Feature should not have a border to the right
    <div
      className={`w-full lg:w-1/3 h-full px-6 lg:px-10 py-12 border-light-gray border-b-2 lg:border-b-0 ${
        index != 2 ? " lg:border-r-2" : ""
      }`}
    >
      <p className="font-medium text-lg sm:text-xl">{title}</p>
      <div
        className="mt-2 w-20 h-1 rounded-md"
        style={{ backgroundColor: color }}
      />
      <p className="mt-6  font-light leading-normal">{desc}</p>
    </div>
  );
};
