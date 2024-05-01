import { HowToUseList } from "@/utils/constants";
import { motion } from "framer-motion";
import Image from "next/image";

const HowToUse = ({ active, setActive }: any) => (
  <div className="how-to-use-container flex flex-col justify-start items-center gap-5 text-primary-100 p-8 py-20 sm:p-20 sm:py-20 md:p-32 md:py-20 lg:p-38 lg:py-20 2xl:p-40 2xl:py-28">
    <div className="flex flex-col justify-center items-center gap-5">
      <h1 className="text-center text-xl md:text-3xl lg:text-4xl font-extrabold !leading-tight">
        How To Use DefiLens
      </h1>
      <h6 className="max-w-2xl text-center text-primary-760 text-xs md:text-sm lg:text-base font-medium !leading-snug">
        DefiLens is pioneering a platform that streamlines trading activities.
        To offering the ease of trading experience and swift portfolio
        management to users
      </h6>
    </div>

    <div className="max-w-xs w-full h-1 flex justify-center items-center gap-2 bg-transparent my-2">
      {HowToUseList.length > 0 &&
        HowToUseList.map((item) => (
          <div
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`w-5 sm:w-8 h-full bg-white rounded-full cursor-pointer ${
              item.id === active ? "opacity-100" : "opacity-30"
            }`}
          />
        ))}
    </div>

    <motion.div className="w-full flex flex-col justify-start items-center gap-5">
      <div className="w-full flex flex-col justify-start items-center gap-5">
        <Image
          src={HowToUseList[active - 1]?.icon}
          alt="how-to-use-img"
          className="w-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-md border border-primary-550"
        />
        <motion.div className="flex flex-col justify-center items-center gap-3 p-5 lg:px-5">
          <h1 className="text-center lg:text-center text-lg md:text-xl lg:text-2xl font-bold !leading-tight">
            {HowToUseList[active - 1]?.title}
          </h1>
          <h6 className="text-center lg:text-center text-primary-760 text-xs md:text-sm lg:text-base font-medium !leading-snug">
            {HowToUseList[active - 1]?.description}
          </h6>
        </motion.div>
      </div>
    </motion.div>
  </div>
);

export default HowToUse;
