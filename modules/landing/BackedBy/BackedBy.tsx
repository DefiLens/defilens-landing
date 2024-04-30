import { BackedByList } from "@/utils/constants";
import Image from "next/image";

const BackedBy = () => (
    <div className="flex flex-col justify-center items-center gap-3 text-primary-1000 bg-primary-100 p-8 py-20 sm:p-20 sm:py-20 md:p-32 md:py-20 lg:p-38 lg:py-20 2xl:p-40 2xl:py-28">
        <div className="flex flex-col justify-center items-center gap-5">
            <h1 className="text-center text-xl md:text-3xl lg:text-4xl font-extrabold !leading-tight">
                Supported
                <span className="px-3 text-primary-700">
                    By
                </span>
            </h1>
        </div>
      <div className="w-full h-full flex justify-between items-start gap-8 mt-0 sm:mt-8">
        <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center gap-10">
            {BackedByList?.length > 0 &&
                BackedByList.map((item) => (
                <div
                    key={item.key}
                    className="w-full lg:w-96 h-full flex flex-col justify-center items-center gap-3 border border-primary-750 rounded-3xl shadow-xl shadow-purple-50 p-8 flex-grow"
                >
                    <div className="h-full lg:h-20 flex flex-col lg:flex-row justify-center items-center gap-7 lg:gap-3 2xl:gap-5">
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
                    <div className="h-full transition duration-300 text-sm md:text-base font-semibold bg-gradient-to-br from-primary-600 via-primary-500 to-primary-400 rounded-full shadow-md p-0.5  mt-6 md:mt-8">
                        <div className="flex h-full w-full items-center justify-center bg-primary-100 rounded-full">
                            <a
                                href={item.url}
                                target="_blank"
                                className="flex justify-center items-center gap-1 rounded-full hover:bg-gradient-to-br from-primary-600 via-primary-500 to-primary-400 hover:text-primary-100 py-2 px-8 sm:px-10"
                            >
                                Explore
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );

  export default BackedBy;
