import Image from "next/image";

import { styles } from '../../utils';
import PartnerLogo from '../../assets/icons/app-logo.svg';
import DiscordLogo from '../../assets/icons/discord.svg';
import GithubLogo from '../../assets/icons/github.svg';
import MediumLogo from '../../assets/icons/medium.svg';
import TwitterLogo from '../../assets/icons/twitter.svg';

const socialHandles = [
  {
    icon: DiscordLogo,
    url: 'https://discord.com'
  },
  {
    icon: GithubLogo,
    url: 'https://github.com'
  },
  {
    icon: TwitterLogo,
    url: 'https://twitter.com'
  },
  {
    icon: MediumLogo,
    url: 'https://medium.com'
  },
];

const Footer = () => (
  <div className="footer text-white p-[80px] pb-[50px] flex flex-col justify-center items-center" style={styles.container}>
    <div className="w-[700px] py-[50px] px-[60px] relative text-black bg-[#e5dede] flex flex-col justify-center items-center rounded-[20px]">
      <div className="text-[30px] text-bold">Join Waitlist</div>
      <div className="mt-[30px]">During Phase 1 and 2, DefiLens will only be available to whitelists. If you want to join in a whitelist please feel the form below.</div>
      <button className='bg-black text-white text-bold h-[50px] rounded-[8px] w-[225px] my-[40px]'>
        JOIN WAITLIST
      </button>
      <div className="absolute left-[calc(50%-35px)] flex flex-col justify-center items-center bottom-[-20px]">
        <div className="mb-[5px] text-[15px]">Proud Partner</div>
        <Image src={PartnerLogo} alt="logo" />
      </div>
    </div>
    <div className="flex flex-col justify-center items-center mt-[100px]">
      <div className="text-[25px] font-semibold">Want to be the first to get DefiLens updates?</div>
      <div className="flex justify-center items-center my-[40px] text-black">
        <input className="bg-[#DCDCDC] rounded-[12px] h-[50px] w-[400px] px-[20px]" placeholder="Enter your email" />
        <button className='bg-black text-white text-bold h-[50px] rounded-[8px] w-[225px] ml-[-15px]'>
        SUBSCRIBE
        </button>
      </div>
    </div>
    <div className="py-[50px] flex justify-center items-center text-[20px]">
      <div className="px-[20px]">Contact</div>
      <div className="px-[20px] border-x">Share Website</div>
      <div className="flex justify-between ml-[20px] items-center">
      {socialHandles.map((handles, index) => (
        <div key={index} className="pl-[10px]">
          <a href={handles.url}>
            <Image src={handles.icon} alt="logo" className="h-[30px] w-[30px]" />
          </a>
        </div>
      ))}
      </div>
    </div>
    <div className="text-[20px]">© Copyright DefiLens, Inc.</div>
  </div>
);

export default Footer;
