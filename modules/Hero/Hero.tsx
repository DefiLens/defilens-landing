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
import { useEffect, useState } from "react";

const headings = [
  "Unified Defi experience with Chain Abstraction",
  "Rebalance or Migrate portfolio with",
  "Batch Multiple trades and execute with",
  "Pay once for multiple trades with Stablecoin",
];

const Hero = () => {
  const [currentHeading, setCurrentHeading] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeading((prev) => (prev + 1) % headings.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={clsx(
        "hero-container flex flex-col justify-start items-center text-center",
        "sm:min-h-screen gap-4 lg:gap-6 xl:gap-10 text-primary-1000 bg-primary-100",
        "p-8 sm:p-10 lg:p-12",
        "pt-32 sm:pt-40 md:pt-40 lg:pt-44 2xl:pt-48"
      )}
    >
      <div className="bg-transparent max-w-[1380px] w-full md:w-[94%] h-full flex flex-col lg:flex-row justify-start lg:justify-center items-center text-center gap-8 lg:gap-10 text-primary-1000 bg-primary-100">
        {/* Left Content */}
        <div className="flex-1 h-full flex flex-col justify-center items-center lg:items-start gap-5 lg:gap-10">
          {/* Heading and Description */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="text-center lg:text-start text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-satoshi"
          >
            <div className="font-bold text-primary-800 leading-[1.2]">
              <span>Rebalance or Migrate portfolio with</span>
              <span className="inline-flex text-primary-700 ml-2">
                One-click
              </span>
            </div>
          </motion.h1>
          <motion.h6
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="w-3/4 lg:w-full text-center lg:text-start text-primary-850 text-base md:text-lg lg:text-xls sm:leading-8 font-medium"
          >
            DefiLens abstract chains and execute multiple orders in batch
            across-chains with smart wallet designed platform.
          </motion.h6>
          <div className="lg:hidden transition-all text-xs md:text-base font-semibold bg-primary-700 hover:scale-105 rounded-full shadow-md hover:shadow-2xl p-0.5">
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
          {/* Supported by */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="mt-0 lg:mt-2 inline-flex items-center justify-center lg:justify-between w-full"
          >
            {/* Supported By */}
            <div className="flex flex-row items-center gap-3 md:gap-3 text-sm md:text-base font-semibold font-satoshi">
              <h1 className="text-center text-xl md:text-2xl font-bold !leading-tight">
                Grant Received
                <span className="px-2 text-primary-700">from</span>
              </h1>
              {backendIcons.map((item: string, index) => (
                <div key={index} className="w-6 h-6 md:w-8 md:h-8">
                  <Image src={item} className="w-full h-full" alt="icon" />
                </div>
              ))}
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
          className="flex-1 h-full"
        >
          <Image
            src={hero}
            alt="hero-img"
            className="mx-auto w-[350px] md:w-[350px] xl:w-[450px] 2xl:w-[575px] 3xl:w-[750px]"
          />
        </motion.div>
      </div>

      {/* Launch App Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="text-center lg:text-start text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-satoshi"
      >
        <div className="hidden lg:block transition-all text-xs md:text-base font-semibold bg-primary-700 hover:scale-105 rounded-full shadow-md hover:shadow-2xl p-0.5">
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

      {/* Supported Networks */}
      <div className="mt-5 w-full h-full grid grid-cols-3 sm:flex flex-wrap justify-center items-center gap-5 lg:gap-8 select-none">
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

// components/HeroSection.js
// import { hero } from "@/assets/images";
// import { useEffect, useState } from "react";

// const headings = [
//   "Unified Defi experience with Chain Abstraction",
//   "Rebalance or Migrate portfolio with One-Click",
//   "Batch Multiple trades and execute with One-Click",
//   "Pay once for multiple trades with Stablecoin",
// ];

// const Hero = () => {
//   const [currentHeading, setCurrentHeading] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentHeading((prev) => (prev + 1) % headings.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex items-center justify-between bg-primary-100 h-screen px-8">
//       <div className="flex flex-col justify-center w-1/2">
//         <h1 className="text-4xl font-bold text-primary-800 mb-4 fade-in">
//           {headings[currentHeading]}
//         </h1>
//         <div className="flex items-center space-x-4 mb-8">
//           <img src="/path/to/base-logo.png" alt="Base Logo" className="h-12" />
//           <img
//             src="/path/to/eth-india-logo.png"
//             alt="ETH India Logo"
//             className="h-12"
//           />
//         </div>
//         <button className="bg-primary-600 text-white py-2 px-4 rounded hover:bg-primary-700">
//           Launch App
//         </button>
//       </div>
//       <div className="w-1/2 flex justify-center">
//         {/* <img src="/path/to/your-image.png" alt="Hero Image" className="h-96" /> */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{
//             duration: 0.8,
//             delay: 0.7,
//             ease: [0, 0.71, 0.2, 1.01],
//           }}
//           className="w-full h-full"
//         >
//           <Image
//             src={hero}
//             alt="hero-img"
//             className="w-auto lg:w-[350px] xl:w-[450px] 2xl:w-[575px] 3xl:w-[750px]"
//           />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
