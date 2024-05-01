import clsx from "clsx";
import { satoshiFont } from "@/utils/fonts";
import { tLayout } from "./types/index";

const Layout = ({ children }: tLayout) => {
  return (
    <div
      className={clsx(
        "font-inter",
        satoshiFont.variable
      )}
    >
      {children}
    </div>
  );
};

export default Layout;
