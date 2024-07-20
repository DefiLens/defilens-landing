import Card from "@/shared/Card";
import { FeaturesList } from "@/utils/constants";

const Features = () => {
  return (
    // features-container
    <>
      <div className="mx-4 flex lg:mx-24 mt-[90px] flex-col items-center gap-4">
        <h2 className="text-center text-[28px] font-bold lg:w-[60%] lg:text-[64px] 2xl:w-[40%] font-satoshi">
          Other features we are providing
        </h2>
      </div>
      <div className="min-h-screen flex flex-col justify-center items-center p-5 lg:p-24 py-20 lg:py-20 bg-white">
        <div className="max-w-[1380px] w-full md:w-[94%] flex flex-col justify-center items-center gap-6 text-black">
          {/* <h1 className="text-center mb-5 sm:mb-0 text-2xl md:text-3xl lg:text-5xl font-extrabold font-satoshi text-black">
          Features
          <span className="font-medium text-primary-700 underline underline-offset-[6px]">
          </span>
        </h1> */}

          {/* Features Cards */}
          {/* <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16 gap-y-20 mt-0 sm:mt-12">
          {FeaturesList?.length > 0 &&
            FeaturesList.map((item, index) => (
              <Card
                key={item.key}
                icon={<item.icon size="60px" className="text-primary-700" />}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
        </div> */}

          <div className="grid w-full gap-8 md:grid-cols-2 lg:grid-rows-1 xl:grid-cols-3">
            {FeaturesList?.length > 0 &&
              FeaturesList.map((item, index) => (
                <div
                  key={index}
                  className="relative flex flex-row gap-8 rounded-xl bg-[#FBFBFB] p-8 items-end w-full min-h-[300px]"
                >
                  <div className="absolute bottom-0 left-0 right-0 top-0 overflow-hidden rounded-xl">
                    <div className="flex items-center justify-center py-10">
                      <item.icon className="text-8xl opacity-40" />
                    </div>
                  </div>

                  <div className="z-[10] flex flex-col gap-2">
                    <h2 className="flex flex-wrap items-center gap-4 text-lg font-bold lg:text-2xl">
                      <div className="flex flex-row gap-4 items-center">
                        <span>{item.title}</span>
                      </div>
                    </h2>
                    <p className="max-w-[640px] text-black/65">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
