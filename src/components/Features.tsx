import React from 'react';

type FeaturesProps = {
    
};

const Features:React.FC<FeaturesProps> = () => {
    
    return (
        <div className=" bg-off-white border-y-2 border-light-gray">
        <div className="max-w-[1380px] mx-auto flex h-full">
          <div className="w-1/3 border-r-2 border-light-gray h-full px-10 py-12">
            <p className="font-medium text-xl">Learn Real-World Technologies</p>
            <div className="mt-2 w-20 h-1 bg-blue rounded-md" />
            <p className="mt-6 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              quaerat unde dolores itaque perferendis ducimus quo mollitia
              necessitatibus, quos consequuntur.
            </p>
          </div>

          <div className="w-1/3 border-r-2 border-light-gray h-full px-10 py-12">
            <p className="font-medium text-xl">
              Compete In Google Dev Competitions
            </p>
            <div className="mt-2 w-20 h-1 bg-yellow rounded-md" />
            <p className="mt-6 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              quaerat unde dolores itaque perferendis ducimus quo mollitia
              necessitatibus, quos consequuntur.
            </p>
          </div>

          <div className="w-1/3 h-full px-10 py-12">
            <p className="font-medium text-xl">
              Collaborate With Other Students
            </p>
            <div className="mt-2 w-20 h-1 bg-green rounded-md" />
            <p className="mt-6 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              quaerat unde dolores itaque perferendis ducimus quo mollitia
              necessitatibus, quos consequuntur.
            </p>
          </div>
        </div>
      </div>
    )
}
export default Features;