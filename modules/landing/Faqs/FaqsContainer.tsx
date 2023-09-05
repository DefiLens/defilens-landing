import { useState } from 'react';
import Faqs from './Faqs';

const Icon =({ id, open }:any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? 'rotate-180' : ''
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const FaqsContainer = () => {
  const [open, setOpen] = useState<any>(0);

  const handleOpen = (value:any) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  const AccordionData = [
    {
      id: 1,
      title: 'What is DefiLens ?',
      content:
        'It is simplify the defi trading process by Batching',
    },
    {
      id: 2,
      title: 'What is Cross-chain Lending ?',
      content:
        'Users can effortlessly lend their assets from one chain to another chain in one-click.',
    },
    {
      id: 3,
      title: 'What is Refinance Defi Positions ?',
      content:
        'Users can consolidate multiple actions into a single transaction, whether within a single chain or across chains.',
    },
    {
      id: 4,
      title: 'What is Cross-chain Lending ?',
      content:
        'Users can effortlessly lend their assets from one chain to another chain in one-click.',
    },
    {
      id: 5,
      title: 'What is Optimized Returns ?',
      content:
        'It curates a list of top opportunities, based on APY and returns. Whether suggesting smart batching or identifying high-return lending protocols.',
    },
    
  ];

  return (
    <Faqs 
      open={open}
      AccordionData={AccordionData}
      handleOpen={handleOpen}
      Icon={Icon}
      customAnimation={customAnimation} />
  );
} 

export default FaqsContainer;
