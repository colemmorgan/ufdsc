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

export default function Team() {
  return (
    <div className="rounded-2xl sm:rounded-3xl bg-black px-2 py-6 xl:p-4 h-full">
      <p className="text-center font-medium text-white">Meet the team:</p>
      <div className="mt-3 grid grid-cols-1 gap-1.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1">
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
  return (
    <a
      href={officer.linkedin}
      target="_blank"
      className="flex cursor-pointer rounded-lg border border-[#404044] bg-[#2E2E34] px-3 py-2 text-[#d4d4d4] transition-all hover:border-opacity-40 hover:bg-opacity-40 xl:px-4"
    >
      <img src={officer.img} alt="" className="h-10 w-10 rounded-full" />
      <div className="grid items-center pl-4">
        <p className="text-sm leading-none">{officer.name}</p>
        <p className="-mt-1 text-xs">{officer.role}</p>
      </div>
    </a>
  );
};
