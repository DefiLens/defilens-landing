import { useRef } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";
import { clsx } from "clsx";
import { HiChevronRight } from "react-icons/hi2";
import { hero } from "@/assets/images";
import {
  backendIcons,
  BlockchainList,
  buttonsText,
  meta,
} from "@/utils/constants";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div
      className={clsx(
        "hero-container flex flex-col justify-start items-center text-center gap-4 lg:gap-6",
        "h-screen 2xl:gap-32 text-primary-1000 bg-primary-100",
        "p-8 sm:p-20 md:p-32 lg:p-24 pt-40 sm:pt-40 md:pt-40 lg:pt-44 2xl:pt-48"
      )}
    >
      <div className="bg-transparent h-full flex flex-col lg:flex-row justify-start lg:justify-center items-center text-center gap-8 lg:gap-16 2xl:gap-28 text-primary-1000 bg-primary-100">
        {/* Left Content */}
        <div
          className="h-full flex flex-col justify-center items-start gap-5"
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateY(64px)",
            opacity: isInView ? 1 : 0,
            transition:
              "transform: none;opacity: 0;transition: all 1.0s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0.3s;",
          }}
        >
          {/* Heading and Description */}
          <h1 className="text-start text-xl md:text-3xl lg:text-7xl font-bold">
            Unified Defi trading experience with
            <span className="px-3 text-primary-700">One-click</span>
          </h1>
          <h6 className="text-start text-primary-300 text-xs md:text-sm lg:text-lg font-bold">
            DefiLens abstract chains and execute multiple orders in batch
            across-chains with smart wallet designed platform.
          </h6>
          <div className="mt-8 inline-flex items-center justify-between w-full">
            {/* Supported By */}
            <div className="flex flex-row items-center gap-3 md:gap-3 text-sm md:text-base font-semibold">
              <h1 className="text-center text-xl md:text-2xl font-bold !leading-tight">
                Supported<span className="px-1 text-primary-700">by</span>
              </h1>
              {backendIcons.map((item: string, index) => (
                <div key={index} className="w-6 h-6 md:w-8 md:h-8">
                  <Image src={item} className="w-full h-full" alt="icon" />
                </div>
              ))}
            </div>
            {/* Launch App Button */}
            <div className="transition duration-200 h-fit text-sm md:text-base font-semibold bg-gradient-to-br from-primary-600 via-primary-500 to-primary-400 rounded-full shadow-md p-0.5">
              <div className="flex h-full w-full items-center justify-center bg-primary-100 rounded-full">
                <a
                  href={meta.app}
                  target="_blank"
                  className="flex justify-center items-center gap-1 rounded-full hover:bg-gradient-to-br from-primary-600 via-primary-500 to-primary-400 hover:text-primary-100 py-2 px-6 group transition-colors duration-200"
                >
                  {buttonsText.heroCta}{" "}
                  <HiChevronRight
                    size="16px"
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* hero image in right */}

        <Image
          src={hero}
          alt="hero-img"
          className="w-auto lg:w-[350px] xl:w-[450px] 2xl:w-[575px] 3xl:w-[750px]"
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateY(64px)",
            opacity: isInView ? 1 : 0,
            transition:
              "transform: none;opacity: 0;transition: all 1.8s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0.3s;",
          }}
        />
      </div>

      {/* Supported Networks */}
      <div
        className="w-full h-full flex flex-wrap justify-center items-center gap-5 lg:gap-8 mt-20 select-none"
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(-64px)",
          opacity: isInView ? 1 : 0,
          transition:
            "transform: none;opacity: 0;transition: all 1.2s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0.3s;",
        }}
      >
        {BlockchainList.length > 0 &&
          BlockchainList.map((item) => (
            <div key={item.key} className="flex items-center gap-3">
              <Image
                src={item.icon}
                alt="icon"
                className="h-6 w-6 lg:h-8 lg:w-8"
              />
              <div className="text-primary-800 text-start text-xs sm:text-sm xl:text-base font-semibold">
                {item.name}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Hero;
