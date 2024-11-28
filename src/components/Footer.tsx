export default function Footer() {
  return (
    <div className=" col-span-2 lg:col-span-4 flex flex-col justify-between rounded-3xl bg-black p-6 text-white md:flex-row">
      <div className="flex flex-col justify-between">
        <p className="text-lg font-medium">Thank you for coming!</p>
        <div>
          <img src="/favicon.svg" alt="" className="w-10 md:w-12 mt-6 md:mt-12" />
          <p className="pt-3 md:pt-4 nd:text-lg">UF Developer Student Club</p>
          <p className="mt-1.5 text-xs text-[#898989]">
            © Copyright 2024 UF Developer Student Club. All Rights Reserved.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:items-end justify-between mt-9 md:mt-0">
        <ul className="flex gap-4 text-sm">
          <a href="https://discord.gg/waWVF8rHP8" target="_blank">
            Discord
          </a>
          <a href="https://www.instagram.com/dsc.uf/" target="_blank">
            Instagram
          </a>
          <a href="#">Home</a>
        </ul>
        <p className="text-xs text-[#898989] mt-6">
          Developed by{" "}
          <a href="https://www.colemorgan.me/" target="_blank" className="underline">
            Cole Morgan
          </a>
        </p>
      </div>
    </div>
  );
}
