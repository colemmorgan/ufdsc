import ClubCards from "./micro-interactions/ClubCards";
import Languages from "./micro-interactions/Languages";
import Notification from "./micro-interactions/Notification";

export default function Events() {
  return (
    <div className="my-20">
      <h2 className="cal text-center text-4xl">Types of Events We Host</h2>
      <p className="pt-3 text-center text-lg text-dull">
        Compete, collaborate, win prizes, and most importantly, learn.
      </p>
      <div className="mt-8 grid grid-cols-2 gap-8 tracking-wide">
        <div className="flex flex-col justify-between rounded-xl border border-gray bg-white p-8 shadow-sm">
          <div>
            <p className="text-xl font-medium">Technical Workshops</p>
            <p className="pt-3 text-dull">
              Enhance your skills with hands-on technical workshops covering
              topics like app development, machine learning, cloud computing,
              and software engineering tools.
            </p>
          </div> 
          <div className="flex items-center justify-center pb-4">
            <Languages/>
          </div>
        </div>

        <div className="h-96 rounded-xl border border-gray bg-white p-8 shadow-sm">
          <p className="text-xl font-medium">General Board Meetings</p>
          <p className="pt-3 text-dull">
            Stay informed and connected through our General Board Meetings,
            featuring club updates, upcoming events, and opportunities to engage
            with our community.
          </p>
        </div>
        <div className="flex h-96 flex-col justify-between rounded-xl border border-gray bg-white p-8 shadow-sm">
          <div>
            <p className="text-xl font-medium">Social Events</p>
            <p className="pt-3 text-dull">
              Join us for engaging social events like hackathons, coding
              challenges, networking mixers, and workshops that foster
              collaboration and fun!
            </p>
          </div>
          <Notification />
        </div>

        <div className="flex flex-col justify-between overflow-hidden rounded-xl border border-gray bg-white p-8 pb-0 shadow-sm">
          <div>
            <p className="text-xl font-medium">Club Collaborations</p>
            <p className="pt-3 text-dull">
              Collaborate with tech-focused clubs to host joint workshops,
              hackathons, and networking events, fostering innovation and
              building a vibrant community.
            </p>
          </div>
          <div className="relative flex w-full justify-center">
            <div className="h-[190px] w-72 rounded-xl border border-gray" />
            <div className="absolute -bottom-0.5 h-44 w-80 rounded-xl rounded-b-none border border-grayer bg-white">
              <ClubCards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
