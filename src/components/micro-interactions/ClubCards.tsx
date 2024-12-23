import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { useEffect, useState } from "react";

const clubs = [
  {
    icon: "/photos/club-icons/acm.png",
    name: "Association for Computing Machinery",
    desc: "Guide, prepare, and engage members for success in technology through our workshops, design team, and company-sponsored events!",
  },
  {
    icon: "/photos/club-icons/gud.png",
    name: "Gator User Design",
    desc: "Fostering a community of design-oriented individuals through workshops, events, and hands-on projects.",
  },
  {
    icon: "/photos/club-icons/ssd.png",
    name: "Society of Software Developers",
    desc: "Bridges the gap between academics and industry skills through weekly workshops, preparing members for careers in software development.",
  },
  {
    icon: "/photos/club-icons/clrstk.png",
    name: "ColorStack",
    desc: "Increasing the number of Black, Latinx & Indigenous Computer Science graduates who go on to launch rewarding technical careers.",
  },
  {
    icon: "/photos/club-icons/sec.png",
    name: "Software Engineering Club",
    desc: "Strives both to teach you real-world skills, and to get you an internship at FAANG/big tech through frequent workshops.",
  },
];

export default function ClubCards() {
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue((prevValue) => (prevValue + 1) % clubs.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <Card
        key={value}
        icon={clubs[value].icon}
        name={clubs[value].name}
        desc={clubs[value].desc}
      />
    </AnimatePresence>
  );
}

type CardProps = {
  icon: string;
  name: string;
  desc: string;
};

const Card: React.FC<CardProps> = ({ icon, name, desc }) => {
  return (
    <motion.div
      className="w-full px-[18px] py-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: easeInOut }}
    >
      <figure>
        <img src={icon} alt="" className="h-10 w-10 rounded-full" />
      </figure>
      <p className="mt-3 text-sm">{name}</p>
      <p className="pt-1.5 text-xs leading-relaxed tracking-wide text-dull">
        {desc}
      </p>
    </motion.div>
  );
};
