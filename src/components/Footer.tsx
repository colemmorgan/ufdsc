import React from "react";
import { IoLogoDiscord } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      <div className="bg-blue py-10 flex flex-col items-center">
        <p className="text-2xl font-medium text-white">Stay in touch!</p>
        <div className="mt-6 flex gap-4 text-sm">
          <a
            href=""
            className="bg-white rounded-md pt-2 pb-1.5 w-44 flex items-center justify-center gap-2"
          >
            <span className="text-blue text-xl">
              <IoLogoDiscord />
            </span>
            Discord
          </a>
          <a
            href=""
            className="bg-white rounded-md pt-2 pb-1.5 w-44 flex items-center justify-center gap-2"
          >
            <span className="text-blue text-xl">
              <FaInstagram />
            </span>
            Instagram
          </a>
        </div>
      </div>
      <div className="py-14 flex justify-center bg-[#F8F9FA]">
        <div className="border-r border-gray pr-16 ">
          <p className="text-lg font-medium">UF Developer Student Club</p>
          <p className=" flex items-center gap-2.5 mt-4">
            <span className="pb-1">
              <FaGithub />
            </span>
            Github
          </p>
          <p className="mt-3 text-xs text-gray">
            © Copyright 2024 UF Developer Student Club. <br /> All Rights
            Reserved.
          </p>
        </div>
        <div className="flex pl-16 gap-16">
          <div className="">
            <p>Socials</p>
            <div className="mt-4 text-sm flex flex-col gap-3 font-light">
              <p>Discord</p>
              <p>Instagram</p>
            </div>
          </div>
          <div className="">
            <p>Resources</p>
            <div className="mt-4 text-sm flex flex-col gap-3 font-light">
              <p>Solution Challenge</p>
              <p>Google DSC</p>
            </div>
          </div>
          <div className="">
            <p>Features</p>
            <div className="mt-4 text-sm flex flex-col gap-3 font-light">
              <p>About</p>
              <p>Officers</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
