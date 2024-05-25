import Link from "next/link";
import Image from "next/image";
import { loader, logoLight } from "@/assets/images";
import { footerLinks, SocialHandles } from "@/utils/constants";
import { tFooter } from "./types";
import clsx from "clsx";

const Footer = ({
  email,
  setEmail,
  isNewsletterLoading,
  handleCreateNewsletter,
}: tFooter) => (
  <footer className="footer-container lg:px-24">
    <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-3 py-10 px-5 mx-auto max-w-[1380px] w-full md:w-[94%] text-primary-1000">
      {/* Logo and Socials */}
      <div className="w-full sm:w-1/4 flex flex-row sm:flex-col justify-between sm:justify-start items-center sm:items-start gap-6">
        {/* Logo */}
        <Link href="/">
          <Image
            src={logoLight}
            alt="DefiLens"
            className="w-[180px]"
          />
        </Link>
        {/* Social Links */}
        <div className="flex flex-row lg:flex-col justify-start items-start gap-6 lg:gap-3">
          {SocialHandles.map((handles, index) => (
            <div key={index}>
              <a
                href={handles.url}
                target="_blank"
                className="inline-flex items-center gap-3"
                rel="noreferrer"
              >
                <Image
                  src={handles.icon}
                  alt="social-handles"
                  className="h-8 md:h-5 lg:h-7 w-8 md:w-5 lg:w-7"
                />
                <span className="hidden lg:block font-medium hover:opacity-80 text-slate-800">
                  {handles.title}
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* Links */}
      <div className="w-full sm:w-1/2 grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-3">
          <h3 className="text-sm sm:text-base font-semibold">Resources</h3>
          <div className="flex flex-col justify-start items-start gap-3 text-xs sm:text-sm font-medium text-primary-300">
            {footerLinks.resources?.length > 0 &&
              footerLinks.resources.map((item) => (
                <Link key={item.key} href={item.url} target="_blank">
                  {item.title}
                </Link>
              ))}
            {footerLinks.about?.length > 0 &&
              footerLinks.about.map((item) => (
                <Link key={item.key} href={item.url} target="_blank">
                  {item.title}
                </Link>
              ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-sm sm:text-base font-semibold">Product</h3>
          <div className="flex flex-col justify-start items-start gap-3 text-xs sm:text-sm font-medium text-primary-300">
            {footerLinks.products?.length > 0 &&
              footerLinks.products.map((item) => (
                <Link key={item.key} href={item.url} target="_blank">
                  {item.title}
                </Link>
              ))}
          </div>
        </div>
      </div>
      {/* Newsletter */}
      <div className="flex w-full sm:w-1/3 flex-col justify-start items-start gap-3 text-xs sm:text-sm font-semibold text-primary-900">
        <h4 className="text-base">Stay up to date with DefiLens</h4>
        <p className="text-sm font-normal text-slate-500 -mt-2">
          Subscribe to the newsletter for DefiLens updates
        </p>
        <div className="w-full flex justify-start items-center gap-1 border border-slate-300 rounded-full p-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Type your email here"
            className="outline-none py-1 pl-3 md:pl-1 lg:pl-3 w-full bg-transparent font-normal"
          />
          <button
            disabled={isNewsletterLoading}
            onClick={() => handleCreateNewsletter({ email })}
            className={clsx(
              "transition duration-300 text-xs sm:text-sm font-semibold bg-slate-600 rounded-full text-white",
              !isNewsletterLoading &&
                "hover:bg-primary-700 hover:text-primary-100"
            )}
          >
            <span
              className={clsx(
                "flex h-full w-full max-w-28 items-center justify-center gap-1 rounded-xl py-1 px-6 md:px-3 lg:px-6"
              )}
            >
              Submit
              {isNewsletterLoading && (
                <Image
                  src={loader}
                  alt="Loader"
                  className="animate-spin w-5 h-5"
                />
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
