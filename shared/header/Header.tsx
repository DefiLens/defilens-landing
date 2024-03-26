import Link from "next/link";
import Image from "next/image";
import { logoLight, portfolio, batching, mirgrate_asset } from "@/assets/images";

const Header = () => (
    <div className="w-full fixed top-10 left-0 right-0 md:top-8 z-10">
        <div className="max-w-[1380px] w-full md:w-[94%] mx-auto h-[70px] placeholder:h-[70px] flex justify-between items-center gap-3 bg-primary-100 md:border md:shadow-lg md:rounded-full p-3">
            <div className="flex justify-between items-center gap-8">
                <Link
                    href="https://app.defilens.tech/"
                    className=""
                >
                    <Image
                        src={logoLight}
                        width={150}
                        height={150}
                        alt="DefiLens"
                        className=""
                    />
                </Link>
                <Link
                    href="https://app.defilens.tech/portfolio"
                    className="lg:flex hidden flex-row justify-between items-center gap-3 text-black text-lg md"
                >
                    <Image
                        src={portfolio}
                        width={30}
                        height={30}
                        alt="Portfolio"
                        className=""
                    />
                    <span>Portfolio</span>
                </Link>
                <Link
                    href="/"
                    className="lg:flex hidden flex-row justify-between items-center gap-3 text-black text-lg"
                >
                    <Image
                        src={batching}
                        width={30}
                        height={30}
                        alt="Batching"
                        className=""
                    />
                    <span>Batching</span>
                </Link>
                <Link
                    href="https://app.defilens.tech/migrate-asset"
                    className="lg:flex hidden justify-center items-center gap-3 text-primary-700 border rounded-full border-primary-700 text-lg py-1 px-3"
                >
                    <Image
                        src={mirgrate_asset}
                        width={35}
                        height={35}
                        alt="Mirgrate_asset"
                        className=""
                    />
                    <span>Migrate Asset</span>
                </Link>
            </div>
            <div className="transition duration-300 text-xs md:text-base font-semibold bg-gradient-to-br from-primary-600 via-primary-500 to-primary-400 rounded-full shadow-md p-0.5">
                <div className="flex h-full w-full items-center justify-center bg-primary-100 rounded-full">
                    <Link
                        href="https://app.defilens.tech/"
                        target="_blank"
                        className="flex justify-center items-center gap-1 rounded-full hover:bg-gradient-to-br from-primary-600 via-primary-500 to-primary-400 hover:text-primary-100 py-2 px-4 sm:px-7"
                    >
                        Launch APP
                    </Link>
                </div>
            </div>
        </div >
    </div >
);

export default Header;
