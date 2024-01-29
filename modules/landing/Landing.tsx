import Layout from "../../shared/layout/LayoutContainer";
import HeroContainer from "./Hero/HeroContainer";
import TopContainer from "../../shared/Top/TopContainer";
import HeaderContainer from "../../shared/header/HeaderContainer";
import HowToUseContainer from "./HowToUse/HowToUseContainer";
import FeaturesContainer from "./Features/FeaturesContainer";
import BackedByContainer from "./BackedBy/BackedByContainer";
import OurUsersSayContainer from "./OurUsersSay/OurUsersSayContainer";
import TeamsContainer from "./Teams/TeamsContainer";
import FaqContainer from "./Faq/FaqContainer";
import FooterContainer from "../../shared/footer/FooterContainer";

const Landing = () => (
  <Layout>
    <>
      <TopContainer />
      <HeaderContainer />
      <HeroContainer />
      {/* <HowToUseContainer /> */}
      <FeaturesContainer />
      <BackedByContainer />
      <OurUsersSayContainer />
      <TeamsContainer />
      {/* <FaqContainer /> */}
      <FooterContainer />
    </>
  </Layout>
);

export default Landing;
