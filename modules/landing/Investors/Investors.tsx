import { InvestorsList } from "@/utils/constants";
import Image from "next/image";

const Investors = () => (
    <div id="investors" className="bg-gradient-to-r from-[#111827] via-[#141533] to-[#13172A] text-white w-full flex flex-col gap-5 px-5 sm:px-10 md:px-14 lg:px-20 py-28">
       <div className="flex flex-col justify-center items-center gap-10 text-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
        Investors
      </h1>
      <h2 className="font-[LendingFont-Light] font-bold text-sm sm:text-base md:text-lg lg:text-xl">
         Backed by the most prestigious Investors in the crypto industry
      </h2>
     </div>
     <div className="w-full flex justify-between items-start gap-8 mt-0 sm:mt-5">
          <div className="w-full flex flex-wrap justify-center items-center gap-5">
          {InvestorsList?.length > 0 &&
              InvestorsList.map((item:any) => (
                <Image key={item.key} src={item.icon} className=""  alt="logo" />
              ))}
          </div>
      </div>
    </div>
  );
  
  export default Investors;
  