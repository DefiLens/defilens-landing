import { HowToUseList } from "@/utils/constants";
import Image from "next/image";

const HowToUse = () => (
    <div id="HowToUse" className="bg-gradient-to-r from-[#111827] via-[#141533] to-[#13172A] text-white w-full flex flex-col gap-5 p-8 pt-32 sm:p-20 sm:pt-36 md:p-24 md:pt-32 lg:p-40 lg:pt-36 xl:p-56 xl:py-20">
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold">
        How To Use DefiLens
      </h1>
      <div className="w-full h-full flex justify-between items-start gap-8 mt-0 sm:mt-8">
        <div className="w-full h-full flex flex-wrap justify-center items-start gap-10">
        {HowToUseList?.length > 0 &&
            HowToUseList.map((item:any) => (
              <div key={item.key} className="w-96 h-full flex flex-col justify-start items-start gap-7 bg-[#1F213C] rounded-xl p-10 flex-grow">
                <Image src={item.icon} className="w-12 md:w-14 lg:w-16"  alt="icon" />
                <div className="h-full flex flex-col justify-center items-start gap-10">
                    <div className="text-gray-200 text-xl md:text-2xl lg:text-3xl font-extrabold !leading-snug">{item.title}</div>
                    <div className="text-gray-400 text-sm md:text-base lg:text-xl !leading-relaxed">{item.description}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );

  export default HowToUse;
