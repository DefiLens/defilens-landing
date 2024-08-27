const FeatureCard = ({ item }: any) => {
  return (
    <div
      className="relative flex flex-row gap-8 rounded-xl bg-[#FBFBFB] p-8 items-end w-full min-h-[360px] shadow"
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 overflow-hidden rounded-xl">
        <div className="flex items-center justify-center py-10">
          <item.icon className="text-8xl opacity-40" />
        </div>
      </div>
      <div className="z-[10] flex flex-col gap-2">
        <h2 className="flex flex-wrap items-center gap-4 text-lg font-bold lg:text-2xl">
          <div className="flex flex-row gap-4 items-center">
            <span>{item.title}</span>
          </div>
        </h2>
        <p className="max-w-[640px] text-black/65">{item.description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
