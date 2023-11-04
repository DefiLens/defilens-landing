import {
    AccordionHeader,
    AccordionBody,
    Accordion,
  } from '@material-tailwind/react';

const Faqs = ({
  open,
  handleOpen,
  Icon,
  AccordionData,
  customAnimation,
}:any) => (
    <div
    id="faqs"
    className="w-full bg-gradient-to-r from-[#111827] via-[#141533] to-[#13172A] flex flex-col justify-center items-center gap-5 text-white p-8 pt-32 sm:p-20 sm:pt-36 md:p-24 md:pt-32 lg:p-40 lg:pt-36 xl:p-56 xl:py-20"
    >
      <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold">
          FAQs
      </h1>
      <div className="max-w-xl md:max-w-3xl lg:max-w-5xl flex flex-wrap sm:flex-nowrap justify-between items-start gap-8 mt-0 sm:mt-5">
          <div className="w-full mx-8">
          {AccordionData?.length > 0 &&
              AccordionData.map((item:any) => (
              <Accordion
                  key={item.title}
                  open={open === item?.id}
                  icon={<Icon id={item?.id} open={open} />}
                  animate={customAnimation}
              >
                  <AccordionHeader
                    onClick={() => handleOpen(item?.id)}
                    className="font-[LendingFont-Light] font-bold text-base md:text-lg text-gray-300 hover:text-gray-400 border-b-2 border-gray-400 shadow-sm rounded-lg px-5 py-2 mt-5"
                  >
                    {item.title}
                  </AccordionHeader>
                  <AccordionBody className="font-[LendingFont-Light] font-bold text-sm md:text-base text-gray-50 font-medium px-8 py-3">
                   {item.content}
                  </AccordionBody>
              </Accordion>
              ))}
          </div>
      </div>
    </div>
);
  
  export default Faqs;
  