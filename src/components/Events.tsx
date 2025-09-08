import ClubCards from "./micro-interactions/ClubCards";
import GBM from "./micro-interactions/GBM";
import Languages from "./micro-interactions/Languages";
import Notification from "./micro-interactions/Notification";

export default function Events() {
  return (
    <div className="py-16 sm:py-20">
      <h2 className="cal text-center text-3xl sm:text-4xl">Types of Events We Host</h2>
      <p className="pt-3 text-center sm:text-lg text-dull px-3">
        We have something fun for everyone.
      </p>
      <div className="mt-8 grid lg:grid-cols-2 gap-2 lg:gap-8 tracking-wide">
        <div className="flex flex-col justify-between rounded-xl border border-gray bg-white p-6 lg:p-8 shadow-sm">
          <div>
            <p className="text-lg sm:text-xl font-medium">Technical Workshops</p>
            <p className="pt-2 sm:pt-3 text-dull">
              Enhance your skills with hands-on technical workshops covering
              topics like app development, machine learning, cloud computing,
              and software engineering tools.
            </p>
          </div>
          <div className="flex items-center justify-center pb-4 pt-12 lg:pt-0">
            <Languages />
          </div>
        </div>

        <div className="rounded-xl border border-gray bg-white p-6 lg:p-8 shadow-sm flex flex-col justify-between">
          <div>
            <p className="text-lg sm:text-xl font-medium">General Body Meetings</p>
            <p className="pt-2 sm:pt-3 text-dull">
              Stay informed and connected through our General Body Meetings,
              featuring club updates, upcoming events, and opportunities to
              engage with our community.
            </p>
          </div>
          <GBM/>
        </div>
        <div className="flex  flex-col justify-between rounded-xl border border-gray bg-white p-6 lg:p-8 shadow-sm">
          <div>
            <p className="text-lg sm:text-xl font-medium">Social Events</p>
            <p className="pt-2 sm:pt-3 text-dull">
              Join us for engaging social events like hackathons, coding
              challenges, networking mixers, and workshops that foster
              collaboration and fun!
            </p>
          </div>
          <Notification />
        </div>

        <div className="flex flex-col justify-between overflow-hidden rounded-xl border border-gray bg-white pb-0 p-6 lg:p-8 lg:pb-0 shadow-sm">
          <div>
            <p className="text-lg sm:text-xl font-medium">Club Collaborations</p>
            <p className="pt-2 sm:pt-3 text-dull">
              Collaborate with tech-focused clubs to host joint workshops,
              hackathons, and networking events, fostering innovation and
              building a vibrant community.
            </p>
          </div>
          <div className="relative flex w-full justify-center pt-12 ">
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
