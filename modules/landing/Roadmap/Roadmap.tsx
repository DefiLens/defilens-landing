const roadmapItems = [
  {
    title: 'Phase 1',
    description: 'Live MVP with necessary changes. Will live Phase-1 By March 16'
  },
  {
    title: 'Phase 2',
    description: 'Most famous Defi Protocols will be available And UI Improvements in Phase-2 by March 25.'
  },
  {
    title: 'Phase 3',
    description: 'Any new Defi protocol can integrate by anyone and make open-source in Phase-3 by April-30'
  },
];

const Roadmap = () => (
  <div className="roadmap-container p-[50px]">
    <div className="text-[30px] text-center font-bold">Product Development Roadmap 2023</div>
    <div className="m-auto mt-[50px] w-[70%] flex justify-center">
      <div className="">
        <div className="text-[36px] font-bold w-[400px]">Next 3 months Roadmap</div>
      </div>
      <div className="h-[450px] border border-dashed border-[#9c9c9c] relative">
        <div className="absolute bg-[lightgrey] text-[20px] font-medium h-[40px] w-[40px] rounded-[40px] flex justify-center items-center left-[-20px]">1.0</div>
        <div className="absolute bg-[lightgrey] text-[20px] font-medium h-[40px] w-[40px] rounded-[40px] flex justify-center items-center left-[-20px] top-[140px]">2.0</div>
        <div className="absolute bg-[lightgrey] text-[20px] font-medium h-[40px] w-[40px] rounded-[40px] flex justify-center items-center left-[-20px] top-[270px]">3.0</div>
      </div>
      <div>
          {roadmapItems.map((items, index) => (
            <div key={index} className="pl-[50px] mt-[50px]">
              <div className="text-[25px] font-semibold">{items.title}</div>
              <div className="mt-[15px]">{items.description}</div>
            </div>
          ))}
      </div>
    </div>
  </div>
);

export default Roadmap;