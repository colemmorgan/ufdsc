import React from "react";
import { FaInstagram, FaDiscord } from "react-icons/fa";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      <div className="mt-24 flex flex-col items-center bg-blue p-10 sm:mt-32">
        <p className="text-2xl font-medium text-white">Stay in touch!</p>
        <div className="mt-6 flex flex-col gap-4 text-sm sm:flex-row">
          <a
            href="https://discord.gg/b4GzPB36xy"
            target="_blank"
            className="flex w-44 items-center justify-center gap-2 rounded-md bg-white pb-1.5 pt-2"
          >
            <span className="text-xl text-blue">
              <FaDiscord />
            </span>
            Discord
          </a>
          <a
            href="https://www.instagram.com/dsc.uf/"
            target="_blank"
            className="flex w-44 items-center justify-center gap-2 rounded-md bg-white pb-1.5 pt-2"
          >
            <span className="text-xl text-blue">
              <FaInstagram />
            </span>
            Instagram
          </a>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-center gap-10 bg-[#F8F9FA] px-6 py-14 sm:px-10 lg:flex-row lg:gap-0">
        <div className="mt-6 border-gray-300 lg:mt-0 lg:border-r lg:pr-16">
          <figure className="mb-3 w-40">
            <img src="/photos/dsc.png" alt="" />
          </figure>
          <p className="text-lg font-medium">UF Developer Student Club</p>
          <p className="mt-3 text-xs opacity-80">
            © Copyright 2024 UF Developer Student Club. <br /> All Rights
            Reserved.
          </p>
        </div>
        <div className="flex flex-wrap justify-between gap-x-16 gap-y-12 lg:justify-start lg:pl-16">
          <div className="">
            <p>Socials</p>
            <div className="mt-4 flex flex-col gap-3 text-sm font-light">
              <a href="https://discord.gg/b4GzPB36xy" target="_blank">
                Discord
              </a>
              <a href="https://www.instagram.com/dsc.uf/" target="_blank">
                Instagram
              </a>
            </div>
          </div>
          <div className="">
            <p>Resources</p>
            <div className="mt-4 flex flex-col gap-3 text-sm font-light">
              <a
                href="https://developers.google.com/community/gdsc-solution-challenge"
                target="_blank"
              >
                Solution Challenge
              </a>
              <a
                href="https://developers.google.com/community/gdsc"
                target="_blank"
              >
                Google DSC
              </a>
            </div>
          </div>
          <div className="">
            <p>Features</p>
            <div className="mt-4 flex flex-col gap-3 text-sm font-light">
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
