import FeatureCard from "@/components/FeatureCard";
import { FeaturesList } from "@/utils/constants";

const Features = () => {
  return (
    // features-container
    <div className="bg-purple-50 bg-opacity-80">
      <div className="mx-4 flex lg:mx-24 mt-[90px] flex-col items-center gap-4 pt-10">
        <h2 className="text-center text-[28px] font-bold lg:w-[60%] lg:text-[64px] 2xl:w-[40%] font-satoshi whitespace-nowrap">
          Other features <br />
          we are providing
        </h2>
      </div>
      <div className="min-h-screen flex flex-col justify-center items-center p-5 lg:p-24 py-20 lg:py-20">
        <div className="max-w-[1380px] w-full md:w-[94%] flex flex-col justify-center items-center gap-6 text-black">
          <div className="grid w-full gap-8 md:grid-cols-2 lg:grid-rows-1 xl:grid-cols-3">
            {FeaturesList?.length > 0 &&
              FeaturesList.map((item, index) => (
                <FeatureCard key={index} item={item} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
