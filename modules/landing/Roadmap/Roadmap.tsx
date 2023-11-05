import { roadmapItems } from "@/utils/constants";

const Roadmap = () => (
  <div id="roadmap" className="bg-gradient-to-r from-[#111827] via-[#141533] to-[#13172A] text-white w-full flex flex-col gap-5 p-8 pt-32 sm:p-20 sm:pt-36 md:p-24 md:pt-32 lg:p-40 lg:pt-36 xl:p-56 xl:py-20">
  <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-extrabold !leading-snug my-0 md:my-10">
    Product Development Roadmap 2023
  </h1>
  <div className="flex flex-wrap md:flex-nowrap justify-between items-start gap-8 mt-5">
    <div className="w-full md:w-[50%] flex flex-col justify-center items-center gap-2 md:gap-4">
      <h3 className="w-[60%] text-gray-200 text-base md:text-lg lg:text-xl xl:text-2xl text-center md:text-end font-bold !leading-snug pl-0 md:pl-20">
       Roadmap
      </h3>
    </div>
    <div className="w-full md:w-[50%] mx-8">
      <ol className="relative text-gray-300 border-l-2 border-dotted border-secondary-300">
        {roadmapItems?.length > 0 &&
          roadmapItems.map((item :any) => (
            <li key={item?.title} className="pb-20 pl-10">
              <div className="absolute flex items-center justify-center w-10 h-10 bg-gray-300 text-[#141533] font-semibold rounded-full -left-5">
                {item?.number}
              </div>
              <h3 className="text-base md:text-xl text-gray-300 font-extrabold pt-2">
                {item?.title}
              </h3>
              <p className="w-[65%] lg:w-[55%] font-semibold text-smw md:text-base text-gray-400 !leading-relaxed pt-3">
                {item?.description}
              </p>
            </li>
          ))}
      </ol>
    </div>
  </div>
</div>
);

export default Roadmap;
