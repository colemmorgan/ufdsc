import Spinner from "./micro-interactions/Spinner";
import Terminal from "./micro-interactions/Terminal";

export default function About() {
  return (
    <div className="py-20">
      <h2 className="cal mt-4 text-center text-4xl">
        Focused on Project-Based Learning
      </h2>
      <p className="pt-3 text-center text-lg text-dull">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod,
        explicabo?
      </p>
      <div className="mt-8 grid grid-cols-3 gap-4 tracking-wide">
        <div className="flex flex-col justify-between rounded-md border border-gray bg-white px-5 py-6 shadow-sm">
          <div>
            <span className="rounded-md bg-gray p-2 font-mono text-sm text-dull">
              01
            </span>
            <p className="mt-5 text-[18px] font-medium">Become a Member</p>
            <p className="mt-1.5 text-dull">
              Anyone can become a member! Membership is as simple as joining our
              Discord.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex">
              <figure className="-mr-6 rounded-full border-2 border-blue">
                <img
                  src="/photos/officers/moinak-dey.jpg"
                  alt=""
                  className="h-14 w-14 rounded-full"
                />
              </figure>
              <figure className="-mr-6 rounded-full border-2 border-red">
                <img
                  src="/photos/officers/oliver-jen.jfif"
                  alt=""
                  className="h-14 w-14 rounded-full"
                />
              </figure>
              <figure className="-mr-6 rounded-full border-2 border-yellow">
                <img
                  src="/photos/officers/cj-alexander.jfif"
                  alt=""
                  className="h-14 w-14 rounded-full"
                />
              </figure>
              <figure className="rounded-full border-2 border-green">
                <img
                  src="/photos/officers/harshil-pahuja.jfif"
                  alt=""
                  className="h-14 w-14 rounded-full"
                />
              </figure>
            </div>
            <span className="text-sm text-dull">+500 Members!</span>
          </div>
        </div>

        <div className="h-[380px] overflow-hidden rounded-md border border-gray bg-white shadow-sm">
          <div className="px-5 py-6">
            <span className="rounded-md bg-gray p-2 font-mono text-sm text-dull">
              02
            </span>
            <p className="mt-5 text-[18px] font-medium">
              Attend Technical Workshops
            </p>
            <p className="mt-1.5 text-dull">
              Anyone can become a member! Membership is as simple as joining our
              Discord.
            </p>
          </div>
          <Spinner />
        </div>

        <div className="flex h-[380px] flex-col justify-between rounded-md border border-gray bg-white px-5 shadow-sm">
          <div className="py-6">
            <span className="rounded-md bg-gray p-2 font-mono text-sm text-dull">
              03
            </span>
            <p className="mt-5 text-[18px] font-medium">
              Create with Other Developers
            </p>
            <p className="mt-1.5 text-dull">
              Anyone can become a member! Membership is as simple as joining our
              Discord.
            </p>
          </div>
          <Terminal />
        </div>
      </div>
    </div>
  );
}
