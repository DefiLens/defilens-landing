import { roadmapItems } from "@/utils/constants";

const Roadmap = () => (
  <div id="roadmap" className="bg-gradient-to-r from-[#111827] via-[#141533] to-[#13172A] text-white w-full flex flex-col gap-5 px-5 sm:px-10 md:px-14 lg:px-20 py-20 pt-28">
  <h1 className="text-xl md:text-2xl lg:text-3xl text-center font-extrabold !leading-snug my-0 sm:my-10">
    Product Development Roadmap 2023
  </h1>
  <div className="flex flex-wrap sm:flex-nowrap justify-between items-start gap-8 mt-5">
    <div className="w-full sm:w-[40%] flex flex-col justify-center items-center gap-2 md:gap-4">
      <h3 className="w-[60%] text-gray-200 text-base md:text-lg lg:text-xl xl:text-2xl text-center sm:text-start font-extrabold !leading-snug">
       Next 2 months Roadmap
      </h3>
    </div>
    <div className="w-full sm:w-[50%] mx-8">
      <ol className="relative text-gray-300 border-l-2 border-dotted border-secondary-300">
        {roadmapItems?.length > 0 &&
          roadmapItems.map((item :any) => (
            <li key={item?.title} className="pb-20 pl-10">
              <div className="absolute flex items-center justify-center w-10 h-10 bg-gray-300 text-[#141533] font-semibold rounded-full -left-5">
                {item?.number}
              </div>
              <h3 className="font-semibold text-base text-gray-300 pt-2">
                {item?.title}
              </h3>
              <p className="w-[65%] lg:w-[50%] font-normal text-sm text-gray-400 !leading-relaxed pt-3">
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
