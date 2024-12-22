import { useEffect, useState } from "react";

export default function Nav() {
  const [scrollY, setScrollY] = useState<number>(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-20 h-14 w-full p-2">
      <div
        className={`mx-auto grid grid-cols-6 items-center justify-between rounded-xl border border-grayer border-opacity-0 bg-white bg-opacity-0 px-10 py-3 tracking-wide transition-all ${scrollY > 0 ? "border-opacity-100 bg-opacity-100 shadow-md" : ""}`}
      >
        <figure>
          <img src="/dsc.png" alt="" className="w-12" />
        </figure>
        <div className="col-span-4 flex justify-center gap-9 text-sm">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Officers</a>
          <a href="">FAQ</a>
        </div>
        <div className="flex justify-end">
          <a
            href=""
            className="col-span-1 rounded-md bg-blue px-4 py-2 text-sm text-white"
          >
            Join Discord
          </a>
        </div>
      </div>
    </nav>
  );
}
