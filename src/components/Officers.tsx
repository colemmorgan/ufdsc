import { FaLinkedin } from "react-icons/fa";

type Officer = {
  name: string;
  role: string;
  img: string;
  linkedin?: string;
};

const officers: Officer[] = [
  {
    name: "Harshil Pahuja",
    role: "President",
    img: "/photos/officers/harshil_profile.jpg",
    linkedin: "https://www.linkedin.com/in/harshil-pahuja/",
  },
  {
    name: "Sargam Thakur",
    role: "Vice President",
    img: "/photos/officers/sargam.png",
    linkedin: "https://www.linkedin.com/in/sargam-thakur/",
  },
  {
    name: "Krish Sahuja",
    role: "Treasurer",
    img: "/photos/officers/KrishSal.jpg",
    linkedin: "https://www.linkedin.com/in/krish-saluja/",
  },
  {
    name: "Jack Harris",
    role: "Technical Lead",
    img: "/photos/officers/JackHar.JPG",
    linkedin: "https://www.linkedin.com/in/jack-harris-uf/",
  },
  {
    name: "Andrew Chuang-Saladin",
    role: "Technical Lead",
    img: "/photos/officers/AndrewChuang.jpg",
    linkedin: "https://www.linkedin.com/in/andrew-cs/",
  },
  {
    name: "Sivan Pushpagiri",
    role: "Technical Lead",
    img: "/photos/officers/Sivan.jpg",
    linkedin: "https://www.linkedin.com/in/sivan-pushpagiri-554465249/",
  },
  {
    name: "Catherine Kennedy",
    role: "Social Lead",
    img: "/photos/officers/CatherineKennedy.PNG",
    linkedin: "https://www.linkedin.com/in/catherinelykennedy/",
  },
  {
    name: "Mishka Sonavadekar",
    role: "Marketing Lead",
    img: "/photos/officers/MSonavadekar.jpg",
    linkedin: "https://www.linkedin.com/in/mishka-sonavadekar/",
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
