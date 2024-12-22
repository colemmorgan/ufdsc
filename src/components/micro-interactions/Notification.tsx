import { AnimatePresence, easeOut, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";

const notifications = [
  { name: "Moinak Dey", time: "5m Ago" },
  { name: "Harshil Pahuja", time: "10m Ago" },
  { name: "Oliver Jen", time: "15m Ago" },
  { name: "CJ Alexander", time: "20m Ago" },
  { name: "Paraman Galipalli", time: "Just Now" },
];

export default function Notification() {
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
        setValue((prevValue) => (prevValue + 1) % notifications.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative flex w-full items-center justify-center p-4">
      <div className="mx-6 h-16 w-full rounded-xl border border-grayer bg-[#fafafa] shadow-sm" />
      <div className="absolute top-2 h-16 w-[calc(100%-56px)] rounded-xl border border-grayer bg-[#fafafa] shadow-sm" />

      <AnimatePresence>
        <AnimatedNotification key={value} name={notifications[value].name} time={notifications[value].time}/>
      </AnimatePresence>
    </div>
  );
}

type AnimatedNotificationProps = {
  name: string;
  time: string;
};

const AnimatedNotification: React.FC<AnimatedNotificationProps> = ({name,time}) => {
  return (
    <motion.div 
    initial={{x:30, opacity:0}}
    animate={{x:0, opacity:1}}
    transition={{duration: 0.6, ease: easeOut}}
    className="absolute -top-4 flex h-20 w-[calc(100%-24px)] rounded-xl border border-grayer bg-[#fafafa] px-5 py-3.5 shadow-sm">
      <div className="flex items-center">
        <figure className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue text-xl text-white">
          <FaLinkedinIn />
        </figure>
      </div>
      <div className="w-full pl-5">
        <div className="flex w-full items-center justify-between">
          <p>New Notication</p>
          <p className="text-sm font-light">{time}</p>
        </div>
        <p className="pt-0.5 text-sm text-dull">
          {name} would like to connect with you!
        </p>
      </div>
    </motion.div>
  );
};
