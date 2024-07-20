import Layout from "@/shared/layout";
import HeroContainer from "@/modules/Hero";
import HeaderContainer from "@/shared/header";
import FeaturesContainer from "@/modules/Features";
import BackedByContainer from "@/modules/BackedBy";
import FooterContainer from "@/shared/footer";
import Automation from "@/modules/Automation";
import Rebalance from "@/modules/Rebalance";
import FaqContainer from "@/modules/Faq";
import OurUsersSay from "@/modules/OurUsersSay";

import React from "react";
import Link from "next/link";
import { meta } from "@/utils/constants";

const Landing = () => (
  <Layout>
    <>
      {/* <TopContainer /> */}
      <HeaderContainer />
      <div className="mx-auto hide_scrollbar">
        {/* <Hero /> */}
        <HeroContainer />
        <Automation />
        {/* <div id="page2" className="mt-10">
          <div id="moving-text">
            <div className="con select-none">
              <h1>SMART AUTOMATION</h1>
              <div id="gola"></div>
              <h1>REBALANCE PORTFOLIO</h1>
              <div id="gola"></div>
              <h1>MIGRATE POSITIONS</h1>
              <div id="gola"></div>
            </div>
            <div className="con select-none">
              <h1>SMART AUTOMATION</h1>
              <div id="gola"></div>
              <h1>REBALANCE PORTFOLIO</h1>
              <div id="gola"></div>
              <h1>MIGRATE POSITIONS</h1>
              <div id="gola"></div>
            </div>
            <div className="con select-none">
              <h1>SMART AUTOMATION</h1>
              <div id="gola"></div>
              <h1>REBALANCE PORTFOLIO</h1>
              <div id="gola"></div>
              <h1>MIGRATE POSITIONS</h1>
              <div id="gola"></div>
            </div>
          </div>
        </div> */}
        <Rebalance />

        {/* <HowToUseContainer /> */}

        {/* <div className="h-screen max-w-screen flex items-center justify-center relative group">
          <div className="text-gray-50  duration-300 relative group cursor-pointer  overflow-hidden h-[100%] w-[100%] p-2 font-extrabold bg-purple-100">
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-60 h-60 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500 bounce-ball"></div>
            <div className="absolute group-hover:-top-1 group-hover:-left-2 z-10 w-96 h-96 rounded-full group-hover:scale-150  duration-700 left-9 top-6 bg-orange-500 orange-ball"></div>
            <div className="absolute group-hover:top-[30%] group-hover:right-[50%] z-10 w-52 h-52 rounded-full group-hover:scale-150 duration-700 right-96 top-[80%] bg-pink-500"></div>
            <div className="absolute group-hover:left-[60%] group-hover:top-60 z-10 w-24 h-24  rounded-full group-hover:scale-150  duration-700 left-2 top-48 bg-purple-600"></div>
            <div className="absolute group-hover:left-64 group-hover:bottom-11 z-10 w-44 h-44  rounded-full group-hover:scale-150 duration-700 left-14 bottom-48 bg-green-500"></div>
          </div>
          <div className="absolute bg-white backdrop-blur-xl z-20 h-[100%] w-[100%] bg-opacity-40 flex flex-col items-center justify-center px-60">
            <h2 className="text-7xl font-bold text-neutral-800 leading-snug tracking-wide text-center mb-3">
              Defilens: Automate Your Trades
            </h2>
            <h2 className="text-3xl text-center text-neutral-800 mb-8">
              Automate repetitive tasks, conduct meetings, and make data-driven
              decisions with AI.
              <br />
              Tools, web, and more.
            </h2>
          </div>
        </div> */}

        {/* <Home /> */}
        <section className="p-10 flex flex-col items-center gap-14 ">
          <div className="flex flex-col items-center gap-4 w-full">
            <h2 className="text-center text-[28px] font-bold lg:text-[64px] font-satoshi">
              Innovative Protocols
            </h2>
            <p className="text-center text-[18px] font-light opacity-40 lg:w-[45%] lg:text-[24px] 2xl:w-[35%] font-satoshi">
              Seamlessly access lending, borrowing, and earning.
            </p>
          </div>
          <div className="flex flex-wrap gap-10 justify-center">
            {data.map((item) => (
              <div className="h-32 w-32 flex flex-col gap-2 items-center justify-center">
                <img src={item.image} className="h-16 w-16 rounded-full" />
                <p className="font-satoshi text-sm capitalize">{item.name}</p>
              </div>
            ))}
          </div>
        </section>
        <FeaturesContainer />

        <BackedByContainer />

        {/* <TeamsContainer /> */}
        {/* <OurUsersSay /> */}
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
                          <p className="text-zinc-600 text-sm">
                            @{item.userName}
                          </p>
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
                          <p className="text-zinc-600 text-sm">
                            @{item.userName}
                          </p>
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
                          <p className="text-zinc-600 text-sm">
                            @{item.userName}
                          </p>
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
                          <p className="text-zinc-600 text-sm">
                            @{item.userName}
                          </p>
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
        <FaqContainer />
        <FooterContainer />
      </div>
    </>
  </Layout>
);

export default Landing;

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
