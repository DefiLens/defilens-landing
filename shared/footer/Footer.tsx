import Link from "next/link";
import Image from "next/image";
import { loader, logoLight } from "@/assets/images";
import {
  FooterDeveloper,
  FooterResources,
  meta,
  SocialHandles,
} from "@/utils/constants";
import { tFooter } from "./types";
import clsx from "clsx";

const Footer = ({
  email,
  setEmail,
  isNewsletterLoading,
  handleCreateNewsletter,
}: tFooter) => (
  <div className="footer-container py-5 md:py-14">
    <div className="flex flex-col gap-3 bg-primary-100 text-primary-1000 md:border md:shadow-lg md:shadow-primary-760 md:rounded-3xl m-0 md:mx-12 lg:mx-24 my-1 md:my-5 p-3">
      <div className="w-full flex flex-col md:flex-row justify-start items-start gap-3 py-10 px-5">
        {/* Left */}
        <div className="w-full md:w-[40%] lg:w-[36%] flex flex-col justify-start items-start gap-10">
          <Link
            href="/"
            className="flex flex-row justify-start items-center gap-2 text-xl font-bold"
          >
            <Image
              src={logoLight}
              width={180}
              height={150}
              alt="DefiLens"
              className=""
            />
          </Link>
          <div className="flex flex-col justify-start items-start gap-3 text-xs sm:text-sm font-semibold text-primary-900">
            Give Us FeedBack
            <Link
              href="https://forms.gle/hEGTMypEkGRYGJdc9"
              target="_blank"
              className="transition duration-300 text-xs sm:text-sm font-semibold bg-gradient-to-br bg-primary-600 rounded-2xl shadow-md p-0.5"
            >
              <div className="flex h-full w-auto items-center justify-center bg-primary-100 rounded-2xl">
                <span
                  className={clsx(
                    "w-50 flex justify-center items-center gap-1 rounded-xl py-1 px-6 md:px-3 lg:px-6",
                    "hover:bg-primary-600 hover:text-primary-100 transition-colors duration-200"
                  )}
                >
                  FeedBack
                </span>
              </div>
            </Link>
          </div>
          <div className="flex w-full flex-col justify-start items-start gap-3 text-xs sm:text-sm font-semibold text-primary-900">
            Keep updated. Join our newsletter.
            <div className="w-full flex justify-start items-center gap-1 border border-primary-750 shadow-sm shadow-primary-750 rounded-lg p-1.5">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Type your email here"
                className="outline-none py-1 pl-3 md:pl-1 lg:pl-3 w-full bg-transparent"
              />
              <button
                disabled={isNewsletterLoading}
                onClick={() => handleCreateNewsletter({ email })}
                className={clsx(
                  "transition duration-300 text-xs sm:text-sm font-semibold bg-purple-400 rounded-md text-white",
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

          {/* https://forms.gle/hEGTMypEkGRYGJdc9 */}
          <div className="flex justify-start items-start gap-5">
            {SocialHandles.map((handles, index) => (
              <div key={index} className="">
                <a href={handles.url} target="_blank">
                  <Image
                    src={handles.icon}
                    alt="social-handles"
                    className="h-8 md:h-5 lg:h-7 w-8 md:w-5 lg:w-7"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
        {/* Right */}
        <div className="w-full md:w-[25%] lg:w-[22%] flex flex-col justify-start items-start gap-3 px-5 mt-5 md:mt-12">
          <h3 className="ttext-sm sm:text-base font-bold uppercase">Email</h3>
          <a
            className="flex flex-col justify-start items-start gap-3 text-xs sm:text-sm font-medium text-primary-300"
            href={`mailto:${meta.email}`}
          >
            {meta.email}
          </a>
        </div>

        <div className="w-full md:w-[25%] lg:w-[22%] flex flex-col justify-start items-start gap-3 px-5 mt-5 md:mt-12">
          <h3 className="text-sm sm:text-base font-bold uppercase">
            Resources
          </h3>
          <div className="flex flex-col justify-start items-start gap-3 text-xs sm:text-sm font-medium text-primary-300">
            {FooterResources?.length > 0 &&
              FooterResources.map((item) => (
                <Link key={item.key} href={item.url} target="_blank">
                  {item.Title}
                </Link>
              ))}
          </div>
        </div>
        <div className="w-full md:w-[25%] lg:w-[22%] flex flex-col justify-start items-start gap-3 px-5 mt-5 md:mt-12">
          <h3 className="ttext-sm sm:text-base font-bold uppercase">
            Developer
          </h3>
          <div className="flex flex-col justify-start items-start gap-3 text-xs sm:text-sm font-medium text-primary-300">
            {FooterDeveloper?.length > 0 &&
              FooterDeveloper.map((item) => (
                <Link key={item.key} href={item.url} target="_blank">
                  {item.Title}
                </Link>
              ))}
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 md:gap-3 text-primary-300 text-xs font-medium p-5 sm:px-8">
                <div className="text-center">© Copyright DefiLens, Inc.</div>
                <div className="flex justify-center items-center gap-3 md:gap-5">
                    <div className="text-center">Terms & Conditions</div>
                    <div className="text-center">Privacy Policy</div>
                    <div className="text-center">Cookies</div>
                    <div className="text-center">Disclaimers</div>
                </div>
            </div> */}
    </div>
  </div>
);

export default Footer;
