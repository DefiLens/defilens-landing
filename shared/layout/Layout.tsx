import { ILayout } from "@/utils/types";
import FooterContainer from "../footer/FooterContainer";
import HeaderContainer from "../header/HeaderContainer";

const Layout = ({ children }: ILayout) => {
  return (
    <div className="layout-container h-full">
      <HeaderContainer />
      <div className="main-content h-[calc(100%-64px)]">{children}</div>
      <FooterContainer />
    </div>
  );
};

export default Layout;
