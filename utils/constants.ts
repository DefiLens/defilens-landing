import PartnerLogo from "../assets/icons/app-logo.svg";
import DiscordLogo from "../assets/icons/discord.svg";
import GithubLogo from "../assets/icons/github.svg";
import MediumLogo from "../assets/icons/medium.svg";
import TwitterLogo from "../assets/icons/twitterX.png";
import TelegramLogo from "../assets/icons/telegram.png";
import eth from "../assets/icons/eth.svg";
import arbitrum from "../assets/icons/arbitrum.svg";
import avalanche from "../assets/icons/avalanche.svg";
import bsc from "../assets/icons/bsc.svg";
import conflux from "../assets/icons/conflux.svg";
import kava from "../assets/icons/kava.svg";
import optimism from "../assets/icons/optimism.svg";
import polygon from "../assets/icons/polygon.svg";
import team1 from "../assets/icons/team1.jpg";
import team2 from "../assets/icons/team2.jpeg";
import feature1 from "../assets/icons/feature1.svg";
import feature2 from "../assets/icons/feature2.svg";
import feature3 from "../assets/icons/feature3.svg";
import feature4 from "../assets/icons/feature4.svg";
import feature5 from "../assets/icons/feature5.svg";
import f1 from "../assets/icons/f1.svg";
import f2 from "../assets/icons/f2.svg";
import f3 from "../assets/icons/f3.svg";
import f4 from "../assets/icons/f4.svg";
import partner1 from "../assets/icons/partner1.svg";
import partner2 from "../assets/icons/partner2.svg";
import partner3 from "../assets/icons/partner3.svg";
import partner4 from "../assets/icons/partner4.svg";
import partner5 from "../assets/icons/partner5.svg";
import invetor1 from "../assets/icons/invetor1.svg";
import invetor2 from "../assets/icons/invetor2.svg";
import invetor3 from "../assets/icons/invetor3.svg";

export const NavigationList = [
  {
    name: "Features",
    key: "features",
  },
  {
    name: "RoadMap",
    key: "roadmap",
  },
  // {
  //   name: "Partners",
  //   key: "partners",
  // },
  {
    name: "Security",
    key: "security",
  },
  // {
  //   name: "Investors",
  //   key: "investors",
  // },
  {
    name: "Teams",
    key: "teams",
  },
  {
    name: "FAQs",
    key: "faqs",
  },
  // {
  //   name: "Newsletter",
  //   key: "newsletter",
  // }
];

export const SocialHandles = [
  {
    icon: DiscordLogo,
    url: "https://discord.com",
  },
  {
    icon: GithubLogo,
    url: "https://github.com",
  },
  {
    icon: TwitterLogo,
    url: "https://twitter.com",
  },
  {
    icon: TelegramLogo,
    url: "https://telegram.org",
  },
  {
    icon: MediumLogo,
    url: "https://medium.com",
  },
];

export const BlockchainList = [
  {
    name: "eth",
    icon: eth,
  },
  {
    name: "polygon",
    icon: polygon,
  },
  {
    name: "arbitrum",
    icon: arbitrum,
  },
  {
    name: "avalanche",
    icon: avalanche,
  },
  {
    name: "bsc",
    icon: bsc,
  },
  {
    name: "conflux",
    icon: conflux,
  },
  {
    name: "kava",
    icon: kava,
  },
  {
    name: "optimism",
    icon: optimism,
  },
];

export const roadmapItems = [
  {
    number: '0.1',
    title: "Phase 1",
    description:
      "Live MVP with necessary changes. Will live Phase-1 By August 25",
  },
  {
    number: '0.2',
    title: "Phase 2",
    description:
      "Most famous Defi Protocols and Increase batching strategies in Phase-2 by Sepetember 15.",
  },
  {
    number: '0.3',
    title: "Phase 3",
    description:
      "Any new Defi protocol can integrate and Propse smart batching strategy by anyone and make open-source in Phase-3 by October-25",
  },
];

export const reviewsItems = [
  {
    description: '“Defi activities increases day by day and we can show them to everyone in a unique way. So Defilens can be a game changer and it will be a new way to see Defi.”',
    reviewer: 'Review 1'
  },
  {
    description: '“By creating discussion platform for defi we can create new possibilities and new innovations for future”',
    reviewer: 'Review 2'
  },
  {
    description: '“It will be easy to trade copy and user can follow their defi whales activities.”',
    reviewer: 'Review 3'
  },
]

export const OurTeam = [
  {
    key : "sunny-radadiya",
    icon: team1,
    name: "Sunny Radadiya",
    position: "Founder",
  },
  {
    key : "sunny-radadiya",
    icon: team2,
    name: "Sunny Radadiya",
    position: "Founder",
  },
];

export const HowToUseList = [
  {
    key : "usx",
    icon: feature1,
    title: "USX",
    description: "An over-collateralized stablecoin with a dual model for minting (pool-based & vault-based).",
  },
  {
    key : "lending",
    icon: feature2,
    title: "Lending",
    description: "Enabling decentralized lending and borrowing through smart contracts, automating the execution on the protocol. ",
  },
  {
    key : "df-staking",
    icon: feature3,
    title: "DF Staking",
    description: "A hybrid staking model for DF holders to capture fee income, inflationary rewards, and ecosystem airdrop across the network.",
  },
  {
    key : "trading",
    icon: feature4,
    title: "Trading",
    description: "Peer-to-Peer marketplace with aggregated liquidity across different platforms with the best price.",
  },
  {
    key : "pos-staking",
    icon: feature5,
    title: "PoS Staking",
    description: "Providing validation service in PoS networks by participating in their governance and maintaining the security of the network, further aligning DeFi infrastructure with the broader blockchain ecosystem.",
  },
];

export const FeaturesList = [
  {
    key : "vault",
    icon: f1,
    title: "Vault",
    description: "Expanding USX’s collateral to a broader category of assets with isolated pools and customized risk parameters.",
  },
  {
    key : "pdlp",
    icon: f2,
    title: "Protocol-Direct-Liquidity-Provision (PDLP)",
    description: "Combat USX and EUX liquidity shortage for whitelisted protocols integrated with USX and EUX.",
  },
  {
    key : "bridge",
    icon: f3,
    title: "Bridge",
    description: "Enable immediate swaps of dForce-backed assets between different blockchain ecosystems.",
  },
  {
    key : "poo",
    icon: f4,
    title: "Protocol-Owned-Operator (POO)",
    description: "Leverage protocol owned liquidity to ensure supply and demand are in equilibrium with optimized efficiency.",
  },
];

export const PartnersWith = [
  {
    key : "partner1",
    icon: partner1,
  },
  {
    key : "partner2",
    icon: partner2,
  },
  {
    key : "partner3",
    icon: partner3,
  },
  {
    key : "partner4",
    icon: partner4,
  },
  {
    key : "partner5",
    icon: partner5,
  },
];

export const InvestorsList = [
  {
    key : "invetor1",
    icon: invetor1,
  },
  {
    key : "invetor2",
    icon: invetor2,
  },
  {
    key : "invetor3",
    icon: invetor3,
  },
];