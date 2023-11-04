import Image from "next/image";
import team1 from "../../../assets/icons/team1.jpg"
import team2 from "../../../assets/icons/team2.jpeg"
import { OurTeam } from "@/utils/constants";

const Team = () => (
    <div
    id="teams"
    className="w-full bg-gradient-to-r from-[#111827] via-[#141533] to-[#13172A] flex flex-col justify-center items-center gap-5 text-white p-8 pt-32 sm:p-20 sm:pt-36 md:p-24 md:pt-32 lg:p-40 lg:pt-36 xl:p-56 xl:py-20"
    >
      <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold">
          Our Team
      </h1>
      <div className="w-full flex flex-wrap justify-center items-center gap-8 mt-0 sm:mt-5">
        {OurTeam.length > 0 && 
          OurTeam.map((item:any)=> (
            <div key={item.key} className="bg-[#22223b] shadow shadow-gray-500 flex flex-col justify-center items-start gap-2 rounded-sm rounded-tr-[45px] rounded-bl-[45px] p-2">
              <Image src={item.icon} className="bg-cover w-40 h-40 md:w-60 md:h-60 rounded-sm rounded-tr-[45px] rounded-bl-[45px]" alt="profile" />
              <div className="flex flex-col justify-start items-start gap-1 p-4 pt-1">
              <div className="text-base md:text-lg text-gray-100 font-bold">{item.name}</div>
              <div className="font-[LendingFont-Light] font-bold text-xs md:text-sm text-gray-400">{item.position}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
);

export default Team;
