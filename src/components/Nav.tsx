import React, { useState } from "react";
import { FaDiscord, FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

type NavProps = {};

const Nav: React.FC<NavProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav className="fixed left-0 right-0 top-4 md:top-6 z-10 flex px-4">
      <div className="nav-shadow mx-auto w-full max-w-[800px] rounded-md md:rounded-full bg-white px-4">
        <div className="grid w-full grid-cols-12 py-1.5">
          <figure className="col-span-3 flex items-center">
            <img src="/nav-logo.png" alt="" className="max-w-11" />
          </figure>
          <div className="col-span-6 hidden items-center justify-center gap-8 text-sm md:flex">
            <a href="#about">About</a>
            <a href="#officers">Officers</a>
            <a href="#contact">Contact</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="col-span-9 flex items-center justify-end gap-4 md:col-span-3">
            <a
              href="https://discord.gg/b4GzPB36xy"
              target="_blank"
              className="flex items-center gap-2 rounded-full bg-blue px-5 py-2 text-xs text-white sm:text-sm"
            >
              {" "}
              Discord{" "}
              <span className="text-base sm:text-lg">
                <FaDiscord />
              </span>
            </a>
            {isOpen ? (
              <span
                className="flex max-h-[24px] max-w-[24px] cursor-pointer items-center justify-center overflow-hidden text-5xl md:hidden"
                onClick={() => setIsOpen(false)}
              >
                <IoClose />
              </span>
            ) : (
              <span
                className="cursor-pointer text-2xl md:hidden"
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
              className="py-3 border-t border-gray-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#officers"
              className="py-3 border-t border-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Officers
            </a>
            <a
              href="#faq"
              className="py-3 border-t border-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Faq
            </a>
            <a
              href="#contact"
              className="py-3 border-t border-gray-300"
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
