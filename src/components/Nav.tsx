import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";

const Nav: React.FC = () => {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

  return (
    <nav className="shadow-nav bg-white fixed top-0 left-0 right-0 z-10">
      <div className="h-[68px] flex justify-between items-center px-6 sm:px-10 ">
        <figure className="w-28 sm:w-36">
          <img src="/photos/dsc.png" alt="" />
        </figure>
        <span
          className="text-4xl cursor-pointer md:hidden"
          onClick={() => setShowMobileNav(!showMobileNav)}
        >
          <IoMenu />
        </span>
        <ul className="hidden md:flex gap-6 text-black text-sm ">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#officers">Officers</a>
          </li>
          <li>
            <a href="#become-a-member">Become a Member</a>
          </li>
        </ul>
      </div>
      {showMobileNav && (
        <div className="flex flex-col w-full">
          <a
            href="#"
            className="py-2.5 px-4 border-t border-light-gray hover:bg-light-gray cursor-pointer transition-all"
            onClick={() => setShowMobileNav(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="py-2.5 px-4 border-t border-light-gray hover:bg-light-gray cursor-pointer transition-all"
            onClick={() => setShowMobileNav(false)}
          >
            About
          </a>
          <a
            href="#officers"
            className="py-2.5 px-4 border-t border-light-gray hover:bg-light-gray cursor-pointer transition-all"
            onClick={() => setShowMobileNav(false)}
          >
            Officers
          </a>
          <a
            href="#become-a-member"
            className="py-2.5 px-4 border-t border-light-gray hover:bg-light-gray cursor-pointer transition-all"
            onClick={() => setShowMobileNav(false)}
          >
            Become a Member
          </a>
        </div>
      )}
    </nav>
  );
};
export default Nav;
