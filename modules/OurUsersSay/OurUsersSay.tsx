import { OurUsersSayList } from "@/utils/constants";
import Tweet from "./Tweet";

const OurUsersSay = () => (
  <div className="flex flex-col justify-center items-center gap-3 text-primary-1000 bg-primary-100 p-8 py-20 sm:p-20 sm:py-20 md:p-32 md:py-20 lg:p-38 lg:py-20 2xl:p-40 2xl:py-28">
    <div className="flex flex-col justify-center items-center gap-5">
      <h1 className="text-center text-xl md:text-3xl lg:text-4xl font-extrabold !leading-tight">
        What Do Our
        <span className="px-3 text-primary-700">Users Say?</span>
      </h1>
    </div>
    <div className="w-full h-full flex justify-between items-start gap-8">
      <div data-theme="light" className="tweet-grid">
        {OurUsersSayList?.length > 0 &&
          OurUsersSayList.map((item, index) => (
            <div key={`${item.key}_${index}`}>
              <Tweet id={item.tweetId} />
            </div>
          ))}
      </div>
    </div>
  </div>
);

export default OurUsersSay;
