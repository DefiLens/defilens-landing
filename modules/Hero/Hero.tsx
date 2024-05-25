import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { hero } from "@/assets/images";
import {
  backendIcons,
  BlockchainList,
  buttonsText,
  meta,
} from "@/utils/constants";

const Hero = () => {
  return (
    <div
      className={clsx(
        "hero-container flex flex-col justify-start items-center text-center gap-4 lg:gap-6",
        "sm:min-h-screen 2xl:gap-32 text-primary-1000 bg-primary-100",
        "p-8 sm:p-20 lg:p-24 pt-32 sm:pt-40 md:pt-40 lg:pt-44 2xl:pt-48"
      )}
    >
      <div className="bg-transparent max-w-[1380px] w-full md:w-[94%] h-full flex flex-col lg:flex-row justify-start lg:justify-center items-center text-center gap-8 lg:gap-16 2xl:gap-28 text-primary-1000 bg-primary-100">
        {/* Left Content */}
        <div className="h-full flex flex-col justify-center items-start gap-5">
          {/* Heading and Description */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="text-center lg:text-start text-4xl md:text-5xl lg:text-7xl font-bold font-satoshi"
          >
            <span className="mr-3">Unified Defi experience with</span>
            <span className="inline-flex text-primary-700">Chain Abstraction</span>
          </motion.h1>
          <motion.h6
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="text-center sm:text-start text-primary-850 text-xs md:text-sm lg:text-xl leading-5 sm:leading-8 font-medium"
          >
            DefiLens abstract chains and execute multiple orders in batch
            across-chains with smart wallet designed platform.
          </motion.h6>
          {/* Supported by */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="mt-8 inline-flex items-center justify-between w-full"
          >
            {/* Supported By */}
            <div className="flex flex-row items-center gap-3 md:gap-3 text-sm md:text-base font-semibold font-satoshi">
              <h1 className="text-center text-xl md:text-2xl font-bold !leading-tight">
                Grant Received<span className="px-1 text-primary-700">from</span>
              </h1>
              {backendIcons.map((item: string, index) => (
                <div key={index} className="w-6 h-6 md:w-8 md:h-8">
                  <Image src={item} className="w-full h-full" alt="icon" />
                </div>
              ))}
            </div>
            {/* Launch App Button */}
            <div className="transition-all text-xs md:text-base font-semibold bg-primary-700 hover:scale-105 rounded-full shadow-md hover:shadow-2xl p-0.5">
              <button className="flex h-full w-full items-center justify-center rounded-full">
                <Link
                  href={meta.app}
                  target="_blank"
                  className="flex justify-center items-center gap-1 rounded-full text-white py-2 px-4 sm:px-7"
                >
                  {buttonsText.heroCta}
                </Link>
              </button>
            </div>
          </motion.div>
        </div>
        {/* hero image in right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.7,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="w-full h-full"
        >
          <Image
            src={hero}
            alt="hero-img"
            className="w-auto lg:w-[350px] xl:w-[450px] 2xl:w-[575px] 3xl:w-[750px]"
          />
        </motion.div>
      </div>

      {/* Supported Networks */}
      <div className="w-full h-full grid grid-cols-3 sm:flex flex-wrap justify-center items-center gap-5 lg:gap-8 mt-5 lg:mt-20 select-none">
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
