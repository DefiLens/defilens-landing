import Layout from "@/shared/layout";
import HeroContainer from "@/modules/Hero";
// import TopContainer from "@/shared/Top/TopContainer";
import HeaderContainer from "@/shared/header";
// import HowToUseContainer from "@/modules/HowToUse";
import FeaturesContainer from "@/modules/Features";
import BackedByContainer from "@/modules/BackedBy";
// import OurUsersSayContainer from "@/modules/OurUsersSay";
// import TeamsContainer from "@/modules/Teams";
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
