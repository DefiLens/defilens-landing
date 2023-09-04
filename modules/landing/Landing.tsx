import Layout from "@/shared/layout/LayoutContainer";
import CapabilitiyContainer from "./Capabilitiy/CapabilitiyContainer";
import ReviewsContainer from "./Reviews/ReviewsContainer";
import RoadmapContainer from "./Roadmap/RoadmapContainer";
import SocialGraph from "./SocialGraph/SocialGraphContainer";
import NewsletterContainer from "./Newsletter/NewsletterContainer";

const Landing = () => (
  <Layout>
    <>
      <SocialGraph />
      {/* <CapabilitiyContainer /> */}
      {/* <ReviewsContainer /> */}
      {/* <RoadmapContainer /> */}
      <NewsletterContainer />
    </>
  </Layout>
);

export default Landing;
