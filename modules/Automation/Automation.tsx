import Flow from "@/components/Flow";
import React from "react";
import {
  automationFeatures,
  automationFlowSteps,
  exampleData,
} from "@/utils/data";
import FeatureCard from "@/components/FeatureCard";
import ConditionExample from "@/components/ConditionExample";

const Automation = () => {
  return (
    <>
      <section>
        <div className="mx-4 flex lg:mx-24 flex-col items-center gap-4 pt-10">
          <h2 className="text-center text-[28px] font-bold lg:text-[64px] font-sans whitespace-nowrap">
            Automate Your <br /> On-Chain Activities
          </h2>
          <p className="text-center text-[18px] font-light opacity-40 lg:text-[24px] font-satoshi">
            Set it, forget it, and let your crypto work for you 24/7
          </p>
        </div>
      </section>
      <section className="py-20 ">
        <Flow steps={automationFlowSteps} />
      </section>
      <ConditionExample
        exampleData={exampleData}
        title="Automation Examples"
        type="automation"
      />
      <section className="px-4 md:px-20 py-20">
        <div className="grid w-full gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {automationFeatures.map((item, index) => (
            <FeatureCard key={index} item={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Automation;
