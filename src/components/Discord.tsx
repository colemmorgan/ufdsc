import { FaArrowUp, FaDiscord, FaHashtag, FaPlus, FaSearch,  } from "react-icons/fa";

export default function Discord() {
  return (
    <div className=" border border-grayer rounded-xl h-[400px] p-1 translate-x-[9px]">
        <div className="w-full h-full rounded-lg border border-grayer flex overflow-hidden">
            <div className="bg-[#E4E5E9] h-full w-[68px] py-3 px-1 flex flex-col items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-xl">
                    <FaDiscord/>
                </div>
                <div className="w-10 h-0.5 bg-white rounded-full"/>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center pl-px">
                    <img src="/nav-logo.png" alt="" className="w-[25px] h-3"/>
                </div>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#34BE8B]">
                    <FaPlus/>
                </div>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#34BE8B]">
                    <FaSearch/>
                </div>
            </div>


            <div className="bg-[#F2F3F5] w-[116px] py-5 tracking-wider">
                <p className="font-medium text-sm px-3 ">UF DSC</p>
                <div className="grid mt-1.5 px-1 text-xs gap-1.5">

                    <div className="flex gap-1 items-center p-1.5 w-full text-[#939AA0]">
                        <span><FaHashtag/></span>
                        <span>Questions</span>
                    </div>
                    <div className="flex gap-1 items-center p-1.5 w-full text-[#939AA0]">
                        <span><FaHashtag/></span>
                        <span>Welcome</span>
                    </div>
                    <div className="flex gap-1 items-center p-1.5 w-full text-[#878B90] bg-[#D4D7E0] rounded-sm">
                        <span><FaHashtag/></span>
                        <span>General</span>
                    </div>
                </div>
            </div>



            <div className="flex flex-col justify-end py-1 pl-1.5 pr-[7px] w-[340px]">
                <div className="bg-[#ECEDEF] rounded-sm text-xs py-2 px-4 text-[#63686E] flex justify-between items-center tracking-wide">
                    <p>Message #General</p>
                    <span className="bg-[#63686E] p-0.5 rounded-full text-off-white text-[10px]"><FaArrowUp/></span>
                </div>
            </div>
        </div>
    </div>
  )
}
