import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

type NavProps = {};

const Nav: React.FC<NavProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav className="fixed z-50 top-2 sm:top-4 left-0 right-0 px-2 sm:px-6 md:px-10">
      <div className="max-w-[1200px] w-full mx-auto bg-[#101111] bg-opacity-40 border border-[#383838] rounded-2xl backdrop-blur-xl px-3 flex flex-col justify-center h-full py-[9px]">
        <div className="flex items-center justify-between">
          <figure className="flex gap-3 items-center">
            <img src="/nav-logo.png" alt="" className="w-10" />
            <span className="text-xs text-[#ffffffcc] hidden lg:inline-block">
              Developer Student Clubs
            </span>
          </figure>
          <div className="flex text-xs md:text-[13px] items-center">
            <div className="hidden md:flex items-center gap-8 lg:gap-10  text-[#ffffffcc]">
              <a href="#about">About</a>
              <a href="#officers">Officers</a>
              <a href="#faq">Faq</a>
              <a href="#contact">Contact</a>
            </div>
            <a
              href="https://discord.gg/b4GzPB36xy"
              target="_blank"
              className=" text-black font-semibold py-1.5 rounded-lg px-4 bg-purple md:ml-8 mr-4 md:mr-0"
            >
              Join Discord
            </a>
            {isOpen ? (
              <span
                className="text-5xl md:hidden max-w-[24px] max-h-[24px] overflow-hidden flex justify-center items-center cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <IoClose />
              </span>
            ) : (
              <span
                className="text-2xl md:hidden cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                <FaBars />
              </span>
            )}
          </div>
        </div>
        {isOpen && (
          <div className="flex flex-col mt-2 text-lg">
            <a
              href="#about"
              className="py-3 border-t border-[#484848]"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#officers"
              className="py-3 border-t border-[#484848]"
              onClick={() => setIsOpen(false)}
            >
              Officers
            </a>
            <a
              href="#faq"
              className="py-3 border-t border-[#484848]"
              onClick={() => setIsOpen(false)}
            >
              Faq
            </a>
            <a
              href="#contact"
              className="py-3 border-t border-[#484848]"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Nav;
