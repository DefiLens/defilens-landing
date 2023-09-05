import Layout from "@/shared/layout/LayoutContainer";
import CapabilitiyContainer from "./Capabilitiy/CapabilitiyContainer";
import ReviewsContainer from "./Reviews/ReviewsContainer";
import RoadmapContainer from "./Roadmap/RoadmapContainer";
import SocialGraphContainer from "./SocialGraph/SocialGraphContainer";
import SecurityContainer from "./Security/SecurityContainer";
import FaqsContainer from "./Faqs/FaqsContainer";
import TeamContainer from "./Team/TeamContainer";
import NewsletterContainer from "./Newsletter/NewsletterContainer";

const Landing = () => (
  <Layout>
    <>
      <SocialGraphContainer />
      {/* <CapabilitiyContainer /> */}
      {/* <ReviewsContainer /> */}
      <RoadmapContainer />
      <SecurityContainer />
      <TeamContainer />
      <NewsletterContainer />
      <FaqsContainer />
    </>
  </Layout>
);

export default Landing;
