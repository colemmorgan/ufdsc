import React, { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { LuLoader2 } from "react-icons/lu";

type ContactProps = {};

const Contact: React.FC<ContactProps> = () => {
  const [emailState, setEmailState] = useState<
    "inactive" | "loading" | "error" | "sent"
  >("inactive");
  const form = useRef<HTMLFormElement | null>(null);
  const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;
  const service = import.meta.env.VITE_EMAIL_SERVICE;
  const template = import.meta.env.VITE_EMAIL_TEMPLATE;

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    setEmailState("loading");
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(service, template, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setEmailState("sent");
        },
        () => {
          setEmailState("error");
        }
      );
  };

  return (
    <div className="max-w-[1260px] mx-auto  pt-24 pb-32 sm:pb-44" id="contact">
      <div className="px-6 sm:px-10">
        <div className="flex justify-between pb-4 border-b border-[#cccccc]">
          <p className="text-2xl sm:text-4xl font-medium">Reach Out!</p>
          <img src="/star.svg" alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center md:items-start md:flex-row w-full md:px-10">
        <div className="md:pr-12 md:w-1/2 px-6 md:px-0">
          <p className="leading-relaxed mt-8 text-sm sm:text-xl font-light">
            We're here to help! If you have any questions, suggestions, or
            comments about the UFDSC, please feel free to reach out to us using
            the contact form below. Otherwise, you can reach out to an officer
            on discord.
          </p>
          <p className="leading-relaxed mt-4 text-sm sm:text-lg font-light">
            We will respond to all questions sent through this form in at most 24-48 hours.
          </p>
        </div>
        <form
          action=""
          className="mt-8 flex flex-col gap-5 px-6 md:px-0 w-full md:w-1/2"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="">
            <label htmlFor="email" className="text-sm sm:text-lg">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="user_email"
              required
              className="w-full border-b border-gray mt-1 py-1 sm:py-2 outline-none sm:text-lg"
              placeholder="email@email.com"
            />
          </div>
          <div className="">
            <label htmlFor="username" className="text-sm sm:text-lg">
              Name
            </label>
            <input
              type="text"
              id="username"
              name="user_name"
              required
              className="w-full border-b border-gray mt-1 py-1 sm:py-2 outline-none sm:text-lg"
              placeholder="John Doe"
            />
          </div>
          <div className="">
            <label htmlFor="message" className="text-sm sm:text-lg">
              Message
            </label>
            <textarea
              name="message"
              required
              id="message"
              className="w-full border-b border-gray mt-1 py-1 sm:py-2 outline-none resize-none sm:text-lg"
              rows={1}
              placeholder="Your message here"
            ></textarea>
          </div>
          <button
            className="text-sm bg-button-blue text-white py-1.5 sm:py-2 rounded-md flex justify-center text-center"
            type="submit"
          >
            {emailState === "loading" && (
              <span className="animate-spin text-xl">
                <LuLoader2 />
              </span>
            )}
            {emailState === "inactive" && "Submit"}
            {emailState === "error" && "Error. Please contact us on Discord"}
            {emailState === "sent" &&
              "Success!. Feel free to send another message"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
