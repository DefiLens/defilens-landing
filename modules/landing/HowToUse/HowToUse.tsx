import { HowToUseList } from "@/utils/constants";
import Image from "next/image";

const HowToUse = () => (
    <div id="HowToUse" className="bg-gradient-to-r from-[#111827] via-[#141533] to-[#13172A] text-white w-full flex flex-col gap-5 px-5 sm:px-10 md:px-14 lg:px-20 py-12 pt-40">
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold">
        How To Use DefiLens
      </h1>
      <div className="w-full flex justify-between items-start gap-8 mt-0 sm:mt-5">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-5">
        {HowToUseList?.length > 0 &&
            HowToUseList.map((item:any) => (
              <div key={item.key} className="h-full flex justify-start items-start gap-4 bg-[#1F213C] rounded-xl p-4">
              {/* <Image src={item.icon} className="w-12 md:w-14 lg:w-16"  alt="icon" /> */}
              <div className="flex flex-col justify-center items-start gap-1">
                  <div className="text-gray-200 text-base md:text-lg font-extrabold">{item.title}</div>
                  <div className="text-gray-400 text-xs md:text-sm font-semibold !leading-5">{item.description}</div>
              </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );

  export default HowToUse;
