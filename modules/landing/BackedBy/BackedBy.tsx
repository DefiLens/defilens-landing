import { BackedByList } from "@/utils/constants";
import Image from "next/image";

const BackedBy = () => (
    <div id="BackedBy" className="bg-gradient-to-r from-[#111827] via-[#141533] to-[#13172A] text-white w-full flex flex-col gap-5 p-8 pt-32 sm:p-20 sm:pt-36 md:p-24 md:pt-32 lg:p-40 lg:pt-36 xl:p-56 xl:py-20">
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold">
        Backed By
      </h1>
      <div className="w-full h-full flex justify-between items-start gap-8 mt-0 sm:mt-8">
        <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center gap-10">
            {BackedByList?.length > 0 &&
                BackedByList.map((item:any) => (
                <div
                    key={item.key}
                    className="w-full lg:w-96 h-full flex flex-col justify-center items-center gap-3 bg-gray-200 rounded-xl p-8 flex-grow"
                >
                    <div className="h-full flex flex-col lg:flex-row justify-center items-center gap-7 lg:gap-3 2xl:gap-5">
                        {item.icon && (
                            <Image
                                src={item.icon}
                                className="w-52"
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
                                className="w-6 lg:w-5 xl:w-6"
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
                    <div className="h-full flex flex-col justify-center items-start gap-10">
                        <a
                            href={item.url}
                            target="_blank"
                            className="flex justify-center items-center gap-1 transition duration-300 text-base md:text-lg font-semibold bg-gradient-to-r from-[#2D66F4] to-[#9F2DF4] rounded-full shadow-md py-2 sm:py-3 px-8 sm:px-10 mt-6 md:mt-8"
                        >
                            Explore
                        </a>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );

  export default BackedBy;
