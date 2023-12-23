import Image from "next/image";
import AppLogo from "../../../assets/icons/app-logo.svg";

const capabilityItems = [
  {
    icon: AppLogo,
    title: "Refinance Defi Positions",
    Description:
      " Users can consolidate multiple actions into a single transaction, whether within a single chain or across chains.",
  },
  {
    icon: AppLogo,
    title: "Cross-chain Lending",
    Description:
      "Users can effortlessly lend their assets from one chain to another chain in one-click.",
  },
  {
    icon: AppLogo,
    title: "Optimized Returns",
    Description:
      "It curates a list of top opportunities, based on APY and returns. Whether suggesting smart batching or identifying high-return lending protocols.",
  },
];

const Capabilitiy = () => (
  <div className="social-graph px-[150px] py-[50px] bg-gradient-to-r from-[#111827] via-[#141533] to-[#13172A]  text-white pt-40">
    <div className="flex flex-col justify-center items-center text-[22px]">
      <div className="text-[30px] font-bold">Features and Capability</div>
      <div className="mt-[40px] text-center w-[80%]">
        DefiLens is crafting a revolutionary platform that redefines how users
        engage with the Defi ecosystem. At its core, the platform introduces a
        streamlined trading experience through two key pillars: Cross-chain
        Lending and Smart Batching
      </div>
    </div>
    <div className="flex justify-between items-center mt-[60px] w-[calc(100%-20px)]">
      {capabilityItems.map((items, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center h-[300px] flex-1 mx-[5px] p-10"
        >
          {/* <Image src={AppLogo} alt="icon" /> */}
          <div className="text-[30px] font-bold" style={{ color: "green" }}>
            Feature {index + 1}
          </div>
          <div className="mt-[24px] text-[30px]">{items.title}</div>
          <div className="mt-[24px] text-center text-[18px]">
            {items.Description}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Capabilitiy;
