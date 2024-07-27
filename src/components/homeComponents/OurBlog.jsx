import React from "react";
import SectionTitle from "./SectionTitle";
import { Card, CardBody, Col, Container, Row } from "react-bootstrap";
import FadeAnimate from "../common/animation/FadeAnimate";
// import trailer from "../../../public/assets/images/App-Mockup.jpg";
import MainButton from "../common/MainButton";
import { BLOGS } from "../../../public/data/dummyData";
import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ image, title }) => (
  <Col md={6}>
    <FadeAnimate dir={"ltr"}>
      <Card className="shadow rounded-4">
        <CardBody className="d-flex">
          <div className="w-100 ps-3">
            <h5 className="mt-3 h6 text-handler-2" dir="ltr">
              {title}
            </h5>
            <Link href={"/"} className="text-warning">
              اقرأ اكثر
            </Link>
          </div>
          <div style={{ width: "50%" }}>
            <Image src={image} alt={title} className="rounded-3 h-100" />
          </div>
        </CardBody>
      </Card>
    </FadeAnimate>
  </Col>
);

const OurBlog = () => {
  return (
    <section className="pb-5">
      <Container>
        <SectionTitle smTitle={"حقق المكاسب معنا"} bgTitle={"مدونتنا"} />
        <Row className="mb-5 gy-3">
          <Col lg={3}>
            <FadeAnimate dir={"rtl"} className="h-100">
              <div className="h-100">
                <video
                  width="320"
                  height="240"
                  controls
                  preload="none"
                  className="w-100 h-100 rounded-4 object-fit-cover"
                >
                  <source src="/public/assets/videos/trailer.mp4" type="video/mp4" />
                  <track
                    src="/public/assets/videos/trailer.mp4"
                    kind="subtitles"
                    srcLang="en"
                    label="English"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </FadeAnimate>
          </Col>
          <Col lg={9}>
            <Row className="gy-3">
              {BLOGS.map(({ id, title, image }) => (
                <BlogCard key={id} image={image} title={title} />
              ))}
            </Row>
          </Col>
        </Row>
        <FadeAnimate>
          <MainButton to="/Blogs" style={{ margin: "auto", display: "block" }}>
            عرض جميع المدونات
          </MainButton>
        </FadeAnimate>
      </Container>
    </section>
  );
};

export default OurBlog;
