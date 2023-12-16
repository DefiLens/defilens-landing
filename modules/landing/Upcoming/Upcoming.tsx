import { UpcomingList } from "@/utils/constants";
import Image from "next/image";

import { FaArrowRight, FaArrowLeft  } from "react-icons/fa";

const Upcoming = ({
    active,
    clickItemToActive,
}: any) => (
    <div
        id="upcoming"
        className="w-full bg-gradient-to-r from-[#111827] via-[#141533] to-[#13172A] flex flex-col justify-center items-center gap-5 text-white p-8 pt-32 sm:p-20 sm:pt-36 md:p-24 md:pt-32 lg:p-40 lg:pt-36 xl:p-56 xl:py-20"
    >
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-3 xl:px-14">
            <h3 className="text-white text-center text-2xl md:text-3xl lg:text-4xl font-bold font-mono">
                Upcoming Feature
            </h3>
            <div
                className="inline-flex rounded-full cursor-pointer"
            >
                <button
                    onClick={() => clickItemToActive("prev")}
                    disabled={active === 1}
                    className="text-base font-medium text-gray-900 hover:text-gray-800 bg-white border rounded-l-full px-4 py-2 cursor-pointer"
                >
                    <FaArrowLeft />
                </button>
                <button
                    onClick={() => clickItemToActive("next")}
                    disabled={active === UpcomingList?.length}
                    className="text-base font-medium text-gray-900 hover:text-gray-800 bg-white border rounded-r-full px-4 py-2 cursor-pointer"
                >
                    <FaArrowRight />
                </button>
            </div>
        </div>
        <div className="gradient-border my-5" />
        <div className="flex flex-col lg:flex-row justify-between gap-4 p-10">
          <div className="flex items-center flex-shrink gap-4">
            <div className="max-w-md mx-auto rounded-xl md:max-w-xl">
              {UpcomingList.length > 0 && UpcomingList.map((item: any) => (
                <div
                    key={item?.id}
                >
                  {active === item?.id && (
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-3">
                      <div className="md:shrink-0">
                        <Image
                          className="h-20 md:h-32 w-20 md:w-32 object-contain"
                          src={item?.icon}
                          alt=""
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="px-3 md:px-8">
                        <h3 className="block font-mono text-center md:text-start text-xl md:text-2xl font-bold leading-tight text-white">
                          {item?.title && item?.title}
                        </h3>
                        <p className="mt-2 text-center md:text-start text-gray-400">
                          {item?.description && item?.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden 2xl:block">
            {UpcomingList.length > 0 && UpcomingList.map((item: any) => (
              <div
                key={item?.id}
                onClick={() => clickItemToActive(item?.id)}
                className="cursor-pointer"
              >
                <h2
                  className={`m-2.5 text-base xl:text-lg ${active === item?.id && "text-blue-100"}`}
                >
                    {`> ${item?.title}`}
                </h2>
              </div>
            ))}
          </div>
        </div>
        <div className="gradient-border my-5" />
      </div>
    </div>
);

export default Upcoming;
