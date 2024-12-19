import Discord from "./micro-interactions/Discord";

export default function CTA() {
  return (
    <>
      <div className="border-gray bs mx-auto mt-4 flex max-w-[1280px] rounded-xl border bg-white pb-16 pl-12 pt-20 items-center overflow-hidden shadow-sm">
        <div className="w-3/5">
          <h1 className="text-[56px] leading-[1.125] cal">
            Build, learn, innovate <br />
            with Developer <br />
            Student Club
          </h1>

          <p className="text-dull pt-1 tracking-wider text-lg">
            Learn Google Developer technologies as well as mobile <br />
            and web development skills essential for the industry.
          </p>
          <a
            href=""
            className="mt-3 inline-block rounded-md bg-black px-8 py-2 text-sm tracking-wide text-white font-medium"
          >
            Join the Club!
          </a>
        </div>
        <div className="w-2/5 flex flex-col items-end">
        <Discord/>
        </div>
      </div>



      <div className="mt-2 ">
        <div className="border-gray bs mx-auto max-w-[1280px] rounded-xl border bg-white px-10 py-6 cal shadow-sm">
          <p className="text-3xl">
            A Google Developers program for university students.
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
