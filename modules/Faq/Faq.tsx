import Image from "next/image";
import { tFaq } from "./types";
import { FAQsList } from "@/utils/constants";
import { upArrowBlack } from "@/assets/images";

const Faq = ({ isOpen, handleIsOpen }: tFaq) => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center items-start gap-10 lg:gap-5 text-primary-1000 bg-primary-100 p-8 py-24 sm:p-20 sm:py-28 md:p-32 md:py-28 lg:p-38 lg:py-28 2xl:p-40 2xl:py-36">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <h2 className="text-center text-[28px] font-bold lg:w-[60%] lg:text-[64px] 2xl:w-[40%] font-satoshi">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="w-full flex flex-col justify-center items-start gap-7">
        {FAQsList?.length > 0 &&
          FAQsList.map((item: any, index) => (
            <div
              key={item.id}
              role="presentation"
              onClick={() => handleIsOpen(item.id)}
              className="w-full cursor-pointer"
            >
              <div className="w-full border-b border-b-primary-200">
                <div
                  className={`bg-transparent w-full flex justify-between items-center gap-3 text-sm sm:text-base md:text-lg xl:text-xl text-primary-1000 font-medium py-3 font-satoshi ${
                    item.id === isOpen ? "text-primary-900" : "text-primary-900"
                  }`}
                >
                  {item.question}
                  <Image
                    src={upArrowBlack}
                    width={100}
                    height={100}
                    alt="arrow"
                    className={`bg-transparent w-4 md:w-5 p-1 cursor-pointer transition-transform duration-300 ${
                      item.id === isOpen ? "rotate-0" : "-rotate-180"
                    }`}
                  />
                </div>
                <div
                  className={`faq-answer transition-all duration-500 ease-out ${
                    item.id === isOpen ? "open" : ""
                  }`}
                >
                  <div className="bg-transparent text-xs sm:text-sm md:text-base text-zinc-900 font-satoshi font-light !leading-6 py-3">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Faq;
