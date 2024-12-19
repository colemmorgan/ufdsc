import Editor from "./micro-interactions/Editor";

export default function SolutionChallenge() {
  return (
    <div className="py-20">
      <h1 className="cal text-center text-4xl">
        Compete in Google Dev Competitions
      </h1>
      <p className="pt-3 text-center text-lg text-dull">
        Compete, collaborate, win prizes, and most importantly, learn.
      </p>
      <div className="mt-8 flex w-full rounded-xl border border-gray bg-white py-16 shadow-sm items-center">
        <div className="w-1/2 pl-12 pr-4">
          <p className="cal text-3xl leading-[1.125]">
            Compete in the Google DSC Solution Challenge this spring!
          </p>
         <div className="tracking-wide grid gap-3  text-dull mt-4 leading-relaxed">
         <p>
            The Solution Challenge is a contest where DSCs create innovative
            solutions to local community problems using Google products or
            platforms.
          </p>
          <p>
            We will begin creating teams and brainstorming ideas in January.
            Join our Discord to stay updated.
          </p>
          <p className="underline">Click here to learn more about the solution challenge.</p>
         </div>
        </div>
        <Editor/>
      </div>
    </div>
  );
}
