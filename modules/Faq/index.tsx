import { useState } from 'react';
import Faq from "./Faq";

const FaqContainer = () => {
  const [isOpen, setIsOpen] = useState<string>('');

  const handleIsOpen = (payload: string) => {
    if (payload !== isOpen) {
      setIsOpen(payload);
    } else {
      setIsOpen('');
    }
  };

  return (
    <Faq
      isOpen={isOpen}
      handleIsOpen={handleIsOpen}
    />
  );
};
export default FaqContainer;
