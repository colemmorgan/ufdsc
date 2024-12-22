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
export default function FAQ() {
  return (
    <div className="py-20">
      <h3 className="cal text-center text-4xl">Frequently Asked Questions</h3>
      <p className="pt-3 text-center text-dull">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod,
        explicabo?
      </p>
      <div className="mt-12 max-w-4xl mx-auto">
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
      <div className="w-full border-b border-grayer pb-2 sm:pb-4 my-6 cursor-pointer tracking-wide" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex justify-between items-center">
          <p className="text-sm sm:text-base pr-2">{question}</p>
          <span className={`${isOpen ? "rotate-180" : ""} transition-all`}>
            <FaChevronDown />
          </span>
        </div>
        {isOpen && <div className="mt-4 leading-relaxed text-sm sm:text-base text-dull">{answer}</div>}
      </div>
    );
  };