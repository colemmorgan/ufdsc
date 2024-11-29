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
        },
      );
  };

  return (
    <div className="mx-auto col-span-2 lg:col-span-4 p-6 bg-white rounded-2xl sm:rounded-3xl" id="contact">
      <h4 className="text-2xl font-medium">Contact</h4>
      <div className="grid gap-6 lg:gap-10 pt-3 sm:pt-6 lg:grid-cols-2">
        <div className="lg:pr-5">
          <p className="text-sm font-light leading-relaxed sm:text-lg">
            We're here to help! If you have any questions, suggestions, or
            comments about the UFDSC, please feel free to reach out to us using
            the contact form below. Otherwise, you can reach out to an officer
            on discord.
          </p>
          <p className="mt-4 text-sm font-light leading-relaxed sm:text-base">
            We will respond to all questions sent through this form in at most
            24-48 hours.
          </p>
        </div>
        <form
          action=""
          className="flex flex-col gap-5"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="">
            <label htmlFor="email" className="text-sm sm:text-base">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="user_email"
              required
              className="mt-1 w-full border-b border-gray-300 py-1 outline-none sm:py-2 sm:text-base"
              placeholder="email@email.com"
            />
          </div>
          <div className="">
            <label htmlFor="username" className="text-sm sm:text-base">
              Name
            </label>
            <input
              type="text"
              id="username"
              name="user_name"
              required
              className="mt-1 w-full border-b border-gray-300 py-1 outline-none sm:py-2 sm:text-base"
              placeholder="John Doe"
            />
          </div>
          <div className="">
            <label htmlFor="message" className="text-sm sm:text-base">
              Message
            </label>
            <textarea
              name="message"
              required
              id="message"
              className="mt-1 w-full resize-none border-b border-gray-300 py-1 outline-none sm:py-2 sm:text-base"
              rows={1}
              placeholder="Your message here"
            ></textarea>
          </div>
          <button
            className="flex justify-center rounded-md bg-blue py-1.5 text-center text-sm text-white sm:py-2"
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
              "Success! Feel free to send another message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact