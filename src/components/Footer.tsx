import { FaDiscord, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="border-t border-grayer pb-28 pt-24">
      <div className="mx-auto flex max-w-[1200px] px-3">
        <div className="whitespace-nowrap">
          <p className="cal text-3xl">Developer Student Club</p>
          <p className="pt-2 text-sm leading-relaxed text-dull">
            © Copyright 2024 UF Developer Student Club. <br /> All Rights
            Reserved.
          </p>
          <p className="pt-1 text-sm text-dull">
            Design inspired by{" "}
            <a href="" className="underline">
              Cal.com
            </a>
          </p>
          <div className="flex items-center gap-4 pt-3 text-[22px] text-dull">
            <FaGithub />
            <FaDiscord />
            <FaInstagram />
          </div>
          <p className="pt-3 text-sm leading-relaxed">
            Focused on helping members improve <br />
            their project development skills since 2020.
          </p>
        </div>
        <div className="grid w-full grid-cols-3 pl-32">
          <div>
            <p className="font-medium">Sections</p>
            <div className="grid gap-5 mt-5 text-sm pr-2">
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Officers</a>
              <a href="">FAQ</a>
            </div>
          </div>
          <div>
            <p className="font-medium">Links</p>
            <div className="grid gap-5 mt-5 text-sm pr-2">
              <a href="">Instagram</a>
              <a href="">Discord</a>
              <a href="">Source Code</a>
            </div>
          </div>
          <div>
            <p className="font-medium">DSC Info</p>
            <div className="grid gap-5 mt-5 text-sm pr-2">
              <a href="">About DSC</a>
              <a href="">Solution Challenge</a>
            </div>
          </div>
         
          
        </div>
      </div>
    </div>
  );
}
