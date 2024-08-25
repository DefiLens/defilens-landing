import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { hero } from "@/assets/images";
import { buttonsText, meta } from "@/utils/constants";
import { useEffect, useState } from "react";

const headings = [
  "Smart Automation for Your On-Chain Activities",
  "Rebalance or Migrate portfolio with One-click",
];

const Hero = () => {
  const [currentHeading, setCurrentHeading] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeading((prev) => (prev + 1) % headings.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sticky top-0 hero-container flex flex-col justify-start items-center text-center min-h-screen bg-white p-8 sm:p-10 lg:p-12 pt-32 sm:pt-40 md:pt-40 lg:pt-44 2xl:pt-48">
      <div className="max-w-[1380px] w-full md:w-[94%] h-full flex flex-col lg:flex-row justify-start lg:justify-center items-center gap-8 lg:gap-10 text-primary-1000">
        {/* Left Content */}
        <div className="flex-1 h-full flex flex-col justify-center items-center lg:items-start gap-5 lg:gap-6">
          {/* Heading and Description */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="text-center lg:text-start text-4xl sm:text-5xl lg:text-6xl font-bold font-satoshi leading-tight text-primary-800 fade-in"
          >
            <div className="leading-snug">{headings[currentHeading]}</div>
          </motion.h1>
          <motion.h6
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="w-3/4 lg:w-full text-center lg:text-start text-zinc-600 text-base md:text-lg lg:text-2xl leading-8 font-medium"
          >
            Set it, forget it, and let your crypto work for you 24/7
          </motion.h6>
          <div className="lg:hidden transition-all">
            <button className="flex h-full w-full items-center justify-center  transition-all bg-black hover:scale-105 rounded-md shadow-md hover:shadow-2xl p-0.5">
              <Link
                href={meta.app}
                target="_blank"
                className="flex justify-center items-center gap-1 rounded-full text-white py-2 px-4 sm:px-7"
              >
                {buttonsText.headerCta}
              </Link>
            </button>
          </div>
        </div>
        {/* hero image in right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0, 0.71, 0.2, 1.01] }}
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
        transition={{ duration: 0.8, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
        className="hidden lg:block"
      >
        <button className="flex h-full w-full items-center justify-center  transition-all bg-purple-600 hover:scale-105 rounded-md shadow-md hover:shadow-2xl p-0.5">
          <Link
            href={meta.app}
            target="_blank"
            className="flex justify-center items-center gap-1 rounded-full text-white py-2 px-4 sm:px-7"
          >
            {buttonsText.headerCta}
          </Link>
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;
