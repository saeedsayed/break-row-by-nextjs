import React from "react";
import { Container } from "react-bootstrap";
import FadeAnimate from "../common/animation/FadeAnimate";
import { SERVICES } from "../../../public/data/dummyData";
import ServiceItem from "./ServiceItem";
import SectionTitle from "../common/SectionTitle";

const OurCoreServices = () => {
  return (
    <Container>
      <SectionTitle
        title={"خدماتنا الأساسية"}
        description={
          'في "كودهايف"، نخصصنا هو تقديم الحلول المتطورة المُصممة لإنجاح أعمالك في العصر الرقمي الذي نُعاصره'
        }
      />
      <div className="d-flex flex-column gap-5">
        {SERVICES.map((service, i) => (
          <ServiceItem data={service} index={i} key={i} />
        ))}
      </div>
    </Container>
  );
};

export default OurCoreServices;
