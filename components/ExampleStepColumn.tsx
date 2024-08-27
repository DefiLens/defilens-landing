import React from "react";

const ExampleStepColumn = ({ steps }: any) => (
  <div className="flex flex-col">
    {steps?.map((step: any, index: number) => (
      <div key={index} className="flex gap-4">
        <div className="flex flex-col items-center mr-2">
          <div>
            <div className="rounded-full bg-white bg-opacity-10 backdrop-blur-md border border-[#805ACA] h-7 w-7 flex items-center justify-center">
              {index + 1}
            </div>
          </div>
          {index < steps.length - 1 && (
            <div className="w-[1px] h-full bg-[#805ACA]" />
          )}
        </div>
        <div className="flex flex-row items-start gap-4 pb-3">
          <p className="flex flex-wrap items-center gap-2 font-satoshi font-light">
            {step.parts.map((part: any, index: number) => (
              <React.Fragment key={index}>
                {part.highlight ? (
                  <span className="rounded-md bg-purple-100 p-2 py-1 text-purple-600">
                    {part.text}
                  </span>
                ) : (
                  part.text
                )}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    ))}
  </div>
);

export default ExampleStepColumn;
