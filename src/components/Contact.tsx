import React, { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(service, template, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div className="max-w-[1180px] mx-auto  pt-10 pb-32 sm:pb-44 ">
      <div className="">
        <div className="px-6 sm:px-10">
          <p className="text-2xl sm:text-3xl font-medium">Contact</p>
          <p className="leading-relaxed mt-3 text-sm sm:text-lg">
            We're here to help! If you have any questions, suggestions, or
            comments about the UFDSC, please feel free to reach out to us using
            the contact form below. Otherwise, you can reach out to an officer
            on discord.
          </p>
        </div>
        <form
          action=""
          className="mt-8 flex flex-col gap-5 px-6 sm:px-10"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="">
            <label htmlFor="email" className="text-sm">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="user_email"
              required
              className="w-full border-b border-gray mt-1 py-1 outline-none "
              placeholder="email@email.com"
            />
          </div>
          <div className="">
            <label htmlFor="username" className="text-sm">
              Name
            </label>
            <input
              type="text"
              id="username"
              name="user_name"
              required
              className="w-full border-b border-gray mt-1 py-1 outline-none "
              placeholder="John Doe"
            />
          </div>
          <div className="">
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              name="message"
              required
              id="message"
              className="w-full border-b border-gray mt-1 py-1 outline-none resize-none"
              rows={1}
              placeholder="Your message here"
            ></textarea>
          </div>
          <button
            className="text-sm bg-button-blue text-white pt-2 pb-1.5 rounded-md"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
