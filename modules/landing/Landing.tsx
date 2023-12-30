import Layout from "@/shared/Layout/LayoutContainer";
import HeroContainer from "./Hero/HeroContainer";
import TopContainer from "../../shared/Top/TopContainer";
import HeaderContainer from "../../shared/Header/HeaderContainer";
import HowToUseContainer from "./HowToUse/HowToUseContainer";
import FeaturesContainer from "./Features/FeaturesContainer";
import BackedByContainer from "./BackedBy/BackedByContainer";
import OurUsersSayContainer from "./OurUsersSay/OurUsersSayContainer";
import TeamsContainer from "./Teams/TeamsContainer";

const Landing = () => (
  <Layout>
    <>
      <TopContainer />
      <HeaderContainer />
      <HeroContainer />
      <HowToUseContainer />
      <FeaturesContainer />
      <BackedByContainer />
      <OurUsersSayContainer />
      <TeamsContainer />
    </>
  </Layout>
);

export default Landing;
