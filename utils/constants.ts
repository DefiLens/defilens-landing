import {
  arbitrum,
  avalanche,
  base,
  baseGrant,
  blackLogo,
  devfolioGrant,
  discord,
  eth,
  ethIndia,
  ethIndiaGrant,
  github,
  howToUse01,
  howToUse02,
  howToUse03,
  howToUse04,
  howToUse05,
  howToUse06,
  logo,
  optimism,
  polygon,
  team1,
  team2,
  team3,
  telegram,
  twitter,
} from "@/assets/images";
import { IconType } from "react-icons";
import {
  HiCursorArrowRays,
  HiCubeTransparent,
  HiMiniSquare3Stack3D,
  HiOutlineCheckCircle,
  HiOutlineSun,
  HiArrowsRightLeft,
  HiCheckBadge
} from "react-icons/hi2";

export const meta = {
  title: "DefiLens",
  description:
    "DefiLens unified Defi trading experience with One-click. DefiLens abstract chains and execute multiple orders in batch across-chains with smart wallet designed platform.",
  keywords:
    "defi, ethereum, base, arbitrum, polygon, optimism, cross chain, cross-chain, acccount abstraction, smart account, trading, batching, rebalance",
  url: "https://defilens.tech",
  image: "https://defilens.tech/twitter-cover.png",
  app: "https://app.defilens.tech/",
  SITE_NAME: "defilens.tech",
  APP_NAME: "DefiLens",
  username: "@DefiLensTech",
  email: "contact@defilens.com",
};

const getBaseURL = (NODE_ENV: string | undefined) => {
  switch (NODE_ENV) {
    case "production":
      return "https://server.defilens.tech/api/v1";

    case "staging":
      return "https://server.defilens.tech/api/v1";

    case "dev":
      return "https://server.defilens.tech/api/v1";

    default:
      return "https://server.defilens.tech/api/v1";
  }
};

export const BASE_URL = getBaseURL(process.env.NEXT_PUBLIC_NODE_ENV);

export const NavigationList = [
  {
    name: "Use",
    key: "HowToUse",
  },
  {
    name: "Features",
    key: "features",
  },
  // {
  //   name: "RoadMap",
  //   key: "roadmap",
  // },
  // {
  //   name: "Partners",
  //   key: "partners",
  // },
  // {
  //   name: "Security",
  //   key: "security",
  // },
  // {
  //   name: "Investors",
  //   key: "investors",
  // },
  {
    name: "Teams",
    key: "teams",
  },
  // {
  //   name: "FAQs",
  //   key: "faqs",
  // },
  {
    name: "Newsletter",
    key: "newsletter",
  },
];

export const SocialHandles = [
  {
    title: "Community on Telegram",
    icon: telegram,
    url: "https://t.me/defilenscommunity",
  },
  // {
  //   icon: discord,
  //   url: "https://discord.gg/aMppurzv",
  // },
  {
    title: "Follow us on X",
    icon: twitter,
    url: "https://x.com/DefiLensTech",
  },
  {
    title: "Code on Github",
    icon: github,
    url: "https://github.com/DefiLens",
  },
];

export const BlockchainList = [
  {
    key: "eth",
    name: "Ethereum",
    icon: eth,
  },
  {
    key: "polygon",
    name: "Polygon",
    icon: polygon,
  },
  {
    key: "arbitrum",
    name: "Arbitrum",
    icon: arbitrum,
  },
  {
    key: "avalanche",
    name: "Avalanche",
    icon: avalanche,
  },
  // {
  //     key: "bsc",
  //     name: "Binance",
  //     icon: bsc,
  // },
  // {
  //     key: "conflux",
  //     name: "Conflux",
  //     icon: conflux,
  // },
  {
    key: "optimism",
    name: "Optimism",
    icon: optimism,
  },
  {
    key: "base",
    name: "Base",
    icon: base,
  },
];

export const roadmapItems = [
  {
    number: "1.0",
    title: "Phase 1",
    description:
      "Live MVP with necessary changes. Will live Phase-1 By August 25",
  },
  {
    number: "2.0",
    title: "Phase 2",
    description:
      "Most famous Defi Protocols and Increase batching strategies in Phase-2 by Sepetember 15.",
  },
  {
    number: "3.0",
    title: "Phase 3",
    description:
      "Any new Defi protocol can integrate and Propse smart batching strategy by anyone and make open-source in Phase-3 by October-25",
  },
];

export const reviewsItems = [
  {
    description:
      "“Defi activities increases day by day and we can show them to everyone in a unique way. So Defilens can be a game changer and it will be a new way to see Defi.”",
    reviewer: "Review 1",
  },
  {
    description:
      "“By creating discussion platform for defi we can create new possibilities and new innovations for future”",
    reviewer: "Review 2",
  },
  {
    description:
      "“It will be easy to trade copy and user can follow their defi whales activities.”",
    reviewer: "Review 3",
  },
];

export const OurTeam = [
  {
    key: "sunny-radadiya",
    icon: team1,
    name: "Sunny Radadiya",
    position: "Founder & Web3 Dev",
  },
  {
    key: "paril-beladiya",
    icon: team2,
    name: "Paril Beladiya",
    position: "MERN Stack Dev",
  },
  {
    key: "tirth-zalavadiya",
    icon: team3,
    name: "Tirth Zalavadiya",
    position: "Ui/Ux Designer",
  },
];

export const HowToUseList = [
  {
    key: "Any EVM Network",
    id: 1,
    icon: howToUse01,
    title: "Any EVM Network",
    description:
      "One can create batch of transctions for any evm networks, even cross-chain transaction like lending, swap etc.",
  },
  {
    key: "Preferred Network",
    id: 2,
    icon: howToUse02,
    title: "Preferred Network",
    description:
      "Transfer assets seamlessly between different chains, even if your gas is on Chain A and your assets are on Chain B. Cover gas fees on Chain A and sponsor the transaction on Chain B for a hassle-free cross-chain experience.",
  },
  {
    key: "batching transactions",
    id: 3,
    icon: howToUse03,
    title: "Batching Transactions",
    description:
      "One can selecte multiple transaction into one and execute in just single click and Done.",
  },
  {
    key: "cross-chain batching",
    id: 4,
    icon: howToUse04,
    title: "Cross-Chain Batching",
    description:
      "Even one can create multiple cross-chain trading batch and excute in single shot.",
  },
  {
    key: "refinance defi positions",
    id: 5,
    icon: howToUse05,
    title: "Refinance Defi Positions",
    description:
      "User can refinance their multiple loans or defi positions like lending, derivatives, options and swaps in single click and Done.",
  },
  {
    key: "pos-staking",
    id: 6,
    icon: howToUse06,
    title: "PoS Staking",
    description:
      "User can refinance their multiple loans or defi positions like lending, derivatives, options and swaps in single click and Done.",
  },
];
``;
export const FeaturesList: {
  key: string;
  icon: IconType;
  title: string;
  description: string;
}[] = [
    {
      key: "Rebalance Portfolio",
      icon: HiOutlineSun,
      title: "Rebalance Portfolio",
      description: "Optimize your asset allocation effortlessly across multiple chains.",
      // "Diversify your investments across chains with DeFiLens strategies like Buy & Hold, Constant Proportion Portfolio Insurance (CPPI), and Constant Mix.",
    },
    {
      key: "Batching Transaction",
      icon: HiMiniSquare3Stack3D,
      title: "Batching Transaction",
      description: "Execute multiple transactions in a single batch to save time and reduce costs.",
      // "Seamless Batching Transaction, Whether it is single chain or cross-chain. Defilens handles complexities like consolidating multiple actions into one.",
    },
    {
      key: "Cross-Chain Lending",
      icon: HiCubeTransparent,
      title: "Chain Abstraction",
      description:
        "Access and manage lending positions seamlessly across different blockchains.",
    },
    {
      key: "Migrate DeFi Positions",
      icon: HiArrowsRightLeft,
      title: "Migrate DeFi Positions",
      description:
        "Easily transfer and manage your DeFi positions across various protocols and chains.",
    },
    {
      key: "Pay Once in Stablecoin",
      icon: HiCheckBadge,
      title: "Pay Once in Stablecoin",
      description:
        "Simplify payments by covering all transaction fees using stablecoins in one go.",
    },
    {
      key: "Single Click Execution",
      icon: HiCursorArrowRays,
      title: "Single Click Execution",
      description: "Execute batch of DeFi actions with just a single click with eliminating complexity.",
      // "DefiLens enables one-click execution of all batches and entities, removing manual processes for faster executions.",
    },
    // {
    //     key: "Manage all Defi Positions",
    //     title: "Manage all Defi Positions",
    //     icon: feature3,
    //     description:
    //         "Effortlessly track and manage all DeFi positions across Layer 2 solutions. Users can batch-create, migrate, or refinance various DeFi positions and cross-chain orders, consolidating these entities into one batch for streamlined execution and management.",
    // },
  ];

export const PartnersWith = [
  // {
  //     key: "partner1",
  //     icon: partner1,
  // },
  // {
  //     key: "partner2",
  //     icon: partner2,
  // },
  // {
  //     key: "partner3",
  //     icon: partner3,
  // },
  // {
  //     key: "partner4",
  //     icon: partner4,
  // },
  // {
  //     key: "partner5",
  //     icon: partner5,
  // },
];

export const InvestorsList = [
  // {
  //     key: "invetor1",
  //     icon: invetor1,
  // },
  // {
  //     key: "invetor2",
  //     icon: invetor2,
  // },
  // {
  //     key: "invetor3",
  //     icon: invetor3,
  // },
];

export const UpcomingList = [
  // {
  //     id: 1,
  //     icon: f1,
  //     title: "Batching Transaction",
  //     description: "Seamless Batching Transaction, Whether it is single chain or cross-chain. Defilens handles complexities like consolidating multiple actions into one.",
  // },
  // {
  //     id: 2,
  //     icon: f2,
  //     title: "Cross-Chain Lending",
  //     description: "With just one click, users can effortlessly lend their assets across different blockchain networks. No more complex approvals or manual bridging.",
  // },
  // {
  //     id: 3,
  //     icon: f3,
  //     title: "Refinance Defi Positions",
  //     description: "Refinance multiple defi positions like lending, derivatives from one protocol to another defi protocol.",
  // },
  // {
  //     id: 4,
  //     icon: f4,
  //     title: "One Stop Defi Solution",
  //     description: "DefiLens covering wide range of Defi Integrations with smooth execution",
  // },
];

export const OurUsersSayList = [
  {
    key: "save_as_jay",
    tweetId: "1726969885253837291",
  },
  {
    key: "biconomy",
    tweetId: "1687428141076426752",
  },
  {
    key: "Rahatcodes",
    tweetId: "1687435235464507392",
  },
  {
    key: "schin_tomar",
    tweetId: "1652224665614716928",
  },
  {
    key: "0xKofi",
    tweetId: "1704149603543585050",
  },
  {
    key: "UniverseOnBase",
    tweetId: "1717574616431079668",
  },
  {
    key: "ThisisVanshika",
    tweetId: "1651778427576520704",
  },
  {
    key: "biconomy",
    tweetId: "1651586021849546754",
  },
];

export const FAQsList = [
  {
    id: 1,
    question: "What is DefiLens ?",
    answer: "Simplifying Defi Trading Experience Smart Batching via One-click",
  },
  {
    id: 2,
    question: "Why should I Trust DefiLens ?",
    answer:
      "DefiLens is pioneering a platform that streamlines trading activities. To offering the ease of trading experience and swift portfolio management to users.",
  },
  {
    id: 3,
    question: "What is a EVM Network ?",
    answer:
      "One can create batch of transctions for any evm networks, even cross-chain transaction like lending, swap etc.",
  },
  {
    id: 4,
    question: "What is a Batching Transactions ?",
    answer:
      "SOne can selecte multiple transaction into one and execute in just single click and Done.",
  },
  {
    id: 5,
    question: "What is a Cross-Chain Batching ?",
    answer:
      "Even one can create multiple cross-chain trading batch and excute in single shot.",
  },
];

export const footerLinks = {
  about: [
    {
      key: "team",
      title: "Team (coming soon)",
      url: "/",
    },
  ],
  products: [
    {
      key: "app",
      title: "App",
      url: meta.app,
    },
    {
      key: "frame",
      title: "DegenFi Frame",
      url: "https://warpcast.com/degenfi",
    },
  ],
  resources: [
    {
      key: "documentation",
      title: "Documentation",
      url: "https://defilens.notion.site/DefiLens-Simplify-Defi-Trading-Process-e56a17a4c4d74e4aa44b4b744ade76a8",
    },
  ],
};

export const SupportedByList = [
  {
    key: "Base",
    url: "https://twitter.com/UniverseOnBase/status/1717574616431079668",
    icon: baseGrant,
    icon1: null,
    icon2: null,
    icon3: null,
  },
  {
    key: "ethIndia",
    url: "https://devfolio.co/projects/defilens-c7b4",
    icon: null,
    icon1: devfolioGrant,
    icon2: null,
    icon3: ethIndiaGrant,
  },
];

export const backendIcons = [base, ethIndia];

export const buttonsText = {
  headerCta: "Launch App", // "Launch App"
  heroCta: "Launch App", // "Launch App"
  feedbackBtn: "Feedback",
  submitBtn: "Submit",
};

export const toastMessage = {
  newsletter: {
    success: "Thanks for joining Newsletter.",
    failed: "Failed to join Newsletter! Please try again.",
    catch: "Oops! Something went wrong",
  },
};

export const testimonials_top = [
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
  {
    name: "rahat.eth",
    userName: "Rahatcodes",
    image:
      "https://pbs.twimg.com/profile_images/1581090331323686912/WgEc7I2s_400x400.png",
    description:
      "Love this one click cross chain lending protocol. As seen here you can do alot of cool stuff with Account Abstraction outside of onboarding new users. Making the process of interacting with defi for current users and making it more friendly and accessible are just as important",
  },
];

export const headerRedirectBtns = [
  {
    logo: logo,
    link: "https://app.defilens.tech/",
    text: "Rebalance portfolio with smart wallet",
    bg: "bg-primary-700"
  },
  {
    logo: blackLogo,
    link: "https://automation.defilens.tech/",
    text: "Automation with EOA",
    bg: "bg-[#27272a]"
  }
]