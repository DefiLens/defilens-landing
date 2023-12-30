import { howToUse01 } from "@/assets/images"
import { HowToUseList } from "@/utils/constants"
import Image from "next/image"

const HowToUse = () => (
    <div className="flex flex-col justify-center items-center gap-3 text-primary-1000 bg-primary-100 p-8 py-20 sm:p-20 sm:py-20 md:p-32 md:py-20 lg:p-38 lg:py-20 2xl:p-40 2xl:py-28">
        <div className="flex flex-col justify-center items-center gap-5">
            <h1 className="text-center text-xl md:text-3xl lg:text-4xl font-extrabold !leading-tight">
                How To Use 
                <span className="px-3 text-primary-700">
                    DefiLens
                </span>
            </h1>
            <h6 className="text-center text-primary-300 text-xs md:text-sm lg:text-base font-medium !leading-snug px-5 md:px-10 lg:px-20 xl:px-60">
                DefiLens is pioneering a platform that streamlines trading activities. To offering the ease of trading experience and swift portfolio management to users
            </h6>
        </div>
        <div className="w-full flex flex-col justify-start items-center gap-5 border-2 shadow-lg rounded-xl p-10 mt-8">
            {HowToUseList?.length > 0 &&
            HowToUseList.map((item:any) => (
                <div
                    key={item.key}
                    className="w-full flex flex-col lg:flex-row justify-start items-center gap-5"
                >
                    <Image
                        src={item.icon}
                        alt="how-to-use-img"
                        className="w-auto lg:w-[300px] xl:w-[350px] 2xl:w-[450px] 3xl:w-auto p-5"
                    />
                    <div className="flex flex-row lg:flex-col justify-center items-center gap-5 p-3">
                        <div className="w-20 lg:w-0 lg:h-20 bg-gradient-to-l lg:bg-gradient-to-t from-primary-1000 to-transparent p-[1px] rounded-full" />
                        <div className="h-7 w-7 flex justify-center items-center text-sm text-primary-100 bg-primary-500 ring-8 ring-primary-450 rounded-full">
                            {item.id}
                        </div>
                        <div className="w-20 lg:w-0 lg:h-20 bg-gradient-to-r lg:bg-gradient-to-b from-primary-1000 to-transparent p-[1px] rounded-full" />
                    </div>
                    <div className="flex flex-col justify-center items-strat gap-3 p-5 lg:px-5">
                        <h1 className="text-center lg:text-start text-lg md:text-xl lg:text-2xl font-bold !leading-tight">
                            {item.title}
                        </h1>
                        <h6 className="text-center lg:text-start text-primary-300 text-xs md:text-sm lg:text-base font-medium !leading-snug">
                            {item.description}
                        </h6>
                    </div>
                </div>
            ))}
        </div>
    </div>
) 

export default HowToUse
