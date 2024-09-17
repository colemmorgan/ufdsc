import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

const navTabs = [
  {
    content: "Join Discord  / Become a Member",
    isLink: true,
    src: "https://discord.gg/b4GzPB36xy",
  },
  { content: "About UFDSC", isLink: false, src: "about" },
  { content: "Meet the Team", isLink: false, src: "officers" },
  { content: "Frequently Asked Questions", isLink: false, src: "faq" },
  { content: "Contact", isLink: false, src: "contact" },
];

const Nav: React.FC = () => {
  const [showPopoutNav, setShowPopoutNav] = useState<boolean>(false);
  const [popoutHeight, setPopoutHeight] = useState<number>(0);
  const popoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (popoutRef?.current) {
      setPopoutHeight(popoutRef.current.scrollHeight);
    }
  }, [showPopoutNav]);

  return (
    <nav className="shadow-nav bg-white fixed top-0 left-0 right-0 z-20">
      <div className="flex items-center px-6 sm:px-10 py-4">
        <figure className="w-2/5">
          <img src="/nav-logo.png" alt="" className="w-12" />
        </figure>
        <div className="w-1/5 flex justify-center">
          <span className="hidden sm:block">
            <img src="/star.svg" alt="" />
          </span>
        </div>
        <div className="flex justify-end gap-5 items-center w-2/5">
          <a
            href="https://discord.gg/b4GzPB36xy"
            target="_blank"
            className="hidden sm:block border border-gray text-button-blue text-sm py-1.5 px-5 rounded-full"
          >
            Join Discord
          </a>
          {showPopoutNav ? <span
            className="text-4xl cursor-pointer flex justify-center items-center max-w-[30px] max-h-[30px] scale-150"
            onClick={() => setShowPopoutNav(false)}
          >
            <IoIosClose/>
          </span>: <span
            className="text-3xl cursor-pointer"
            onClick={() => setShowPopoutNav(true)}
          >
            <IoMenu />
          </span>}
        </div>
      </div>
      <AnimatePresence initial={false}>
        {showPopoutNav && (
          <motion.div
            ref={popoutRef}
            className="flex flex-col text-xl sm:text-3xl lg:text-4xl font-light"
            initial={{ height: 0 }}
            animate={{ height: popoutHeight }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            {navTabs.map((tab, i) => (
              <NavTab
                key={tab.content}
                content={tab.content}
                index={i + 1}
                isLink={tab.isLink}
                src={tab.src}
                togglePopout={setShowPopoutNav}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default Nav;

type NavTabProps = {
  content: string;
  index: number;
  isLink: boolean;
  src: string;
  togglePopout: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavTab: React.FC<NavTabProps> = ({
  content,
  index,
  isLink,
  src,
  togglePopout,
}) => {
  return (
    <>
      {isLink ? (
        <a
          href={src}
          target="_blank"
          onClick={() => togglePopout(false)}
          className="py-6 px-6 sm:px-12 border-t border-[#cccccc] hover:bg-light-gray transition-all cursor-pointer"
        >
          <span className="font-medium">0{index}.</span> {content}
        </a>
      ) : (
        <a
          href={`#${src}`}
          onClick={() => togglePopout(false)}
          className="py-6 px-6 sm:px-12 border-t border-[#cccccc] hover:bg-light-gray transition-all cursor-pointer"
        >
          <span className="font-medium">0{index}.</span> {content}
        </a>
      )}
    </>
  );
};
