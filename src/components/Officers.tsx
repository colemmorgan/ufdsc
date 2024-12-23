import { FaLinkedin } from "react-icons/fa";

type Officer = {
  name: string;
  role: string;
  img: string;
  linkedin?: string;
};

const officers: Officer[] = [
  {
    name: "Moinak Dey",
    role: "President",
    img: "/photos/officers/moinak-dey.jpg",
    linkedin: "https://www.linkedin.com/in/moinakdey/",
  },
  {
    name: "Harshil Pahuja",
    role: "Vice President",
    img: "/photos/officers/harshil-pahuja.jfif",
    linkedin: "https://www.linkedin.com/in/harshil-pahuja/",
  },
  {
    name: "Oliver Jen",
    role: "Treasurer",
    img: "/photos/officers/oliver-jen.jfif",
    linkedin: "https://www.linkedin.com/in/oliver-jen-ufl/",
  },
  {
    name: "Paraman Galipalli",
    role: "Technical Lead",
    img: "/photos/officers/paraman-galipalli.jfif",
    linkedin: "https://www.linkedin.com/in/paraman-galipalli-754b80249/",
  },
  {
    name: "CJ Alexander",
    role: "Technical Lead",
    img: "/photos/officers/cj-alexander.jfif",
    linkedin: "https://www.linkedin.com/in/cj-alexander/",
  },
  {
    name: "Mayank Garg",
    role: "Advertising Lead",
    img: "/photos/officer-img-placeholder.png",
  },
  {
    name: "Cole Morgan",
    role: "Webmaster",
    img: "/photos/officers/cole-morgan.jpg",
    linkedin: "https://www.linkedin.com/in/cole-morgan-/",
  },
];

export default function Officers() {
  return (
    <div className="py-16 sm:py-20" id="officers">
      <h2 className="cal text-center text-3xl sm:text-4xl">Meet the Team</h2>
      <p className="pt-3 text-center sm:text-lg text-dull px-3">
        We have a diverse team of officers with a wide variety of skill sets.
      </p>
      <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-2">
        {officers.map((officer) => (
          <Officer key={officer.name} officer={officer} />
        ))}

        <div className="flex h-full flex-col items-center justify-center rounded-lg border border-gray bg-white px-4 py-6 shadow-sm">
          <p className="text-center text-sm text-dull">
            More roles coming soon. Make sure to watch for announcements on
            Discord.
          </p>
        </div>
      </div>
    </div>
  );
}

type OfficerProps = {
  officer: Officer;
};

const Officer: React.FC<OfficerProps> = ({ officer }) => {
  const name = officer.name.split(" ")[0];
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg border border-gray bg-white px-2 py-6 shadow-sm">
      {officer.linkedin && (
        <a
          className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white opacity-0 scale-90 hover:opacity-100 hover:scale-100 officer-transition-timing"
          href={officer.linkedin}
          target="_blank"
        >
          <p className="text-center leading-normal">
            View <span className="text-blue">{name}'s</span> <br />
            LinkedIn!
          </p>
          <span className="pt-2 text-3xl text-blue">
            <FaLinkedin />
          </span>
        </a>
      )}
      <figure>
        <img src={officer.img} alt="" className="h-20 rounded-full" />
      </figure>
      <p className="pt-4">{officer.name}</p>
      <p className="pt-0.5 text-sm text-dull">{officer.role}</p>
    </div>
  );
};
