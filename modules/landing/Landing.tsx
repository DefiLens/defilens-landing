import Layout from "@/shared/layout/LayoutContainer";
import CapabilitiyContainer from "./Capabilitiy/CapabilitiyContainer";
import ReviewsContainer from "./Reviews/ReviewsContainer";
import RoadmapContainer from "./Roadmap/RoadmapContainer";
import HowToUseContainer from "./HowToUse/HowToUseContainer";
import FeaturesContainer from "./Features/FeaturesContainer";
import InvestorsContainer from "./Investors/InvestorsContainer";
import PartnersContainer from "./Partners/PartnersContainer";
import SocialGraphContainer from "./SocialGraph/SocialGraphContainer";
import SecurityContainer from "./Security/SecurityContainer";
import FaqsContainer from "./Faqs/FaqsContainer";
import TeamContainer from "./Team/TeamContainer";
import NewsletterContainer from "./Newsletter/NewsletterContainer";

const Landing = () => (
  <Layout>
    <>
      <SocialGraphContainer />
      <HowToUseContainer />
      <FeaturesContainer />
      {/* <InvestorsContainer />
      <SecurityContainer />
      <PartnersContainer /> */}
      {/* <CapabilitiyContainer /> */}
      {/* <ReviewsContainer /> */}
      {/* <RoadmapContainer /> */}
      {/* <TeamContainer /> */}
      <NewsletterContainer />
      {/* <FaqsContainer /> */}
    </>
  </Layout>
);

export default Landing;
