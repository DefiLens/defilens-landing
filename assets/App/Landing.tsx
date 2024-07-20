import Layout from "@/shared/layout";
import HeroContainer from "@/modules/Hero";
import HeaderContainer from "@/shared/header";
import FeaturesContainer from "@/modules/Features";
import BackedByContainer from "@/modules/BackedBy";
import FooterContainer from "@/shared/footer";
import Automation from "@/modules/Automation";
import Rebalance from "@/modules/Rebalance";
import FaqContainer from "@/modules/Faq";
import React from "react";
import Testimonial from "@/modules/Testimonials";
import Protocols from "@/modules/Protocols";

const Landing = () => (
  <Layout>
    <>
      <HeaderContainer />
      <div className="mx-auto hide_scrollbar">
        <HeroContainer />
        <Automation />
        <Rebalance />
        <Protocols/>
        <FeaturesContainer />
        <BackedByContainer />
        <Testimonial/>
        <FaqContainer />
        <FooterContainer />
      </div>
    </>
  </Layout>
);

export default Landing;



