import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const ContactInformation = () => {
  return (
    <Container>
      <div className="mb-5">
        <Row className="gy-4">
          <Col md={7}>
            <div className="d-flex gap-3 w-75 mx-auto bg-white px-4 py-3 rounded-5 shadow" style={{minWidth:'350px'}}>
            <TfiHeadphoneAlt style={{fontSize:'60px'}}/>
              <div>
                <h4>دعم 24/7</h4>
                <p>إذا كنت بحاجة إلى أي نوع من الدعم، يرجى زيارة مركز المساعدة</p>
                <a href="#" className="h5 link-primary">support@breakrow.ae</a>
              </div>
            </div>
          </Col>
          <Col md={5}>
            <p className="h6">
              أكسبنا ابتكارنا وتطورنا المستمر تقديرًا من أقراننا وعملائنا وشركات
              الأبحاث الرائدة!
            </p>
            <h4 className="my-4">عنوان الشركة</h4>
            <p className="d-flex align-items-center gap-3">
              <FaPhoneFlip style={{ fontSize: "30px" }} /> 01000000000
            </p>
            <p className="d-flex align-items-center gap-3">
              <MdEmail style={{ fontSize: "30px" }} />{" "}
              <a href="#">email@email.com</a>
            </p>
            <p className="d-flex align-items-center gap-3">
              <FaLocationDot style={{ fontSize: "30px" }} /> المملكة العربية
              السعودية
            </p>
            <a href="#">عرض على خرائط جوجل</a>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default ContactInformation;
