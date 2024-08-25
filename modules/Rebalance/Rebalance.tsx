import Flow from "@/components/Flow";
import React from "react";
import { AiOutlineBars } from "react-icons/ai";
import {
  HiOutlineAdjustmentsHorizontal,
  HiOutlineDocumentText,
} from "react-icons/hi2";
import { AiOutlineApartment } from "react-icons/ai";
import { TbArrowsCross } from "react-icons/tb";
import { RiCoinsLine } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";

const Step = ({ parts }: any) => (
  <div className="flex flex-row items-start gap-4 pb-3">
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
            <div className="w-[1px] h-full bg-[#805ACA]" />
          )}
        </div>

        <Step step={step.step} imgSrc={step.imgSrc} parts={step.parts} />
      </div>
    ))}
  </div>
);

const Example = () => {
  return (
    <div className="flex gap-20 flex-col lg:flex-row px-4 md:px-20">
      <div className="flex flex-col gap-10 lg:items-center">
        <h2 className="lg:text-center text-[38px] font-bold lg:text-[54px] font-satoshi">
          Rebalance Example
        </h2>
        <FaArrowRightLong className="text-5xl hidden lg:block" />
      </div>
      <div className="p-4 lg:p-8 flex flex-col items-center border-black border border-opacity-20 max-w-fit rounded-3xl">
        <h1 className="text-3xl font-semibold font-satoshi mb-12">
          Multi-Chain $1000 Portfolio Optimization
        </h1>
        <div className="flex flex-col">
          <StepColumn steps={Example_1} />
        </div>
      </div>
    </div>
  );
};

const Rebalance = () => {
  return (
    <>
      <section>
        <div className="mx-4 text- flex lg:mx-24 mt-[90px] flex-col items-center gap-4">
          <h2 className="text-center text-[28px] font-bold lg:w-[60%] lg:text-[64px] 2xl:w-[60%] font-satoshi">
            Rebalance or Migrate portfolio with One-click
          </h2>
          <p className="text-center text-[18px] font-light opacity-40 lg:w-[45%] lg:text-[24px] 2xl:w-[35%] font-satoshi">
            DefiLens abstract chains and execute multiple orders in batch
            across-chains with smart wallet designed platform.
          </p>
        </div>
      </section>
      <section className="py-20">
        <Flow steps={rebalanceSteps} />
      </section>
      <Example />
      <section className="px-4 md:px-20 py-20">
        <div className="grid w-full gap-8 md:grid-cols-2 lg:grid-rows-1 xl:grid-cols-3">
          <div className="relative flex flex-row gap-8 rounded-xl bg-[#FBFBFB] p-8 items-end w-full min-h-[360px]">
            <div className="absolute bottom-0 left-0 right-0 top-0 overflow-hidden rounded-xl">
              <div className="flex items-center justify-center py-10">
                <AiOutlineApartment className="text-8xl opacity-40" />
              </div>
            </div>

            <div className="z-[10] flex flex-col gap-2">
              <h2 className="flex flex-wrap items-center gap-4 text-lg font-bold lg:text-2xl">
                <div className="flex flex-row gap-4 items-center">
                  <span>Smart Batching</span>
                </div>
              </h2>
              <p className="max-w-[640px] text-black/65">
                Execute multiple transactions across chains in a single batch,
                saving time and reducing costs. Simplify complex DeFi operations
                with one-click execution.
              </p>
            </div>
          </div>

          <div className="relative flex flex-row gap-8 rounded-xl bg-[#FBFBFB] p-8 items-end w-full min-h-[360px]">
            <div className="absolute bottom-0 left-0 right-0 top-0 overflow-hidden rounded-xl">
              <div className="flex items-center justify-center py-10">
                <TbArrowsCross className="text-8xl opacity-40" />
              </div>
            </div>

            <div className="z-[10] flex flex-col gap-2">
              <h2 className="flex flex-wrap items-center gap-4 text-lg font-bold lg:text-2xl">
                <div className="flex flex-row gap-4 items-center">
                  <span> Cross-Chain Mastery</span>
                </div>
              </h2>
              <p className="max-w-[640px] text-black/65">
                Seamlessly access and manage positions across different
                blockchains. Easily migrate DeFi positions between protocols and
                chains for optimal performance.
              </p>
            </div>
          </div>
          <div className="relative flex flex-row gap-8 rounded-xl bg-[#FBFBFB] p-8 items-end w-full min-h-[360px] md:col-span-2 xl:col-span-1">
            <div className="absolute bottom-0 left-0 right-0 top-0 overflow-hidden rounded-xl">
              <div className="flex items-center justify-center py-10">
                <RiCoinsLine className="text-8xl opacity-40" />
              </div>
            </div>
            <div className="z-[10] flex flex-col gap-2">
              <h2 className="flex flex-wrap items-center gap-4 text-lg font-bold lg:text-2xl">
                <div className="flex flex-row gap-4 items-center">
                  <span>Stablecoin Simplicity</span>
                </div>
              </h2>
              <p className="max-w-[640px] text-black/65">
                Cover all transaction fees using stablecoins in one go.
                Rebalance your portfolio effortlessly across multiple chains
                with a single stablecoin payment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rebalance;

const Example_1 = [
  {
    step: "1",
    imgSrc:
      "https://www.onplug.io/_next/image/?url=%2Fprotocols%2Fplug.png&w=32&q=75",
    parts: [
      { text: "Batch 1: ", highlight: false },
      { text: "$250", highlight: true },
      { text: "USDC", highlight: true },
      { text: "to Optimism lending.", highlight: false },
    ],
  },
  {
    step: "2",
    imgSrc:
      "https://www.onplug.io/_next/image/?url=%2Fprotocols%2Funiswap.png&w=32&q=75",
    parts: [
      { text: "Batch 2: ", highlight: false },
      { text: "$250", highlight: true },
      { text: "ETH", highlight: true },
      { text: "to", highlight: false },
      { text: "Ethereum", highlight: true },
      { text: "restaking", highlight: false },
    ],
  },
  {
    step: "3",
    imgSrc:
      "https://www.onplug.io/_next/image/?url=%2Fprotocols%2Funiswap.png&w=32&q=75",
    parts: [
      { text: "Batch 3: ", highlight: false },
      { text: "$250", highlight: true },
      { text: "ETH", highlight: true },
      { text: "to", highlight: false },
      { text: "Ethereum", highlight: true },
      { text: "restaking (", highlight: false },
      { text: "different", highlight: true },
      { text: "protocol)", highlight: false },
    ],
  },
  {
    step: "4",
    imgSrc:
      "https://www.onplug.io/_next/image/?url=%2Fprotocols%2Funiswap.png&w=32&q=75",
    parts: [
      { text: "Batch 4: ", highlight: false },
      { text: "$250", highlight: true },
      { text: "ETH", highlight: true },
      { text: "to", highlight: false },
      { text: "Ethereum", highlight: true },
      { text: "restaking (", highlight: false },
      { text: "another", highlight: true },
      { text: "protocol)", highlight: false },
    ],
  },
  {
    step: "5",
    imgSrc:
      "https://www.onplug.io/_next/image/?url=%2Fprotocols%2Funiswap.png&w=32&q=75",
    parts: [
      { text: "Batch 5: Migrate", highlight: false },
      { text: "$500", highlight: true },
      { text: "from", highlight: false },
      { text: "Polygon", highlight: true },
      { text: "Aave", highlight: true },
      { text: "to", highlight: false },
      { text: "Arbitrum", highlight: true },
      { text: "Compound", highlight: true },
    ],
  },
  {
    step: "6",
    imgSrc:
      "https://www.onplug.io/_next/image/?url=%2Fprotocols%2Funiswap.png&w=32&q=75",
    parts: [
      { text: "All", highlight: false },
      { text: "executed", highlight: true },
      { text: "in one click, with", highlight: false },
      { text: "fees", highlight: true },
      { text: "paid in stablecoin!", highlight: false },
    ],
  },
];

const rebalanceSteps = [
  {
    number: "1",
    Icon: HiOutlineAdjustmentsHorizontal,
    title: "Decide Your Actions",
    description:
      "Choose from a variety of DeFi actions across multiple chains, including lending, staking, and position migrations.",
  },
  {
    number: "2",
    Icon: AiOutlineBars,
    title: "Create Your Batch",
    description:
      "Add your chosen actions to a batch, combining multiple operations across different protocols and chains.",
  },
  {
    number: "3",
    Icon: HiOutlineDocumentText,
    title: "One-Click Execution",
    description:
      "Execute your entire batch of actions across multiple chains with a single click, using our smart wallet technology.",
  },
];
