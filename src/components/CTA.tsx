import Discord from "./micro-interactions/Discord";

export default function CTA() {
  return (
    <>
      <div className="mx-auto mt-5 sm:mt-6 flex max-w-[1280px] flex-col gap-12 xl:gap-0 xl:flex-row items-center overflow-hidden rounded-xl border border-gray bg-white px-4 lg:px-12 xl:px-0 xl:pb-16 xl:pl-12 py-12 sm:py-20 shadow-sm">
        <div className="xl:w-3/5 text-center xl:text-left px-2">
          <h1 className="cal text-4xl md:text-[52px] leading-tight md:leading-[1.125] ">
            Build<span className="hidden sm:inline-block">, Learn,</span> <span className="sm:hidden"> &</span> Innovate <br className="hidden xl:inline-block"/>
            with <br className="hidden sm:inline-block xl:hidden"/> Developer <br className="hidden xl:inline-block"/>
            Student Club
          </h1>

          <p className="pt-3 sm:pt-1 md:text-lg tracking-wider text-dull ">
            Learn Google Developer technologies as well as mobile <br className="hidden sm:inline-block"/>
            and web development skills essential for the industry.
          </p>
          <a
            href="https://discord.gg/waWVF8rHP8"
            target="_blank"
            className="mt-4 sm:mt-3 inline-block rounded-md bg-blue px-8 pt-2.5 pb-2 sm:py-2 text-sm tracking-wide text-white"
          >
            Join the Club!
          </a>
        </div>
        <div className="flex w-full sm:w-auto xl:w-2/5 flex-col xl:items-end">
          <Discord />
        </div>
      </div>

      <div className="mt-2">
        <div className="cal mx-auto max-w-[1280px] rounded-xl border border-gray bg-white px-4 sm:px-6 lg:px-10 py-6 shadow-sm tracking-wide">
          <p className="text-xl sm:text-2xl">
            A <span className="text-blue">G</span>
            <span className="text-red">o</span>
            <span className="text-yellow">o</span>
            <span className="text-blue">g</span>
            <span className="text-green">l</span>
            <span className="text-red">e</span> Developers program for
            university students.
          </p>
          <div className="mt-10 flex justify-between text-lg sm:text-xl">
            <p className="">500+ MEMBERS</p>
            <p>EST. 2020</p>
          </div>
        </div>
      </div>
    </>
  );
}
