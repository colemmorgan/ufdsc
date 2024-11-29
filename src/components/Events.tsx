import { FaCalendar } from "react-icons/fa";

export default function Events() {
  return (
    <>
      <div className="flex h-40 sm:h-[200px] flex-col items-center justify-center gap-3 rounded-2xl sm:rounded-3xl bg-white">
        <span className="text-5xl">
          <FaCalendar />
        </span>
        <p className="text-lg sm:text-2xl font-medium">Events we host:</p>
      </div>
      <div className="relative flex h-40 sm:h-[200px] items-center justify-center rounded-2xl sm:rounded-3xl bg-blue">
        <span className="absolute top-2 rounded-full bg-white px-3 py-1 text-[11px] sm:text-xs text-black">
          Technical Workshops
        </span>
        <img
          src="/photos/technical-workshops.png"
          alt=""
          className="mt-1 h-32 sm:h-[150px] rounded-md"
        />
      </div>
      <div className="relative flex h-40 sm:h-[200px] items-center justify-center rounded-2xl sm:rounded-3xl bg-red">
        <span className="absolute top-2 rounded-full bg-white px-3 py-1 text-[11px] sm:text-xs text-black">
          General Board Meetings
        </span>
        <img
          src="/photos/gbm.jpg"
          alt=""
          className="mt-1 h-32 sm:h-[150px] rounded-md"
        />
      </div>
      <div className="relative flex h-40 sm:h-[200px] items-center justify-center rounded-2xl sm:rounded-3xl bg-green">
        <span className="absolute top-2 rounded-full bg-white px-3 py-1 text-[11px] sm:text-xs text-black">
          Social Events
        </span>
        <img
          src="/photos/social-events.png"
          alt=""
          className="mt-1 h-32 sm:h-[150px] rounded-md"
        />
      </div>
    </>
  );
}
