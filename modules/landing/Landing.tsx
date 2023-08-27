import Layout from "@/shared/layout/LayoutContainer";
import CapabilitiyContainer from "./Capabilitiy/CapabilitiyContainer";
import ReviewsContainer from "./Reviews/ReviewsContainer";
import RoadmapContainer from "./Roadmap/RoadmapContainer";
import SocialGraph from "./SocialGraph/SocialGraphContainer";

const Landing = () => (
  <Layout>
    <>
      <SocialGraph />
      <CapabilitiyContainer />
      {/* <ReviewsContainer /> */}
      <RoadmapContainer />
    </>
  </Layout>
);



export default Landing;
