import Image from 'next/image';

import AppLogo from '../../assets/icons/app-logo.svg';

const Header = () => (
  <div className="h-[70px] py-[10px] px-[30px] flex justify-between">
    <div className='h-[50px] w-[50px]'>
      <Image src={AppLogo} alt="app-logo" />
    </div>
    <div>
      <button className='bg-black text-white text-bold w-[130px] h-[50px] rounded-[8px]'>APP</button>
    </div>
  </div>
);

export default Header;
