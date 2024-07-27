// components
import Banner from "@/components/aboutUsComponents/Banner";
import About from "@/components/aboutUsComponents/About";
import OurPrinciples from "@/components/aboutUsComponents/OurPrinciples";
import WhatDistinguishesUs from "@/components/aboutUsComponents/WhatDistinguishesUs";
import Testimonial from "@/components/common/Testimonial";
import PageAnimate from "@/components/common/animation/PageAnimate";

const AboutUs = () => {
  return (
    <>
    <PageAnimate>
      <Banner />
      <About />
      <OurPrinciples />
      <WhatDistinguishesUs />
      <Testimonial />
    </PageAnimate>
    </>
  );
};

export default AboutUs;
