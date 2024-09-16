import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";

const Nav: React.FC = () => {
  // const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

  return (
    <nav className="shadow-nav bg-white fixed top-0 left-0 right-0 z-20">
     <div className="flex items-center px-10 py-4">
      <figure className="w-1/4">
        <img src="/nav-logo.png" alt="" className="w-12"/>
      </figure>
      <p className="w-1/2 text-center font-mediun"></p>
      <div className="flex justify-end gap-5 items-center w-1/4">
        <a href="" className="border border-gray text-button-blue text-sm py-1.5 px-5 rounded-full">Join Discord</a>
        <span className="text-3xl cursor-pointer"><IoMenu/></span>
      </div>
     </div>
    </nav>
  );
};
export default Nav;
