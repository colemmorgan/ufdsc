import React from "react";
import { FaLinkedin } from "react-icons/fa";

type OfficersProps = {};

type Officer = {
  name: string;
  role: string;
  img: string;
  linkedin?: string;
};

const officers: Officer[] = [
  {
    name: "Moinak Dey",
    role: "President",
    img: "/photos/officers/moinak-dey.jpg",
    linkedin: "https://www.linkedin.com/in/moinakdey/",
  },
  {
    name: "Harshil Pahuja",
    role: "Vice President",
    img: "/photos/officers/harshil-pahuja.jfif",
    linkedin: "https://www.linkedin.com/in/harshil-pahuja/",
  },
  {
    name: "Oliver Jen",
    role: "Treasurer",
    img: "/photos/officers/oliver-jen.jfif",
    linkedin: "https://www.linkedin.com/in/oliver-jen-ufl/",
  },
  {
    name: "Paraman Galipalli",
    role: "Technical Lead",
    img: "/photos/officers/paraman-galipalli.jfif",
    linkedin: "https://www.linkedin.com/in/paraman-galipalli-754b80249/",
  },
  {
    name: "CJ Alexander",
    role: "Technical Lead",
    img: "/photos/officers/cj-alexander.jfif",
    linkedin: "https://www.linkedin.com/in/cj-alexander/",
  },
  {
    name: "Mayank Garg",
    role: "Advertising Lead",
    img: "/photos/officer-img-placeholder.png",
  },
  {
    name: "Cole Morgan",
    role: "Webmaster",
    img: "/photos/officers/cole-morgan.jpg",
    linkedin: "https://www.linkedin.com/in/cole-morgan-/",
  },
];

const Officers: React.FC<OfficersProps> = () => {
  return (
    <div className="pt-28 max-w-[1380px] px-6 sm:px-10 mx-auto pb-10" id="officers">
      <h4 className="text-3xl sm:text-4xl font-medium text-center">Meet the Team</h4>
      <div className="flex flex-wrap gap-6 justify-center mt-16">
        {officers.map((officer, i) => (
          <OfficerDesc officer={officer} key={i} />
        ))}
      </div>
    </div>
  );
};
export default Officers;

type OfficerProps = {
  officer: Officer;
};

const OfficerDesc: React.FC<OfficerProps> = ({ officer }) => {
  return (
    <div className="p-8 bg-white bs border border-light-gray flex flex-col items-center rounded-md sm:max-w-[272px] w-full">
      <figure className="h-24 w-24 rounded-full border-[4px] border-blue bg-light-gray">
        <img
          src={officer.img}
          alt=""
          className="w-full h-full rounded-full"
          loading="lazy"
        />
      </figure>
      <p className="mt-6 text-lg font-medium">{officer.name}</p>
      <p className="text-sm mt-1 text-gray">{officer.role}</p>

      {officer.linkedin && (
        <a
          href={officer.linkedin}
          target="_blank"
          className="text-blue mt-3 text-2xl cursor-pointer"
        >
          <FaLinkedin />
        </a>
      )}
    </div>
  );
};
