import Flow from "@/components/Flow";
import React from "react";
import FeatureCard from "@/components/FeatureCard";
import {
  rebalanceExample_1,
  rebalanceFeatures,
  rebalanceSteps,
} from "@/utils/data/rebalanceData";
import ConditionExample from "@/components/ConditionExample";

const Rebalance = () => {
  return (
    <div className="bg-purple-50 bg-opacity-80">
      <section>
        <div className="mx-4 pt-10 text- flex lg:mx-24 mt-[90px] flex-col items-center gap-4">
          <h2 className="text-center text-[28px] font-bold lg:text-[64px] font-satoshi">
            Rebalance or Migrate <br /> portfolio with One-click
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
      <ConditionExample
        exampleData={rebalanceExample_1}
        title="Rebalance Example"
        type="rebalance"
      />

      <section className="px-4 md:px-20 py-20">
        <div className="grid w-full gap-8 md:grid-cols-2 lg:grid-rows-1 xl:grid-cols-3">
          {rebalanceFeatures.map((item, index) => (
            <FeatureCard key={index} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Rebalance;
