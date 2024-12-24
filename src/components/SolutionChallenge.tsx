import Editor from "./micro-interactions/Editor";

export default function SolutionChallenge() {
  return (
    <div className="py-16 sm:py-20">
      <div className="px-4">
        <h2 className="cal text-3xl sm:text-4xl text-center">
          Compete in Google Dev Competitions
        </h2>
        <p className="pt-3 text-center text-dull sm:text-lg">
          Compete, collaborate, win prizes, and most importantly, learn.
        </p>
      </div>
      <div className="mt-8 flex flex-col gap-12 lg:gap-0 lg:flex-row w-full items-center overflow-hidden rounded-xl border border-gray bg-white py-10 sm:py-16 shadow-sm">
        <div className="lg:w-1/2 px-6 lg:px-0 lg:pl-12 lg:pr-4 ">
          <p className="cal text-2xl sm:text-3xl leading-[1.125]">
            Compete in the Google DSC Solution Challenge this spring!
          </p>
          <div className="mt-4 grid gap-3 leading-relaxed tracking-wide text-dull text-[15px] sm:text-base">
            <p>
              The Solution Challenge is a contest where DSCs create innovative
              solutions to local community problems using Google products or
              platforms.
            </p>
            <p>
              We will begin creating teams and brainstorming ideas in January.
              Join our Discord to stay updated.
            </p>
            <a href="https://developers.google.com/community/gdsc-solution-challenge" target="_blank" className="underline">
              Click here to learn more about the solution challenge.
            </a>
          </div>
        </div>
        <Editor />
      </div>
    </div>
  );
}
