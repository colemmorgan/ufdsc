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
      "No, but most projects require that you be willing to learn. All skill levels are welcome, our tech leads will often host workshops, share resources & advice, and provide all the help that you need to get started.",
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
    question: "Do I need programming experience to join?",
    answer:
      "No, but most projects require that you be willing to learn. All skill levels are welcome, our tech leads will often host workshops, share resources & advice, and provide all the help that you need to get started.",
  },
];

const Faq: React.FC = () => {
  return (
    <div className="max-w-[1080px] px-10 mx-auto py-28 ">
      <p className="font-medium text-2xl">Frequently Asked Questions</p>
      <div className="mt-8">
      {faqs.map((faq,index) => (
        <FaqTab key={index} question={faq.question} answer={faq.answer}/>
      ))}
      </div>
    </div>
  );
};

export default Faq;

type FaqTabProps = {
  question: string;
  answer: string;
};

const FaqTab: React.FC<FaqTabProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div className="w-full border-b border-gray pb-4 my-6">
      <div className="flex justify-between items-center">
        <p className="font-medium text-lg">{question}</p>
        <span className={`text-gray cursor-pointer ${isOpen ? "rotate-180" : ""} transition-all`} onClick={() => setIsOpen(!isOpen)}>
          <FaChevronDown />
        </span>
      </div>
      {isOpen && <div className="mt-4 leading-relaxed">{answer}</div>}
    </div>
  );
};
