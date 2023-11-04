import {BlockchainList} from "@/utils/constants"
import Image from "next/image"
import Link from "next/link"
import {HiArrowNarrowRight} from "react-icons/hi"

const SocialGraph = () => (
  <>
    <div className="header w-full bg-transparent absolute z-50 px-5 sm:px-10 md:px-20 py-3 mt-5 flex justify-between items-center">
      <Link
        href="/"
        className="w-auto flex flex-row justify-start items-center gap-2 text-xl md:text-2xl font-bold"
      >
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall mui-style-8tazii"
          focusable="false"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.71542 1.06718C7.89457 0.977606 8.10543 0.977606 8.28458 1.06718L14.6481 4.249C14.8637 4.3568 14.9999 4.57714 14.9999 4.81818C14.9999 5.05922 14.8637 5.27957 14.6481 5.38736L8.28458 8.56918C8.10543 8.65876 7.89457 8.65876 7.71542 8.56918L1.35191 5.38736C1.13632 5.27957 1.00014 5.05922 1.00014 4.81818C1.00014 4.57714 1.13632 4.3568 1.35191 4.249L7.71542 1.06718ZM3.05941 4.81818L8 7.28852L12.9406 4.81818L8 2.34784L3.05941 4.81818ZM1.06732 7.71541C1.22449 7.40106 1.60673 7.27364 1.92108 7.43082L8 10.4703L14.0789 7.43082C14.3933 7.27364 14.7755 7.40106 14.9327 7.71541C15.0899 8.02976 14.9624 8.41201 14.6481 8.56918L8.28458 11.751C8.10543 11.8406 7.89457 11.8406 7.71542 11.751L1.35191 8.56918C1.03756 8.41201 0.910149 8.02976 1.06732 7.71541ZM1.06732 10.8972C1.22449 10.5829 1.60673 10.4555 1.92108 10.6126L8 13.6522L14.0789 10.6126C14.3933 10.4555 14.7755 10.5829 14.9327 10.8972C15.0899 11.2116 14.9624 11.5938 14.6481 11.751L8.28458 14.9328C8.10543 15.0224 7.89457 15.0224 7.71542 14.9328L1.35191 11.751C1.03756 11.5938 0.910149 11.2116 1.06732 10.8972Z"
            fill="white"
            stroke="white"
            stroke-width="0.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <span className="text-white">DefiLens</span>
      </Link>
      <div className="text-white">
        <a
            href="https://app.defilens.tech/"
            target="_blank"
            className="flex justify-center items-center gap-1 text-sm text-center md:text-base bg-gradient-to-r from-[#2D66F4] to-[#9F2DF4] rounded-lg shadow-md py-2 sm:py-3 px-4 sm:px-7"
          >
            Launch App
          </a>
      </div>
    </div>
    <div className="hero-container text-white min-h-[calc(100vh-62px)] bg-[#111827] flex flex-col justify-center items-center text-center">
      <div className="w-full flex flex-col justify-center items-center gap-5 p-5 sm:p-10 md:p-14 lg:p-20 pt-14 md:pt-24 lg:pt-28">
        <h1 className="text-center text-xl md:text-2xl lg:text-6xl font-extrabold lg:font-black">
          Simplifying Defi Trading Experience
        </h1>
        <div className="animate-heading text-center text-2xl md:text-3xl lg:text-5xl font-semibold py-3 md:py-5 !leading-snug">
          Smart Batching via one-click
        </div>
        <h3 className="font-[LendingFont-Light] text-center text-sm md:text-base lg:text-lg px-3 md:px-12 !leading-relaxed">
          DefiLens is pioneering a platform that streamlines trading activities.
          To offering the ease of trading experience and swift portfolio
          management to users, Defilens provide a solutions like cross-chain
          trading and efficiently refinancing defi positions using smart batching
          strategies.
        </h3>
        <a
          href="https://app.defilens.tech/"
          target="_blank"
          className="flex justify-center items-center gap-1 border-b-4 border-purple-900 transition duration-300 text-base md:text-lg bg-gradient-to-r from-[#2D66F4] to-[#9F2DF4] rounded-full shadow-md py-2 sm:py-3 px-5 sm:px-8 mt-6 md:mt-8"
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
    </>
)

export default SocialGraph
