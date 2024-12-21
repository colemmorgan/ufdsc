import Discord from "./micro-interactions/Discord";

export default function CTA() {
  return (
    <>
      <div className="bs mx-auto mt-6 flex max-w-[1280px] items-center overflow-hidden rounded-xl border border-gray bg-white pb-16 pl-12 pt-20 shadow-sm">
        <div className="w-3/5">
          <h1 className="cal text-[52px] leading-[1.125]">
            Build, Learn, Innovate <br />
            with Developer <br />
            Student Club
          </h1>

          <p className="pt-1 text-lg tracking-wider text-dull">
            Learn Google Developer technologies as well as mobile <br />
            and web development skills essential for the industry.
          </p>
          <a
            href=""
            className="mt-3 inline-block rounded-md bg-blue px-8 py-2 text-sm tracking-wide text-white"
          >
            Join the Club!
          </a>
        </div>
        <div className="flex w-2/5 flex-col items-end">
          <Discord />
        </div>
      </div>

      <div className="mt-2">
        <div className="bs cal mx-auto max-w-[1280px] rounded-xl border border-gray bg-white px-10 py-6 shadow-sm tracking-wide">
          <p className="text-2xl">
            A <span className="text-blue">G</span>
            <span className="text-red">o</span>
            <span className="text-yellow">o</span>
            <span className="text-blue">g</span>
            <span className="text-green">l</span>
            <span className="text-red">e</span> Developers program for
            university students.
          </p>
          <div className="mt-10 flex justify-between text-xl">
            <p className="">500+ MEMBERS</p>
            <p>EST. 2020</p>
          </div>
        </div>
      </div>
    </>
  );
}
