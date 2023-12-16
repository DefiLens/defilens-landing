import Layout from "@/shared/Layout/LayoutContainer";
import HeroContainer from "./Hero/HeroContainer";
import HeaderContainer from "../../shared/Header/HeaderContainer";
import TopContainer from "../../shared/Top/TopContainer";

const Landing = () => (
  <Layout>
    <>
      <TopContainer />
      <HeaderContainer />
      <HeroContainer />
    </>
  </Layout>
);

export default Landing;
