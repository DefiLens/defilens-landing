import PartnerLogo from "../assets/icons/app-logo.svg"
import DiscordLogo from "../assets/icons/discord.svg"
import GithubLogo from "../assets/icons/github.svg"
import MediumLogo from "../assets/icons/medium.svg"
import TwitterLogo from "../assets/icons/twitterX.png"
import TelegramLogo from "../assets/icons/telegram.png"
import eth from "../assets/icons/eth.svg"
import arbitrum from "../assets/icons/arbitrum.svg"
import avalanche from "../assets/icons/avalanche.svg"
import bsc from "../assets/icons/bsc.svg"
import conflux from "../assets/icons/conflux.svg"
import kava from "../assets/icons/kava.svg"
import optimism from "../assets/icons/optimism.svg"
import polygon from "../assets/icons/polygon.svg"
import team1 from "../assets/icons/team1.jpg"
import team2 from "../assets/icons/team2.jpg"
// import feature1 from "../assets/icons/feature1.svg"
// import feature2 from "../assets/icons/feature2.svg"
// import feature3 from "../assets/icons/feature3.svg"
// import feature4 from "../assets/icons/feature4.svg"
// import feature5 from "../assets/icons/feature5.svg"
import feature1 from "../assets/icons/howtouse/anynetwork.png"
import feature2 from "../assets/icons/howtouse/prefer.png"
import feature3 from "../assets/icons/howtouse/batch.png"
import feature4 from "../assets/icons/howtouse/cbatch.png"
import f1 from "../assets/icons/features/batch.png"
import f2 from "../assets/icons/features/refinance.png"
import f3 from "../assets/icons/features/lending.png"
import f4 from "../assets/icons/features/stop.png"
// import f1 from "../assets/icons/f1.svg"
// import f2 from "../assets/icons/f2.svg"
// import f3 from "../assets/icons/f3.svg"
// import f4 from "../assets/icons/f4.svg"
import partner1 from "../assets/icons/partner1.svg"
import partner2 from "../assets/icons/partner2.svg"
import partner3 from "../assets/icons/partner3.svg"
import partner4 from "../assets/icons/partner4.svg"
import partner5 from "../assets/icons/partner5.svg"
import invetor1 from "../assets/icons/invetor1.svg"
import invetor2 from "../assets/icons/invetor2.svg"
import invetor3 from "../assets/icons/invetor3.svg"

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
]

export const SocialHandles = [
    // {
    //   icon: DiscordLogo,
    //   url: "https://discord.com",
    // },
    {
        icon: GithubLogo,
        url: "https://github.com/DefiLens",
    },
    {
        icon: TwitterLogo,
        url: "https://twitter.com/DefiLensTech",
    },
    // {
    //   icon: TelegramLogo,
    //   url: "https://telegram.org",
    // },
    // {
    //   icon: MediumLogo,
    //   url: "https://medium.com",
    // },
]

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
]

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
]

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
]

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
        position: "Full Stack Dev",
    },
]

export const HowToUseList = [
    {
        key: "Any EVM Network",
        icon: feature1,
        title: "Any EVM Network",
        description:
            "One can create batch of transctions for any evm networks, even cross-chain transaction like lending, swap etc.",
    },
    {
        key: "Preferred Network",
        icon: feature2,
        title: "Preferred Network",
        description:
            `Transfer assets seamlessly between different chains, even if your gas is on Chain A and your assets are on Chain B. Cover gas fees on Chain A and sponsor the transaction on Chain B for a hassle-free cross-chain experience.`,
    },
    {
        key: "batching transactions",
        icon: feature3,
        title: "Batching Transactions",
        description:
            "One can selecte multiple transaction into one and execute in just single click and Done.",
    },
    {
        key: "cross-chain batching",
        icon: feature4,
        title: "Cross-Chain Batching",
        description:
            "Even one can create multiple cross-chain trading batch and excute in single shot.",
    },
    // {
    //     key: "refinance defi positions",
    //     icon: feature4,
    //     title: "Refinance Defi Positions",
    //     description:
    //         "User can refinance their multiple loans or defi positions like lending, derivatives, options and swaps in single click and Done.",
    // },
    // {
    //   key : "pos-staking",
    //   icon: feature5,
    //   title: "PoS Staking",
    //   description: "User can refinance their multiple loans or defi positions like lending, derivatives, options and swaps in single click and Done.",
    // },
]

export const FeaturesList = [
    {
        key: "Batching Transaction",
        icon: f1,
        title: "Batching Transaction",
        description:
            "Seamless Batching Transaction, Whether it is single chain or cross-chain. Defilens handles complexities like consolidating multiple actions into one.",
    },
    {
        key: "Cross-Chain Lending",
        icon: f2,
        title: "Cross-Chain Lending",
        description:
            "With just one click, users can effortlessly lend their assets across different blockchain networks. No more complex approvals or manual bridging.",
    },
    {
        key: "Refinance Defi Positions",
        icon: f3,
        title: "Refinance Defi Positions",
        description:
            "Refinance multiple defi positions like lending, derivatives from one protocol to another defi protocol.",
    },
    {
        key: "One Stop Defi Solution",
        icon: f4,
        title: "One Stop Defi Solution",
        description:
            "DefiLens covering wide range of Defi Integrations with smooth execution",
    },
]

export const PartnersWith = [
    {
        key: "partner1",
        icon: partner1,
    },
    {
        key: "partner2",
        icon: partner2,
    },
    {
        key: "partner3",
        icon: partner3,
    },
    {
        key: "partner4",
        icon: partner4,
    },
    {
        key: "partner5",
        icon: partner5,
    },
]

export const InvestorsList = [
    {
        key: "invetor1",
        icon: invetor1,
    },
    {
        key: "invetor2",
        icon: invetor2,
    },
    {
        key: "invetor3",
        icon: invetor3,
    },
]

export const UpcomingList = [
    {
        id: 1,
        icon: f1,
        title: "Batching Transaction",
        description: "Seamless Batching Transaction, Whether it is single chain or cross-chain. Defilens handles complexities like consolidating multiple actions into one.",
    },
    {
        id: 2,
        icon: f2,
        title: "Cross-Chain Lending",
        description: "With just one click, users can effortlessly lend their assets across different blockchain networks. No more complex approvals or manual bridging.",
    },
    {
        id: 3,
        icon: f3,
        title: "Refinance Defi Positions",
        description: "Refinance multiple defi positions like lending, derivatives from one protocol to another defi protocol.",
    },
    {
        id: 4,
        icon: f4,
        title: "One Stop Defi Solution",
        description: "DefiLens covering wide range of Defi Integrations with smooth execution",
    },
]