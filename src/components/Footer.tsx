import React from "react";
import { IoLogoDiscord } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      <div className="bg-blue py-10 flex flex-col items-center p-10">
        <p className="text-2xl font-medium text-white">Stay in touch!</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 text-sm">
          <a
            href="https://discord.gg/b4GzPB36xy"
            target="_blank"
            className="bg-white rounded-md pt-2 pb-1.5 w-44 flex items-center justify-center gap-2"
          >
            <span className="text-blue text-xl">
              <IoLogoDiscord />
            </span>
            Discord
          </a>
          <a
            href="https://www.instagram.com/dsc.uf/"
            target="_blank"
            className="bg-white rounded-md pt-2 pb-1.5 w-44 flex items-center justify-center gap-2"
          >
            <span className="text-blue text-xl">
              <FaInstagram />
            </span>
            Instagram
          </a>
        </div>
      </div>
      <div className="px-6 sm:px-10 py-14 flex flex-col-reverse lg:flex-row justify-center bg-[#F8F9FA] gap-10 lg:gap-0">
        <div className="lg:border-r border-gray lg:pr-16 mt-6 lg:mt-0">
          <figure className="w-40 mb-3">
            <img src="/photos/dsc.png" alt="" />
          </figure>
          <p className="text-lg font-medium">UF Developer Student Club</p>
          <p className="mt-3 text-xs text-gray">
            © Copyright 2024 UF Developer Student Club. <br /> All Rights
            Reserved.
          </p>
        </div>
        <div className="flex flex-wrap justify-between lg:justify-start lg:pl-16 gap-x-16 gap-y-12">
          <div className="">
            <p>Socials</p>
            <div className="mt-4 text-sm flex flex-col gap-3 font-light">
              <a href="https://discord.gg/b4GzPB36xy" target="_blank">Discord</a>
              <a href="https://www.instagram.com/dsc.uf/" target="_blank">Instagram</a>
            </div>
          </div>
          <div className="">
            <p>Resources</p>
            <div className="mt-4 text-sm flex flex-col gap-3 font-light">
              <a href="https://developers.google.com/community/gdsc-solution-challenge" target="_blank">Solution Challenge</a>
              <a href="https://developers.google.com/community/gdsc" target="_blank">Google DSC</a>
            </div>
          </div>
          <div className="">
            <p>Features</p>
            <div className="mt-4 text-sm flex flex-col gap-3 font-light">
              <a href="#about">About</a>
              <a href="#officers">Officers</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
