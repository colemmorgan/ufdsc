import React from "react";
import { IoLocationSharp } from "react-icons/io5";

type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  return (
    <>
      <Elipse />
      <Elipse2 />
      <Elipse3 />
      <div className="max-w-[1380px] mx-auto pt-28 sm:pt-40 flex flex-col items-center text-center mb-4 sm:mb-12 relative z-10 px-6 sm:px-10">
        <div className="gradient-border rounded-full overflow-hidden">
          <p className="bg-white rounded-full py-1 px-4 text-xs sm:text-sm flex items-center gap-1 font-medium">
            <span className="text-base text-blue">
              <IoLocationSharp />
            </span>{" "}
            University of Florida
          </p>
        </div>
        <h1 className="text-[48px] leading-[1.125] sm:text-6xl font-semibold mt-4 sm:mt-6"> <span className="sm:hidden">UF</span> Developer Student Club</h1>
        <h2 className="max-w-[700px] font-medium mt-3 sm:mt-4  sm:text-xl">
          Learn <span className="text-button-blue">Google Developer</span>{" "}
          technologies as well as mobile and web development skills essential
          for the <span className="text-green">industry.</span>
        </h2>
        <div className="flex flex-col sm:flex-row mt-4 gap-4 text-sm w-full justify-center">
          <a
            className="bg-button-blue text-white rounded-md w-full block sm:w-44 py-1.5"
            href="#become-a-member"
          >
            Become a Member
          </a>
          <a
            className="border border-[#cccccc] text-button-blue bg-white rounded-md w-full sm:w-44 py-1.5"
            href="#about"
          >
            Learn More
          </a>
        </div>
      </div>
      <Grid />
      <figure className="max-w-[460px] h-[320px] sm:h-[347px] mt-12 mx-auto px-6 relative">
          <img src="/photos/hero-graphic.png" alt="" className="w-full" />
        </figure>
      <div className="max-w-[408px] mx-auto mt-2 sm:mt-16">
        <div className="flex items-center justify-center gap-4 mb-4">
          <img src="/google.webp" alt="" className="w-[30px] grayscale" />
          <img src="/uf.png" alt="" className="w-[40px] grayscale" />
        </div>
        <p className="text-gray text-xs sm:text-sm text-center">
          A Google Developers program for university students
        </p>
      </div>
     
    </>
  );
};
export default Hero;

const Elipse: React.FC = () => {
  return (
    <svg
      width="1800"
      height="275"
      viewBox="0 0 1800 275"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute  left-1/2 -translate-x-1/2 top-0 hidden sm:block w-full  overflow-hidden"
    >
      <g filter="url(#filter0_f_45_112)">
        <path
          d="M1800 36C1800 68.5848 1395.04 95 895.5 95C395.958 95 -9 68.5848 -9 36C-9 3.4152 395.958 -23 895.5 -23C1395.04 -23 1800 3.4152 1800 36Z"
          fill="url(#paint0_linear_45_112)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_45_112"
          x="-189"
          y="-203"
          width="2169"
          height="478"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="90"
            result="effect1_foregroundBlur_45_112"
          />
        </filter>
        <linearGradient
          id="paint0_linear_45_112"
          x1="-9"
          y1="36"
          x2="1800"
          y2="36"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#6A9FF9" stop-opacity="0.75" />
          <stop offset="1" stop-color="#57C66A" stop-opacity="0.75" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const Elipse2: React.FC = () => {
  return (
    <svg
      width="364"
      height="652"
      viewBox="0 0 364 652"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute hidden sm:block right-0 top-1/2 -translate-y-1/4"
    >
      <g filter="url(#filter0_f_45_125)" className="rounded-full">
        <ellipse
          cx="326"
          cy="326"
          rx="270"
          ry="169"
          transform="rotate(-45 326 326)"
          fill="#6A9FF9"
          fill-opacity="0.3"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_45_125"
          x="0.73584"
          y="0.735687"
          width="650.528"
          height="650.529"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="50"
            result="effect1_foregroundBlur_45_125"
          />
        </filter>
      </defs>
    </svg>
  );
};

const Elipse3: React.FC = () => {
  return (
    <svg
      width="433"
      height="528"
      viewBox="0 0 433 528"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-0 top-[20%] hidden sm:block"
    >
      <g filter="url(#filter0_f_45_123)">
        <ellipse
          cx="90.5"
          cy="264"
          rx="242.5"
          ry="164"
          fill="#57C66A"
          fill-opacity="0.2"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_45_123"
          x="-252"
          y="0"
          width="685"
          height="528"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="50"
            result="effect1_foregroundBlur_45_123"
          />
        </filter>
      </defs>
    </svg>
  );
};

const Grid: React.FC = () => {
  return (
    <svg
      width="1314"
      height="1314"
      viewBox="0 0 1314 1314"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-1/2 top-[63%] -translate-x-1/2 -translate-y-1/2 hidden sm:block"
    >
      <mask
        id="mask0_56_161"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="1314"
        height="1314"
      >
        <rect width="1314" height="1314" fill="url(#paint0_radial_56_161)" />
        {[
          221.17, 300.341, 379.511, 458.682, 537.852, 617.023, 696.193, 775.364,
          854.534, 933.705, 1012.88, 1092.05,
        ].map((x, index) => (
          <rect
            key={`vertical-${index}`}
            x={x}
            y="168.651"
            width="0.783866"
            height="976.697"
            fill="#D9D9D9"
          />
        ))}
        {[
          142, 221.171, 300.341, 379.511, 458.682, 537.852, 617.023, 696.193,
          775.364, 854.534, 933.705, 1012.88, 1092.05, 1171.22,
        ].map((y, index) => (
          <rect
            key={`horizontal-${index}`}
            x="1145.35"
            y={y}
            width="0.783866"
            height="976.697"
            transform={`rotate(90 1145.35 ${y})`}
            fill="#D9D9D9"
          />
        ))}
      </mask>
      <g mask="url(#mask0_56_161)">
        <path
          opacity="0.5"
          d="M1255.65 616.5C1255.65 947.871 987.026 1216.5 655.655 1216.5C324.284 1216.5 55.6548 947.871 55.6548 616.5C55.6548 285.129 324.284 16.5 655.655 16.5C987.026 16.5 1255.65 285.129 1255.65 616.5Z"
          fill="url(#paint1_radial_56_161)"
        />
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_56_161"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(657 657) rotate(90) scale(490.012)"
        >
          <stop stopColor="#202124" stopOpacity="0.37" />
          <stop offset="1" stopColor="#202124" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_56_161"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(657 657) rotate(90) scale(447.5)"
        >
          <stop stopColor="#9AA0A6" />
          <stop offset="1" stopColor="#9AA0A6" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};
