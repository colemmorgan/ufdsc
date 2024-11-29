import { FaDiscord, FaInstagram } from "react-icons/fa";

export default function LandingGrid() {
  return (
    <>
      <div className="col-span-1">
        <a
          href="https://discord.gg/waWVF8rHP8"
          target="_blank"
          className="flex flex-col items-center justify-center rounded-2xl sm:rounded-3xl bg-blue text-white min-h-40"
        >
          <span className="text-6xl">
            <FaDiscord />
          </span>
          <p className="pt-1 text-sm sm:text-base">Join our Discord!</p>
        </a>
      </div>
      <div className="col-span-1">
        <a
          href="https://www.instagram.com/dsc.uf/"
          target="_blank"
          className="flex flex-col items-center justify-center rounded-2xl sm:rounded-3xl bg-yellow text-white min-h-40"
        >
          <span className="text-6xl">
            <FaInstagram />
          </span>
          <p className="text-sm sm:text-base pt-1">Follow us on Instagram!</p>
        </a>
      </div>
      <div className="flex col-span-1 flex-col items-center justify-center rounded-2xl sm:rounded-3xl bg-red text-white min-h-40 lg:col-span-1">
        <p className="text-[40px] font-bold">2020</p>
        <p className="text-sm sm:text-base">Founding Date</p>
      </div>
      <div className="flex col-span-1 flex-col items-center justify-center rounded-2xl sm:rounded-3xl bg-green text-white min-h-40 lg:col-span-1">
        <p className="text-[40px] font-bold">500+</p>
        <p className="text-sm sm:text-base">Club Members</p>
      </div>
    </>
  );
}
