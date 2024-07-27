import PageAnimate from "@/components/common/animation/PageAnimate";
import Testimonial from "@/components/common/Testimonial";
import Banner from "@/components/homeComponents/Banner";
import OurBlog from "@/components/homeComponents/OurBlog";
import OurServices from "@/components/homeComponents/OurServices";
import WhyUs from "@/components/homeComponents/WhyUs";
import React from "react";

const Home = () => {
  return (
    <>
      <PageAnimate>
        <Banner />
        <WhyUs />
        <OurServices />
        <OurBlog />
        <Testimonial />
      </PageAnimate>
    </>
  );
};

export default Home;
