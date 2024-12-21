import ClubCards from "./micro-interactions/ClubCards";

export default function Events() {
  return (
    <div className="my-20">
      <h2 className="cal text-center text-4xl">Types of Events We Host</h2>
      <p className="pt-3 text-center text-lg text-dull">
        Compete, collaborate, win prizes, and most importantly, learn.
      </p>
      <div className="mt-8 grid grid-cols-2 gap-8 tracking-wide">
        <div className="rounded-xl border border-gray bg-white p-8 shadow-sm">
          <p className="text-xl font-medium">Technical Workshops</p>
          <p className="pt-3 text-dull">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus eos
            doloribus quidem provident delectus molestias odit doloremque itaque
            veniam reprehenderit.
          </p>
        </div>

        <div className="h-96 rounded-xl border border-gray bg-white p-8 shadow-sm">
          <p className="text-xl font-medium">General Board Meetings</p>
          <p className="pt-3 text-dull">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus eos
            doloribus quidem provident delectus molestias odit doloremque itaque
            veniam reprehenderit.
          </p>
        </div>
        <div className="h-96 rounded-xl border border-gray bg-white p-8 shadow-sm">
          <p className="text-xl font-medium">Social Events</p>
          <p className="pt-3 text-dull">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus eos
            doloribus quidem provident delectus molestias odit doloremque itaque
            veniam reprehenderit.
          </p>
        </div>

        <div className="rounded-xl border border-gray bg-white p-8 pb-0 shadow-sm flex flex-col justify-between overflow-hidden">
          <div>
            <p className="text-xl font-medium">Club Collaborations</p>
            <p className="pt-3 text-dull">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
              eos doloribus quidem provident delectus molestias odit doloremque
              itaque veniam reprehenderit.
            </p>
          </div>
          <div className="relative flex justify-center w-full">
            <div className="w-72 border border-gray rounded-xl h-[190px]"/>
            <div className="w-80 absolute bg-white h-44 rounded-xl border border-grayer -bottom-0.5 rounded-b-none">
              <ClubCards/>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}
