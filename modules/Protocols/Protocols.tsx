import React from "react";

const Protocols = () => {
  return (
    <section className="p-10 flex flex-col items-center gap-14 ">
      <div className="flex flex-col items-center gap-4 w-full">
        <h2 className="text-center text-[28px] font-bold lg:text-[64px] font-satoshi">
          Innovative Protocols
        </h2>
        <p className="text-center text-[18px] font-light opacity-40 lg:w-[45%] lg:text-[24px] 2xl:w-[35%] font-satoshi">
          Seamlessly access lending, borrowing, and earning.
        </p>
      </div>
      <div className="flex flex-wrap gap-10 justify-center max-w-5xl">
        {data.map((item) => (
          <div className="h-32 w-32 flex flex-col gap-2 items-center justify-center bg-zinc-100 rounded-3xl shadow hover:shadow-purple-600 shadow-purple-400 transition-all duration-200">
            <img src={item.image} className="h-16 w-16 rounded-full" />
            <p className="font-satoshi text-sm capitalize">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Protocols;

const data = [
  {
    name: "Aave V2",
    image: "https://app.defilens.tech/_next/static/media/aavev2.8fe7dd5d.svg",
  },
  {
    name: "Aave V3",
    image: "https://app.defilens.tech/_next/static/media/aavev3.2200d060.svg",
  },
  {
    name: "compound V3",
    image:
      "https://app.defilens.tech/_next/static/media/compoundV3.8a78b6f6.png",
  },
  {
    name: "dforce",
    image: "https://app.defilens.tech/_next/static/media/dforce.e2a4e702.jpeg",
  },
  {
    name: "radiant",
    image: "https://app.defilens.tech/_next/static/media/radiant.494990a8.jpeg",
  },
  {
    name: "Sonne Finance",
    image:
      "https://app.defilens.tech/_next/static/media/sonne-icon.db4df190.svg",
  },
  {
    name: "Exactly Finance",
    image: "https://app.defilens.tech/_next/static/media/exactly.6136d3f1.png",
  },
  {
    name: "Granary Finance",
    image: "https://app.defilens.tech/_next/static/media/granary.8863a68c.jpeg",
  },
  {
    name: "Seamless",
    image:
      "https://app.defilens.tech/_next/static/media/seamless.67db12da.jpeg",
  },
  {
    name: "Moonwell",
    image: "https://app.defilens.tech/_next/static/media/moonwell.255b7b74.png",
  },
];
