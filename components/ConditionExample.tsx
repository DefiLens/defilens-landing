import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ExampleStepColumn from "./ExampleStepColumn";

interface ConditionExampleProps {
  exampleData: any;
  title: string;
  type: string;
}

const ConditionExample: React.FC<ConditionExampleProps> = ({
  exampleData,
  title,
  type,
}) => {
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
    <div className="flex gap-20 flex-col lg:justify-start lg:flex-row px-4 md:px-20">
      <div className="flex flex-col gap-10 lg:items-center justify-center">
        <h2 className="text-center text-[38px] font-bold lg:text-[54px] font-satoshi sm:whitespace-nowrap">
          {title}
        </h2>
      </div>
      {type === "rebalance" && (
        <div className="p-4 lg:p-8 flex flex-col items-center border-black border border-opacity-20 max-w-fit rounded-3xl">
          <h1 className="text-3xl font-semibold font-satoshi mb-12">
            Multi-Chain $1000 Portfolio Optimization
          </h1>
          <div className="flex flex-col">
            <ExampleStepColumn steps={exampleData} />
          </div>
        </div>
      )}
      {type === "automation" && (
        <div className="carouselContainer">
          <Slider {...settings}>
            {exampleData.map((item: any, index: number) => (
              <div
                key={index}
                className="p-4 lg:p-8 flex flex-col items-center border-black border border-opacity-20 max-w-fit rounded-3xl"
              >
                <h1 className="text-3xl font-semibold font-satoshi mb-12">
                  {item.title}
                </h1>
                <div className="flex flex-col">
                  <ExampleStepColumn steps={item.example} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};
export default ConditionExample;
