import { SocialHandles } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <div className="flex flex-col gap-3 bg-gradient-to-b from-[#1D0D40] to-[#0D0E30] text-white p-3 pt-5">
    <div className="w-full flex flex-col md:flex-row justify-start items-start gap-3 py-12 px-5">
      <div className="w-full md:w-[36%] flex flex-col justify-start items-start gap-4">
        <Link
          href="/"
          className="flex flex-row justify-start items-center gap-2 text-xl font-bold"
        >
          <svg
            width="35px"
            height="35px"
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
        <div className="flex flex-col justify-start items-start gap-1 text-sm font-medium text-gray-400 px-2">
          <a
            href="mailto:defilens.tech@gmail.com"
            target="_blank"
            className="pr-4"
          >
            <i className="fa-regular fa-envelope fa-lg hover:text-[#DB4437]">
              defilens.tech@gmail.com
            </i>
          </a>
          <a
            href="mailto:radadiyasunny970@gmail.com"
            target="_blank"
            className="pr-4"
          >
            <i className="fa-regular fa-envelope fa-lg hover:text-[#DB4437]">
              radadiyasunny970@gmail.com
            </i>
          </a>
        </div>
        <div className="flex justify-start items-start gap-4 px-2">
          {SocialHandles.map((handles, index) => (
            <div key={index} className="">
              <a href={handles.url} target="_blank">
                <Image src={handles.icon} alt="" className="h-6 w-6" />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full md:w-[22%] flex flex-col justify-start items-start gap-3 px-5 mt-8">
        <h3 className="text-base md:text-lg font-semibold uppercase">
          Resources
        </h3>
        <div className="flex flex-col justify-start items-start gap-3 text-sm font-medium text-gray-400">
          <div><a href="https://app.defilens.tech" target="_blank">App</a></div>
          <div><a href="https://furry-crafter-322.notion.site/DefiLens-Details-4f47c7aa7cc74d26855e3572ab1a6efb?pvs=4" target="_blank">Documentation</a></div>
          {/* <div>Medium</div> */}
          {/* <div>FAQs</div> */}
        </div>
      </div>
      <div className="w-full md:w-[22%] flex flex-col justify-start items-start gap-3 px-5 mt-8">
        <h3 className="text-base md:text-lg font-semibold uppercase">
          Developer
        </h3>
        <div className="flex flex-col justify-start items-start gap-3 text-sm font-medium text-gray-400">

          <div><a href="https://github.com/DefiLens" target="_blank">GitHub</a></div>
          {/* <div>Audit Reports</div>
          <div>Bug Bounty</div> */}
        </div>
      </div>
      {/* <div className="w-full md:w-[22%] flex flex-col justify-start items-start gap-3 px-5 mt-8">
        <h3 className="text-base md:text-lg font-semibold uppercase">
          Governance
        </h3>
        <div className="flex flex-col justify-start items-start gap-3 text-sm font-medium text-gray-400">
          <div>Staking</div>
          <div>Delegation</div>
          <div>Snapshot</div>
          <div>Forum</div>
        </div>
      </div> */}
    </div>
    <div className="flex self-center text-gray-300 text-xs md:text-sm font-semibold">
      © Copyright DefiLens, Inc.
    </div>
  </div>
);

export default Footer;
