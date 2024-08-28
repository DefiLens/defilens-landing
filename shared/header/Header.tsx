import Link from "next/link";
import Image from "next/image";
import { blackLogo, logo, logoLight } from "@/assets/images";
import { meta } from "@/utils/constants";
import clsx from "clsx";

const Header = () => {
  return (
    <div className="w-full absolute top-0 z-10 bg-transparent">
      <div className="max-w-[1380px] w-full md:w-[94%] mx-auto h-[70px] placeholder:h-[70px] flex justify-between items-center gap-3 py-10 px-[14px]">
        <div className="relative flex justify-between items-center gap-5">
          <Link href={meta.app}>
            <Image
              src={logoLight}
              priority
              fetchPriority="high"
              width={150}
              height={150}
              alt="DefiLens"
            />
          </Link>
          <a
            href={meta.app}
            target="_blank"
            className="hidden sm:block px-4 rounded-full font-satoshi border border-purple-300 bg-purple-400 bg-opacity-30"
          >
            <span className="text-sm font-semibold text-purple-800">
              Join Now
            </span>
          </a>
        </div>
        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            className={clsx(
              "flex items-center justify-center transition-all hover:scale-105 rounded-full shadow-md hover:shadow-2xl bg-primary-700"
            )}
          >
            <Link
              href="https://app.defilens.tech"
              target="_blank"
              className="flex items-center gap-2 text-white py-2 px-4 sm:px-5"
            >
              <Image
                src={logo}
                priority
                fetchPriority="high"
                alt="DefiLens"
                className="h-8 w-8"
              />
              <span className="text-center whitespace-nowrap text-xs">
                Rebalance portfolio <br /> with smart wallet
              </span>
            </Link>
          </button>
          <button
            className={clsx(
              "flex items-center justify-center transition-all hover:scale-105 rounded-full shadow-md hover:shadow-2xl bg-zinc-700"
            )}
          >
            <Link
              href="https://automation.defilens.tech/"
              target="_blank"
              className="flex items-center gap-2 text-white py-2 px-4 sm:px-5"
            >
              <Image
                src={blackLogo}
                priority
                fetchPriority="high"
                alt="DefiLens"
                className="h-8 w-8"
              />
              <span className="text-center whitespace-nowrap text-xs">
                Automation with<br />
                EOA
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
