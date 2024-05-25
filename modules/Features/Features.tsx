import Card from "@/shared/Card";
import { FeaturesList } from "@/utils/constants";

const Features = () => {
  return (
    <div className="features-container min-h-screen flex flex-col justify-center items-center p-5 lg:p-24 py-20 lg:py-20">
      <div className="max-w-[1380px] w-full md:w-[94%] flex flex-col justify-center items-center gap-3 text-black">
        {/* Heading */}
        <h1 className="text-center mb-5 sm:mb-0 text-2xl md:text-3xl lg:text-4xl font-extrabold font-satoshi">
          Private beta{" "}
          <span className="font-medium text-primary-700 underline underline-offset-[6px]">
            Features
          </span>
        </h1>
        {/* Features Cards */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-start items-start gap-10 mt-0 sm:mt-12">
          {FeaturesList?.length > 0 &&
            FeaturesList.map((item) => (
              <Card
                key={item.key}
                icon={<item.icon size="24px" />}
                title={item.title}
                description={item.description}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
