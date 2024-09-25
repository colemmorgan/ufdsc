import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";


const faqs = [
  {
    question: "Do I need programming experience to join?",
    answer:
      "No, but most projects require that you be willing to learn. All skill levels are welcome, our tech leads will often host workshops, share resources & advice, and provide all the help that you need to get started.",
  },
  {
    question: "Who should I reach out to if I have questions?",
    answer:
      "The quickest way to get in touch with the team is to reach out to an officer on discord. Otherwise, you can send us a message from the contact form below.",
  },
  {
    question: "How frequently do events and workshops occur?",
    answer:
      "We try to have as many as possible during the semester. Join our Discord to stay updated.",
  },
  {
    question: "What should I bring to the workshops?",
    answer:
      "You should bring a notebook, pen, laptop, and most importantly, a curious mind.",
  },
  {
    question: "Why should I join?",
    answer:
      "Joining the UFDSC is a great way to gain experience for your CV and develop a strong project portfolio. Working on open source projects or leading a group as a tech-lead positively distinguishes you from other job applicants.",
  },
];

const Faq: React.FC = () => {
  return (
    <section className="pt-28 sm:pb-10" id="faq">
      <div className="flex justify-between pb-3 px-4 sm:px-10 max-w-[1280px] mx-auto mb-4">
        <p className="text-xl sm:text-2xl lg:text-3xl font-medium">
          Frequently Asked Questions
        </p>
      </div>
      <div className="border-b border-[#404040]">
        {faqs.map((faq) => (
          <FaqTab
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </section>
  );
};

export default Faq;

type FaqTabProps = {
  question: string;
  answer: string;
};

const FaqTab: React.FC<FaqTabProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div
      className={`border-t border-[#404040] py-5 sm:py-6 ${
        isOpen ? "" : "hover:bg-[#242424]"
      } cursor-pointer transition-all`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="max-w-[1260px] mx-auto px-6 sm:px-10">
        <div className={`flex justify-between items-center `}>
          <p className="pr-8 text-lg sm:text-xl">{question}</p>
          <span
            className={`text-xl sm:text-2xl text-button-blue ${
              isOpen && "rotate-180"
            } transition-all`}
          >
            <FaChevronDown />
          </span>
        </div>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.p
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1}}
              exit={{ height: 0, opacity:0}}
              transition={{ duration: 0.2,  }}
              className={`md:text-lg  font-light leading-relaxed mt-4`}
            >
              {answer}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
