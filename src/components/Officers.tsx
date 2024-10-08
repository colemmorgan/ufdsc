import React from "react";
import { FaLinkedin } from "react-icons/fa";

type OfficersProps = {};

type Officer = {
  name: string;
  role: string;
  img: string;
  desc: string;
  linkedin?: string;
};

const officers: Officer[] = [
  {
    name: "Moinak Dey",
    role: "President",
    img: "/photos/officers/moinak-dey.jpg",
    desc: "Grad Student/Intern at Mayo Clinic",
    linkedin: "https://www.linkedin.com/in/moinakdey/",
  },
  {
    name: "Harshil Pahuja",
    role: "Vice President",
    img: "/photos/officers/harshil-pahuja.jfif",
    desc: "Former intern at L3 Harris",
    linkedin: "https://www.linkedin.com/in/harshil-pahuja/",
  },
  {
    name: "Oliver Jen",
    role: "Treasurer",
    img: "/photos/officers/oliver-jen.jfif",
    desc: "Student Researcher at UF ML Lab",
    linkedin: "https://www.linkedin.com/in/oliver-jen-ufl/",
  },
  {
    name: "Paraman Galipalli",
    role: "Technical Lead",
    img: "/photos/officers/paraman-galipalli.jfif",
    desc: "Researcher at BioVision Lab",
    linkedin: "https://www.linkedin.com/in/paraman-galipalli-754b80249/",
  },
  {
    name: "CJ Alexander",
    role: "Technical Lead",
    img: "/photos/officers/cj-alexander.jfif",
    desc: "Information technology specialist",
    linkedin: "https://www.linkedin.com/in/cj-alexander/",
  },
  {
    name: "Mayank Garg",
    role: "Advertising Lead",
    img: "/photos/officer-img-placeholder.png",
    desc: "Graduate CS Student",
  },
  {
    name: "Cole Morgan",
    role: "Webmaster",
    img: "/photos/officers/cole-morgan.jpg",
    desc: "3 Hackathon Podium Finishes",
    linkedin: "https://www.linkedin.com/in/cole-morgan-/",
  },
];

const Officers: React.FC<OfficersProps> = () => {
  return (
    <div className="mx-auto max-w-[1300px] px-6 sm:px-10 pt-16 sm:pt-24" id="officers">
      <h3 className="text-2xl sm:text-3xl font-semibold">Meet the Team</h3>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6">
       {officers.map((officer) => (
        <Officer key={officer.name} officer={officer}/>
       ))}
      </div>
    </div>
  );
};

export default Officers;

type OfficerProps = {
  officer: Officer;
};

const Officer: React.FC<OfficerProps> = ({ officer }) => {
  return (
    <div className="nav-shadow col-span-1 rounded-md border border-[#DADADA] px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xl font-medium">{officer.name}</p>
          <p className="pt-0.5 text-sm text-[#9AA0A6]">{officer.role}</p>
        </div>
        <figure>
          <img
            src={officer.img}
            alt=""
            className="w-16 rounded-full"
          />
        </figure>
      </div>
      <p className="mt-6 text-sm">&#x2022; {officer.desc}</p>
      <a
        href={officer.linkedin}
        target="_blank"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full border border-blue py-1 text-sm text-blue hover:bg-blue hover:text-white transition-all"
      >
        View LinkedIn
        <span className="text-base"><FaLinkedin/></span>
      </a>
    </div>
  );
};
