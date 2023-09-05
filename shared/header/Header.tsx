import Image from "next/image";

import AppLogo from "../../assets/icons/app-logo.svg";
import { NavigationList } from "@/utils/constants";
import Link from "next/link";

const Header = ({ handleMenubar, menu, setMenu }: any) => (
  <div className="header w-full bg-[#0D0E30] fixed top-0 right-0 left-0 z-50 shadow-2xl shadow-2xl-[#0D0E30] h-16 px-5 py-3 pt-6 flex justify-between">
    <Link
      href="/"
      className="w-full md:w-[33%] flex flex-row justify-start items-center gap-2 text-xl md:text-2xl font-bold pl-8"
    >
      <svg
        width="45px"
        height="45px"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall mui-style-8tazii"
        focusable="false"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.71542 1.06718C7.89457 0.977606 8.10543 0.977606 8.28458 1.06718L14.6481 4.249C14.8637 4.3568 14.9999 4.57714 14.9999 4.81818C14.9999 5.05922 14.8637 5.27957 14.6481 5.38736L8.28458 8.56918C8.10543 8.65876 7.89457 8.65876 7.71542 8.56918L1.35191 5.38736C1.13632 5.27957 1.00014 5.05922 1.00014 4.81818C1.00014 4.57714 1.13632 4.3568 1.35191 4.249L7.71542 1.06718ZM3.05941 4.81818L8 7.28852L12.9406 4.81818L8 2.34784L3.05941 4.81818ZM1.06732 7.71541C1.22449 7.40106 1.60673 7.27364 1.92108 7.43082L8 10.4703L14.0789 7.43082C14.3933 7.27364 14.7755 7.40106 14.9327 7.71541C15.0899 8.02976 14.9624 8.41201 14.6481 8.56918L8.28458 11.751C8.10543 11.8406 7.89457 11.8406 7.71542 11.751L1.35191 8.56918C1.03756 8.41201 0.910149 8.02976 1.06732 7.71541ZM1.06732 10.8972C1.22449 10.5829 1.60673 10.4555 1.92108 10.6126L8 13.6522L14.0789 10.6126C14.3933 10.4555 14.7755 10.5829 14.9327 10.8972C15.0899 11.2116 14.9624 11.5938 14.6481 11.751L8.28458 14.9328C8.10543 15.0224 7.89457 15.0224 7.71542 14.9328L1.35191 11.751C1.03756 11.5938 0.910149 11.2116 1.06732 10.8972Z"
          fill="white"
          stroke="white"
          stroke-width="0.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
      <span className="text-white">DefiLens</span>
    </Link>

    <nav className="w-[33%] flex justify-end md:justify-center items-center">
      <input
        type="checkbox"
        id="nav-toggle"
        checked={menu}
        onChange={handleMenubar}
      />
      <ul
        className="links list-unstyled flex justify-center items-center"
        onClick={() => setMenu(false)}
      >
        {NavigationList.length > 0 &&
          NavigationList?.map((item) => (
            <li
              key={item.key}
              className="flex justify-center items-center gap-3 px-3"
            >
              <a
                href={`/#${item?.key}`}
                className="text-md md:text-base text-white hover:text-gray-400 font-semibold px-2 transition duration-500 delay-100"
              >
                {item?.name}
              </a>
            </li>
          ))}
      </ul>

      <label htmlFor="nav-toggle" className="icon-burger">
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </label>
    </nav>
    <div className="hidden md:block md:w-[33%]" />
  </div>
);

export default Header;
