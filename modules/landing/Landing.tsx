import Layout from "@/shared/Layout/LayoutContainer";
import HeroContainer from "./Hero/HeroContainer";
import TopContainer from "../../shared/Top/TopContainer";
import HeaderContainer from "../../shared/Header/HeaderContainer";
import HowToUseContainer from "./HowToUse/HowToUseContainer";

const Landing = () => (
  <Layout>
    <>
      <TopContainer />
      <HeaderContainer />
      <HeroContainer />
      <HowToUseContainer />
    </>
  </Layout>
);

export default Landing;
