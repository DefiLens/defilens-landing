import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";
import { SupportedByList } from "@/utils/constants";

const BackedBy = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 text-primary-1000 bg-primary-100 p-8 py-20 sm:p-20 sm:py-20 md:p-32 md:py-20 lg:p-38 lg:py-20 2xl:p-40 2xl:py-28">
      {/* Heading */}
      <div className="flex flex-col justify-center items-center gap-5 font-satoshi">
        <h1
          className="text-center text-xl md:text-3xl lg:text-4xl font-extrabold !leading-tight"
        >
          Grants Received
          <span className="px-3 text-primary-700">from</span>
        </h1>
      </div>
      {/* Mapping Supporters */}
      <div className="relative w-full h-full flex justify-between items-start gap-8 mt-0 sm:mt-8">
        <div className="w-full h-full flex flex-col md:flex-row gap-10 justify-center">
          {SupportedByList?.length > 0 &&
            SupportedByList.map((item) => (
              <a
                key={item.key}
                href={item.url}
                target="_blank"
                className="relative max-w-fit px-20 py-10 flex flex-col justify-center items-center gap-3 border border-purple-100 hover:border-purple-200 bg-purple-50/40 rounded-3xl p-6 flex-grow cursor-pointer transition-all group"
              >
                <span className="absolute right-4 top-4 group-hover:bg-primary-750/20 transition-colors p-1.5 rounded-full">
                  <HiArrowUpRight className="text-purple-700 text-lg" />
                </span>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-7 lg:gap-3 2xl:gap-5">
                  {item.icon && (
                    <Image
                      src={item.icon}
                      className="w-40 lg:w-28 xl:w-32 2xl:w-52"
                      alt="icon"
                    />
                  )}
                  {item.icon1 && (
                    <Image
                      src={item.icon1}
                      className="w-40 lg:w-28 xl:w-32 2xl:w-40"
                      alt="icon1"
                    />
                  )}
                  {item.icon2 && (
                    <Image
                      src={item.icon2}
                      className="w-40 lg:w-28 xl:w-32 2xl:w-40"
                      alt="icon1"
                    />
                  )}
                  {item.icon3 && (
                    <Image
                      src={item.icon3}
                      className="w-40 lg:w-28 xl:w-32 2xl:w-40"
                      alt="icon1"
                    />
                  )}
                </div>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BackedBy;
