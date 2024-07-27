
import style from "./WhatsappButton.module.css";
import { FaWhatsapp } from "react-icons/fa";
import { OverlayTrigger, Tooltip } from "react-bootstrap";


const WhatsappButton = () => {
  // const target = useRef(null);
  return (
    <>
      <OverlayTrigger
        placement="left"
        overlay={
          <Tooltip style={{ direction: "ltr" }}>
            hello how can we help you?
          </Tooltip>
        }
      >
        <a
          // variants={{
            //   hidden: { x: 100 },
            //   visible: { x: 0, transition: { duration: 0 } },
            // }}
            // animate="visible"
          // initial="hidden"
          href="#"
          className={`${style.whatsappButton} shadow-lg`}
          // ref={target}
          >
          <FaWhatsapp />
        </a>
      </OverlayTrigger>
    </>
  );
};

export default WhatsappButton;
