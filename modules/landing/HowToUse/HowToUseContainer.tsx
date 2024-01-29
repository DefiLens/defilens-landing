import { useEffect, useState, useRef } from 'react';
import { debounce } from 'lodash';
import HowToUse from './HowToUse';
import { HowToUseList } from '@/utils/constants';

const HowToUseContainer = () => {

  const ref = useRef<any>(null)
  const [active, setActive] = useState(1)

  ref.current = active

  // useEffect(() => {
  //   const handleScroll = debounce(() => {
  //     setActive((current) => (current < HowToUseList.length ? current + 1 : 1));
  //   }, 300);

  //   window.addEventListener('scroll', handleScroll)

  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [])

  useEffect(() => {
    const intervalSlider = setInterval(() => {
      setActive((current: any) => (current < HowToUseList.length ? current + 1 : 1));
    }, 5000);

    return () => clearInterval(intervalSlider);
  }, []);

  return (
    <HowToUse
      active={active}
      setActive={setActive}
    />
    );
};

export default HowToUseContainer;
