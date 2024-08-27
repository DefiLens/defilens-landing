import { AiOutlineApartment } from "react-icons/ai";
import { RiCoinsLine } from "react-icons/ri";
import { TbArrowsCross } from "react-icons/tb";
import { AiOutlineBars } from "react-icons/ai";
import {
    HiOutlineAdjustmentsHorizontal,
    HiOutlineDocumentText,
} from "react-icons/hi2";

export const rebalanceFeatures = [
    {
        icon: AiOutlineApartment,
        title: "Smart Batching",
        description:
            "Execute multiple transactions across chains in a single batch, saving time and reducing costs. Simplify complex DeFi operations with one-click execution.",
    },
    {
        icon: TbArrowsCross,
        title: "Cross-Chain Mastery",
        description:
            "Seamlessly access and manage positions across different blockchains. Easily migrate DeFi positions between protocols and chains for optimal performance.",
    },
    {
        icon: RiCoinsLine,
        title: "Stablecoin Simplicity",
        description:
            "Cover all transaction fees using stablecoins in one go. Rebalance your portfolio effortlessly across multiple chains with a single stablecoin payment.",
    },
];


export const Example_1 = [
    {
        step: "1",
        imgSrc:
            "https://www.onplug.io/_next/image/?url=%2Fprotocols%2Fplug.png&w=32&q=75",
        parts: [
            { text: "Batch 1: ", highlight: false },
            { text: "$250", highlight: true },
            { text: "USDC", highlight: true },
            { text: "to Optimism lending.", highlight: false },
        ],
    },
    {
        step: "2",
        imgSrc:
            "https://www.onplug.io/_next/image/?url=%2Fprotocols%2Funiswap.png&w=32&q=75",
        parts: [
            { text: "Batch 2: ", highlight: false },
            { text: "$250", highlight: true },
            { text: "ETH", highlight: true },
            { text: "to", highlight: false },
            { text: "Ethereum", highlight: true },
            { text: "restaking", highlight: false },
        ],
    },
    {
        step: "3",
        imgSrc:
            "https://www.onplug.io/_next/image/?url=%2Fprotocols%2Funiswap.png&w=32&q=75",
        parts: [
            { text: "Batch 3: ", highlight: false },
            { text: "$250", highlight: true },
            { text: "ETH", highlight: true },
            { text: "to", highlight: false },
            { text: "Ethereum", highlight: true },
            { text: "restaking (", highlight: false },
            { text: "different", highlight: true },
            { text: "protocol)", highlight: false },
        ],
    },
    {
        step: "4",
        imgSrc:
            "https://www.onplug.io/_next/image/?url=%2Fprotocols%2Funiswap.png&w=32&q=75",
        parts: [
            { text: "Batch 4: ", highlight: false },
            { text: "$250", highlight: true },
            { text: "ETH", highlight: true },
            { text: "to", highlight: false },
            { text: "Ethereum", highlight: true },
            { text: "restaking (", highlight: false },
            { text: "another", highlight: true },
            { text: "protocol)", highlight: false },
        ],
    },
    {
        step: "5",
        imgSrc:
            "https://www.onplug.io/_next/image/?url=%2Fprotocols%2Funiswap.png&w=32&q=75",
        parts: [
            { text: "Batch 5: Migrate", highlight: false },
            { text: "$500", highlight: true },
            { text: "from", highlight: false },
            { text: "Polygon", highlight: true },
            { text: "Aave", highlight: true },
            { text: "to", highlight: false },
            { text: "Arbitrum", highlight: true },
            { text: "Compound", highlight: true },
        ],
    },
    {
        step: "6",
        imgSrc:
            "https://www.onplug.io/_next/image/?url=%2Fprotocols%2Funiswap.png&w=32&q=75",
        parts: [
            { text: "All", highlight: false },
            { text: "executed", highlight: true },
            { text: "in one click, with", highlight: false },
            { text: "fees", highlight: true },
            { text: "paid in stablecoin!", highlight: false },
        ],
    },
];

export const rebalanceSteps = [
    {
        number: "1",
        Icon: HiOutlineAdjustmentsHorizontal,
        title: "Decide Your Actions",
        description:
            "Choose from a variety of DeFi actions across multiple chains, including lending, staking, and position migrations.",
    },
    {
        number: "2",
        Icon: AiOutlineBars,
        title: "Create Your Batch",
        description:
            "Add your chosen actions to a batch, combining multiple operations across different protocols and chains.",
    },
    {
        number: "3",
        Icon: HiOutlineDocumentText,
        title: "One-Click Execution",
        description:
            "Execute your entire batch of actions across multiple chains with a single click, using our smart wallet technology.",
    },
];