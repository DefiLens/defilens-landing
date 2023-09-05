import Image from "next/image";
import team1 from "../../../assets/icons/team1.jpg"
import team2 from "../../../assets/icons/team2.jpeg"
import { OurTeam } from "@/utils/constants";

const Team = () => (
    <div
    id="teams"
    className="w-full bg-gradient-to-r from-[#111827] via-[#141533] to-[#13172A] flex flex-col justify-center items-center gap-5 text-white px-5 md:px-10 lg:px-20 py-20 pt-24"
    >
      <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold">
          Our Team
      </h1>
      <div className="w-full flex flex-wrap justify-center items-center gap-8 mt-0 sm:mt-5">
        {OurTeam.length > 0 && 
          OurTeam.map((item:any)=> (
            <div key={item.key} className="bg-[#22223b] shadow shadow-gray-500 flex flex-col justify-center items-start gap-2 rounded-sm rounded-tr-[45px] rounded-bl-[45px] p-2">
              <Image src={item.icon} className="bg-cover w-60 h-60 md:w-80 md:h-80 rounded-sm rounded-tr-[45px] rounded-bl-[45px]" alt="profile" />
              <div className="flex flex-col justify-start items-start gap-1 p-4 pt-1">
              <div className="text-base md:text-lg text-gray-100 font-bold">{item.name}</div>
              <div className="text-xs md:text-sm text-gray-400 font-semibold">{item.position}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
);

export default Team;
