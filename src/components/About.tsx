export default function About() {
  return (
    <>
      <div className="col-span-2 flex min-h-60 sm:min-h-80 items-center justify-center rounded-2xl sm:rounded-3xl bg-blue p-4 sm:p-6">
        <p className="text-center text-xl sm:text-3xl font-medium sm:leading-[1.3725] text-white">
          Becoming a member is as easy as joining our{" "}
          <a
            className="underline"
            href="https://discord.gg/waWVF8rHP8"
            target="_blank"
          >
            discord!
          </a>{" "}
          Instantly gain access to Google perks and more.
        </p>
      </div>
      <div className="col-span-2 lg:min-h-80 rounded-2xl sm:rounded-3xl bg-white p-6">
        <h3 className="text-xl sm:text-2xl font-medium">About Developer Student Club</h3>
        <p className="mt-3 sm:text-lg leading-relaxed">
          Developer Student Club is a{" "}
          <span className="text-blue">project-based</span> club focused on
          helping members improve their{" "}
          <span className="text-blue">project development</span> skills.
        </p>
        <p className="text-sm sm:text-base mt-3 leading-relaxed">
          Our goal is to help members learn full-stack development and create
          their own applications. Whether you're a beginner or have some
          experience, we'll match you with teams and provide support to develop
          your skills and work on projects.
        </p>
        <a
          href="https://developers.google.com/community/gdsc"
          target="_blank"
          className="mt-3 inline-block underline text-sm"
        >
          Read more about Google Developer Student Clubs
        </a>
      </div>
    </>
  );
}
