import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export default function Nav() {
  const [scrollY, setScrollY] = useState<number>(0);
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="sticky top-0 z-20 h-14 w-full max-w-[1200px] p-0 sm:py-2 sm:px-7 mx-auto">
        <div
          className={`mx-auto grid grid-cols-5 items-center justify-between sm:rounded-xl border border-grayer border-opacity-0 bg-white bg-opacity-0  p-[18px] sm:py-3 tracking-wide transition-all sm:px-6 lg:grid-cols-6 lg:px-10 
            ${scrollY > 0 ? "border-opacity-100 bg-opacity-100 shadow-md" : ""}`}
        >
          <figure className="col-span-2 lg:col-span-1">
            <img src="/dsc.png" alt="" className="w-11 sm:w-12" />
          </figure>
          <div className="col-span-4 hidden justify-center gap-9 text-sm lg:flex">
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#officers">Officers</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="col-span-3 flex justify-end gap-4 lg:col-span-1">
            <a
              href="https://discord.gg/waWVF8rHP8"
              target="_blank"
              className="rounded-md bg-blue px-4 pb-1.5 pt-2 text-xs text-white sm:py-2 sm:text-sm"
            >
              DSC Discord
            </a>
            <button
              className="text-2xl lg:hidden"
              onClick={() => setShowMobileNav(true)}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </nav>
      {showMobileNav && (
        <div className="fixed inset-0 z-20 bg-white">
          <div className="flex h-full flex-col items-center justify-center gap-8 text-3xl">
            <a href="#" onClick={() => setShowMobileNav(false)}>Home</a>
            <a href="#about" onClick={() => setShowMobileNav(false)}>About</a>
            <a href="#officers" onClick={() => setShowMobileNav(false)}>Officers</a>
            <a href="#faq" onClick={() => setShowMobileNav(false)}>FAQ</a>
            <div className="absolute top-6 right-4 cursor-pointer" onClick={() => setShowMobileNav(false)}><FaX/></div>
          </div>
        </div>
      )}
    </>
  );
}
