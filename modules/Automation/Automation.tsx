import Flow from "@/components/Flow";
import React from "react";
import { AiOutlineBars } from "react-icons/ai";
import {
  HiOutlineAdjustmentsHorizontal,
  HiOutlineDocumentText,
} from "react-icons/hi2";
import { RiCoinsLine } from "react-icons/ri";
import { MdAutoAwesome } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { MdOutlineMultipleStop } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRightLong } from "react-icons/fa6";

const Example_1 = [
  {
    step: "1",
    imgSrc:
      "https://www.onplug.io/_next/image/?url=%2Fprotocols%2Fplug.png&w=32&q=75",
    parts: [
      { text: "Restake", highlight: false },
      { text: "ETH", highlight: true },
      { text: "using", highlight: false },
      { text: "USDC", highlight: true },
      { text: "on Mellow Finance.", highlight: false },
    ],
  },
  {
    step: "2",
    imgSrc:
      "https://www.onplug.io/_next/image/?url=%2Fprotocols%2Funiswap.png&w=32&q=75",
    parts: [
      { text: "APY", highlight: true },
      { text: ">", highlight: false },
      { text: "6%", highlight: true },
    ],
  },
  {
    step: "3",
    imgSrc:
      "https://www.onplug.io/_next/image/?url=%2Fprotocols%2Fplug.png&w=32&q=75",
    parts: [
      { text: "Check every", highlight: false },
      { text: "30", highlight: true },
      { text: "minutes", highlight: false },
    ],
  },
  {
    step: "4",
    imgSrc:
      "https://www.onplug.io/_next/image/?url=%2Fprotocols%2Funiswap.png&w=32&q=75",
    parts: [
      { text: "If", highlight: false },
      { text: "condition", highlight: true },
      { text: "is met,", highlight: false },
      { text: "perform", highlight: true },
      { text: "restaking transaction", highlight: false },
    ],
  },
];
const Example_2 = [
  {
    step: "1",
    imgSrc:
      "https://www.onplug.io/_next/image/?url=%2Fprotocols%2Fyearn.png&w=32&q=75",

    parts: [
      { text: "Move", highlight: false },
      { text: "stETH", highlight: true },
      { text: "between", highlight: false },
      { text: "Lido", highlight: true },
      { text: "and", highlight: false },
      { text: "Rocket", highlight: true },
      { text: "Pool.", highlight: false },
    ],
  },
  {
    step: "2",
    imgSrc:
      "https://www.onplug.io/_next/image/?url=%2Fprotocols%2Funiswap.png&w=32&q=75",

    parts: [
      { text: "APR", highlight: true },
      { text: "difference ", highlight: false },
      { text: ">", highlight: true },
      { text: "0.5%", highlight: true },
    ],
  },
  {
    step: "3",
    imgSrc:
      "https://www.onplug.io/_next/image/?url=%2Fprotocols%2Fyearn.png&w=32&q=75",

    parts: [
      { text: "Check daily at ", highlight: false },
      { text: "00.00 UTC", highlight: true },
    ],
  },
  {
    step: "4",
    imgSrc:
      "https://www.onplug.io/_next/image/?url=%2Fprotocols%2Funiswap.png&w=32&q=75",

    parts: [
      { text: "Unstake from lower", highlight: false },
      { text: "APR", highlight: true },
      { text: "protocol and stake in higher", highlight: false },
      { text: "APR", highlight: true },
      { text: "protocol", highlight: false },
    ],
  },
];
const Example_3 = [
  {
    step: "1",
    imgSrc:
      "https://www.onplug.io/_next/image/?url=%2Fprotocols%2Fyearn.png&w=32&q=75",
    parts: [
      { text: "Move", highlight: false },
      { text: "USDC", highlight: true },
      { text: "between", highlight: false },
      { text: "Aave", highlight: true },
      { text: "and", highlight: true },
      { text: "Compound", highlight: true },
    ],
  },
  {
    step: "2",
    imgSrc:
      "https://www.onplug.io/_next/image/?url=%2Fprotocols%2Funiswap.png&w=32&q=75",

    parts: [
      { text: "Supply", highlight: false },
      { text: "APY", highlight: true },
      { text: "difference ", highlight: false },
      { text: ">", highlight: true },
      { text: "1%", highlight: true },
    ],
  },
  {
    step: "3",
    imgSrc:
      "https://www.onplug.io/_next/image/?url=%2Fprotocols%2Fyearn.png&w=32&q=75",
    parts: [
      { text: "Check", highlight: false },
      { text: "hourly", highlight: true },
    ],
  },
  {
    step: "4",
    imgSrc:
      "https://www.onplug.io/_next/image/?url=%2Fprotocols%2Funiswap.png&w=32&q=75",

    parts: [
      { text: "Withdraw from lower", highlight: false },
      { text: "APY", highlight: true },
      { text: "platform and deposit into higher", highlight: false },
      { text: "APY", highlight: true },
      { text: "platform.", highlight: false },
    ],
  },
];

const Step = ({ imgSrc, parts }: any) => (
  <div className="flex flex-row items-start gap-4 pb-3">
    {/* <img
      alt="Icon"
      loading="lazy"
      decoding="async"
      data-nimg="1"
      className="rounded-full h-6 w-6 mt-1.5"
      style={{ color: "transparent" }}
      src={imgSrc}
    /> */}
    <p className="flex flex-wrap items-center gap-2 font-satoshi font-light">
      {parts.map((part: any, index: number) => (
        <React.Fragment key={index}>
          {part.highlight ? (
            <span className="rounded-md bg-purple-100 p-2 py-1 text-purple-600">
              {part.text}
            </span>
          ) : (
            part.text
          )}
        </React.Fragment>
      ))}
    </p>
  </div>
);

const StepColumn = ({ steps }: any) => (
  <div className="flex flex-col">
    {steps.map((step: any, index: number) => (
      <div key={index} className="flex gap-4">
        <div className="flex flex-col items-center mr-2">
          <div>
            <div className="rounded-full bg-white bg-opacity-10 backdrop-blur-md border border-[#805ACA] h-7 w-7 flex items-center justify-center">
              {index + 1}
            </div>
          </div>
          {index < steps.length - 1 && (
            <div className="w-px h-full bg-[#805ACA]" />
          )}
        </div>

        <Step step={step.step} imgSrc={step.imgSrc} parts={step.parts} />
      </div>
    ))}
  </div>
);

const Example = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
  };

  return (
    <div className="flex gap-20 flex-col lg:justify-between lg:flex-row px-4 md:px-20">
      <div className="flex flex-col gap-10 lg:items-center">
        <h2 className="lg:text-center text-[38px] font-bold lg:text-[54px] font-satoshi">
          Automation Examples
        </h2>
        <FaArrowRightLong className="text-5xl hidden lg:block" />
      </div>
      <div className="carouselContainer">
        <Slider {...settings}>
          {exampleData.map((item, index: number) => (
            <div
              key={index}
              className="p-4 lg:p-8 flex flex-col items-center border-black border border-opacity-20 max-w-fit rounded-3xl"
            >
              <h1 className="text-3xl font-semibold font-satoshi mb-12">
                {item.title}
              </h1>
              <div className="flex flex-col">
                <StepColumn steps={item.example} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const exampleData = [
  {
    title: "Mellow Finance Restaking",
    example: Example_1,
  },
  {
    title: "Symbiotic Restaking Optimization",
    example: Example_2,
  },
  {
    title: "Aave/Compound Lending Arbitrage",
    example: Example_3,
  },
];

const automationSteps = [
  {
    number: "1",
    Icon: HiOutlineAdjustmentsHorizontal,
    title: "Select Actions",
    description:
      "Choose from a variety of DeFi actions such as lending, borrowing, or swapping tokens across different protocols.",
  },
  {
    number: "2",
    Icon: AiOutlineBars,
    title: "Set Conditions",
    description:
      "Define triggers based on APY changes, time intervals, or price thresholds to automatically execute your chosen actions.",
  },
  {
    number: "3",
    Icon: HiOutlineDocumentText,
    title: "Declare Actions",
    description:
      "Specify the exact steps to be taken when your conditions are met, such as moving funds or adjusting positions.",
  },
];

const Automation = () => {
  return (
    <>
      <section>
        <div className="mx-4 flex lg:mx-24 flex-col items-center gap-4 pt-10">
          <h2 className="text-center text-[28px] font-bold lg:w-[60%] lg:text-[64px] 2xl:w-[40%] font-satoshi">
            Automate Your On-Chain Activities
          </h2>
          <p className="text-center text-[18px] font-light opacity-40 lg:w-[45%] lg:text-[24px] 2xl:w-[35%] font-satoshi">
            Set it, forget it, and let your crypto work for you 24/7
          </p>
        </div>
      </section>
      <section className="py-20 ">
        <Flow steps={automationSteps} />
      </section>
      <Example />
      <section className="px-4 md:px-20 py-20">
        <div className="grid w-full gap-8 md:grid-cols-2 lg:grid-rows-2 xl:grid-cols-3">
          <div className="relative flex flex-row gap-8 rounded-xl bg-[#FBFBFB] p-8 items-end w-full min-h-[360px]">
            <div className="absolute bottom-0 left-0 right-0 top-0 overflow-hidden rounded-xl">
              <div className="flex items-center justify-center py-10">
                <MdAutoAwesome className="text-8xl opacity-40" />
              </div>
            </div>
            <div className="z-[10] flex flex-col gap-2">
              <h2 className="flex flex-wrap items-center gap-4 text-lg font-bold lg:text-2xl">
                <div className="flex flex-row gap-4 items-center">
                  <span>Automate Your Positions</span>
                </div>
              </h2>
              <p className="max-w-[640px] text-black/65">
                Set up complex strategies to manage your DeFi positions without
                constant monitoring. Our platform executes trades and adjusts
                your portfolio based on your predefined conditions.
              </p>
            </div>
          </div>

          <div className="relative flex flex-row gap-8 rounded-xl bg-[#FBFBFB] p-8 items-end w-full min-h-[360px]">
            <div className="absolute bottom-0 left-0 right-0 top-0 overflow-hidden rounded-xl">
              <div className="flex items-center justify-center py-10">
                <BsCashCoin className="text-8xl opacity-40" />
              </div>
            </div>
            <div className="z-[10] flex flex-col gap-2">
              <h2 className="flex flex-wrap items-center gap-4 text-lg font-bold lg:text-2xl">
                <div className="flex flex-row gap-4 items-center">
                  <span>Scheduled Transactions</span>
                </div>
              </h2>
              <p className="max-w-[640px] text-black/65">
                Plan your DeFi moves in advance. Set up transactions to occur at
                specific times or intervals, ensuring you never miss an
                opportunity.
              </p>
            </div>
          </div>

          <div className="relative flex flex-row gap-8 rounded-xl bg-[#FBFBFB] p-8 items-end w-full min-h-[360px] md:col-span-2 xl:col-span-1">
            <div className="absolute bottom-0 left-0 right-0 top-0 overflow-hidden rounded-xl">
              <div className="flex items-center justify-center py-10">
                <RxCounterClockwiseClock className="text-8xl opacity-40" />
              </div>
            </div>
            <div className="z-[10] flex flex-col gap-2">
              <h2 className="flex flex-wrap items-center gap-4 text-lg font-bold lg:text-2xl">
                <div className="flex flex-row gap-4 items-center">
                  <span>24/7 Running</span>
                </div>
              </h2>
              <p className="max-w-[640px] text-black/65">
                Our automation platform runs continuously, monitoring market
                conditions and executing your strategies round the clock, so you
                don't have to.
              </p>
            </div>
          </div>

          <div className="relative flex flex-row gap-8 rounded-xl bg-[#FBFBFB] p-8 items-end w-full min-h-[360px]">
            <div className="absolute bottom-0 left-0 right-0 top-0 overflow-hidden rounded-xl">
              <div className="flex items-center justify-center py-10">
                <MdOutlineMultipleStop className="text-8xl opacity-40" />
              </div>
            </div>
            <div className="z-[10] flex flex-col gap-2">
              <h2 className="flex flex-wrap items-center gap-4 text-lg font-bold lg:text-2xl">
                <div className="flex flex-row gap-4 items-center">
                  <span>Multichain Automation</span>
                </div>
              </h2>
              <p className="max-w-[640px] text-black/65">
                Operate across multiple blockchains seamlessly. Our platform
                supports various networks, allowing you to maximize
                opportunities across the entire DeFi ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Automation;
