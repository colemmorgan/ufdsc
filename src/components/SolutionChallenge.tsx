export default function SolutionChallenge() {
  return (
    <>
      <div className="col-span-2 lg:min-h-80 rounded-2xl sm:rounded-3xl bg-white p-6">
        <p className="text-lg font-medium sm:text-2xl">
          Google DSC Solution Challenge
        </p>
        <div className="text-sm sm:text-base">
          <p className="mt-3 leading-relaxed">
            The Solution Challenge is a contest held in the spring where DSCs
            create innovative solutions to local community problems using Google
            products or platforms.
          </p>
          <p className="mt-3 leading-relaxed">
            We will begin creating teams and brainstorming ideas in January.
            Join our Discord to stay updated.
          </p>
          <a
            href="https://developers.google.com/community/gdsc-solution-challenge"
            target="_blank"
            className="mt-3 inline-block leading-relaxed underline"
          >
            Click here to learn more about the solution challenge.
          </a>
        </div>
      </div>
      <div className="col-span-2 flex sm:h-80 items-center justify-center rounded-2xl sm:rounded-3xl bg-green p-3 sm:p-6">
        <img
          src="/photos/solution-challenge.png"
          alt=""
          className="h-full rounded-xl"
        />
      </div>
    </>
  );
}
