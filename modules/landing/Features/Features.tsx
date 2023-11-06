import { FeaturesList } from "@/utils/constants";
import Image from "next/image";

const Features = () => (
  <div id="features" className="bg-gradient-to-r from-[#111827] via-[#141533] to-[#13172A] text-white w-full flex flex-col gap-5 p-8 pt-32 sm:p-20 sm:pt-36 md:p-24 md:pt-32 lg:p-40 lg:pt-36 xl:p-56 xl:py-20">
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-start items-start gap-8">
      <div className="flex flex-col justify-start items-start gap-10">
        <h1 className="w-full text-center lg:text-start text-3xl md:text-4xl lg:text-5xl font-extrabold pt-10 lg:pb-14">
          Features
        </h1>
        {FeaturesList?.length > 0 &&
            FeaturesList.map((item:any, index) => (
              index === index % 2 && (
              <div key={item.key} className="h-full flex flex-col justify-start items-start gap-5 bg-gradient-to-br from-[#0B0B21] via-[#0E0F25] to-[#11122d] shadow shadow-[#282935] rounded-xl p-8 md:p-10">
                <Image src={item.icon} className="w-12 md:w-14 lg:w-16"  alt="icon" />
                <div className="flex flex-col justify-start items-start gap-10 my-5">
                  <div className="text-gray-200 text-xl md:text-2xl lg:text-3xl font-black !leading-normal">{item.title}</div>
                  <div className="text-gray-400 text-sm md:text-base lg:text-xl !leading-relaxed">{item.description}</div>
                </div>
              </div>
              )
            ))}
      </div>
      <div>
        <div className="flex flex-col justify-start items-start gap-10">
          {FeaturesList?.length > 0 &&
            FeaturesList.map((item:any, index) => (
              index !== index % 2 && (
                <div key={item.key} className="h-full flex flex-col justify-start items-start gap-5 bg-gradient-to-br from-[#0B0B21] via-[#0E0F25] to-[#11122d] shadow shadow-[#282935] rounded-xl p-8 md:p-10">
                  <Image src={item.icon} className="w-12 md:w-16 lg:w-16"  alt="icon" />
                  <div className="flex flex-col justify-start items-start gap-10 my-5">
                    <div className="text-gray-200 text-xl md:text-2xl lg:text-3xl font-black !leading-normal">{item.title}</div>
                    <div className="text-gray-400 text-sm md:text-base lg:text-xl !leading-relaxed">{item.description}</div>
                  </div>
                </div>
              )
            )
          )}
        </div>
      </div>
    </div>
  </div>
);

export default Features;
