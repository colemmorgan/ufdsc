import React from "react";
import { FaDiscord, FaInstagram } from "react-icons/fa";

type SocialsProps = {};

const Socials: React.FC<SocialsProps> = () => {
  return (
    <div className="mx-auto max-w-[1300px] px-6 pt-16 sm:pt-24 sm:px-10">
      <h3 className="text-2xl sm:text-3xl font-semibold">Where To Find Us</h3>
      <div className="mt-8 grid gap-x-5 gap-y-10 lg:grid-cols-2">
        <div className="">
          <div className="flex items-center gap-4">
            <span className="rounded-md border border-blue p-3 text-5xl text-blue">
              <FaDiscord />
            </span>
            <div className="">
              <p className="text-2xl font-medium">Discord</p>
              <p className="pt-0.5 text-sm">Join 422 other developers!</p>
            </div>
          </div>
          <p className="pr-4 pt-5 font-light leading-relaxed sm:text-xl">
            Discord serves as our primary communication platform. It's the go-to
            spot to chat with club officers and hang out with other members. You
            can easily message people and connect with your peers here.&nbsp;
            <a
              href="https://discord.gg/b4GzPB36xy"
              target="_blank"
              className="underline"
            >
              Join our Discord.
            </a>
          </p>
        </div>
        <div className="">
          <div className="flex items-center gap-4">
            <span className="rounded-md border border-blue p-3 text-5xl text-blue">
              <FaInstagram />
            </span>
            <div className="">
              <p className="text-2xl font-medium">Instagram</p>
              <p className="pt-0.5 text-sm">Join 588 other developers!</p>
            </div>
          </div>
          <p className="pt-5 font-light leading-relaxed sm:text-xl">
            Instagram is our backup way to stay in touch. We'll post all the
            important stuff about meetings here, plus share cool pics and
            stories from our get-togethers. &nbsp;
            <a
              href="https://www.instagram.com/dsc.uf/"
              target="_blank"
              className="underline"
            >
              Follow our Instagram.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Socials;
