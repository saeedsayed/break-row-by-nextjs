import React from "react";
import SectionTitle from "../common/SectionTitle";
import { Col, Row } from "react-bootstrap";
import bgOne from "../../../public/assets/images/process-bg-1.jpg";
import bgTwo from "../../../public/assets/images/process-bg-2.jpg";
import bgThree from "../../../public/assets/images/process-bg-3.jpg";
import FadeAnimate from "../common/animation/FadeAnimate";

const OurProcess = () => {
  return (
    <div className="py-5">
      <SectionTitle
        title={"طريقة عملنا"}
        description={
          'في "بريك روو"، كل قرار نتخذه، وكل استراتيجية ننفذها، وكل خدمة نقدمها مبنية على قيمٍ ثابتة.'
        }
      />
      <Row className="g-0">
        <Col lg={6}>
          <FadeAnimate dir={"rtl"} className="h-100">
            <div
              style={{
                background: `url(${bgOne.src}) no-repeat`,
                backgroundSize: "cover",
                padding: "20px",
                height:'100%',
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <div className="bg-warning p-4 w-50 ms-5">
                <p className="h1">01</p>
                <h5>توثيق المصداقية</h5>
                <h4>التحقق من صحة الفكرة</h4>
                <p>
                  إن خبرتنا الواسعة في تطوير التطبيقات توثق مِصداقية أفكارك من
                  خلال التخطيط الشامل للمشروع وبناء خطة عمل كاملة.
                </p>
              </div>
            </div>
          </FadeAnimate>
        </Col>
        <Col lg={6}>
          <Row className="g-0">
            <Col md={6}>
            <FadeAnimate dir={"ttb"} className="h-50">
              <div
                style={{
                  background: `url(${bgTwo.src}) no-repeat`,
                  padding: "20px",
                  // width: "100%",
                  backgroundSize: "cover",
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <p className="h1">02</p>
                <h4>التصميم</h4>
                <h3>تجارب البناء</h3>
                <p style={{ fontSize: "12px" }}>
                  أنشئ تجارب ذات معنى من خلال تصميم واجهات يقع في حُبها
                  المستخدمون، مع التركيز على العلامة التجارية والوظائف كافة
                  وسهولة الاستخدام.
                </p>
              </div>
            </FadeAnimate>
            <FadeAnimate dir={'ttb'} className="h-50">
              <div
                style={{
                  background: `#2a2f36`,
                  padding: "20px",
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  height: "100%",
                }}
              >
                <p className="h1">04</p>
                <h5>التسويق</h5>
                <h4>الإطلاق والتسويق</h4>
                <p style={{ fontSize: "12px" }}>
                  مع أخذ السوق والأهداف والجمهور كلٌ في الحسبان، نبدأ بصياغة خطة
                  إطلاق فعالة وتطبيق الإستراتيجيات المطلوبة لتعزيز الرؤية
                  والتنزيلات وتحقيق الدخل.
                </p>
              </div>
            </FadeAnimate>
            </Col>
            <Col md={6}>
            <FadeAnimate dir={'btt'} className="h-50">
              <div
                style={{
                  background: `#f2f2f2`,
                  padding: "20px",
                  // width: "100%",
                  backgroundSize: "cover",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <p className="h1">03</p>
                <h4>التطوير</h4>
                <h3>التطوير المُخصص</h3>
                <p style={{ fontSize: "12px" }}>
                  انشر أحدث المجموعات التكنولوجية لحلول التطبيقات المُخصصة
                  الآمنة والقابلة للتطوير والتي تمنح عملك ميزة تنافسية.
                </p>
              </div>
              </FadeAnimate>
              <FadeAnimate dir={'btt'} className="h-50">
              <div
                style={{
                  background: `url(${bgThree.src}) no-repeat`,
                  backgroundSize: "cover",
                  padding: "20px",
                  color: "#fff",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <p className="h1">05</p>
                <h4>الدعم</h4>
                <h3>الدعم والصيانة</h3>
                <p style={{ fontSize: "12px" }}>
                  من خلال الدعم والصيانة المتينة، نضمن موثوقية التطبيق والأداء
                  السلس من خلال التحديثات المنتظمة والمراقبة اليقظة.
                </p>
              </div>
              </FadeAnimate>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default OurProcess;
