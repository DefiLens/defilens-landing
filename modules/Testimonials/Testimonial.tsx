import { meta } from "@/utils/constants";
import Link from "next/link";
import React from "react";

const Testimonial = () => {
  return (
    <section className="flex flex-col items-center py-20">
      <h2 className="text-center text-6xl font-semibold mb-12">
        Loved by the community
      </h2>
      <div>
        <button className="flex h-full w-full items-center justify-center  transition-all bg-black hover:scale-105 rounded-md shadow-md hover:shadow-2xl p-0.5 mb-16">
          <Link
            href={meta.app}
            target="_blank"
            className="flex justify-center items-center gap-1 rounded-full text-white py-2 px-4 sm:px-7"
            // className="flex justify-center items-center gap-1 rounded-full hover:bg-gradient-to-br from-primary-600 via-primary-500 to-primary-400 hover:text-primary-100 py-2 px-4 sm:px-7"
          >
            Get Started
          </Link>
        </button>
      </div>
      <div className="max-w-[99vw]">
        <div className="slider">
          <div className="slide_track">
            {testimonials_top.map((item, index) => (
              <div key={index} className="w-[400px]">
                <div className="bg-gradient-to-b from-white to-[rgba(0,0,0,0.03)] border border-zinc-100 max-w-[380px] w-full h-full rounded-xl p-5 shadow-lg mx-auto">
                  <div className="flex">
                    <img
                      src={item.image}
                      loading="lazy"
                      alt=""
                      className="h-12 w-12 rounded-full shadow-lg"
                    />
                    <div className="flex flex-col ml-3">
                      <p className="text-base text-black">{item.name}</p>
                      <p className="text-zinc-600 text-sm">@{item.userName}</p>
                    </div>
                  </div>

                  <div className="testmonial-title mt-5">
                    <p className="text-sm text-zinc-600 tracking-wider">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {testimonials_top.map((item, index) => (
              <div key={index} className="w-[400px]">
                <div className="bg-gradient-to-b from-white to-[rgba(0,0,0,0.03)] border border-zinc-100 max-w-[380px] w-full h-full rounded-xl p-5 shadow-lg mx-auto">
                  <div className="flex">
                    <img
                      src={item.image}
                      loading="lazy"
                      alt=""
                      className="h-12 w-12 rounded-full shadow-lg"
                    />
                    <div className="flex flex-col ml-3">
                      <p className="text-base text-black">{item.name}</p>
                      <p className="text-zinc-600 text-sm">@{item.userName}</p>
                    </div>
                  </div>

                  <div className="testmonial-title mt-5">
                    <p className="text-sm text-zinc-600 tracking-wider">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="slider">
          <div className="slide_track_rev">
            {testimonials_top.reverse().map((item, index) => (
              <div key={index} className="w-[400px]">
                <div className="bg-gradient-to-b from-white to-[rgba(0,0,0,0.03)] border border-zinc-100 max-w-[380px] w-full h-full rounded-xl p-5 shadow-lg mx-auto">
                  <div className="flex">
                    <img
                      src={item.image}
                      loading="lazy"
                      alt=""
                      className="h-12 w-12 rounded-full shadow-lg"
                    />
                    <div className="flex flex-col ml-3">
                      <p className="text-base text-black">{item.name}</p>
                      <p className="text-zinc-600 text-sm">@{item.userName}</p>
                    </div>
                  </div>

                  <div className="testmonial-title mt-5">
                    <p className="text-sm text-zinc-600 tracking-wider">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {testimonials_top.reverse().map((item, index) => (
              <div key={index} className="w-[400px]">
                <div className="bg-gradient-to-b from-white to-[rgba(0,0,0,0.03)] border border-zinc-100 max-w-[380px] w-full h-full rounded-xl p-5 shadow-lg mx-auto">
                  <div className="flex">
                    <img
                      src={item.image}
                      loading="lazy"
                      alt=""
                      className="h-12 w-12 rounded-full shadow-lg"
                    />
                    <div className="flex flex-col ml-3">
                      <p className="text-base text-black">{item.name}</p>
                      <p className="text-zinc-600 text-sm">@{item.userName}</p>
                    </div>
                  </div>

                  <div className="testmonial-title mt-5">
                    <p className="text-sm text-zinc-600 tracking-wider">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

const testimonials_top = [
  {
    name: "Jainil 🦇🔊 | 🤓.eth",
    userName: "save_as_jay",
    image:
      "https://pbs.twimg.com/profile_images/1543197329087336451/gTag32rq_400x400.jpg",
    description:
      "Just had first hand experience! Amazed by the extremely seemless cross chain transaction + batch transactions Always happy to provide first hand user experience on all versions of @DefiLensTech @RadadiyaSunny lfg! 🚀",
  },
  {
    name: "Biconomy",
    userName: "biconomy",
    image:
      "https://pbs.twimg.com/profile_images/1760639001587863553/jkMcM52V_400x400.jpg",
    description: "Really cool use case for cross chain account abstraction!",
  },
  {
    name: "rahat.eth",
    userName: "Rahatcodes",
    image:
      "https://pbs.twimg.com/profile_images/1581090331323686912/WgEc7I2s_400x400.png",
    description:
      "Love this one click cross chain lending protocol. As seen here you can do alot of cool stuff with Account Abstraction outside of onboarding new users. Making the process of interacting with defi for current users and making it more friendly and accessible are just as important",
  },
  {
    name: "Sachin | Biconomy.io | sachint.eth",
    userName: "schin_tomar",
    image:
      "https://pbs.twimg.com/profile_images/1669446030163599360/qON2kXbp_400x400.jpg",
    description: "Niceee",
  },
  {
    name: "Kofi",
    userName: "0xKofi",
    image:
      "https://pbs.twimg.com/profile_images/1387869109015220227/8HJxHNxq_400x400.jpg",
    description:
      "A tool that allows smart contract wallets to make cross-chain lending and batching transactions. 🥉 DefiLens by @RadadiyaSunny.",
  },
  {
    name: "Base Universe 🛡",
    userName: "UniverseOnBase",
    image:
      "https://pbs.twimg.com/profile_images/1772991974775328768/iVr-qtDI_400x400.png",
    description:
      "[8/23] rWallet: An SC wallet/dapp that enables #NFT rentals entirely on-chain and in a trustless manner. No colateral needed. @DefiLensTech : Increase trading volume and users in #DeFi via cross-chain lending and batching transaction via Biconomy ERC4337.",
  },
  {
    name: "Biconomy",
    userName: "biconomy",
    image:
      "https://pbs.twimg.com/profile_images/1760639001587863553/jkMcM52V_400x400.jpg",
    description: "We will transform web3 into a 1-click experience with AA! 💪",
  },
  {
    name: "rahat.eth",
    userName: "Rahatcodes",
    image:
      "https://pbs.twimg.com/profile_images/1581090331323686912/WgEc7I2s_400x400.png",
    description:
      "Love this one click cross chain lending protocol. As seen here you can do alot of cool stuff with Account Abstraction outside of onboarding new users. Making the process of interacting with defi for current users and making it more friendly and accessible are just as important",
  },
];
