import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const faqs = [
  {
    question: "Do I need programming experience to join?",
    answer:
      "All skill levels are welcome, but our projects require that you be willing to learn. Our tech leads will often host workshops, share resources & advice, and provide all the help that you need to get started.",
  },
  {
    question: "Who should I reach out to if I have questions?",
    answer:
      "The quickest way to get in touch with the team is to reach out to an officer on discord.",
  },
  {
    question: "How frequently do events and workshops occur?",
    answer:
      "Our technical leads host biweekly workshops, and we host numerous social events throughout the semester. Join our Discord to stay updated.",
  },
  {
    question: "What should I bring to the workshops?",
    answer:
      "You should bring a notebook, pen, laptop, and most importantly, a curious mind.",
  },
  {
    question: "Why should I join?",
    answer:
      "Joining the UF Google Developer Group on Campus is a great way to gain experience for your CV and develop a strong project portfolio. Working on open source projects or leading a group as a tech-lead positively distinguishes you from other job applicants.",
  },
];
export default function FAQ() {
  return (
    <div className="px-4 py-16 sm:py-20" id="faq">
      <h3 className="cal text-center text-3xl md:text-4xl">
        Frequently Asked Questions
      </h3>
      <p className="pt-3 text-center text-dull">
        For any questions you may still have.
      </p>
      <div className="mx-auto mt-10 max-w-4xl sm:mt-12">
        {faqs.map((faq, index) => (
          <FaqTab key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

type FaqTabProps = {
  question: string;
  answer: string;
};

const FaqTab: React.FC<FaqTabProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div
      className="my-5 w-full cursor-pointer border-b border-grayer pb-3 tracking-wide sm:pb-4"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between">
        <p className="pr-3 text-sm sm:text-base">{question}</p>
        <span
          className={`text-dull ${isOpen ? "rotate-180" : ""} transition-all`}
        >
          <FaChevronDown />
        </span>
      </div>
      {isOpen && (
        <div className="mt-4 text-sm leading-relaxed text-dull sm:text-base">
          {answer}
        </div>
      )}
    </div>
  );
};
