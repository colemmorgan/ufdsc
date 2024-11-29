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

export default function Faq() {
  return (
    <div className="col-span-2 lg:col-span-4 rounded-2xl sm:rounded-3xl bg-white p-6">
      <p className="text-xl font-medium sm:text-2xl">
        Frequently Asked Questions
      </p>
      <div className="mt-8">
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
      const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
      <div className="w-full border-b border-gray-300 pb-3 sm:pb-4 my-6 cursor-pointer " onClick={() => setIsOpen(!isOpen)}>
        <div className="flex justify-between items-center">
          <p className="font-medium text-sm sm:text-base pr-2 text-blue">{question}</p>
          <span className={`text-blue ${isOpen ? "rotate-180" : ""} transition-all`}>
            <FaChevronDown />
          </span>
        </div>
        {isOpen && <div className="mt-4 leading-relaxed text-sm sm:text-base">{answer}</div>}
      </div>
    );
  };
