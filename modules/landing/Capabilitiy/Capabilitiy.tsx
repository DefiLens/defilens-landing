import Image from 'next/image';
import AppLogo from '../../../assets/icons/app-logo.svg';

const capabilityItems = [
  {
    icon: AppLogo,
    title: 'Discussions',
    Description: 'User can create defi social graph by discussion on post.'
  },
  {
    icon: AppLogo,
    title: 'Learn Defi',
    Description: 'Other user or beginners can learn about various kind of transactions.'
  },
  {
    icon: AppLogo,
    title: 'Copy Trade',
    Description: 'One can create similar transaction for them instantly.'
  },
]

const SocialGraph = () => (
  <div className="social-graph px-[150px] py-[50px]">
    <div className="flex flex-col justify-center items-center text-[22px]">
      <div className="text-[30px] font-bold">
      Features and Capability
      </div>
      <div className="mt-[40px] text-center w-[80%]">
      In a daily basis, the lot of defi activity happens on chain like Lending-borrowing, Exchange, Perpetuals, Yield Strategies, NFT-Trading. So all this users defi activity will suggests on platform and encourage to post on lens. Then it will be available for everyone as a public news feed. 

      Once a defi activity available on news feed. They can perform Discussions.
      </div>
    </div>
    <div className='flex justify-between items-center mt-[60px] w-[calc(100%-20px)]'>
      {
        capabilityItems.map((items, index) => (
          <div key={index} className='flex flex-col justify-center items-center h-[300px] flex-1 mx-[5px] p-10'>
            {/* <Image src={AppLogo} alt="icon" /> */}
            <div className="text-[30px] font-bold" style={{color: "green"}}>
              Feature {index+1}
            </div>
            <div className='mt-[24px] text-[30px]'>{items.title}</div>
            <div className='mt-[24px] text-center text-[18px]'>{items.Description}</div>
          </div>
        ))
      }
    </div>
  </div>
);

export default SocialGraph;
