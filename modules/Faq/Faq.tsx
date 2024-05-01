import Image from "next/image"
import { tFaq } from "./types"
import { FAQsList } from "@/utils/constants"
import { upArrowBlack } from "@/assets/images"

const Faq = ({
    isOpen,
    handleIsOpen,
  }: tFaq) => (
    <div className="w-full flex flex-col lg:flex-row justify-center items-start gap-10 lg:gap-5 text-primary-1000 bg-primary-100 p-8 py-24 sm:p-20 sm:py-28 md:p-32 md:py-28 lg:p-38 lg:py-28 2xl:p-40 2xl:py-36">
        <div className="w-full flex flex-col justify-center items-center gap-5">
            <h1 className="w-full xl:w-[60%] text-center lg:text-start text-xl md:text-3xl lg:text-4xl font-extrabold !leading-tight">
                Frequently Asked
                <span className="pl-2 sm:pl-3 text-primary-700">
                    Questions
                </span>
            </h1>
        </div>
        <div className="w-full flex flex-col justify-center items-start gap-7">
            {FAQsList?.length > 0 && FAQsList.map((item: any, index: number) => (
                <div
                    key={item.id}
                    role="presentation"
                    onClick={() => handleIsOpen(item.id)}
                    className="w-full cursor-pointer"
                >
                    <div className="w-full border-b border-b-primary-200 ">
                        <div className={`bg-transparent w-full flex justify-between items-center gap-3 text-sm sm:text-base md:text-lg xl:text-xl text-primary-1000 font-bold py-3 ${item.id === isOpen ? 'text-primary-900' : 'text-primary-900'}  `}>
                            {item.question}
                            <Image
                                src={upArrowBlack}
                                width={100}
                                height={100}
                                alt="arrow"
                                className={`bg-transparent w-4 md:w-5 p-1 cursor-pointer transition delay-75 duration-700 ${item.id === isOpen ? 'rotate-0' : '-rotate-180'} `}
                            />
                            
                        </div>
                        {item.id === isOpen && (
                            <div className="bg-transparent text-xs sm:text-sm md:text-base text-primary-300 font-semibold !leading-6 py-3">
                            {item.answer}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    </div>
) 

export default Faq
