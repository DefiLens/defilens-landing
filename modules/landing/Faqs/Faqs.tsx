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
    className="w-full bg-gradient-to-r from-[#111827] via-[#141533] to-[#13172A] flex flex-col justify-center items-center gap-5 text-white px-5 md:px-10 lg:px-20 py-20 pt-20"
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
                  className="text-sm md:text-base text-gray-300 hover:text-gray-400 font-bold border-b-2 border-gray-400 shadow-sm rounded-lg px-5 py-2 my-2"
                  >
                  {item.title}
                  </AccordionHeader>
                  <AccordionBody className="text-xs md:text-sm text-gray-300 font-medium px-8 py-2">
                  {item.content}
                  </AccordionBody>
              </Accordion>
              ))}
          </div>
      </div>
    </div>
);
  
  export default Faqs;
  