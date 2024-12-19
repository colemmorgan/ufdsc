import Spinner from "./micro-interactions/Spinner";
import Terminal from "./micro-interactions/Terminal";

export default function About() {
  return (
    <div className="py-20">
      <h1 className="cal text-center text-4xl">
        Focused on Project-Based Learning
      </h1>
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
          <div className="flex gap-4">
            <span className="h-16 w-16 rounded-full bg-gray" />
            <span className="h-16 w-16 rounded-full bg-gray" />
            <span className="h-16 w-16 rounded-full bg-gray" />
            <span className="h-16 w-16 rounded-full bg-gray" />
          </div>
        </div>

        <div className="h-[380px] rounded-md border border-gray bg-white shadow-sm overflow-hidden">
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
          <Spinner/>
        </div>

        <div className="h-[380px] rounded-md border border-gray bg-white shadow-sm px-5 flex flex-col justify-between">
        <div className="py-6">
            <span className="rounded-md bg-gray p-2 font-mono text-sm text-dull">
              03
            </span>
            <p className="mt-5 text-[18px] font-medium">Create with Other Developers</p>
            <p className="mt-1.5 text-dull">
              Anyone can become a member! Membership is as simple as joining our
              Discord.
            </p>
          </div>
          <Terminal/>
        </div>
      </div>
    </div>
  );
}
