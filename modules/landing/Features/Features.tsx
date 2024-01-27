import { FeaturesList } from "@/utils/constants";
import Image from "next/image";

const Features = () => (
    <div className="flex flex-col justify-center items-center gap-0 mt-20">
        <div className="features-container w-[85%] flex flex-col justify-center items-center gap-3 text-primary-100 border rounded-t-3xl p-20">
            <div className="flex flex-col justify-center items-center gap-5">
                <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold !leading-tight">
                    Features
                </h1>
                <h6 className="text-center text-primary-200 text-xs md:text-sm lg:text-base font-medium !leading-snug px-5 md:px-10 lg:px-20 xl:px-60">
                The Vent Team can take your vision all the way to launch with token sale management, marketing support, and community backing.
                </h6>
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-start items-start gap-10  mt-0 sm:mt-14">
                <div className="w-full flex flex-col justify-start items-start gap-10">
                    {FeaturesList?.length > 0 &&
                        FeaturesList.map((item:any, index) => (
                        index === index % 2 && (
                            <div key={item.key} className="h-full flex flex-col justify-start items-start gap-5 bg-transparent border-2 border-gray-200 shadow shadow-primary-850 rounded-3xl p-5 md:p-8">
                                <Image
                                    src={item.icon}
                                    alt="icon"
                                />
                                <div className="flex flex-col justify-start items-start gap-4 my-2">
                                    <div className="text-gray-100 text-xl md:text-2xl font-bold">
                                        {item.title}
                                    </div>
                                    <div className="text-gray-200 text-xs md:text-sm lg:text-base font-medium !leading-6">
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                        )
                    ))}
                </div>
                <div className="mt-0 lg:mt-28">
                    <div className="w-full flex flex-col justify-start items-start gap-10">
                    {FeaturesList?.length > 0 &&
                        FeaturesList.map((item:any, index) => (
                        index !== index % 2 && (
                            <div key={item.key} className="w-full h-full flex flex-col justify-start items-start gap-5 bg-transparent border-2 border-gray-200 shadow shadow-primary-850 rounded-3xl p-5 md:p-8">
                                <Image
                                    src={item.icon}
                                    alt="icon"
                                />
                                <div className="flex flex-col justify-start items-start gap-4 my-2">
                                    <div className="text-gray-100 text-xl md:text-2xl font-bold">
                                        {item.title}
                                    </div>
                                    <div className="text-gray-200 text-xs md:text-sm lg:text-base font-medium !leading-6">
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
    </div>
);

export default Features;
