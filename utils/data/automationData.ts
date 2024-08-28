import { AiOutlineBars } from "react-icons/ai";
import { BsCashCoin } from "react-icons/bs";
import { HiOutlineAdjustmentsHorizontal, HiOutlineDocumentText } from "react-icons/hi2";
import { MdAutoAwesome, MdOutlineMultipleStop } from "react-icons/md";
import { RxCounterClockwiseClock } from "react-icons/rx";

export const automationHeader = {
    title: "Automate Your On-Chain Activities",
    descripton: "Set it, forget it, and let your crypto work for you 24/7"
}

export const automationFlowSteps = [
    {
        number: "1",
        Icon: HiOutlineAdjustmentsHorizontal,
        title: "Select Actions",
        description:
            "Choose from a variety of DeFi actions such as lending, borrowing, or swapping tokens across different protocols.",
    },
    {
        number: "2",
        Icon: AiOutlineBars,
        title: "Set Conditions",
        description:
            "Define triggers based on APY changes, time intervals, or price thresholds to automatically execute your chosen actions.",
    },
    {
        number: "3",
        Icon: HiOutlineDocumentText,
        title: "Declare Actions",
        description:
            "Specify the exact steps to be taken when your conditions are met, such as moving funds or adjusting positions.",
    },
];

export const automationFeatures = [
    {
        icon: MdAutoAwesome,
        title: "Automate Your Positions",
        description: "Set up complex strategies to manage your DeFi positions without constant monitoring. Our platform executes trades and adjusts your portfolio based on your predefined conditions.",
    },
    {
        icon: BsCashCoin,
        title: "Scheduled Transactions",
        description: "Plan your DeFi moves in advance. Set up transactions to occur at specific times or intervals, ensuring you never miss an opportunity.",
    },
    {
        icon: RxCounterClockwiseClock,
        title: "24/7 Running",
        description: "   Our automation platform runs continuously, monitoring market conditions and executing your strategies round the clock, so you don't have to.",
    },
    {
        icon: MdOutlineMultipleStop,
        title: "Multichain Automation",
        description: "Operate across multiple blockchains seamlessly. Our platform supports various networks, allowing you to maximize opportunities across the entire DeFi ecosystem.",
    },
];

const automationExample_1 = [
    {
        step: "1",
        imgSrc:
            "https://www.onplug.io/_next/image/?url=%2Fprotocols%2Fplug.png&w=32&q=75",
        parts: [
            { text: "Restake", highlight: false },
            { text: "ETH", highlight: true },
            { text: "using", highlight: false },
            { text: "USDC", highlight: true },
            { text: "on Mellow Finance.", highlight: false },
        ],
    },
    {
        step: "2",
        imgSrc:
            "https://www.onplug.io/_next/image/?url=%2Fprotocols%2Funiswap.png&w=32&q=75",
        parts: [
            { text: "APY", highlight: true },
            { text: ">", highlight: false },
            { text: "6%", highlight: true },
        ],
    },
    {
        step: "3",
        imgSrc:
            "https://www.onplug.io/_next/image/?url=%2Fprotocols%2Fplug.png&w=32&q=75",
        parts: [
            { text: "Check every", highlight: false },
            { text: "30", highlight: true },
            { text: "minutes", highlight: false },
        ],
    },
    {
        step: "4",
        imgSrc:
            "https://www.onplug.io/_next/image/?url=%2Fprotocols%2Funiswap.png&w=32&q=75",
        parts: [
            { text: "If", highlight: false },
            { text: "condition", highlight: true },
            { text: "is met,", highlight: false },
            { text: "perform", highlight: true },
            { text: "restaking transaction", highlight: false },
        ],
    },
];
const automationExample_2 = [
    {
        step: "1",
        imgSrc:
            "https://www.onplug.io/_next/image/?url=%2Fprotocols%2Fyearn.png&w=32&q=75",

        parts: [
            { text: "Move", highlight: false },
            { text: "stETH", highlight: true },
            { text: "between", highlight: false },
            { text: "Lido", highlight: true },
            { text: "and", highlight: false },
            { text: "Rocket", highlight: true },
            { text: "Pool.", highlight: false },
        ],
    },
    {
        step: "2",
        imgSrc:
            "https://www.onplug.io/_next/image/?url=%2Fprotocols%2Funiswap.png&w=32&q=75",

        parts: [
            { text: "APR", highlight: true },
            { text: "difference ", highlight: false },
            { text: ">", highlight: true },
            { text: "0.5%", highlight: true },
        ],
    },
    {
        step: "3",
        imgSrc:
            "https://www.onplug.io/_next/image/?url=%2Fprotocols%2Fyearn.png&w=32&q=75",

        parts: [
            { text: "Check daily at ", highlight: false },
            { text: "00.00 UTC", highlight: true },
        ],
    },
    {
        step: "4",
        imgSrc:
            "https://www.onplug.io/_next/image/?url=%2Fprotocols%2Funiswap.png&w=32&q=75",

        parts: [
            { text: "Unstake from lower", highlight: false },
            { text: "APR", highlight: true },
            { text: "protocol and stake in higher", highlight: false },
            { text: "APR", highlight: true },
            { text: "protocol", highlight: false },
        ],
    },
];
const automationExample_3 = [
    {
        step: "1",
        imgSrc:
            "https://www.onplug.io/_next/image/?url=%2Fprotocols%2Fyearn.png&w=32&q=75",
        parts: [
            { text: "Move", highlight: false },
            { text: "USDC", highlight: true },
            { text: "between", highlight: false },
            { text: "Aave", highlight: true },
            { text: "and", highlight: true },
            { text: "Compound", highlight: true },
        ],
    },
    {
        step: "2",
        imgSrc:
            "https://www.onplug.io/_next/image/?url=%2Fprotocols%2Funiswap.png&w=32&q=75",

        parts: [
            { text: "Supply", highlight: false },
            { text: "APY", highlight: true },
            { text: "difference ", highlight: false },
            { text: ">", highlight: true },
            { text: "1%", highlight: true },
        ],
    },
    {
        step: "3",
        imgSrc:
            "https://www.onplug.io/_next/image/?url=%2Fprotocols%2Fyearn.png&w=32&q=75",
        parts: [
            { text: "Check", highlight: false },
            { text: "hourly", highlight: true },
        ],
    },
    {
        step: "4",
        imgSrc:
            "https://www.onplug.io/_next/image/?url=%2Fprotocols%2Funiswap.png&w=32&q=75",

        parts: [
            { text: "Withdraw from lower", highlight: false },
            { text: "APY", highlight: true },
            { text: "platform and deposit into higher", highlight: false },
            { text: "APY", highlight: true },
            { text: "platform.", highlight: false },
        ],
    },
];
export const automationExampleData = [
    {
        title: "Mellow Finance Restaking",
        example: automationExample_1,
    },
    {
        title: "Symbiotic Restaking Optimization",
        example: automationExample_2,
    },
    {
        title: "Aave/Compound Lending Arbitrage",
        example: automationExample_3,
    },
];