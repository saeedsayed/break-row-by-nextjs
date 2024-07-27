import Banner from "@/components/aboutUsComponents/Banner";
import PageAnimate from "@/components/common/animation/PageAnimate";
import SecondBanner from "@/components/ourServicesComponents/SecondBanner";
import OurCoreServices from "@/components/ourServicesComponents/OurCoreServices";
import OurProcess from "@/components/ourServicesComponents/OurProcess";
import React from "react";
import Testimonial from "@/components/common/Testimonial";

const Services = () => {
  return (
    <PageAnimate>
      <Banner />
      <SecondBanner/>
      <OurCoreServices/>
      <OurProcess/>
      <Testimonial/>
    </PageAnimate>
  );
};

export default Services;
