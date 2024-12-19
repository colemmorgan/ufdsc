export default function Nav() {
  return (
    <nav className="mx-auto grid h-14 w-full grid-cols-6 items-center justify-between rounded-xl px-12 tracking-wide">
      <figure>
        <img src="/dsc.png" alt="" className="w-12" />
      </figure>
      <div className="col-span-4 flex justify-center gap-8 text-sm">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Officers</a>
      </div>
      <div className="flex justify-end">
        <a
          href=""
          className="col-span-1 rounded-md bg-black px-4 py-2 text-sm text-white"
        >
          Join Discord
        </a>
      </div>
    </nav>
  );
}
