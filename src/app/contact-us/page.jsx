import ContactForm from "@/components/contactUsComponents/ContactForm";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import bg from "../../../public/assets/images/contact-bg.png";
import { FcContacts } from "react-icons/fc";
import Testimonial from "@/components/common/Testimonial";
import ContactInformation from "@/components/contactUsComponents/ContactInformation";

const ContactUs = () => {
  return (
    <>
      <div
        style={{
          paddingBlock: "130px",
          backgroundImage: `url(${bg.src})`,
          backgroundRepeat: "repeat-x",
          backgroundPosition: "bottom",
          backgroundColor: "#004f9e",
          marginBlockEnd: "50px",
        }}
      >
        <Container>
          <Row>
            <Col md={7} className="order-1 order-md-0">
              <ContactForm />
            </Col>
            <Col md={5} className="order-0">
              <div className="text-white d-flex flex-column gap-4">
                <div>
                  <FcContacts style={{ fontSize: "90px" }} />
                </div>
                <h2>متخصصون في برمجة وتصميم مواقع الويب وتطبيقات المحمول</h2>
                <p>
                  التواصل مع عملائنا الكرام هو جوهر وأساس نهجنا وعملنا. سواء كان
                  لديك استفسارٍ أو بعض التعليقات، أو ببساطة تريد مشاركة تجربتك،
                  فإن فريقنا للدعم المخصص على بُعد رسالةٍ فقط!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <ContactInformation />
      <Container>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.2912108695837!2d-97.676559117598!3d38.576861369192294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87bcb1dce91bb6d3%3A0x1c7b7130b9fe412f!2sBirger%20Sandz%C3%A9n%20Memorial%20Art%20Gallery!5e0!3m2!1sen!2seg!4v1722074632036!5m2!1sen!2seg"
          // width="600"
          className="w-100 rounded-5"
          height="450"
          style={{border:"0"}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Container>
      <Testimonial />
    </>
  );
};

export default ContactUs;
