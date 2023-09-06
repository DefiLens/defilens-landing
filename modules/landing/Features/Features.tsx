import { FeaturesList } from "@/utils/constants";
import Image from "next/image";

const Features = () => (
  <div id="features" className="bg-gradient-to-r from-[#111827] via-[#141533] to-[#13172A] text-white w-full flex flex-col gap-5 px-5 sm:px-10 md:px-14 lg:px-20 py-20 pt-28">
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-start items-start gap-5">
      <div className="flex flex-col justify-start items-start gap-5">
        <h1 className="w-full text-center lg:text-start text-3xl md:text-4xl lg:text-5xl font-extrabold pt-10 lg:pb-14">
          Features
        </h1>
        {FeaturesList?.length > 0 &&
            FeaturesList.map((item:any, index) => (
              index === index % 2 && (
              <div key={item.key} className="h-full flex flex-col justify-start items-start gap-5 bg-gradient-to-br from-[#0B0B21] via-[#0E0F25] to-[#11122d] shadow shadow-[#282935] rounded-xl p-5 md:p-8">
                <Image src={item.icon} className=""  alt="icon" />
                <div className="flex flex-col justify-start items-start gap-4 my-5">
                  <div className="text-gray-200 text-xl md:text-2xl lg:text-3xl font-black">{item.title}</div>
                  <div className="text-gray-400 text-xs md:text-sm lg:text-base font-semibold !leading-6">{item.description}</div>
                </div>
              </div>
              )
            ))}
      </div>
      <div>
        <div className="flex flex-col justify-start items-start gap-5">
          {FeaturesList?.length > 0 &&
            FeaturesList.map((item:any, index) => (
              index !== index % 2 && (
                <div key={item.key} className="h-full flex flex-col justify-start items-start gap-5 bg-gradient-to-br from-[#0B0B21] via-[#0E0F25] to-[#11122d] shadow shadow-[#282935] rounded-xl p-5 md:p-8">
                  <Image src={item.icon} className=""  alt="icon" />
                  <div className="flex flex-col justify-start items-start gap-4 my-5">
                    <div className="text-gray-200 text-xl md:text-2xl lg:text-3xl font-black">{item.title}</div>
                    <div className="text-gray-400 text-xs md:text-sm lg:text-base font-semibold !leading-6">{item.description}</div>
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
