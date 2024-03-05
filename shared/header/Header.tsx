import Link from "next/link";
import Image from "next/image";
import { logoLight } from "@/assets/images";

const Header = () => (
    <div className="h-[70px] fixed top-10 md:top-8 right-0 left-0 z-10 flex justify-between items-center gap-3 bg-primary-100 md:border md:shadow-lg md:rounded-full m-0 md:mx-24 my-1 md:my-5 p-3">
        <Link
            href="/"
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
    </div>
);

export default Header;
