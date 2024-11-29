export default function Hero() {
  return (
    <div className="col-span-2 flex flex-col rounded-2xl sm:rounded-3xl bg-white px-6 py-6 sm:min-h-[540px] sm:px-8 lg:col-span-3">
      <div className="flex justify-between">
        <p className="text-sm font-medium">Developer Student Club</p>
        <img src="/favicon.svg" alt="" className="w-10" />
      </div>
      <div className="pt-10 sm:pt-16">
        <span className="text-xs sm:text-sm">Join 500+ members!</span>
        <h1 className="pt-1 text-3xl sm:text-[40px] font-bold leading-tight">
          Build, Learn, <br />
          Innovate with DSC
        </h1>
        <h2 className="pt-1.5 sm:text-lg font-medium">
          Learn <span className="text-blue">Google Developer</span> technologies
          as well as mobile <br className="hidden sm:inline"/> and web development skills essential for
          the&nbsp;
          <span className="text-red">industry.</span>
        </h2>
        <a
          href="https://discord.gg/waWVF8rHP8"
          target="_blank"
          className="mt-2 inline-block rounded-md bg-blue px-8 py-2 text-sm text-white"
        >
          Join Discord
        </a>
      </div>

      <div className="flex-grow"></div>
      <div className="flex items-end justify-between">
        <p className="mt-12 pr-5 text-xs text-[#9AA0A6] sm:mt-0">
          A Google Developers program for university students.
        </p>
        <img
          src="/hero-img.png"
          alt=""
          className="hidden w-40 sm:block md:w-52"
        />
      </div>
    </div>
  );
}
