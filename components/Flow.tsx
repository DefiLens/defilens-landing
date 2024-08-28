const FlowCard = ({ number, title, description }: any) => (
  <div
    className="relative flex flex-row items-center gap-1 rounded-lg px-[20px] py-[30px] lg:py-0 xl:px-[30px]"
    style={{
      background:
        "linear-gradient(30deg, rgba(217, 217, 217, 0.1), rgba(217, 217, 217, 0.1), rgba(217, 217, 217, 0.4))",
      opacity: 1,
      transform: "none",
    }}
  >
    <div className="relative flex flex-col gap-2 flex-1">
      <h2 className="flex flex-wrap items-center gap-4 text-2xl font-bold relative">
        {title}
      </h2>
      <p className="text-black/65 text-base sm:max-w-[380px] lg:max-w-[240px]">
        {description}
      </p>
    </div>
    <span className="font-bold text-[72px] lg:text-[148px] opacity-45">
      {number}
    </span>
  </div>
);

const Flow = ({ steps }: any) => {
  return (
    <div className="mx-4 flex-row lg:mx-24 grid gap-8 xl:grid-cols-3">
      {steps.map((item: any) => (
        <FlowCard
          number={item.number}
          title={item.title}
          description={item.description}
          Icon={item.Icon}
        />
      ))}
    </div>
  );
};

export default Flow;
