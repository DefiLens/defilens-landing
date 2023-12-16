import { hero } from "@/assets/images"
import Image from "next/image"
import {HiArrowNarrowRight} from "react-icons/hi"

const Hero = () => (
    <div className="hero-container min-h-screen flex flex-col lg:flex-row justify-start items-start text-center gap-8 lg:gap-16 2xl:gap-28 text-primary-1000 bg-primary-100 p-8 py-32 sm:p-20 sm:py-32 md:p-32 lg:p-38 lg:py-32 2xl:p-40 2xl:py-32">
        <div className="flex flex-col justify-start items-start gap-5">
            <h1 className="text-start text-xl md:text-3xl lg:text-4xl font-extrabold !leading-tight">
                Simplifying Defi Trading Experience Smart Batching via
                <span className="px-3 text-primary-700">
                    One-click
                </span>
            </h1>
            <h6 className="text-start text-primary-300 text-xs md:text-sm lg:text-base font-medium !leading-snug">
                DefiLens is pioneering a platform that streamlines trading activities.
                To offering the ease of trading experience and swift portfolio
                management to users, Defilens provide a solutions like cross-chain
                trading and efficiently refinancing defi positions using smart batching
                strategies.
            </h6>
            
            <div className="transition duration-300 text-sm md:text-base font-semibold bg-gradient-to-br from-primary-600 via-primary-500 to-primary-400 rounded-full shadow-md p-0.5">
                <div className="flex h-full w-full items-center justify-center bg-primary-100 rounded-full">
                    <a
                        href="https://app.defilens.tech/"
                        target="_blank"
                        className="flex justify-center items-center gap-1 rounded-full hover:bg-gradient-to-br from-primary-600 via-primary-500 to-primary-400 hover:text-primary-100 py-2 px-7"
                    >
                        Launch APP <HiArrowNarrowRight size="20px" />
                    </a>
                </div>
            </div>
        </div>
        <Image
            src={hero}
            alt="hero-img"
            className="w-auto lg:w-[300px] xl:w-[350px] 2xl:w-[450px] 3xl:w-auto p-5"
        />
    </div>
) 

export default Hero
