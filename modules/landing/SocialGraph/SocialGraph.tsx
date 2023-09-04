import { BlockchainList } from "@/utils/constants";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";

const SocialGraph = () => (
  <div className="hero-container text-white min-h-[calc(100vh-62px)] bg-[#111827] flex flex-col justify-center items-center text-center">
    <div className="w-full flex flex-col justify-center items-center gap-8 p-5 sm:p-10 md:p-14 lg:p-20 pt-14 md:pt-24 lg:pt-28">
      <h1 className="text-center text-xl md:text-2xl lg:text-4xl font-extrabold lg:font-black">
        Defi Made Easy : Smart batching Whether single or cross-chain
      </h1>
      <h2 className="animate-sub-heading text-center text-base md:text-lg lg:text-xl font-extrabold lg:font-black">
        DefiLens is pioneering a platform that streamlines trading activities.
        To offering the ease of trading experience and swift portfolio
        management to users, Defilens provide a solutions like cross-chain
        trading and efficiently refinancing defi positions using smart batching
        strategies.
      </h2>
      <h3 className="animate-heading text-center text-4xl md:text-6xl lg:text-7xl font-semibold lg:font-bold">
        Smart Batching
      </h3>
      <a
        href="https://app.defilens.tech/"
        target="_blank"
        className="flex justify-center items-center gap-1 border-b-4 border-purple-900 hover:border-blue-900 transition duration-300 font-medium md:font-semibold text-base md:text-lg lg:text-xl bg-gradient-to-r hover:bg-gradient-to-l from-purple-600 via-blue-500 to-violet-600 rounded-full shadow-md py-2 md:py-3 px-5 md:px-10 mt-6 md:mt-8"
      >
        Launch APP <HiArrowNarrowRight size="20px" />
      </a>

      <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-5 mt-3">
        {BlockchainList.map((item) => (
          <div key={item.name} className="">
            <Image
              src={item.icon}
              alt=""
              className="h-10 w-10 lg:h-14 lg:w-14 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default SocialGraph;
