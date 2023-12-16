import { useEffect, useState } from 'react';
import Upcoming from './Upcoming';
import { UpcomingList } from '@/utils/constants';

const UpcomingContainer = () => {

    const [active, setActive] = useState<number | string>(1);

    const clickItemToActive = (type: string) => {
      switch (type) {
        case "prev":
          setActive((current: any) => current - 1);
          break;
        case "next":
          setActive((current: any) => current + 1);
          break;
        default:
          setActive(type);
          break;
      }
    };
  
    useEffect(() => {
      const intervalSlider = setInterval(() => {
        setActive((current: any) => (current < UpcomingList.length ? current + 1 : 1));
      }, 4000);

      return () => clearInterval(intervalSlider);
    }, []);

    return (
        <Upcoming
            active={active}
            clickItemToActive={clickItemToActive}
        />
    ) 
}

export default UpcomingContainer;
