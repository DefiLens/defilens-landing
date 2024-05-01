import { OurTeam } from "@/utils/constants";
import Image from "next/image";
import { TwitterTweetEmbed } from "react-twitter-embed";

const Teams = () => (
    <div className="teams-container flex flex-col justify-center items-center gap-3 text-primary-1000 bg-primary-100 p-8 py-14 sm:p-20 sm:py-14 md:p-32 md:py-14 lg:p-38 lg:py-14 2xl:p-40 2xl:py-20">
        <div className="flex flex-col justify-center items-center gap-3 pb-0 sm:pb-6">
            <h6 className="text-center text-primary-300 text-sm md:text-base lg:text-lg font-semibold !leading-snug px-5 md:px-10 lg:px-20 xl:px-60">
                Our Team
            </h6>
            <h1 className="text-center text-xl md:text-3xl lg:text-4xl font-extrabold !leading-tight">
                We are the 
                <span className="px-3 text-primary-700">
                    Guardians of the Galaxy
                </span>
            </h1>
        </div>
       
        <div className="w-full h-full flex flex-wrap justify-center items-start gap-5 md:gap-10 mt-0 sm:mt-10">
            {OurTeam?.length > 0 &&
            OurTeam.map((item:any) => (
                <div key={item.key} className="w-40 lg:w-52 xl:72 2xl:w-80 h-full flex flex-col justify-start items-start gap-5  shadow-primary-850 rounded-xl">
                    <Image
                        src={item.icon}
                        alt="icon"
                        className="rounded-2xl"
                    />
                    <div className="flex flex-col justify-start items-start gap-2 px-1">
                        <div className="text-primary-900 text-base md:text-lg lg:text-xl font-bold">
                            {item.name}
                        </div>
                        <div className="text-primary-300 text-xs md:text-sm lg:text-base font-semibold !leading-6">
                            {item.position}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );

  export default Teams;