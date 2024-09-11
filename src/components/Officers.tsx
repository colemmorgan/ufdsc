import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

type OfficersProps = {};

type Officer = {
    name: string,
    role: string,
    img: string
};

const officers:Officer[] = [
    {
      name: "Moinak Dey",
      role: "President",
      img: "/photos/officer-img-placeholder.png"
    },
    {
      name: "Harshil Pahuja",
      role: "Vice President",
      img: "/photos/officer-img-placeholder.png",
    },
    {
      name: "Oliver Jen",
      role: "Treasurer",
      img: "/photos/officer-img-placeholder.png",
    },
    {
      name: "Paraman Galipalli",
      role: "Technical Lead",
      img: "/photos/officer-img-placeholder.png",
    },
    {
      name: "CJ Alexander",
      role: "Technical Lead",
      img: "/photos/officer-img-placeholder.png",
    },
    {
      name: "Mayank Garg",
      role: "Advertising Lead",
      img: "/photos/officer-img-placeholder.png",
    },
    {
      name: "Cole Morgan",
      role: "Webmaster",
      img: "/photos/officer-img-placeholder.png",
    },
  ];

const Officers: React.FC<OfficersProps> = () => {
  return (
    <div className="pt-28 max-w-[1380px] px-10 mx-auto pb-10">
      <h4 className="text-4xl font-medium text-center">Meet the Team</h4>
      <div className="flex flex-wrap gap-6 justify-center mt-16">
       {officers.map((officer, i) => (
        <OfficerDesc officer={officer} key={i}/>
       ))}
      </div>
    </div>
  );
};
export default Officers;





type OfficerProps = {
    officer: Officer
}

const OfficerDesc: React.FC<OfficerProps> = ({officer}) => {
  return (
    <div className="px-10 py-8 bg-white bs border border-light-gray flex flex-col items-center justify-center rounded-md max-w-72 w-full">
      <figure className="h-24 w-24 rounded-full border-[4px] border-blue bg-light-gray">
        <img src={officer.img} alt=""  className="w-full h-full rounded-full" loading="lazy"/>
      </figure>
      <p className="mt-6 text-lg font-medium">{officer.name}</p>
      <p className="text-sm mt-1 text-gray">{officer.role}</p>
      <div className="flex gap-3 mt-3 text-xl text-blue">
        <span>
          <FaLinkedin />
        </span>
        <span>
          <IoMdMail />
        </span>
      </div>
    </div>
  );
};
