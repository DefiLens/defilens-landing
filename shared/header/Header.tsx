import Link from "next/link";
import Image from "next/image";
import { logoLight } from "@/assets/images";
import { buttonsText, meta } from "@/utils/constants";

const Header = () => {
  return (
    <div className="w-full absolute top-0 z-10 bg-transparent">
      <div className="max-w-[1380px] w-full md:w-[94%] mx-auto h-[70px] placeholder:h-[70px] flex justify-between items-center gap-3 py-10 px-[14px]">
        <div className="relative flex justify-between items-center gap-8">
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
          {/* <a
            href={meta.app}
            target="_blank"
            className="absolute hidden sm:block top-2 -right-[220px] px-4 pb-0.5 rounded-full font-satoshi border border-purple-300 bg-purple-400 bg-opacity-30"
          >
            <span className="text-sm font-semibold text-purple-800">
              join waitlist for private beta
            </span>
          </a> */}
        </div>
        {/* CTA */}
        <div className="relative text-xs md:text-base font-semibold">
          {/* <button className="flex h-full w-full items-center justify-center  transition-all bg-primary-700 hover:scale-105 rounded-full shadow-md hover:shadow-2xl p-0.5"> */}
          <button className="flex h-full w-full items-center justify-center  transition-all bg-purple-600 hover:scale-105 rounded-md shadow-md hover:shadow-2xl p-0.5">
            <Link
              href={meta.app}
              target="_blank"
              className="flex justify-center items-center gap-1 rounded-full text-white py-2 px-4 sm:px-7"
              // className="flex justify-center items-center gap-1 rounded-full hover:bg-gradient-to-br from-primary-600 via-primary-500 to-primary-400 hover:text-primary-100 py-2 px-4 sm:px-7"
            >
              {buttonsText.headerCta}
            </Link>
          </button>
          {/* <Image
            src="/images/join_waitlist_text.png"
            alt="join waitlist"
            width={1240}
            height={124}
            className="absolute top-12 right-12 z-10 pointer-events-none"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;

// <motion.div
//     initial={{ opacity: 0, scale: 0.5 }}
//     animate={{ opacity: 1, scale: 1 }}
//     transition={{
//       duration: 0.8,
//       delay: 0.5,
//       ease: [0, 0.71, 0.2, 1.01],
//     }}
//     className="w-full fixed top-5 left-0 right-0 md:top-10 z-10"
// >
