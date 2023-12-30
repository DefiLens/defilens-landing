import { FeaturesList } from "@/utils/constants";
import Image from "next/image";

const Features = () => (
    <div className="flex flex-col justify-center items-center gap-3 text-primary-100 bg-primary-900 p-8 py-20 sm:p-20 sm:py-20 md:p-32 md:py-20 lg:p-38 lg:py-20 2xl:p-40 2xl:py-28">
        <div className="flex flex-col justify-center items-center gap-5">
            <h1 className="text-center text-xl md:text-3xl lg:text-4xl font-extrabold !leading-tight">
                Our
                <span className="px-3 text-primary-700">
                    Features
                </span>
            </h1>
            <h6 className="text-center text-primary-200 text-xs md:text-sm lg:text-base font-medium !leading-snug px-5 md:px-10 lg:px-20 xl:px-60">
                Defilens provide a solutions like cross-chain trading and efficiently refinancing defi positions using smart batching strategies.
            </h6>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-start items-start gap-8  mt-0 sm:mt-10">
            <div className="w-full flex flex-col justify-start items-start gap-5">
                {FeaturesList?.length > 0 &&
                    FeaturesList.map((item:any, index) => (
                    index === index % 2 && (
                        <div key={item.key} className="h-full flex flex-col justify-start items-start gap-5 bg-primary-800 border border-primary-850 shadow shadow-primary-850 rounded-xl p-5 md:p-8">
                            <Image
                                src={item.icon}
                                alt="icon"
                            />
                            <div className="flex flex-col justify-start items-start gap-4 my-5">
                                <div className="text-gray-200 text-xl md:text-2xl lg:text-3xl font-black">
                                    {item.title}
                                </div>
                                <div className="text-gray-400 text-xs md:text-sm lg:text-base font-semibold !leading-6">
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    )
                ))}
            </div>
            <div className="mt-0 lg:mt-28">
                <div className="w-full flex flex-col justify-start items-start gap-5">
                {FeaturesList?.length > 0 &&
                    FeaturesList.map((item:any, index) => (
                    index !== index % 2 && (
                        <div key={item.key} className="w-full h-full flex flex-col justify-start items-start gap-5 bg-primary-800 border border-primary-850 shadow shadow-primary-850 rounded-xl p-5 md:p-8">
                            <Image
                                src={item.icon}
                                alt="icon"
                            />
                            <div className="flex flex-col justify-start items-start gap-4 my-5">
                                <div className="text-gray-200 text-xl md:text-2xl lg:text-3xl font-black">
                                    {item.title}
                                </div>
                                <div className="text-gray-400 text-xs md:text-sm lg:text-base font-semibold !leading-6">
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    ))
                )}
                </div>
            </div>
        </div>
    </div>
);

export default Features;
