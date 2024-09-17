import React from "react";

type LanguagesProps = {};

const Languages: React.FC<LanguagesProps> = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-y-6 relative">
      <div className="w-full max-w-[640px] flex justify-between ">
        <div className="flex gap-10">
          <BlueBox src="/svgs/firebase.svg" />
          <BlueBox src="/svgs/flutter.svg" />
        </div>
        <div className="flex gap-10">
          <GreenBox src="/svgs/googlecloud.svg" />
          <GreenBox src="/svgs/react.svg" />
        </div>
      </div>
      <div className="w-full max-w-[565px] flex justify-between ">
        <div className="flex gap-10">
          <BlueBox src="/svgs/docker.svg" />
          <BlueBox src="/svgs/python.svg" />
        </div>
        <div className="flex gap-10">
          <GreenBox src="/svgs/googlecloud.svg" />
          <GreenBox src="/svgs/react.svg" />
        </div>
      </div>
      <div className="w-full max-w-[490px] flex justify-between ">
        <div className="flex gap-10">
          <BlueBox src="/svgs/git.svg" />
          <BlueBox src="/svgs/vscode.svg" />
        </div>
        <div className="flex gap-10">
          <GreenBox src="/svgs/tensorflow.svg" />
          <GreenBox src="/svgs/gemini.svg" />
        </div>
      </div>
      </div>
    </>
  );
};
export default Languages;

type BoxProps = {
  src: string;
};

const BlueBox: React.FC<BoxProps> = ({ src }) => {
  return (
    <div className="bg-blue bg-opacity-40 border border-blue border-opacity-60  w-[76px] h-[76px]  rounded-md flex items-center justify-center hover:brightness-[1.15] transition-all">
      <img src={src} alt="" className="w-10" />
    </div>
  );
};

const GreenBox: React.FC<BoxProps> = ({ src }) => {
  return (
    <div className="bg-green bg-opacity-40 border border-green border-opacity-60  w-[76px] h-[76px]  rounded-md flex items-center justify-center hover:brightness-[1.15] transition-all">
      <img src={src} alt="" className="w-9" />
    </div>
  );
};
