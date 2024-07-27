// Components
import { Card, Col, Container, Row } from "react-bootstrap";
import FadeAnimate from "../common/animation/FadeAnimate";
// icons
import { HiMiniCursorArrowRipple } from "react-icons/hi2";
import { TfiEye } from "react-icons/tfi";
// assets
import whoWeAreImage from "../../../public/assets/images/who-we-are.jpg";
import Image from "next/image";
import { MdOutlineSettingsEthernet } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";
import { GoGoal } from "react-icons/go";

const SecondBanner = () => {
  return (
    <section className="py-5">
      <Container>
        <Row className="gy-5 flex-column-reverse flex-lg-row">
          <Col lg={7}>
            <FadeAnimate dir={"btt"}>
              <h5 className="mb-4">
                إطلاق الإمكانيات الحقيقية لشركتك يكمن في الاستفادة الاستراتيجية
                من التحول الرقمي والمحمول، لزيادة النمو والكفاءة ورضا العملاء.
              </h5>
            </FadeAnimate>
            <div className="d-flex flex-column gap-4 pe-5">

            <FadeAnimate dir={"rtl"}>
              <Card className="shadow-sm d-flex flex-row align-items-center rounded-4 ps-5 py-2">
                <MdOutlineSettingsEthernet className="text-warning me-3" style={{fontSize: "64px"}}/>
                نحن ملتزمون <span className="text-primary px-1">بتطوير حلولٍ مبتكرة</span> تعمل على تحسين حياة عملائنا.
              </Card>
            </FadeAnimate>

            <FadeAnimate dir={"ltr"} className='d-flex flex-row align-items-center rounded-4 ps-5 py-2'>

            <FaRegLightbulb className="text-warning me-3" style={{fontSize: "64px"}} />
                نبدأ <span className="text-primary px-1">الرحلة الابتكارية بأفكارٍ</span> إبداعية ورائدة.

            </FadeAnimate>
            <FadeAnimate dir={"rtl"}>
              <Card className="shadow-sm d-flex flex-row align-items-center rounded-4 ps-5 py-2">
              <GoGoal className="text-warning me-3" style={{fontSize: "64px"}} />
                نحن <span className="text-primary px-1">ملتزمون بتطوير حلولٍ مبتكرة</span> تُحقق نتائج إيجابية محسومة.
              </Card>
            </FadeAnimate>
            </div>
          </Col>
          <Col lg={5}>
            <FadeAnimate dir={"ttb"}>
              <div className="position-relative">
                <Image
                  src={whoWeAreImage}
                  alt="about-img"
                  className="img-fluid"
                />
                <h4
                  style={{
                    position: "absolute",
                    top: "30%",
                    left: "20px",
                    fontSize: "30px",
                    paddingInlineStart: "20px",
                  }}
                >
                  أنشئ معنا أفضل الحلول، وتصاميم تجربة المستخدم المبتكر
                </h4>
              </div>
              <div
                style={{
                  backgroundColor: "var(--bg-dark)",
                  color: "#fff",
                  paddingInline: "10px",
                  fontWeight: "100",
                  fontSize: "14px",
                  paddingBlock: "20px",
                }}
              >
                إن {`"بريك روو"`} شغوفة بكل ما يتعلق بإنشاء منتجاتٍ مُبتكرة تُحدث
                فرقًا، ونؤمن بأن تجربة المستخدم الممتازة ضرورية لتحقيق هذا
                الهدف.
              </div>
            </FadeAnimate>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SecondBanner;
