import Layout from "@/shared/layout";
import HeroContainer from "../Hero";
// import TopContainer from "@/shared/Top/TopContainer";
import HeaderContainer from "@/shared/header";
// import HowToUseContainer from "./HowToUse/HowToUseContainer";
import FeaturesContainer from "../Features";
import BackedByContainer from "../BackedBy";
// import OurUsersSayContainer from "./OurUsersSay/OurUsersSayContainer";
// import TeamsContainer from "./Teams/TeamsContainer";
// import FaqContainer from "./Faq/FaqContainer";
import FooterContainer from "@/shared/footer";

const Landing = () => (
  <Layout>
    <>
      {/* <TopContainer /> */}
      <HeaderContainer />
      <div className="mx-auto">
        <HeroContainer />
        {/* <HowToUseContainer /> */}
        <FeaturesContainer />
        <BackedByContainer />
        {/* <TeamsContainer /> */}
        {/* <OurUsersSayContainer /> */}
        {/* <FaqContainer /> */}
        <FooterContainer />
      </div>
    </>
  </Layout>
);

export default Landing;
